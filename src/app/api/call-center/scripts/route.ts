import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

async function verifyToken(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  
  if (!token) {
    throw new Error('Nicht authentifiziert');
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET || 'insurance-ai-secret-key-2024-production-fallback'
  ) as any;

  return decoded;
}

export async function GET(request: NextRequest) {
  try {
    await verifyToken(request);

    const scripts = [
      {
        id: 'greeting-1',
        name: 'Standard Begrüßung',
        category: 'Versicherung',
        type: 'greeting',
        content: 'Guten Tag {{customerName}}, hier spricht {{agentName}} von {{companyName}}. Vielen Dank für Ihr Interesse an unseren Versicherungslösungen. Wie kann ich Ihnen heute weiterhelfen?',
        variables: ['customerName', 'agentName', 'companyName'],
        useCase: 'Eingehende Anrufe von interessierten Kunden',
        isActive: true
      },
      {
        id: 'qualification-1',
        name: 'Lead Qualifizierung',
        category: 'Versicherung',
        type: 'qualification',
        content: 'Um Ihnen die bestmögliche Beratung zu bieten, darf ich Ihnen einige kurze Fragen stellen? Welcher Versicherungsbereich interessiert Sie am meisten? Haben Sie bereits ähnliche Versicherungen abgeschlossen?',
        variables: [],
        useCase: 'Qualifizierung neuer Leads',
        isActive: true
      },
      {
        id: 'objection-1',
        name: 'Einwand: Zu teuer',
        category: 'Versicherung',
        type: 'objection_handling',
        content: 'Ich verstehe Ihre Bedenken bezüglich der Kosten. Lassen Sie mich Ihnen zeigen, wie sich diese Investition langfristig für Sie rechnet. Bei einer Schadenshöhe von {{exampleDamage}} Euro würde sich die Versicherung bereits nach {{paybackTime}} bezahlt machen.',
        variables: ['exampleDamage', 'paybackTime'],
        useCase: 'Behandlung von Preiseinwänden',
        isActive: true
      },
      {
        id: 'closing-1',
        name: 'Terminvereinbarung',
        category: 'Versicherung',
        type: 'closing',
        content: 'Herr/Frau {{customerName}}, basierend auf unserem Gespräch sehe ich großes Potenzial, Ihnen bei {{specificNeed}} zu helfen. Sollen wir einen Termin für eine detaillierte Beratung vereinbaren? Ich hätte {{availableDate}} oder {{alternativeDate}} verfügbar.',
        variables: ['customerName', 'specificNeed', 'availableDate', 'alternativeDate'],
        useCase: 'Abschluss und Terminvereinbarung',
        isActive: true
      }
    ];

    return NextResponse.json({ scripts });

  } catch (error) {
    console.error('Call Scripts API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Fehler beim Laden der Call Scripts' },
      { status: 401 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await verifyToken(request);
    const body = await request.json();

    if (body.action === 'create_script') {
      const newScript = {
        id: 'script-' + Date.now(),
        name: body.name,
        category: body.category,
        type: body.type,
        content: body.content,
        variables: body.variables || [],
        useCase: body.useCase,
        isActive: true
      };

      return NextResponse.json({ 
        success: true, 
        script: newScript,
        message: 'Skript erfolgreich erstellt' 
      });
    }

    if (body.action === 'update_script') {
      return NextResponse.json({ 
        success: true,
        message: 'Skript erfolgreich aktualisiert'
      });
    }

    if (body.action === 'delete_script') {
      return NextResponse.json({ 
        success: true,
        message: 'Skript erfolgreich gelöscht'
      });
    }

    return NextResponse.json(
      { error: 'Unbekannte Aktion' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Call Scripts POST error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Fehler bei Call Script Aktion' },
      { status: 500 }
    );
  }
} 