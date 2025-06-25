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

    const aiSettings = [
      {
        id: 'ai-config-1',
        name: 'Sophie - Hauptassistentin',
        voice: 'female',
        language: 'de',
        personality: 'friendly',
        responseSpeed: 'normal',
        maxCallDuration: 20,
        transferThreshold: 3,
        knowledgeBase: [
          'Lebensversicherung Basics',
          'Altersvorsorge Produkte',
          'DSGVO Compliance',
          'Verkaufsprozesse',
          'Einwandbehandlung'
        ],
        customInstructions: 'Seien Sie immer höflich und professionell. Hören Sie aktiv zu und stellen Sie gezielte Nachfragen. Bei komplexen Fragen leiten Sie an einen menschlichen Berater weiter.',
        isActive: true
      },
      {
        id: 'ai-config-2',
        name: 'Marcus - Sachversicherung',
        voice: 'male',
        language: 'de',
        personality: 'professional',
        responseSpeed: 'thoughtful',
        maxCallDuration: 15,
        transferThreshold: 2,
        knowledgeBase: [
          'KFZ-Versicherung',
          'Hausratversicherung',
          'Haftpflichtversicherung',
          'Schadensmeldung',
          'Tarifvergleiche'
        ],
        customInstructions: 'Konzentrieren Sie sich auf sachliche Informationen. Erklären Sie Versicherungsbedingungen verständlich. Bei Schadensfällen sammeln Sie alle relevanten Informationen.',
        isActive: true
      }
    ];

    return NextResponse.json({ settings: aiSettings });

  } catch (error) {
    console.error('AI Settings API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Fehler beim Laden der AI-Einstellungen' },
      { status: 401 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await verifyToken(request);
    const body = await request.json();

    if (body.action === 'update_ai_settings') {
      return NextResponse.json({ 
        success: true,
        message: 'AI-Einstellungen erfolgreich aktualisiert'
      });
    }

    if (body.action === 'create_ai_agent') {
      const newAgent = {
        id: 'ai-config-' + Date.now(),
        name: body.name,
        voice: body.voice,
        language: body.language,
        personality: body.personality,
        responseSpeed: body.responseSpeed,
        maxCallDuration: body.maxCallDuration,
        transferThreshold: body.transferThreshold,
        knowledgeBase: body.knowledgeBase || [],
        customInstructions: body.customInstructions,
        isActive: true
      };

      return NextResponse.json({ 
        success: true, 
        agent: newAgent,
        message: 'AI-Agent erfolgreich erstellt' 
      });
    }

    if (body.action === 'test_ai_voice') {
      return NextResponse.json({ 
        success: true,
        audioUrl: '/api/call-center/test-audio',
        message: 'Sprachtest gestartet'
      });
    }

    return NextResponse.json(
      { error: 'Unbekannte Aktion' },
      { status: 400 }
    );

  } catch (error) {
    console.error('AI Settings POST error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Fehler bei AI-Einstellungen' },
      { status: 500 }
    );
  }
} 