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
    const format = searchParams.get('format') || 'json';
    const status = searchParams.get('status') || 'qualified';
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');
    const campaignId = searchParams.get('campaignId');

    // Build filter conditions for qualified leads
    const where: any = {
      tenantId: decoded.tenantId,
      status: {
        in: ['QUALIFIZIERT', 'WARM', 'HEISS', 'TERMIN', 'ABGESCHLOSSEN']
      }
    };

    if (dateFrom) {
      where.createdAt = { gte: new Date(dateFrom) };
    }
    if (dateTo) {
      where.createdAt = { 
        ...where.createdAt,
        lte: new Date(dateTo) 
      };
    }
    if (campaignId) {
      where.campaignId = campaignId;
    }

    // Get qualified leads with related data
    const leads = await prisma.lead.findMany({
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
            phone: true
          }
        },
        communications: {
          select: {
            type: true,
            direction: true,
            status: true,
            sentAt: true,
            content: true
          },
          orderBy: { sentAt: 'desc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Transform leads for export
    const exportData = leads.map(lead => ({
      // Lead Information
      leadId: lead.id,
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      dateOfBirth: lead.dateOfBirth?.toISOString().split('T')[0],
      address: lead.address,
      city: lead.city,
      postalCode: lead.postalCode,
      
      // Lead Status & Scoring
      status: lead.status,
      score: lead.score,
      interest: lead.interest,
      budget: lead.budget,
      notes: lead.notes,
      
      // Timestamps
      createdAt: lead.createdAt.toISOString(),
      lastContact: lead.lastContact?.toISOString(),
      nextFollowUp: lead.nextFollowUp?.toISOString(),
      
      // GDPR
      consentGiven: lead.consentGiven,
      consentDate: lead.consentDate?.toISOString(),
      marketingConsent: lead.marketingConsent,
      
      // Campaign Information
      campaign: lead.campaign ? {
        id: lead.campaign.id,
        name: lead.campaign.name,
        platform: lead.campaign.platform
      } : null,
      
      // Makler Information
      makler: {
        name: `${lead.makler.firstName} ${lead.makler.lastName}`,
        company: lead.makler.company,
        phone: lead.makler.phone
      },
      
      // Communication Summary
      lastCommunication: lead.communications.length > 0 ? {
        type: lead.communications[0].type,
        direction: lead.communications[0].direction,
        date: lead.communications[0].sentAt.toISOString(),
        status: lead.communications[0].status
      } : null,
      
      communicationCount: lead.communications.length
    }));

    // Handle different export formats
    if (format === 'csv') {
      return generateCSVResponse(exportData);
    } else if (format === 'excel') {
      return generateExcelResponse(exportData);
    } else if (format === 'pma') {
      return generatePMAResponse(exportData);
    } else {
      // Default JSON format
      return NextResponse.json({
        success: true,
        exportDate: new Date().toISOString(),
        totalRecords: exportData.length,
        format: 'json',
        data: exportData
      });
    }

  } catch (error) {
    console.error('Export API error:', error);
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
    
    const { leadIds, exportFormat = 'json', notes } = body;

    if (!leadIds || !Array.isArray(leadIds) || leadIds.length === 0) {
      return NextResponse.json(
        { error: 'Lead IDs sind erforderlich' },
        { status: 400 }
      );
    }

    // Verify leads belong to the tenant
    const leads = await prisma.lead.findMany({
      where: {
        id: { in: leadIds },
        tenantId: decoded.tenantId
      }
    });

    if (leads.length !== leadIds.length) {
      return NextResponse.json(
        { error: 'Einige Leads wurden nicht gefunden oder gehören nicht zu Ihrem Tenant' },
        { status: 404 }
      );
    }

    // Create export record for tracking
    const exportRecord = await prisma.lead.updateMany({
      where: {
        id: { in: leadIds },
        tenantId: decoded.tenantId
      },
      data: {
        notes: notes ? `${notes} | Exportiert am ${new Date().toISOString()}` : `Exportiert am ${new Date().toISOString()}`
      }
    });

    return NextResponse.json({
      success: true,
      message: `${leads.length} Leads erfolgreich für Export markiert`,
      exportedLeads: leads.length,
      format: exportFormat
    });

  } catch (error) {
    console.error('Export POST error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}

// Helper functions for different export formats
function generateCSVResponse(data: any[]) {
  if (data.length === 0) {
    return NextResponse.json({ error: 'Keine Daten zum Exportieren verfügbar' }, { status: 404 });
  }

  const headers = [
    'Lead ID', 'Vorname', 'Nachname', 'E-Mail', 'Telefon', 'Geburtsdatum',
    'Adresse', 'Stadt', 'PLZ', 'Status', 'Score', 'Interesse', 'Budget',
    'Erstellt', 'Letzter Kontakt', 'GDPR Zustimmung', 'Marketing Zustimmung',
    'Kampagne', 'Plattform', 'Makler', 'Firma'
  ];

  const csvRows = [
    headers.join(','),
    ...data.map(lead => [
      lead.leadId,
      `"${lead.firstName || ''}"`,
      `"${lead.lastName || ''}"`,
      `"${lead.email || ''}"`,
      `"${lead.phone || ''}"`,
      `"${lead.dateOfBirth || ''}"`,
      `"${lead.address || ''}"`,
      `"${lead.city || ''}"`,
      `"${lead.postalCode || ''}"`,
      `"${lead.status}"`,
      lead.score || 0,
      `"${lead.interest || ''}"`,
      lead.budget || 0,
      `"${lead.createdAt}"`,
      `"${lead.lastContact || ''}"`,
      lead.consentGiven ? 'Ja' : 'Nein',
      lead.marketingConsent ? 'Ja' : 'Nein',
      `"${lead.campaign?.name || ''}"`,
      `"${lead.campaign?.platform || ''}"`,
      `"${lead.makler.name}"`,
      `"${lead.makler.company}"`
    ].join(','))
  ];

  const csvContent = csvRows.join('\n');
  
  return new NextResponse(csvContent, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="pma-leads-export-${new Date().toISOString().split('T')[0]}.csv"`
    }
  });
}

function generatePMAResponse(data: any[]) {
  // PMA-specific format
  const pmaData = {
    exportInfo: {
      exportDate: new Date().toISOString(),
      version: '1.0',
      format: 'PMA_STANDARD',
      recordCount: data.length
    },
    leads: data.map(lead => ({
      id: lead.leadId,
      personalData: {
        firstName: lead.firstName,
        lastName: lead.lastName,
        email: lead.email,
        phone: lead.phone,
        dateOfBirth: lead.dateOfBirth,
        address: {
          street: lead.address,
          city: lead.city,
          postalCode: lead.postalCode
        }
      },
      leadDetails: {
        status: lead.status,
        score: lead.score,
        interest: lead.interest,
        budget: lead.budget,
        notes: lead.notes
      },
      consent: {
        gdprConsent: lead.consentGiven,
        consentDate: lead.consentDate,
        marketingConsent: lead.marketingConsent
      },
      source: {
        campaign: lead.campaign?.name,
        platform: lead.campaign?.platform,
        createdAt: lead.createdAt
      },
             advisor: {
         name: lead.makler.name,
         company: lead.makler.company,
         contact: {
           phone: lead.makler.phone
         }
       }
    }))
  };

  return NextResponse.json(pmaData, {
    headers: {
      'Content-Disposition': `attachment; filename="pma-export-${new Date().toISOString().split('T')[0]}.json"`
    }
  });
}

function generateExcelResponse(data: any[]) {
  // For now, return JSON with Excel indication
  // In a real implementation, you'd use a library like xlsx to generate actual Excel files
  return NextResponse.json({
    message: 'Excel-Export wird vorbereitet',
    format: 'excel',
    downloadUrl: `/api/export/excel/${Date.now()}`,
    data: data
  }, {
    headers: {
      'Content-Disposition': `attachment; filename="pma-leads-${new Date().toISOString().split('T')[0]}.xlsx"`
    }
  });
} 