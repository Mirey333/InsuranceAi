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

    const url = new URL(request.url);
    const action = url.searchParams.get('action');

    if (action === 'analytics') {
      const analytics = {
        period: 'month',
        totalReach: 89543,
        totalEngagement: 12847,
        engagementRate: 14.3,
        totalFollowers: [
          { platform: 'Instagram', count: 5642, growth: 12.4, posts: 24, reach: 45231, engagement: 6847, leads: 23 },
          { platform: 'Facebook', count: 3821, growth: 8.7, posts: 18, reach: 23456, engagement: 3254, leads: 15 },
          { platform: 'LinkedIn', count: 2934, growth: 15.2, posts: 12, reach: 15678, engagement: 2156, leads: 31 },
          { platform: 'TikTok', count: 1823, growth: 28.9, posts: 8, reach: 5178, engagement: 590, leads: 7 }
        ],
        leadSources: [
          { platform: 'LinkedIn', leads: 31, conversionRate: 12.8, costPerLead: 15.50 },
          { platform: 'Instagram', leads: 23, conversionRate: 8.7, costPerLead: 18.20 },
          { platform: 'Facebook', leads: 15, conversionRate: 6.4, costPerLead: 22.10 },
          { platform: 'TikTok', leads: 7, conversionRate: 4.2, costPerLead: 28.90 }
        ],
        aiRecommendations: [
          {
            type: 'content',
            suggestion: 'Erstelle mehr Video-Content für TikTok und Instagram Reels',
            reasoning: 'Video-Posts haben 3x höhere Engagement-Rate',
            expectedImpact: 'high'
          },
          {
            type: 'timing',
            suggestion: 'Poste werktags zwischen 17-19 Uhr für höchste Reichweite',
            reasoning: 'Analyse der letzten 30 Tage zeigt peak Aktivität',
            expectedImpact: 'medium'
          }
        ]
      };

      return NextResponse.json({ analytics });
    }

    // Default: Dashboard overview
    const overview = {
      totalPlatforms: 6,
      connectedPlatforms: 4,
      totalFollowers: 14220,
      totalReach: 89543,
      totalEngagement: 12847,
      engagementRate: 14.3,
      totalLeads: 76,
      scheduledPosts: 3,
      draftPosts: 2,
      publishedPosts: 12
    };

    return NextResponse.json(overview);

  } catch (error) {
    console.error('Social Media API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Fehler beim Laden der Social Media Daten' },
      { status: 401 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await verifyToken(request);
    const body = await request.json();

    if (body.action === 'generate_content') {
      // Simulate AI content generation
      const aiContent = {
        content: generateAIContent(body.prompt, body.tone, body.category),
        hashtags: generateHashtags(body.category),
        estimatedReach: Math.floor(Math.random() * 20000) + 5000,
        estimatedEngagement: Math.floor(Math.random() * 15) + 5,
        complianceScore: Math.floor(Math.random() * 20) + 80
      };

      return NextResponse.json({ 
        success: true, 
        aiContent,
        message: 'Content erfolgreich generiert' 
      });
    }

    return NextResponse.json({ error: 'Unbekannte Aktion' }, { status: 400 });

  } catch (error) {
    console.error('Social Media POST error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Fehler beim Verarbeiten der Anfrage' },
      { status: 500 }
    );
  }
}

function generateAIContent(prompt: string, tone: string, category: string): string {
  const templates = {
    altersvorsorge: [
      '🎯 Früh anfangen zahlt sich aus! Mit der richtigen Altersvorsorge-Strategie sichern Sie sich finanzielle Freiheit im Alter.',
      '💰 Wussten Sie schon? Bereits 100€ monatlich können über die Jahre zu einem beachtlichen Vermögen werden!'
    ],
    krankenversicherung: [
      '🏥 Die richtige Krankenversicherung ist mehr als nur ein Muss - sie ist Ihre Investition in Gesundheit und Sicherheit.',
      '💡 PKV oder GKV? Die Entscheidung hängt von Ihren individuellen Bedürfnissen ab.'
    ]
  };

  const categoryTemplates = templates[category as keyof typeof templates] || templates.altersvorsorge;
  return categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)];
}

function generateHashtags(category: string): string[] {
  const hashtagMap = {
    altersvorsorge: ['#Altersvorsorge', '#Finanzplanung', '#Rente', '#Sparen'],
    krankenversicherung: ['#Krankenversicherung', '#PKV', '#GKV', '#Gesundheit']
  };

  return hashtagMap[category as keyof typeof hashtagMap] || hashtagMap.altersvorsorge;
}