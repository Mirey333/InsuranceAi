'use client';

import Link from 'next/link';
import { 
  Users, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Calendar,
  FileText,
  Settings,
  Activity,
  Zap,
  Shield,
  Puzzle
} from 'lucide-react';

// Mock Data für Demo
const dashboardStats = {
  totalLeads: 1247,
  leadsThisMonth: 89,
  conversionRate: 23.5,
  pipelineValue: 125400,
  activeModules: 8,
  systemStatus: 'operational'
};

const recentActivity = [
  { type: 'lead', message: 'Neuer Lead: Maria Schmidt (Lebensversicherung)', time: '2 Min', icon: Users, color: 'text-green-600' },
  { type: 'conversion', message: 'Lead konvertiert: Abschluss KFZ-Versicherung', time: '15 Min', icon: Target, color: 'text-blue-600' },
  { type: 'campaign', message: 'Kampagne "Rente 2024" gestartet', time: '1 Std', icon: TrendingUp, color: 'text-purple-600' },
  { type: 'system', message: 'Automatisierung: 5 Follow-up E-Mails versendet', time: '2 Std', icon: Zap, color: 'text-orange-600' }
];

const quickActions = [
  { title: 'Neuen Lead erfassen', href: '/leads', icon: Users, color: 'bg-blue-600' },
  { title: 'Kampagne erstellen', href: '/campaigns', icon: Target, color: 'bg-green-600' },
  { title: 'Export durchführen', href: '/export', icon: FileText, color: 'bg-purple-600' },
  { title: 'Einstellungen', href: '/modules', icon: Settings, color: 'bg-gray-600' }
];

const moduleStatus = [
  { name: 'LEADGEN', status: 'active', leads: 89, icon: Users },
  { name: 'PIPELINE', status: 'active', deals: 34, icon: Target },
  { name: 'CAMPAIGNS', status: 'active', running: 3, icon: TrendingUp },
  { name: 'AUTOMATION', status: 'inactive', description: 'Nicht aktiviert', icon: Zap }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Willkommen zurück, Demo Makler GmbH</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">System läuft</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-600">Letztes Update: Heute, 14:30</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Leads gesamt</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalLeads.toLocaleString()}</p>
                <p className="text-sm text-green-600">+{dashboardStats.leadsThisMonth} diesen Monat</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Konversionsrate</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.conversionRate}%</p>
                <p className="text-sm text-green-600">+2.1% vs. letzten Monat</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pipeline-Wert</p>
                <p className="text-3xl font-bold text-gray-900">€{dashboardStats.pipelineValue.toLocaleString()}</p>
                <p className="text-sm text-gray-500">In aktiven Deals</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Aktive Module</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.activeModules}/12</p>
                <p className="text-sm text-blue-600">3 verfügbare Upgrades</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <Puzzle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Schnellaktionen</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    href={action.href}
                    className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className={`${action.color} p-3 rounded-lg mb-3 group-hover:scale-105 transition-transform`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">{action.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Letzte Aktivitäten</h3>
                <Link href="/dashboard" className="text-sm text-blue-600 hover:text-blue-700">
                  Alle anzeigen
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`${activity.color} bg-gray-50 p-2 rounded-lg`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Overview */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Übersicht</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">89</div>
                  <div className="text-sm text-gray-600">Leads diese Woche</div>
                  <div className="text-xs text-green-600">+12% vs. letzte Woche</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">34</div>
                  <div className="text-sm text-gray-600">Aktive Deals</div>
                  <div className="text-xs text-blue-600">Durchschnitt: €3,688</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600">Laufende Kampagnen</div>
                  <div className="text-xs text-purple-600">€2,450 Budget aktiv</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Module Status */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Status</h3>
              <div className="space-y-4">
                {moduleStatus.map((module, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${module.status === 'active' ? 'bg-green-50' : 'bg-gray-50'}`}>
                        <module.icon className={`w-4 h-4 ${module.status === 'active' ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{module.name}</div>
                        <div className="text-xs text-gray-500">
                          {module.status === 'active' 
                            ? `${module.leads || module.deals || module.running} ${module.leads ? 'Leads' : module.deals ? 'Deals' : 'aktiv'}`
                            : module.description
                          }
                        </div>
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${module.status === 'active' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  </div>
                ))}
              </div>
              <Link href="/modules" className="block mt-4 text-sm text-blue-600 hover:text-blue-700">
                Module verwalten →
              </Link>
            </div>

            {/* System Health */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Service</span>
                  <span className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <span className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Optimal
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Email Service</span>
                  <span className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Läuft
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Backup</span>
                  <span className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    In 2h
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Anstehende Aufgaben</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Follow-up: Herr Müller</div>
                    <div className="text-xs text-gray-500">Heute, 16:00</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Kampagne überprüfen</div>
                    <div className="text-xs text-gray-500">Morgen, 09:00</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Export durchführen</div>
                    <div className="text-xs text-gray-500">Fr, 14:00</div>
                  </div>
                </div>
              </div>
              <Link href="/dashboard" className="block mt-4 text-sm text-blue-600 hover:text-blue-700">
                Alle Aufgaben →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 