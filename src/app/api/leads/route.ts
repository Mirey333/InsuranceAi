import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// Helper function to verify JWT token
async function verifyToken(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  
  if (!token) {
    throw new Error('Nicht authentifiziert');
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any;
  
  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
    include: { 
      makler: true,
      tenant: true
    }
  });

  if (!user || !user.makler || !user.tenantId) {
    throw new Error('Benutzer nicht gefunden oder kein Tenant zugewiesen');
  }

  return user;
}

// GET /api/leads - Alle Leads eines Maklers abrufen
export async function GET(request: NextRequest) {
  try {
    const user = await verifyToken(request);
    const { searchParams } = new URL(request.url);
    
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const skip = (page - 1) * limit;

    const where: any = {
      maklerId: user.makler!.id,
      tenantId: user.tenantId
    };

    if (status) {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } }
      ];
    }

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        include: {
          campaign: true,
          communications: {
            orderBy: { sentAt: 'desc' },
            take: 3
          },
          activities: {
            orderBy: { createdAt: 'desc' },
            take: 5
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.lead.count({ where })
    ]);

    return NextResponse.json({
      leads,
      pagination: {
        current: page,
        total: Math.ceil(total / limit),
        count: total,
        limit
      }
    });

  } catch (error) {
    console.error('Leads GET error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Server-Fehler' },
      { status: error instanceof Error && error.message === 'Nicht authentifiziert' ? 401 : 500 }
    );
  }
}

// POST /api/leads - Neuen Lead erstellen
export async function POST(request: NextRequest) {
  try {
    const user = await verifyToken(request);
    const data = await request.json();

    const lead = await prisma.lead.create({
      data: {
        ...data,
        maklerId: user.makler!.id,
        tenantId: user.tenantId!,
        score: calculateLeadScore(data),
        activities: {
          create: {
            type: 'CREATED',
            description: 'Lead erstellt'
          }
        }
      },
      include: {
        campaign: true,
        communications: true,
        activities: true
      }
    });

    return NextResponse.json(lead, { status: 201 });

  } catch (error) {
    console.error('Leads POST error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Server-Fehler' },
      { status: error instanceof Error && error.message === 'Nicht authentifiziert' ? 401 : 500 }
    );
  }
}

// Helper function to calculate lead score
function calculateLeadScore(leadData: any): number {
  let score = 30; // Base score

  // Budget scoring
  if (leadData.budget) {
    if (leadData.budget > 100000) score += 25;
    else if (leadData.budget > 50000) score += 20;
    else if (leadData.budget > 25000) score += 15;
    else if (leadData.budget > 10000) score += 10;
  }

  // Interest scoring
  const highValueInterests = ['ALTERSVORSORGE', 'BAUFINANZIERUNG', 'LEBENSVERSICHERUNG'];
  if (leadData.interest && highValueInterests.includes(leadData.interest)) {
    score += 15;
  }

  // Contact info completeness
  if (leadData.phone) score += 10;
  if (leadData.address) score += 5;
  if (leadData.dateOfBirth) score += 5;

  // GDPR consent
  if (leadData.consentGiven) score += 10;

  return Math.min(score, 100); // Cap at 100
} 