'use client';

import { useState, useEffect } from 'react';
import { 
  Phone, 
  PhoneCall, 
  Users, 
  Clock, 
  TrendingUp, 
  BarChart3, 
  Mic, 
  MicOff, 
  PhoneOff, 
  Play, 
  Pause, 
  Settings, 
  Bot, 
  User, 
  MessageSquare, 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  Volume2,
  Activity,
  Headphones,
  UserCheck,
  PhoneIncoming,
  PhoneOutgoing,
  Timer,
  Target,
  Edit,
  Zap,
  X
} from 'lucide-react';
import { Call, CallCenterAgent, CallQueue, CallCenterMetrics } from '@/types';
import CallInterface from '@/components/CallInterface';
import VoiceConfigModal from '@/components/VoiceConfigModal';

// Mock Data für Demo
const mockAgents: CallCenterAgent[] = [
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

const mockCalls: Call[] = [
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

const mockQueues: CallQueue[] = [
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
    waitingCalls: mockCalls.slice(0, 1),
    averageWaitTime: 15,
    maxWaitTime: 60,
    abandonmentRate: 1.8
  }
];

const mockMetrics: CallCenterMetrics = {
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

export default function CallCenterPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'agents' | 'calls' | 'queue' | 'analytics' | 'scripts' | 'settings'>('dashboard');
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [showCallInterface, setShowCallInterface] = useState(false);
  const [showVoiceConfig, setShowVoiceConfig] = useState(false);
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <Headphones className="w-8 h-8 text-blue-600 mr-3" />
                AI Call Center
              </h1>
              <p className="text-gray-600">Intelligente Anrufverwaltung und Kundenbetreuung</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">System aktiv</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Einstellungen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
              { id: 'agents', name: 'Agenten', icon: Users },
              { id: 'calls', name: 'Aktive Anrufe', icon: Phone },
              { id: 'queue', name: 'Warteschlange', icon: Clock },
              { id: 'scripts', name: 'Call Scripts', icon: MessageSquare },
              { id: 'settings', name: 'AI Einstellungen', icon: Bot },
              { id: 'analytics', name: 'Analytics', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Anrufe heute</p>
                    <p className="text-3xl font-bold text-gray-900">{mockMetrics.totalCalls}</p>
                    <p className="text-sm text-green-600">+{mockMetrics.answeredCalls} beantwortet</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Ø Wartezeit</p>
                    <p className="text-3xl font-bold text-gray-900">{mockMetrics.averageWaitTime}s</p>
                    <p className="text-sm text-green-600">-12s vs. gestern</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Zufriedenheit</p>
                    <p className="text-3xl font-bold text-gray-900">{mockMetrics.customerSatisfaction}/5</p>
                    <p className="text-sm text-green-600">+0.2 vs. letzte Woche</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                    <p className="text-3xl font-bold text-gray-900">{mockMetrics.conversionRate}%</p>
                    <p className="text-sm text-blue-600">{mockMetrics.leadsGenerated} Leads heute</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* AI vs Human Performance */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">AI vs. Human Performance</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-gray-900">AI Assistenten</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Anrufe</span>
                          <span className="font-medium">{mockMetrics.aiVsHumanPerformance.ai.calls}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Zufriedenheit</span>
                          <span className="font-medium">{mockMetrics.aiVsHumanPerformance.ai.satisfaction}/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Auflösungsrate</span>
                          <span className="font-medium">{mockMetrics.aiVsHumanPerformance.ai.resolution}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-gray-900">Menschliche Berater</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Anrufe</span>
                          <span className="font-medium">{mockMetrics.aiVsHumanPerformance.human.calls}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Zufriedenheit</span>
                          <span className="font-medium">{mockMetrics.aiVsHumanPerformance.human.satisfaction}/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Auflösungsrate</span>
                          <span className="font-medium">{mockMetrics.aiVsHumanPerformance.human.resolution}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Schnellaktionen</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <PhoneOutgoing className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Ausgehenden Anruf starten</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-900">Termin vereinbaren</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <MessageSquare className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">Call Script bearbeiten</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Agents Tab */}
        {activeTab === 'agents' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockAgents.map((agent) => (
                <div key={agent.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${agent.type === 'ai' ? 'bg-blue-50' : 'bg-green-50'}`}>
                        {agent.type === 'ai' ? (
                          <Bot className="w-6 h-6 text-blue-600" />
                        ) : (
                          <User className="w-6 h-6 text-green-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                        <p className="text-sm text-gray-500 capitalize">{agent.type} Agent</p>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      agent.status === 'available' ? 'bg-green-500' :
                      agent.status === 'busy' ? 'bg-orange-500' : 'bg-gray-300'
                    }`}></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Aktive Anrufe</span>
                      <span className="font-medium">{agent.currentCalls}/{agent.maxConcurrentCalls}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Anrufe heute</span>
                      <span className="font-medium">{agent.totalCallsToday}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Erfolgsrate</span>
                      <span className="font-medium">{agent.successRate}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Ø Gesprächsdauer</span>
                      <span className="font-medium">{agent.avgCallDuration} Min</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Spezialisierungen:</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.specializations.map((spec, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Active Calls Tab */}
        {activeTab === 'calls' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Aktive Anrufe</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {mockCalls.map((call) => {
                  const agent = mockAgents.find(a => a.id === call.agentId);
                  const duration = call.status === 'active' ? Math.floor((Date.now() - call.startTime.getTime()) / 1000) : 0;
                  
                  return (
                    <div key={call.id} className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-lg ${
                            call.type === 'inbound' ? 'bg-green-50' : 'bg-blue-50'
                          }`}>
                            {call.type === 'inbound' ? (
                              <PhoneIncoming className="w-5 h-5 text-green-600" />
                            ) : (
                              <PhoneOutgoing className="w-5 h-5 text-blue-600" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {call.customerName || call.customerPhone}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {agent?.name} • {call.category}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              call.status === 'active' ? 'bg-green-100 text-green-800' :
                              call.status === 'ringing' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {call.status === 'active' && <Activity className="w-3 h-3 mr-1" />}
                              {call.status}
                            </div>
                            {call.status === 'active' && (
                              <p className="text-sm text-gray-500 mt-1">
                                <Timer className="w-3 h-3 inline mr-1" />
                                {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
                              </p>
                            )}
                          </div>
                          
                                                <div className="flex space-x-2">
                        <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                          {isRecording ? <MicOff className="w-4 h-4 text-red-600" /> : <Mic className="w-4 h-4 text-gray-600" />}
                        </button>
                        <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                          <Volume2 className="w-4 h-4 text-gray-600" />
                        </button>
                        <button 
                          onClick={() => {
                            setSelectedCall(call);
                            setShowCallInterface(true);
                          }}
                          className="p-2 rounded-lg border border-blue-200 hover:bg-blue-50"
                        >
                          <Edit className="w-4 h-4 text-blue-600" />
                        </button>
                        <button className="p-2 rounded-lg border border-red-200 hover:bg-red-50">
                          <PhoneOff className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                        </div>
                      </div>
                      
                      {call.sentiment && (
                        <div className="mt-4 flex items-center space-x-4">
                          <span className="text-sm text-gray-600">Stimmung:</span>
                          <span className={`text-sm font-medium ${
                            call.sentiment === 'positive' ? 'text-green-600' :
                            call.sentiment === 'negative' ? 'text-red-600' : 'text-gray-600'
                          }`}>
                            {call.sentiment === 'positive' ? '😊 Positiv' :
                             call.sentiment === 'negative' ? '😟 Negativ' : '😐 Neutral'}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Queue Tab */}
        {activeTab === 'queue' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {mockQueues.map((queue) => (
                <div key={queue.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{queue.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      queue.type === 'priority' ? 'bg-red-100 text-red-800' :
                      queue.type === 'vip' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {queue.type}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wartende Anrufe</span>
                      <span className="font-medium">{queue.waitingCalls.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Ø Wartezeit</span>
                      <span className="font-medium">{queue.averageWaitTime}s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Max. Wartezeit</span>
                      <span className="font-medium">{queue.maxWaitTime}s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Abbruchrate</span>
                      <span className="font-medium">{queue.abandonmentRate}%</span>
                    </div>
                  </div>
                  
                  {queue.waitingCalls.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">Wartende Anrufe:</p>
                      <div className="space-y-2">
                        {queue.waitingCalls.map((call) => (
                          <div key={call.id} className="flex items-center justify-between text-sm">
                            <span>{call.customerName || call.customerPhone}</span>
                            <span className="text-gray-500">
                              {Math.floor((Date.now() - call.startTime.getTime()) / 1000)}s
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scripts Tab */}
        {activeTab === 'scripts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Call Scripts</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Neues Skript erstellen
              </button>
            </div>
            
            <div className="grid gap-6">
              {[
                {
                  name: 'Standard Begrüßung',
                  type: 'greeting',
                  category: 'Versicherung',
                  usage: 89,
                  content: 'Guten Tag {{customerName}}, hier spricht {{agentName}} von {{companyName}}...'
                },
                {
                  name: 'Lead Qualifizierung',
                  type: 'qualification',
                  category: 'Versicherung',
                  usage: 67,
                  content: 'Um Ihnen die bestmögliche Beratung zu bieten, darf ich Ihnen einige kurze Fragen stellen?...'
                },
                {
                  name: 'Einwand: Zu teuer',
                  type: 'objection_handling',
                  category: 'Versicherung',
                  usage: 43,
                  content: 'Ich verstehe Ihre Bedenken bezüglich der Kosten. Lassen Sie mich Ihnen zeigen...'
                }
              ].map((script, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{script.name}</h4>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-gray-500">Typ: {script.type}</span>
                        <span className="text-sm text-gray-500">Kategorie: {script.category}</span>
                        <span className="text-sm text-blue-600">Verwendet: {script.usage}x</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                    {script.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">AI Agent Einstellungen</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Neuen AI Agent erstellen
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {mockAgents.filter(agent => agent.type === 'ai').map((agent) => (
                <div key={agent.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Bot className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{agent.name}</h4>
                        <p className="text-sm text-gray-500">AI Assistant</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedAgent(agent.id);
                        setShowVoiceConfig(true);
                      }}
                      className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Konfigurieren</span>
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Spezialisierungen</span>
                      <span className="font-medium">{agent.specializations.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Max. gleichzeitige Anrufe</span>
                      <span className="font-medium">{agent.maxConcurrentCalls}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Erfolgsrate</span>
                      <span className="font-medium text-green-600">{agent.successRate}%</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {agent.specializations.map((spec, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tagesübersicht</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Gesamte Anrufe</span>
                    <span className="text-2xl font-bold text-gray-900">{mockMetrics.totalCalls}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Beantwortete Anrufe</span>
                    <span className="text-2xl font-bold text-green-600">{mockMetrics.answeredCalls}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Verpasste Anrufe</span>
                    <span className="text-2xl font-bold text-red-600">{mockMetrics.missedCalls}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">First Call Resolution</span>
                    <span className="text-2xl font-bold text-blue-600">{mockMetrics.firstCallResolution}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead-Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Generierte Leads</span>
                    <span className="text-2xl font-bold text-purple-600">{mockMetrics.leadsGenerated}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Termine vereinbart</span>
                    <span className="text-2xl font-bold text-green-600">{mockMetrics.appointmentsScheduled}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Conversion Rate</span>
                    <span className="text-2xl font-bold text-blue-600">{mockMetrics.conversionRate}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Kundenzufriedenheit</span>
                    <span className="text-2xl font-bold text-yellow-600">{mockMetrics.customerSatisfaction}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showCallInterface && selectedCall && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-6xl max-h-screen overflow-y-auto">
            <CallInterface 
              call={{
                id: selectedCall.id,
                customerName: selectedCall.customerName,
                customerPhone: selectedCall.customerPhone,
                agentName: mockAgents.find(a => a.id === selectedCall.agentId)?.name || 'Unknown',
                status: selectedCall.status as 'ringing' | 'active' | 'hold' | 'ended',
                startTime: selectedCall.startTime,
                category: selectedCall.category
              }}
              onEndCall={() => setShowCallInterface(false)}
              onTransferCall={() => console.log('Transfer call')}
              onScheduleFollowUp={() => console.log('Schedule follow-up')}
            />
            <button 
              onClick={() => setShowCallInterface(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      )}

      {showVoiceConfig && selectedAgent && (
        <VoiceConfigModal 
          isOpen={showVoiceConfig}
          onClose={() => setShowVoiceConfig(false)}
          agentId={selectedAgent}
          agentName={mockAgents.find(a => a.id === selectedAgent)?.name || 'Unknown Agent'}
        />
      )}
    </div>
  );
} 