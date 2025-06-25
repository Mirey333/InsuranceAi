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
    const authToken = request.cookies.get('auth-token')?.value;
    
    if (!authToken && process.env.NODE_ENV === 'production') {
      // Return demo data for production demo purposes
      const url = new URL(request.url);
      const action = url.searchParams.get('action');
      
      if (action === 'agents') {
        const agents = [
          {
            id: 'ai-1',
            name: 'AI Assistant Sophie',
            status: 'available',
            type: 'ai',
            specializations: ['Lebensversicherung', 'Altersvorsorge'],
            currentCalls: 2,
            maxConcurrentCalls: 10,
            avgCallDuration: 8.5,
            totalCallsToday: 47,
            successRate: 89
          }
        ];
        return NextResponse.json({ agents });
      }
      
      // Default demo overview
      const overview = {
        totalAgents: 3,
        availableAgents: 2,
        activeCalls: 2,
        queueLength: 1,
        todayMetrics: {
          totalCalls: 127,
          answeredCalls: 119,
          averageWaitTime: 38,
          customerSatisfaction: 4.3,
          leadsGenerated: 23,
          conversionRate: 18.2
        }
      };
      return NextResponse.json(overview);
    }
    
    await verifyToken(request);

    const url = new URL(request.url);
    const action = url.searchParams.get('action');

    if (action === 'agents') {
      const agents = [
        {
          id: 'ai-1',
          name: 'AI Assistant Sophie',
          status: 'available',
          type: 'ai',
          specializations: ['Lebensversicherung', 'Altersvorsorge'],
          currentCalls: 2,
          maxConcurrentCalls: 10,
          avgCallDuration: 8.5,
          totalCallsToday: 47,
          successRate: 89
        },
        {
          id: 'ai-2', 
          name: 'AI Assistant Marcus',
          status: 'busy',
          type: 'ai',
          specializations: ['KFZ-Versicherung', 'Hausrat'],
          currentCalls: 8,
          maxConcurrentCalls: 10,
          avgCallDuration: 12.3,
          totalCallsToday: 52,
          successRate: 84
        },
        {
          id: 'human-1',
          name: 'Lisa Müller',
          status: 'available',
          type: 'human',
          specializations: ['Komplexe Beratung', 'Geschäftskunden'],
          currentCalls: 1,
          maxConcurrentCalls: 3,
          avgCallDuration: 18.7,
          totalCallsToday: 23,
          successRate: 95
        }
      ];

      return NextResponse.json({ agents });
    }

    if (action === 'calls') {
      const activeCalls = [
        {
          id: 'call-1',
          customerPhone: '+49 151 23456789',
          customerName: 'Maria Schmidt',
          agentId: 'ai-1',
          type: 'inbound',
          status: 'active',
          category: 'sales',
          startTime: new Date(Date.now() - 300000),
          sentiment: 'positive',
          followUpRequired: false
        },
        {
          id: 'call-2',
          customerPhone: '+49 170 98765432',
          customerName: 'Thomas Weber',
          agentId: 'ai-2',
          type: 'outbound',
          status: 'ringing',
          category: 'followup',
          startTime: new Date(Date.now() - 30000),
          followUpRequired: true
        }
      ];

      return NextResponse.json({ calls: activeCalls });
    }

    if (action === 'metrics') {
      const metrics = {
        date: new Date(),
        totalCalls: 127,
        answeredCalls: 119,
        missedCalls: 8,
        averageWaitTime: 38,
        averageCallDuration: 12.4,
        firstCallResolution: 87,
        customerSatisfaction: 4.3,
        leadsGenerated: 23,
        appointmentsScheduled: 15,
        conversionRate: 18.2,
        aiVsHumanPerformance: {
          ai: { calls: 99, satisfaction: 4.2, resolution: 85 },
          human: { calls: 28, satisfaction: 4.6, resolution: 92 }
        }
      };

      return NextResponse.json({ metrics });
    }

    if (action === 'queue') {
      const queues = [
        {
          id: 'general',
          name: 'Allgemeine Anfragen',
          type: 'general',
          waitingCalls: [],
          averageWaitTime: 45,
          maxWaitTime: 120,
          abandonmentRate: 5.2
        },
        {
          id: 'priority',
          name: 'Priority Support',
          type: 'priority',
          waitingCalls: [
            {
              id: 'queue-call-1',
              customerPhone: '+49 152 11111111',
              customerName: 'VIP Kunde',
              type: 'inbound',
              startTime: new Date(Date.now() - 45000)
            }
          ],
          averageWaitTime: 15,
          maxWaitTime: 60,
          abandonmentRate: 1.8
        }
      ];

      return NextResponse.json({ queues });
    }

    // Default: return dashboard overview
    const overview = {
      totalAgents: 3,
      availableAgents: 2,
      activeCalls: 2,
      queueLength: 1,
      todayMetrics: {
        totalCalls: 127,
        answeredCalls: 119,
        averageWaitTime: 38,
        customerSatisfaction: 4.3,
        leadsGenerated: 23,
        conversionRate: 18.2
      }
    };

    return NextResponse.json(overview);

  } catch (error) {
    console.error('Call Center API error:', error);
    
    // Return demo data instead of error in production for demo purposes
    if (process.env.NODE_ENV === 'production') {
      const overview = {
        totalAgents: 3,
        availableAgents: 2,
        activeCalls: 2,
        queueLength: 1,
        todayMetrics: {
          totalCalls: 127,
          answeredCalls: 119,
          averageWaitTime: 38,
          customerSatisfaction: 4.3,
          leadsGenerated: 23,
          conversionRate: 18.2
        }
      };
      return NextResponse.json(overview);
    }
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Fehler beim Laden der Call Center Daten' },
      { status: 401 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await verifyToken(request);
    const body = await request.json();

    if (body.action === 'start_call') {
      // Simulate starting an outbound call
      const newCall = {
        id: 'call-' + Date.now(),
        customerPhone: body.phone,
        customerName: body.customerName,
        agentId: body.agentId || 'ai-1',
        type: 'outbound',
        status: 'ringing',
        category: body.category || 'sales',
        startTime: new Date(),
        followUpRequired: false
      };

      return NextResponse.json({ 
        success: true, 
        call: newCall,
        message: 'Anruf gestartet' 
      });
    }

    if (body.action === 'end_call') {
      // Simulate ending a call
      return NextResponse.json({ 
        success: true,
        message: 'Anruf beendet',
        summary: {
          duration: body.duration || 0,
          outcome: body.outcome || 'completed',
          followUpRequired: body.followUpRequired || false
        }
      });
    }

    if (body.action === 'transfer_call') {
      // Simulate transferring a call
      return NextResponse.json({ 
        success: true,
        message: `Anruf an ${body.targetAgent} weitergeleitet`
      });
    }

    return NextResponse.json(
      { error: 'Unbekannte Aktion' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Call Center POST error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Fehler bei Call Center Aktion' },
      { status: 500 }
    );
  }
} 