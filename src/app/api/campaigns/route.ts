import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

async function verifyToken(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  
  if (!token) {
    throw new Error('Nicht authentifiziert');
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    return decoded;
  } catch (error) {
    throw new Error('Ungültiges Token');
  }
}

export async function GET(request: NextRequest) {
  try {
    const decoded = await verifyToken(request);
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const platform = searchParams.get('platform');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Build filter conditions
    const where: any = {
      tenantId: decoded.tenantId
    };

    if (status && status !== 'all') {
      where.status = status.toUpperCase();
    }

    if (platform && platform !== 'all') {
      where.platform = platform.toLowerCase();
    }

    // Get campaigns with related data
    const [campaigns, total] = await Promise.all([
      prisma.campaign.findMany({
        where,
        include: {
          leadSources: {
            select: {
              id: true,
              status: true,
              score: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset
      }),
      prisma.campaign.count({ where })
    ]);

    // Calculate campaign statistics
    const campaignsWithStats = campaigns.map(campaign => {
      const totalLeads = campaign.leadSources.length;
      const qualifiedLeads = campaign.leadSources.filter((lead: any) => 
        ['QUALIFIZIERT', 'WARM', 'HEISS', 'TERMIN', 'ABGESCHLOSSEN'].includes(lead.status)
      ).length;
      
      // Calculate performance metrics - using stored metrics from schema
      const conversionRate = campaign.conversionRate || 0;
      const ctr = campaign.ctr || 0;
      const cpl = campaign.cpl || 0;

      return {
        id: campaign.id,
        name: campaign.name,
        platform: campaign.platform,
        status: campaign.status.toLowerCase(),
        category: 'general', // Default since not in schema
        startDate: new Date().toISOString().split('T')[0], // Default to today
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Default +30 days
        budget: {
          daily: 0, // Not in schema
          total: campaign.budget || 0,
          spent: campaign.spent || 0
        },
        performance: {
          impressions: campaign.impressions || 0,
          clicks: campaign.clicks || 0,
          leads: campaign.leads || totalLeads, // Use stored value or calculated
          ctr: parseFloat(ctr.toFixed(2)),
          cpl: parseFloat(cpl.toFixed(2)),
          conversionRate: parseFloat(conversionRate.toFixed(2))
        },
        targeting: {
          ageRange: campaign.targeting ? 
            (campaign.targeting as any)?.ageRange || 'N/A' : 'N/A',
          location: campaign.targeting ? 
            (campaign.targeting as any)?.location || 'N/A' : 'N/A',
          interests: campaign.targeting ? 
            (campaign.targeting as any)?.interests || [] : []
        },
        createdAt: campaign.createdAt.toISOString().split('T')[0],
        qualifiedLeads
      };
    });

    // Calculate overall statistics
    const stats = {
      total: total,
      active: campaigns.filter(c => c.status === 'ACTIVE').length,
      paused: campaigns.filter(c => c.status === 'PAUSED').length,
      completed: campaigns.filter(c => c.status === 'COMPLETED').length,
      totalSpent: campaigns.reduce((sum: number, c: any) => sum + (c.spent || 0), 0),
      totalLeads: campaigns.reduce((sum: number, c: any) => sum + (c.leads || c.leadSources.length), 0),
      avgCPL: campaigns.length > 0 ? 
        campaigns.reduce((sum: number, c: any) => {
          const leads = c.leads || c.leadSources.length;
          return sum + (leads > 0 ? (c.spent || 0) / leads : 0);
        }, 0) / campaigns.length : 0,
      avgCTR: campaigns.length > 0 ? 
        campaigns.reduce((sum: number, c: any) => {
          return sum + (c.ctr || 0);
        }, 0) / campaigns.length : 0
    };

    // Get user info
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: {
        makler: true,
        tenant: true
      }
    });

    return NextResponse.json({
      campaigns: campaignsWithStats,
      stats,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total
      },
      user: {
        name: user?.makler?.firstName ? 
          `${user.makler.firstName} ${user.makler.lastName}` : 
          user?.email,
        email: user?.email,
        tenant: user?.tenant?.name,
        role: user?.role
      }
    });

  } catch (error) {
    console.error('Campaigns API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Interner Serverfehler' },
      { status: error instanceof Error && error.message === 'Nicht authentifiziert' ? 401 : 500 }
    );
  }
} 