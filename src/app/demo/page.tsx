'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  BarChart3, 
  TrendingUp,
  TrendingDown,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Euro,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Filter,
  Search,
  Bell,
  Settings,
  Zap,
  Globe,
  Palette,
  BarChart,
  Eye,
  MousePointer,
  FileText,
  Smartphone,
  Monitor,
  Edit3,
  Copy,
  Play,
  PieChart,
  LineChart,
  Download,
  Calendar as CalendarIcon,
  TrendingUp as TrendingUpIcon,
  Activity,
  DollarSign,
  Sparkles,
  Crown,
  Gift,
  Rocket,
  Timer,
  Award,
  Megaphone,
  MessageSquare,
  HeadphonesIcon,
  Brain,
  Bot,
  Trophy
} from 'lucide-react';

// Demo-Kunde (realistisch)
const demoUser = {
  name: "Marcus Bauer",
  company: "Bauer Finanz- & Versicherungsmakler",
  location: "München",
  experience: "12 Jahre",
  avatar: "MB",
  plan: "LEADGEN STARTER",
  monthlyLeads: 45,
  conversionRate: 4.2,
  avgDealValue: 2800
};

// Wow-Zahlen für emotionalen Impact
const successMetrics = {
  beforeInsure: {
    monthlyLeads: 15,
    conversionRate: 3.2,
    avgDealValue: 2200,
    monthlyRevenue: 10560,
    workHours: 65,
    costPerLead: 45
  },
  afterInsure: {
    monthlyLeads: 67,
    conversionRate: 12.8,
    avgDealValue: 3850,
    monthlyRevenue: 33024,
    workHours: 42,
    costPerLead: 18
  }
};

// Live Demo Notifications mit Wow-Effekt
const liveNotifications = [
  {
    id: 1,
    type: 'ai-lead',
    message: '🔥 KI hat HEISSEN Lead identifiziert: BMW-Manager, €680k Baufinanzierung',
    time: 'JETZT',
    icon: Brain,
    color: 'bg-green-100 text-green-800 border-l-4 border-green-500',
    value: '€12.400'
  },
  {
    id: 2,
    type: 'automation',
    message: '✅ Follow-up Sequenz erfolgreich: 3 neue Termine diese Woche',
    time: 'vor 3 Min',
    icon: Zap,
    color: 'bg-blue-100 text-blue-800 border-l-4 border-blue-500',
    value: '€8.600'
  },
  {
    id: 3,
    type: 'conversion',
    message: '💰 Abschluss! Familie Weber - 3 Verträge (PKV + BU + LV)',
    time: 'vor 8 Min',
    icon: Award,
    color: 'bg-purple-100 text-purple-800 border-l-4 border-purple-500',
    value: '€15.200'
  },
  {
    id: 4,
    type: 'ai-script',
    message: '🎯 KI-Assistent: Optimaler Gesprächseinstieg für 14:00 Termin',
    time: 'vor 12 Min',
    icon: MessageSquare,
    color: 'bg-orange-100 text-orange-800 border-l-4 border-orange-500',
    value: 'Script Ready'
  }
];

// Realistische Demo-Leads mit Wow-Potenzial
const demoLeads = [
  {
    id: 1,
    name: "Dr. Andreas Richter",
    email: "a.richter@bmw-group.com",
    phone: "+49 171 234 5678",
    interest: "Baufinanzierung + Vermögensaufbau",
    score: 98,
    aiInsight: "🔥 TOP-LEAD: Führungskraft, €180k Jahresgehalt, sofortiger Finanzierungsbedarf",
    stage: "heiß",
    value: 12400,
    source: "LinkedIn Ads",
    createdAt: "2024-01-15",
    lastContact: "vor 1 Stunde",
    notes: "Immobilienkauf €680k, München-Schwabing. Zusätzlich Interesse an Premium-Altersvorsorge.",
    nextAction: "Termin heute 16:30 - KI empfiehlt: Fokus auf Steuervorteile",
    probability: 95,
    documents: ["Gehaltsbescheinigung", "SCHUFA", "Kaufvertrag"]
  },
  {
    id: 2,
    name: "Sarah & Michael Weber",
    email: "familie.weber@email.de",
    phone: "+49 160 987 6543",
    interest: "Familienabsicherung komplett",
    score: 89,
    aiInsight: "💡 Familie mit 2 Kindern - Komplettpaket möglich (PKV + BU + LV + KRV)",
    stage: "termin",
    value: 8600,
    source: "Facebook Ads",
    createdAt: "2024-01-14",
    lastContact: "gestern",
    notes: "Beide selbstständig, Wechsel von GKV gewünscht. Kinder mitversichern.",
    nextAction: "Beratungstermin morgen 14:00 - Paketangebot vorbereitet",
    probability: 85,
    documents: ["Einkommensnachweise", "Gesundheitsfragen"]
  },
  {
    id: 3,
    name: "Lisa Schneider",
    email: "l.schneider@startup.de",
    phone: "+49 175 555 4321",
    interest: "Startup-Gründer Absicherung",
    score: 76,
    aiInsight: "🚀 Tech-Gründerin - Innovative Absicherungskonzepte gefragt",
    stage: "qualifiziert",
    value: 5200,
    source: "Google Ads",
    createdAt: "2024-01-13",
    lastContact: "vor 6 Stunden",
    notes: "FinTech-Startup, Investment erhalten. BU + KRV + Vermögensaufbau",
    nextAction: "KI schlägt flexible Verträge vor - Call geplant",
    probability: 72,
    documents: ["Gesellschaftervertrag", "Businessplan"]
  }
];

// ROI Showcase Daten
const roiShowcase = {
  investment: 149, // monatlich
  returns: {
    leadIncrease: 347, // Prozent
    conversionImprovement: 208,
    timesSaved: 23, // Stunden/Woche
    costReduction: 62, // Prozent
    revenueIncrease: 312 // Prozent
  },
  monthlyROI: 2148 // Euro zusätzlich
};

// Helper Functions
const getStageColor = (stage: string) => {
  const colors = {
    'neu': 'bg-gray-100 text-gray-800',
    'kontaktiert': 'bg-blue-100 text-blue-800',
    'qualifiziert': 'bg-yellow-100 text-yellow-800',
    'warm': 'bg-orange-100 text-orange-800',
    'heiß': 'bg-red-100 text-red-800',
    'termin': 'bg-purple-100 text-purple-800',
    'abgeschlossen': 'bg-green-100 text-green-800'
  };
  return colors[stage as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-green-600';
  if (score >= 60) return 'text-yellow-600';
  return 'text-red-600';
};

export default function DemoPage() {
  const [selectedLead, setSelectedLead] = useState(demoLeads[0]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(true);
  const [liveDemo, setLiveDemo] = useState(true);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showROI, setShowROI] = useState(false);
  const [demoStep, setDemoStep] = useState(1);

  // Live-Demo Effekte
  useEffect(() => {
    if (liveDemo) {
      const interval = setInterval(() => {
        setCurrentNotification((prev) => (prev + 1) % liveNotifications.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [liveDemo]);

  const improvement = (before: number, after: number) => {
    return Math.round(((after - before) / before) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Header mit Wow-Zahlen */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                  {demoUser.avatar}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{demoUser.name}</h1>
                  <p className="text-white/80">{demoUser.company}</p>
                  <div className="flex items-center space-x-4 text-sm text-white/70 mt-1">
                    <span>{demoUser.location}</span>
                    <span>•</span>
                    <span>{demoUser.experience} Erfahrung</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Live Success Metrics */}
            <div className="text-right">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">+347%</div>
                  <div className="text-xs text-white/70">Mehr Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">+208%</div>
                  <div className="text-xs text-white/70">Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">€33k</div>
                  <div className="text-xs text-white/70">Monatsumsatz</div>
                </div>
              </div>
              <button
                onClick={() => setShowROI(!showROI)}
                className="mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-all flex items-center space-x-2"
              >
                <Award className="w-4 h-4" />
                <span>ROI Details ansehen</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Showcase Modal */}
      {showROI && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Ihr ROI mit InsureAI Pro</h2>
                <button
                  onClick={() => setShowROI(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Vorher */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-600">❌ Vorher (ohne InsureAI Pro)</h3>
                  <div className="bg-red-50 p-4 rounded-lg space-y-3">
                    <div className="flex justify-between">
                      <span>Leads/Monat:</span>
                      <span className="font-semibold">{successMetrics.beforeInsure.monthlyLeads}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion Rate:</span>
                      <span className="font-semibold">{successMetrics.beforeInsure.conversionRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Kosten pro Lead:</span>
                      <span className="font-semibold">€{successMetrics.beforeInsure.costPerLead}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Arbeitszeit/Woche:</span>
                      <span className="font-semibold">{successMetrics.beforeInsure.workHours}h</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between text-lg">
                      <span>Monatsumsatz:</span>
                      <span className="font-bold text-red-600">€{successMetrics.beforeInsure.monthlyRevenue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Nachher */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-600">✅ Nachher (mit InsureAI Pro)</h3>
                  <div className="bg-green-50 p-4 rounded-lg space-y-3">
                    <div className="flex justify-between">
                      <span>Leads/Monat:</span>
                      <span className="font-semibold text-green-600">
                        {successMetrics.afterInsure.monthlyLeads} 
                        <span className="text-xs ml-1">(+{improvement(successMetrics.beforeInsure.monthlyLeads, successMetrics.afterInsure.monthlyLeads)}%)</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion Rate:</span>
                      <span className="font-semibold text-green-600">
                        {successMetrics.afterInsure.conversionRate}%
                        <span className="text-xs ml-1">(+{improvement(successMetrics.beforeInsure.conversionRate, successMetrics.afterInsure.conversionRate)}%)</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Kosten pro Lead:</span>
                      <span className="font-semibold text-green-600">
                        €{successMetrics.afterInsure.costPerLead}
                        <span className="text-xs ml-1">(-{100 - Math.round((successMetrics.afterInsure.costPerLead / successMetrics.beforeInsure.costPerLead) * 100)}%)</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Arbeitszeit/Woche:</span>
                      <span className="font-semibold text-green-600">
                        {successMetrics.afterInsure.workHours}h
                        <span className="text-xs ml-1">(-{successMetrics.beforeInsure.workHours - successMetrics.afterInsure.workHours}h)</span>
                      </span>
                    </div>
                    <div className="border-t pt-2 flex justify-between text-lg">
                      <span>Monatsumsatz:</span>
                      <span className="font-bold text-green-600">€{successMetrics.afterInsure.monthlyRevenue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    +€{(successMetrics.afterInsure.monthlyRevenue - successMetrics.beforeInsure.monthlyRevenue).toLocaleString()} / Monat
                  </div>
                  <div className="text-gray-600 mb-4">Mehr Umsatz durch InsureAI Pro</div>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <span>Investition: €149/Monat</span>
                    <span>•</span>
                    <span className="font-semibold text-green-600">ROI: 1.442% 🚀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Notifications Banner */}
      {liveDemo && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-3">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">LIVE DEMO</span>
                                 <div className="flex items-center space-x-2">
                   {(() => {
                     const IconComponent = liveNotifications[currentNotification]?.icon;
                     return IconComponent ? <IconComponent className="w-4 h-4" /> : null;
                   })()}
                   <span className="text-sm">{liveNotifications[currentNotification].message}</span>
                   <span className="text-xs bg-black/20 px-2 py-1 rounded">
                     {liveNotifications[currentNotification].value}
                   </span>
                 </div>
              </div>
              <button className="text-xs bg-black/20 px-3 py-1 rounded hover:bg-black/30 transition-all">
                Alle Benachrichtigungen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
                         {[
               { id: 'dashboard', label: '🏠 Dashboard', icon: BarChart3 },
               { id: 'leads', label: '🎯 Premium Leads', icon: Users },
               { id: 'ai-assistant', label: '🤖 KI-Assistent', icon: Brain },
               { id: 'automation', label: '⚡ Automation', icon: Zap },
               { id: 'ai-training', label: '🎓 KI-Training', icon: Award },
               { id: 'script-portal', label: '📜 Script Portal', icon: FileText },
               { id: 'analytics', label: '📊 Analytics', icon: PieChart }
             ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Heiße Leads heute</p>
                    <p className="text-2xl font-bold text-green-600">12</p>
                    <p className="text-xs text-gray-500">+340% vs. letzten Monat</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Termine diese Woche</p>
                    <p className="text-2xl font-bold text-blue-600">18</p>
                    <p className="text-xs text-gray-500">KI-optimiert geplant</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pipeline Wert</p>
                    <p className="text-2xl font-bold text-purple-600">€127k</p>
                    <p className="text-xs text-gray-500">23 qualifizierte Deals</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">KI Empfehlungen</p>
                    <p className="text-2xl font-bold text-orange-600">7</p>
                    <p className="text-xs text-gray-500">Sofort umsetzbar</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* KI Insights Dashboard */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-600" />
                  KI-Insights & Empfehlungen
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                      <div>
                        <p className="font-semibold text-green-800">Optimaler Anrufzeitpunkt</p>
                        <p className="text-green-700 text-sm">Dr. Richter: Heute 16:30 - 87% Erreichbarkeitswahrscheinlichkeit</p>
                        <button className="mt-2 text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                          Termin einplanen
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <div className="flex items-start">
                      <Sparkles className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <p className="font-semibold text-blue-800">Cross-Selling Opportunity</p>
                        <p className="text-blue-700 text-sm">Familie Weber: 73% Wahrscheinlichkeit für Kindervorsorge (+€2.400)</p>
                        <button className="mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                          Angebot vorbereiten
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
                    <div className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-purple-600 mt-0.5 mr-3" />
                      <div>
                        <p className="font-semibold text-purple-800">Perfekter Gesprächseinstieg</p>
                        <p className="text-purple-700 text-sm">"Ihre BMW-Mitarbeitervorteile bei der Baufinanzierung..." (98% Erfolgsrate)</p>
                        <button className="mt-2 text-xs bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700">
                          Script öffnen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Today's Money */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6">
                  <h4 className="font-semibold mb-2">💰 Heute verdient</h4>
                  <div className="text-3xl font-bold">€4.680</div>
                  <p className="text-green-100 text-sm">3 Abschlüsse durch KI-Optimierung</p>
                </div>

                {/* Next Actions */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="font-semibold mb-4">⚡ Nächste Aktionen</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Call Dr. Richter (16:30)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Weber Angebot finalisieren</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">LinkedIn Kampagne starten</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Premium Lead Management</h2>
              <div className="flex items-center space-x-3">
                <div className="text-sm text-gray-600">
                  KI-Score: Durchschnitt <span className="font-semibold text-green-600">84/100</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Lead Liste */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Heiße Leads (KI-priorisiert)</h3>
                      <div className="flex items-center space-x-2">
                        <Filter className="w-4 h-4 text-gray-400" />
                        <Search className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {demoLeads.map((lead) => (
                      <div
                        key={lead.id}
                        onClick={() => setSelectedLead(lead)}
                        className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                          selectedLead.id === lead.id ? 'bg-blue-50 border-r-4 border-blue-500' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <div className="font-semibold text-gray-900">{lead.name}</div>
                              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStageColor(lead.stage)}`}>
                                {lead.stage}
                              </div>
                              <div className={`text-sm font-semibold ${getScoreColor(lead.score)}`}>
                                KI: {lead.score}/100
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{lead.interest}</p>
                            <p className="text-xs text-blue-600 mt-1 italic">{lead.aiInsight}</p>
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                              <span>{lead.source}</span>
                              <span>•</span>
                              <span>€{lead.value.toLocaleString()}</span>
                              <span>•</span>
                              <span>{lead.probability}% Wahrscheinlichkeit</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold text-green-600">€{lead.value.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">{lead.lastContact}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lead Details */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Lead Details</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStageColor(selectedLead.stage)}`}>
                      {selectedLead.stage}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg">{selectedLead.name}</h4>
                      <p className="text-gray-600">{selectedLead.interest}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className={`text-lg font-bold ${getScoreColor(selectedLead.score)}`}>
                          {selectedLead.score}/100
                        </div>
                        <div className="text-sm text-gray-500">KI-Score</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-blue-800 mb-1">🧠 KI-Insight</div>
                      <p className="text-sm text-blue-700">{selectedLead.aiInsight}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{selectedLead.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{selectedLead.phone}</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Notizen</h5>
                      <p className="text-sm text-gray-600">{selectedLead.notes}</p>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-green-800 mb-1">⚡ Nächste Aktion</div>
                      <p className="text-sm text-green-700">{selectedLead.nextAction}</p>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Dokumente</h5>
                      <div className="space-y-1">
                        {selectedLead.documents.map((doc, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <FileText className="w-4 h-4 text-gray-400" />
                            <span>{doc}</span>
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t">
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Jetzt anrufen</span>
                      </button>
                      <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Termin vereinbaren</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-assistant' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">KI-Assistent Demo</h2>
              <div className="flex items-center space-x-3">
                <div className="text-sm text-gray-600">
                  KI-Aktivität: <span className="font-semibold text-green-600">Live</span>
                </div>
              </div>
            </div>

            {/* KI Chat Interface */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">KI-Verkaufsassistent</h3>
                        <p className="text-xs text-gray-500">Analysiert gerade Dr. Richter's Profil...</p>
                      </div>
                      <div className="ml-auto">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                    {/* KI Messages */}
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <Brain className="w-3 h-3 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <p className="text-sm"><strong>KI-Analyse:</strong> Dr. Richter zeigt starke Kaufsignale. BMW-Manager, €180k Gehalt, sofortiger Finanzierungsbedarf für €680k Immobilie.</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">vor 2 Minuten</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm"><strong>Gesprächsempfehlung:</strong> Einstieg mit BMW-Mitarbeitervorteilen. Erwähnen Sie die 0,1% Zinsvorteil für Konzernmitarbeiter.</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">vor 1 Minute</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-3 h-3 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm"><strong>Script generiert:</strong> "Guten Tag Dr. Richter, als BMW-Führungskraft haben Sie Zugang zu exklusiven Finanzierungskonditionen..."</p>
                          <button className="text-xs text-green-700 hover:underline mt-1">Vollständiges Script anzeigen</button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">vor 30 Sekunden</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <Award className="w-3 h-3 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm"><strong>Cross-Selling Opportunity:</strong> 89% Wahrscheinlichkeit für Zusatzabschluss: Berufsunfähigkeitsversicherung (+€3.200 Provision)</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">jetzt</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="text" 
                        placeholder="Fragen Sie die KI etwas..." 
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                      />
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                        Senden
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* KI Features Panel */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                    Live KI-Features
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Gesprächsanalyse</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Lead Scoring</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Script Generator</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Objection Handling</span>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-lg p-6">
                  <h4 className="font-semibold mb-2">🎯 Heute analysiert</h4>
                  <div className="text-3xl font-bold">47</div>
                  <p className="text-purple-100 text-sm">Leads mit KI-Empfehlungen</p>
                  <div className="mt-4 text-sm">
                    <div className="flex justify-between">
                      <span>Erfolgsrate:</span>
                      <span className="font-semibold">94%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="font-semibold mb-4">⚡ KI-Aktionen</h4>
                  <div className="space-y-2">
                    <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-sm transition-colors">
                      📞 Anruf-Script für Dr. Richter
                    </button>
                    <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-sm transition-colors">
                      📧 Follow-up E-Mail generieren
                    </button>
                    <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-sm transition-colors">
                      🎯 Cross-Sell Angebot erstellen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'automation' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Automation Center</h2>
              <div className="flex items-center space-x-3">
                <div className="text-sm text-gray-600">
                  Aktive Workflows: <span className="font-semibold text-green-600">12</span>
                </div>
              </div>
            </div>

            {/* Automation Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Heute automatisiert</p>
                    <p className="text-2xl font-bold text-purple-600">127</p>
                    <p className="text-xs text-gray-500">E-Mails + Aktionen</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Zeitersparnis heute</p>
                    <p className="text-2xl font-bold text-blue-600">8.5h</p>
                    <p className="text-xs text-gray-500">Manuelle Arbeit gespart</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                    <p className="text-2xl font-bold text-green-600">31.2%</p>
                    <p className="text-xs text-gray-500">Durch Automatisierung</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">ROI Automation</p>
                    <p className="text-2xl font-bold text-orange-600">1.847%</p>
                    <p className="text-xs text-gray-500">Return on Investment</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Active Workflows */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold">Live Workflows</h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-800">BMW Follow-up Sequenz</h4>
                          <p className="text-xs text-green-600">Läuft für Dr. Richter</p>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-sm text-green-700">
                      <p>Schritt 3/7: Finanzierungsrechner-Link gesendet</p>
                      <p className="text-xs mt-1">Nächste Aktion: Morgen 9:00 - Nachfass-Call</p>
                    </div>
                  </div>

                  <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-800">Familie Weber PKV-Workflow</h4>
                          <p className="text-xs text-blue-600">Automatische Beratung</p>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-sm text-blue-700">
                      <p>Schritt 2/5: Gesundheitsfragen versendet</p>
                      <p className="text-xs mt-1">Antwort erhalten - KI wertet aus</p>
                    </div>
                  </div>

                  <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <Rocket className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-800">Startup-Gründer Automation</h4>
                          <p className="text-xs text-purple-600">Lisa Schneider</p>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-sm text-purple-700">
                      <p>Schritt 1/4: Flexible Verträge vorgeschlagen</p>
                      <p className="text-xs mt-1">KI hat 3 passende Produkte identifiziert</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold">Automation Erfolge heute</h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Termin automatisch vereinbart</p>
                      <p className="text-xs text-gray-500">Familie Weber - Morgen 14:00</p>
                      <p className="text-xs text-green-600">+€8.600 Pipeline</p>
                    </div>
                    <span className="text-xs text-gray-400">vor 1h</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Follow-up Serie gestartet</p>
                      <p className="text-xs text-gray-500">3 neue Leads in Baufinanzierung</p>
                      <p className="text-xs text-blue-600">7-Tage Sequenz aktiv</p>
                    </div>
                    <span className="text-xs text-gray-400">vor 2h</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">KI hat Lead qualifiziert</p>
                      <p className="text-xs text-gray-500">Score von 67 auf 89 erhöht</p>
                      <p className="text-xs text-purple-600">Automatisch zu "heiß" verschoben</p>
                    </div>
                    <span className="text-xs text-gray-400">vor 3h</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Cross-Sell erfolgreich</p>
                      <p className="text-xs text-gray-500">BU-Versicherung zu PKV verkauft</p>
                      <p className="text-xs text-orange-600">+€3.200 zusätzliche Provision</p>
                    </div>
                    <span className="text-xs text-gray-400">vor 4h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Templates */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Verfügbare Automation-Templates</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    Neuen Workflow erstellen
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-full h-16 bg-gradient-to-br from-green-100 to-green-200 rounded mb-3 flex items-center justify-center">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900">Lead Nurturing</h4>
                    <p className="text-xs text-gray-500">7-Tage Follow-up Sequenz</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-green-600">94% Erfolgsrate</span>
                      <button className="text-xs text-blue-600 hover:underline">Aktivieren</button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-full h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded mb-3 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900">Termin-Automation</h4>
                    <p className="text-xs text-gray-500">Automatische Terminbuchung</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-blue-600">87% Buchungsrate</span>
                      <button className="text-xs text-blue-600 hover:underline">Aktivieren</button>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-full h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded mb-3 flex items-center justify-center">
                      <Brain className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900">KI Cross-Selling</h4>
                    <p className="text-xs text-gray-500">Intelligente Zusatzverkäufe</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-purple-600">73% Cross-Sell Rate</span>
                      <button className="text-xs text-blue-600 hover:underline">Aktivieren</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                 )}

         {activeTab === 'ai-training' && (
           <div className="space-y-6">
             <div className="flex items-center justify-between">
               <h2 className="text-2xl font-bold text-gray-900">KI-Verkaufstraining</h2>
               <div className="flex items-center space-x-3">
                 <div className="text-sm text-gray-600">
                   Training-Level: <span className="font-semibold text-gold-600">Expert</span>
                 </div>
               </div>
             </div>

             {/* Training Stats */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="bg-white p-6 rounded-lg shadow-sm">
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-gray-600">Trainings absolviert</p>
                     <p className="text-2xl font-bold text-green-600">47</p>
                     <p className="text-xs text-gray-500">Diese Woche</p>
                   </div>
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                     <Award className="w-6 h-6 text-green-600" />
                   </div>
                 </div>
               </div>

               <div className="bg-white p-6 rounded-lg shadow-sm">
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-gray-600">Erfolgsrate</p>
                     <p className="text-2xl font-bold text-blue-600">94.2%</p>
                     <p className="text-xs text-gray-500">Simulation vs. Realität</p>
                   </div>
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                     <TrendingUp className="w-6 h-6 text-blue-600" />
                   </div>
                 </div>
               </div>

               <div className="bg-white p-6 rounded-lg shadow-sm">
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-gray-600">KI-Bewertung</p>
                     <p className="text-2xl font-bold text-purple-600">9.1/10</p>
                     <p className="text-xs text-gray-500">Verkaufstechnik</p>
                   </div>
                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                     <Brain className="w-6 h-6 text-purple-600" />
                   </div>
                 </div>
               </div>

               <div className="bg-white p-6 rounded-lg shadow-sm">
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-gray-600">Verbesserung</p>
                     <p className="text-2xl font-bold text-orange-600">+287%</p>
                     <p className="text-xs text-gray-500">Abschlussrate</p>
                   </div>
                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                     <Rocket className="w-6 h-6 text-orange-600" />
                   </div>
                 </div>
               </div>
             </div>

             {/* Live Training Session */}
             <div className="grid lg:grid-cols-3 gap-6">
               <div className="lg:col-span-2">
                 <div className="bg-white rounded-lg shadow-sm">
                   <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
                     <div className="flex items-center space-x-3">
                       <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                         <Award className="w-4 h-4 text-white" />
                       </div>
                       <div>
                         <h3 className="font-semibold">Live Training: Einwandbehandlung</h3>
                         <p className="text-xs text-gray-500">KI simuliert schwierigen Kunden...</p>
                       </div>
                       <div className="ml-auto">
                         <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                       </div>
                     </div>
                   </div>
                   
                   <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                     {/* Training Conversation */}
                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                         <Users className="w-3 h-3 text-red-600" />
                       </div>
                       <div className="flex-1">
                         <div className="bg-red-50 p-3 rounded-lg">
                           <p className="text-sm font-semibold text-red-800">KI-Kunde (schwierig):</p>
                           <p className="text-sm text-red-700">"Versicherungen sind doch alle Abzocke! Warum sollte ich Ihnen vertrauen? Ich habe schon schlechte Erfahrungen gemacht..."</p>
                         </div>
                         <p className="text-xs text-gray-500 mt-1">Schwierigkeit: 🔥🔥🔥 Hoch</p>
                       </div>
                     </div>

                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                         <Users className="w-3 h-3 text-blue-600" />
                       </div>
                       <div className="flex-1">
                         <div className="bg-blue-50 p-3 rounded-lg">
                           <p className="text-sm font-semibold text-blue-800">Ihre Antwort:</p>
                           <p className="text-sm text-blue-700">"Das verstehe ich absolut. Ich höre das oft und Ihr Misstrauen ist berechtigt. Lassen Sie mich Ihnen zeigen, wie wir anders arbeiten..."</p>
                         </div>
                         <p className="text-xs text-gray-500 mt-1">KI-Bewertung: ⭐⭐⭐⭐⭐ Excellent</p>
                       </div>
                     </div>

                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                         <Brain className="w-3 h-3 text-green-600" />
                       </div>
                       <div className="flex-1">
                         <div className="bg-green-50 p-3 rounded-lg">
                           <p className="text-sm font-semibold text-green-800">KI-Feedback:</p>
                           <p className="text-sm text-green-700">🎯 Perfekt! Sie haben Empathie gezeigt und Vertrauen aufgebaut. Der Kunde ist jetzt 73% offener für Ihr Angebot.</p>
                         </div>
                         <p className="text-xs text-gray-500 mt-1">Verbesserungsvorschlag verfügbar</p>
                       </div>
                     </div>

                     <div className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                         <Sparkles className="w-3 h-3 text-yellow-600" />
                       </div>
                       <div className="flex-1">
                         <div className="bg-yellow-50 p-3 rounded-lg">
                           <p className="text-sm font-semibold text-yellow-800">Nächste Herausforderung:</p>
                           <p className="text-sm text-yellow-700">Der Kunde fragt nach Preisen. Wie reagieren Sie, ohne zu früh über Kosten zu sprechen?</p>
                         </div>
                         <p className="text-xs text-gray-500 mt-1">Antwort eingeben...</p>
                       </div>
                     </div>
                   </div>

                   <div className="p-4 border-t border-gray-200">
                     <div className="flex items-center space-x-2">
                       <input 
                         type="text" 
                         placeholder="Ihre Antwort auf den Einwand..." 
                         className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                       />
                       <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                         Antworten
                       </button>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Training Progress */}
               <div className="space-y-6">
                 <div className="bg-white rounded-lg shadow-sm p-6">
                   <h4 className="font-semibold mb-4 flex items-center">
                     <Trophy className="w-4 h-4 mr-2 text-gold-500" />
                     Training Fortschritt
                   </h4>
                   <div className="space-y-3">
                     <div className="flex items-center justify-between">
                       <span className="text-sm">Einwandbehandlung</span>
                       <div className="flex items-center space-x-2">
                         <div className="w-16 bg-gray-200 rounded-full h-2">
                           <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                         </div>
                         <span className="text-xs text-green-600">94%</span>
                       </div>
                     </div>
                     <div className="flex items-center justify-between">
                       <span className="text-sm">Bedarfsanalyse</span>
                       <div className="flex items-center space-x-2">
                         <div className="w-16 bg-gray-200 rounded-full h-2">
                           <div className="bg-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
                         </div>
                         <span className="text-xs text-blue-600">87%</span>
                       </div>
                     </div>
                     <div className="flex items-center justify-between">
                       <span className="text-sm">Abschlusstechniken</span>
                       <div className="flex items-center space-x-2">
                         <div className="w-16 bg-gray-200 rounded-full h-2">
                           <div className="bg-purple-500 h-2 rounded-full" style={{width: '91%'}}></div>
                         </div>
                         <span className="text-xs text-purple-600">91%</span>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="bg-gradient-to-br from-gold-400 to-orange-500 text-white rounded-lg p-6">
                   <h4 className="font-semibold mb-2">🏆 Heutiger Score</h4>
                   <div className="text-3xl font-bold">2.847</div>
                   <p className="text-orange-100 text-sm">Punkte gesammelt</p>
                   <div className="mt-4 text-sm">
                     <div className="flex justify-between">
                       <span>Bis zum nächsten Level:</span>
                       <span className="font-semibold">153 Punkte</span>
                     </div>
                   </div>
                 </div>

                 <div className="bg-white rounded-lg shadow-sm p-6">
                   <h4 className="font-semibold mb-4">🎯 Verfügbare Trainings</h4>
                   <div className="space-y-2">
                     <button className="w-full text-left bg-green-50 hover:bg-green-100 p-3 rounded-lg text-sm transition-colors border border-green-200">
                       🔥 Schwierige Kunden meistern
                     </button>
                     <button className="w-full text-left bg-blue-50 hover:bg-blue-100 p-3 rounded-lg text-sm transition-colors border border-blue-200">
                       💰 Premium-Verkauf Techniken
                     </button>
                     <button className="w-full text-left bg-purple-50 hover:bg-purple-100 p-3 rounded-lg text-sm transition-colors border border-purple-200">
                       🎭 Persönlichkeitstypen erkennen
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         )}

         {activeTab === 'script-portal' && (
           <div className="space-y-6">
             <div className="flex items-center justify-between">
               <h2 className="text-2xl font-bold text-gray-900">Script Portal</h2>
               <div className="flex items-center space-x-3">
                 <div className="text-sm text-gray-600">
                   Scripts verfügbar: <span className="font-semibold text-green-600">127</span>
                 </div>
                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                   Neues Script erstellen
                 </button>
               </div>
             </div>

             {/* Script Categories */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-gray-600">Gesprächseröffnung</p>
                     <p className="text-2xl font-bold text-green-600">23</p>
                     <p className="text-xs text-gray-500">Scripts verfügbar</p>
                   </div>
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                     <MessageSquare className="w-6 h-6 text-green-600" />
                   </div>
                 </div>
               </div>

               <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-gray-600">Einwandbehandlung</p>
                     <p className="text-2xl font-bold text-blue-600">34</p>
                     <p className="text-xs text-gray-500">Scripts verfügbar</p>
                   </div>
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                     <Award className="w-6 h-6 text-blue-600" />
                   </div>
                 </div>
               </div>

               <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-gray-600">Abschlusstechniken</p>
                     <p className="text-2xl font-bold text-purple-600">19</p>
                     <p className="text-xs text-gray-500">Scripts verfügbar</p>
                   </div>
                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                     <Target className="w-6 h-6 text-purple-600" />
                   </div>
                 </div>
               </div>

               <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-sm font-medium text-gray-600">KI-Generierte</p>
                     <p className="text-2xl font-bold text-orange-600">51</p>
                     <p className="text-xs text-gray-500">Personalisiert</p>
                   </div>
                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                     <Brain className="w-6 h-6 text-orange-600" />
                   </div>
                 </div>
               </div>
             </div>

             {/* Featured Scripts */}
             <div className="grid lg:grid-cols-3 gap-6">
               <div className="lg:col-span-2">
                 <div className="bg-white rounded-lg shadow-sm">
                   <div className="p-4 border-b border-gray-200">
                     <h3 className="font-semibold">Top-Scripts (Höchste Erfolgsrate)</h3>
                   </div>
                   <div className="p-4 space-y-4">
                     <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                       <div className="flex items-center justify-between mb-2">
                         <div className="flex items-center space-x-3">
                           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                             <Crown className="w-4 h-4 text-white" />
                           </div>
                           <div>
                             <h4 className="font-semibold text-green-800">BMW-Mitarbeiter Baufinanzierung</h4>
                             <p className="text-xs text-green-600">Speziell für Konzernmitarbeiter</p>
                           </div>
                         </div>
                         <div className="text-right">
                           <div className="text-sm font-bold text-green-700">98.2%</div>
                           <div className="text-xs text-green-600">Erfolgsrate</div>
                         </div>
                       </div>
                       <div className="text-sm text-green-700 bg-white p-3 rounded border-l-4 border-green-500">
                         <p className="font-medium">Eröffnung:</p>
                         <p>"Guten Tag Herr Dr. Richter, als BMW-Führungskraft haben Sie Zugang zu exklusiven Finanzierungskonditionen, die 0,1% unter dem Marktzins liegen..."</p>
                         <button className="mt-2 text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                           Vollständiges Script anzeigen
                         </button>
                       </div>
                     </div>

                     <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                       <div className="flex items-center justify-between mb-2">
                         <div className="flex items-center space-x-3">
                           <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                             <Users className="w-4 h-4 text-white" />
                           </div>
                           <div>
                             <h4 className="font-semibold text-blue-800">Familien PKV-Wechsel</h4>
                             <p className="text-xs text-blue-600">Für Selbstständige mit Kindern</p>
                           </div>
                         </div>
                         <div className="text-right">
                           <div className="text-sm font-bold text-blue-700">94.7%</div>
                           <div className="text-xs text-blue-600">Erfolgsrate</div>
                         </div>
                       </div>
                       <div className="text-sm text-blue-700 bg-white p-3 rounded border-l-4 border-blue-500">
                         <p className="font-medium">Nutzen-Argumentation:</p>
                         <p>"Als Selbstständige profitieren Sie von Steuervorteilen UND Ihre Kinder bekommen die beste medizinische Versorgung..."</p>
                         <button className="mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                           Script verwenden
                         </button>
                       </div>
                     </div>

                     <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
                       <div className="flex items-center justify-between mb-2">
                         <div className="flex items-center space-x-3">
                           <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                             <Sparkles className="w-4 h-4 text-white" />
                           </div>
                           <div>
                             <h4 className="font-semibold text-purple-800">Einwand: "Zu teuer"</h4>
                             <p className="text-xs text-purple-600">Universelle Preiseinwand-Behandlung</p>
                           </div>
                         </div>
                         <div className="text-right">
                           <div className="text-sm font-bold text-purple-700">91.3%</div>
                           <div className="text-xs text-purple-600">Erfolgsrate</div>
                         </div>
                       </div>
                       <div className="text-sm text-purple-700 bg-white p-3 rounded border-l-4 border-purple-500">
                         <p className="font-medium">Antwort-Framework:</p>
                         <p>"Das verstehe ich. Lassen Sie uns schauen, was 'teuer' wirklich bedeutet. Was kostet Sie ein Schaden ohne Versicherung?"</p>
                         <button className="mt-2 text-xs bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700">
                           Vollständige Antwort
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Script Tools */}
               <div className="space-y-6">
                 <div className="bg-white rounded-lg shadow-sm p-6">
                   <h4 className="font-semibold mb-4 flex items-center">
                     <Brain className="w-4 h-4 mr-2 text-blue-500" />
                     KI Script Generator
                   </h4>
                   <div className="space-y-3">
                     <div>
                       <label className="text-sm font-medium text-gray-700">Kunde:</label>
                       <select className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm">
                         <option>Dr. Andreas Richter (BMW)</option>
                         <option>Familie Weber (Selbstständig)</option>
                         <option>Lisa Schneider (Startup)</option>
                       </select>
                     </div>
                     <div>
                       <label className="text-sm font-medium text-gray-700">Situation:</label>
                       <select className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm">
                         <option>Erstgespräch</option>
                         <option>Einwandbehandlung</option>
                         <option>Abschlussgespräch</option>
                       </select>
                     </div>
                     <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                       Script generieren
                     </button>
                   </div>
                 </div>

                 <div className="bg-gradient-to-br from-gold-400 to-orange-500 text-white rounded-lg p-6">
                   <h4 className="font-semibold mb-2">📊 Script Performance</h4>
                   <div className="text-3xl font-bold">+€127k</div>
                   <p className="text-orange-100 text-sm">Durch optimierte Scripts</p>
                   <div className="mt-4 text-sm">
                     <div className="flex justify-between">
                       <span>Durchschnittliche Erfolgsrate:</span>
                       <span className="font-semibold">93.4%</span>
                     </div>
                   </div>
                 </div>

                 <div className="bg-white rounded-lg shadow-sm p-6">
                   <h4 className="font-semibold mb-4">🎯 Script Kategorien</h4>
                   <div className="space-y-2">
                     <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-sm transition-colors">
                       📞 Kaltakquise Scripts
                     </button>
                     <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-sm transition-colors">
                       🤝 Vertrauensaufbau
                     </button>
                     <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-sm transition-colors">
                       💼 B2B Versicherungen
                     </button>
                     <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded-lg text-sm transition-colors">
                       👨‍👩‍👧‍👦 Familienversicherung
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         )}

         {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Live Analytics Dashboard */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">📊 Live Analytics Dashboard</h2>
              <p className="text-gray-600">Echte Performance-Daten deines Insurance-Funnels</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Live Besucher</p>
                    <p className="text-3xl font-bold text-green-600">47</p>
                    <p className="text-sm text-green-500 flex items-center mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Jetzt aktiv
                    </p>
                  </div>
                  <Users className="h-12 w-12 text-green-500" />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Leads (7 Tage)</p>
                    <p className="text-3xl font-bold text-blue-600">234</p>
                    <p className="text-sm text-green-500 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +23.4% vs. Vorwoche
                    </p>
                  </div>
                  <Target className="h-12 w-12 text-blue-500" />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Umsatz (7 Tage)</p>
                    <p className="text-3xl font-bold text-purple-600">€87.400</p>
                    <p className="text-sm text-green-500 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +18.7% vs. Vorwoche
                    </p>
                  </div>
                  <Euro className="h-12 w-12 text-purple-500" />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                    <p className="text-3xl font-bold text-orange-600">12.3%</p>
                    <p className="text-sm text-green-500 flex items-center mt-1">
                      <Award className="h-4 w-4 mr-1" />
                      Über Branchenschnitt
                    </p>
                  </div>
                  <Award className="h-12 w-12 text-orange-500" />
                </div>
              </div>
            </div>

            {/* Top Kampagnen Performance */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">🏆 Top-Kampagnen Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Kampagne</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Leads</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Conversion</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Umsatz</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium">Lebensversicherung Premium</td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">156</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-green-600 font-semibold">34.2%</span>
                      </td>
                      <td className="py-4 px-4 text-center font-semibold">€89.400</td>
                      <td className="py-4 px-4 text-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '34%'}}></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium">KFZ-Versicherung Digital</td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">143</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-green-600 font-semibold">28.7%</span>
                      </td>
                      <td className="py-4 px-4 text-center font-semibold">€67.200</td>
                      <td className="py-4 px-4 text-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '29%'}}></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium">Berufsunfähigkeit Comfort</td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">87</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-green-600 font-semibold">52.1%</span>
                      </td>
                      <td className="py-4 px-4 text-center font-semibold">€78.300</td>
                      <td className="py-4 px-4 text-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '52%'}}></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Live Demo Hinweis */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">🚀 Vollständiges Analytics Dashboard</h3>
                  <p className="text-blue-100">Interaktive Charts, Echtzeit-Updates und erweiterte KI-Insights verfügbar in der Hauptnavigation</p>
                </div>
                <div className="ml-6">
                  <a 
                    href="/analytics" 
                    target="_blank"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2"
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span>Analytics öffnen</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => setShowROI(true)}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 animate-pulse"
        >
          <Crown className="w-5 h-5" />
          <span className="font-semibold">Jetzt upgraden!</span>
        </button>
      </div>
    </div>
  );
}