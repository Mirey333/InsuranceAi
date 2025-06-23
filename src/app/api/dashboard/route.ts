import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

async function verifyToken(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  
  if (!token) {
    throw new Error('Nicht authentifiziert');
  }

      const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'insurance-ai-secret-key-2024-production-fallback'
    ) as any;

  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
    include: { 
      makler: true,
      tenant: true
    }
  });

  if (!user || !user.tenantId) {
    throw new Error('Benutzer nicht gefunden oder kein Tenant zugewiesen');
  }

  return user;
}

export async function GET(request: NextRequest) {
  try {
    const user = await verifyToken(request);
    const tenantId = user.tenantId!;

    // Get time range from query params
    const url = new URL(request.url);
    const timeRange = url.searchParams.get('timeRange') || '30d';
    
    // Calculate date range
    let dateFrom = new Date();
    switch (timeRange) {
      case '7d':
        dateFrom.setDate(dateFrom.getDate() - 7);
        break;
      case '90d':
        dateFrom.setDate(dateFrom.getDate() - 90);
        break;
      default: // 30d
        dateFrom.setDate(dateFrom.getDate() - 30);
    }

    // Get basic stats first
    const totalLeads = await prisma.lead.count({
      where: { tenantId }
    });

    const newLeads = await prisma.lead.count({
      where: {
        tenantId,
        createdAt: { gte: dateFrom }
      }
    });

    const activeCampaigns = await prisma.campaign.count({
      where: {
        tenantId,
        status: 'ACTIVE'
      }
    });

    const totalCampaigns = await prisma.campaign.count({
      where: { tenantId }
    });

    // Get recent leads
    const recentLeads = await prisma.lead.findMany({
      where: { tenantId },
      include: {
        makler: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    // Get campaigns with lead counts
    const campaignStats = await prisma.campaign.findMany({
      where: {
        tenantId,
        status: 'ACTIVE'
      },
      take: 5
    });

    // Get lead counts by status manually
    const newLeadCount = await prisma.lead.count({
      where: { tenantId, status: 'NEU' }
    });

    const qualifiedLeadCount = await prisma.lead.count({
      where: { tenantId, status: 'QUALIFIZIERT' }
    });

    const convertedLeadCount = await prisma.lead.count({
      where: { tenantId, status: 'ABGESCHLOSSEN' }
    });

    // Get communication count
    const communicationCount = await prisma.communication.count({
      where: {
        lead: { tenantId },
        sentAt: { gte: dateFrom }
      }
    });

    // Calculate conversion metrics
    const conversionRate = totalLeads > 0 ? ((convertedLeadCount / totalLeads) * 100) : 0;

    // Calculate total campaign spending and CPL  
    const totalSpent = campaignStats.reduce((sum, campaign) => sum + (campaign.spent || 0), 0);
    const totalCampaignLeads = campaignStats.reduce((sum, campaign) => sum + (campaign.leads || 0), 0);
    const avgCPL = totalCampaignLeads > 0 ? (totalSpent / totalCampaignLeads) : 0;

    // Format pipeline data
    const pipeline = {
      new: newLeadCount,
      qualified: qualifiedLeadCount,
      warm: 0, // Not implemented yet
      hot: 0,  // Not implemented yet
      converted: convertedLeadCount
    };

    // Format recent leads
    const formattedRecentLeads = recentLeads.map(lead => ({
      id: lead.id,
      name: `${lead.firstName} ${lead.lastName}`,
      email: lead.email,
      phone: lead.phone || '',
      stage: lead.status, // Using status instead of stage
      score: lead.score,
      interest: lead.interest || '',
      source: lead.source || '',
      budget: lead.budget?.toString() || '',
      createdAt: lead.createdAt.toISOString().split('T')[0],
      lastContact: lead.updatedAt.toISOString().split('T')[0],
      assignedTo: lead.makler ? `${lead.makler.firstName} ${lead.makler.lastName}` : 'Nicht zugewiesen'
    }));

    // Format active campaigns 
    const formattedCampaigns = campaignStats.map(campaign => ({
      id: campaign.id,
      name: campaign.name,
      platform: campaign.platform,
      status: campaign.status,
      budget: campaign.budget,
      spent: campaign.spent,
      leads: campaign.leads,
      cpl: campaign.leads > 0 ? (campaign.spent / campaign.leads) : 0,
      impressions: campaign.impressions,
      ctr: campaign.ctr
    }));

    // Communications summary
    const communicationStats = {
      sent: communicationCount,
      emails: Math.floor(communicationCount * 0.7), // Simplified estimation
      calls: Math.floor(communicationCount * 0.2),
      sms: Math.floor(communicationCount * 0.1)
    };

    const dashboardData = {
      user: {
        name: user.makler ? `${user.makler.firstName} ${user.makler.lastName}` : user.email,
        tenant: user.tenant?.name || 'Unbekannter Tenant',
        role: user.role
      },
      stats: {
        leads: {
          total: totalLeads,
          new: newLeads,
          qualified: qualifiedLeadCount,
          converted: convertedLeadCount
        },
        campaigns: {
          active: activeCampaigns,
          total: totalCampaigns,
          totalSpent: totalSpent
        },
        performance: {
          conversionRate: Math.round(conversionRate * 100) / 100,
          cpl: Math.round(avgCPL * 100) / 100,
          ctr: campaignStats.length > 0 ? 
            Math.round((campaignStats.reduce((sum, c) => sum + (c.ctr || 0), 0) / campaignStats.length) * 100) / 100 : 0
        },
        communications: communicationStats
      },
      pipeline,
      recentLeads: formattedRecentLeads,
      activeCampaigns: formattedCampaigns,
      timeRange
    };

    return NextResponse.json(dashboardData);

  } catch (error) {
    console.error('Dashboard data error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Fehler beim Laden der Dashboard-Daten' },
      { status: 401 }
    );
  }
} 