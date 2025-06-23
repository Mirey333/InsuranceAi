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
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'insurance-ai-secret-key-2024-production-fallback') as any;
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
    const template = searchParams.get('template');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Build filter conditions
    const where: any = {
      tenantId: decoded.tenantId
    };

    if (status && status !== 'all') {
      where.status = status.toUpperCase();
    }

    if (template && template !== 'all') {
      where.template = template.toUpperCase();
    }

    // Get landing pages with related data
    const [landingPages, total] = await Promise.all([
      prisma.landingPage.findMany({
        where,
        include: {
          campaign: {
            select: {
              id: true,
              name: true,
              platform: true
            }
          },
          makler: {
            select: {
              firstName: true,
              lastName: true,
              company: true,
              primaryColor: true,
              secondaryColor: true,
              logo: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset
      }),
      prisma.landingPage.count({ where })
    ]);

    // Transform landing pages data
    const landingPagesWithStats = landingPages.map(page => ({
      id: page.id,
      name: page.name,
      slug: page.slug,
      template: page.template.toLowerCase(),
      status: page.status.toLowerCase(),
      headline: page.headline,
      subheadline: page.subheadline,
      content: page.content,
      formFields: page.formFields,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      views: page.views,
      submissions: page.submissions,
      conversionRate: page.conversionRate,
      createdAt: page.createdAt.toISOString().split('T')[0],
      updatedAt: page.updatedAt.toISOString().split('T')[0],
      publishedAt: page.publishedAt?.toISOString().split('T')[0],
      campaign: page.campaign ? {
        id: page.campaign.id,
        name: page.campaign.name,
        platform: page.campaign.platform
      } : null,
      makler: {
        name: `${page.makler.firstName} ${page.makler.lastName}`,
        company: page.makler.company,
        branding: {
          primaryColor: page.makler.primaryColor,
          secondaryColor: page.makler.secondaryColor,
          logo: page.makler.logo
        }
      }
    }));

    // Calculate statistics
    const stats = {
      total: total,
      published: landingPages.filter(p => p.status === 'PUBLISHED').length,
      draft: landingPages.filter(p => p.status === 'DRAFT').length,
      archived: landingPages.filter(p => p.status === 'ARCHIVED').length,
      totalViews: landingPages.reduce((sum, p) => sum + (p.views || 0), 0),
      totalSubmissions: landingPages.reduce((sum, p) => sum + (p.submissions || 0), 0),
      avgConversionRate: landingPages.length > 0 ? 
        landingPages.reduce((sum, p) => sum + (p.conversionRate || 0), 0) / landingPages.length : 0
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
      landingPages: landingPagesWithStats,
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
    console.error('Landing Pages API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Interner Serverfehler' },
      { status: error instanceof Error && error.message === 'Nicht authentifiziert' ? 401 : 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const decoded = await verifyToken(request);
    const body = await request.json();

    const {
      name,
      slug,
      template,
      headline,
      subheadline,
      content,
      formFields,
      metaTitle,
      metaDescription,
      campaignId
    } = body;

    // Validate required fields
    if (!name || !slug || !template || !headline) {
      return NextResponse.json(
        { error: 'Name, Slug, Template und Headline sind erforderlich' },
        { status: 400 }
      );
    }

    // Check if slug is unique
    const existingPage = await prisma.landingPage.findUnique({
      where: { slug }
    });

    if (existingPage) {
      return NextResponse.json(
        { error: 'Dieser Slug ist bereits vergeben' },
        { status: 400 }
      );
    }

    // Get user's makler info
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: { makler: true }
    });

    if (!user?.makler) {
      return NextResponse.json(
        { error: 'Kein Makler-Profil gefunden' },
        { status: 400 }
      );
    }

    // Create landing page
    const landingPage = await prisma.landingPage.create({
      data: {
        name,
        slug,
        template: template.toUpperCase(),
        headline,
        subheadline: subheadline || '',
        content: content || {},
        formFields: formFields || [],
        metaTitle: metaTitle || headline,
        metaDescription: metaDescription || subheadline || '',
        status: 'DRAFT',
        maklerId: user.makler.id,
        tenantId: decoded.tenantId,
        campaignId: campaignId || null
      }
    });

    return NextResponse.json({
      message: 'Landing Page erfolgreich erstellt',
      landingPage: {
        id: landingPage.id,
        name: landingPage.name,
        slug: landingPage.slug,
        status: landingPage.status.toLowerCase()
      }
    });

  } catch (error) {
    console.error('Landing Page creation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Interner Serverfehler' },
      { status: 500 }
    );
  }
} 