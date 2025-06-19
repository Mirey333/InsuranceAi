'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Plus, 
  TrendingUp, 
  Users, 
  Target, 
  MessageSquare,
  FileDown,
  Eye,
  Edit,
  MoreVertical,
  Calendar,
  ChevronRight,
  DollarSign,
  BarChart3,
  Phone,
  Mail,
  Clock,
  Star
} from 'lucide-react';

export default function Dashboard() {
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const [timeRange, setTimeRange] = useState('30d');
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch dashboard data
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/dashboard?timeRange=${timeRange}`, {
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Fehler beim Laden der Dashboard-Daten');
        }

        const data = await response.json();
        setDashboardData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unbekannter Fehler');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [isAuthenticated, timeRange]);

  // Show loading or auth states
  if (authLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Dashboard wird geladen...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Fehler beim Laden</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
          >
            Neu laden
          </button>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Keine Daten verfügbar</p>
      </div>
    );
  }

  // Use real data from API
  const stats = dashboardData.stats;
  const recentLeads = dashboardData.recentLeads || [];
  const activeCampaigns = dashboardData.activeCampaigns || [];

  // Fallback demo data for empty states
  const fallbackRecentLeads = [
    { 
      id: '1', 
      name: 'Max Mustermann', 
      email: 'max@example.com', 
      stage: 'heiß', 
      score: 95, 
      interest: 'Altersvorsorge', 
      source: 'Facebook', 
      createdAt: '2025-01-20',
      phone: '+49 151 12345678',
      budget: '300-500€',
      lastContact: '2025-01-20'
    },
    { 
      id: '2', 
      name: 'Anna Schmidt', 
      email: 'anna@example.com', 
      stage: 'warm', 
      score: 78, 
      interest: 'Baufinanzierung', 
      source: 'Google', 
      createdAt: '2025-01-19',
      phone: '+49 171 87654321', 
      budget: '500€+',
      lastContact: '2025-01-19'
    },
    { 
      id: '3', 
      name: 'Thomas Weber', 
      email: 'thomas@example.com', 
      stage: 'neu', 
      score: 67, 
      interest: 'Krankenversicherung', 
      source: 'Instagram', 
      createdAt: '2025-01-18',
      phone: '+49 160 98765432',
      budget: '100-300€',
      lastContact: '2025-01-18'
    },
    { 
      id: '4', 
      name: 'Lisa Müller', 
      email: 'lisa@example.com', 
      stage: 'qualifiziert', 
      score: 89, 
      interest: 'Lebensversicherung', 
      source: 'YouTube', 
      createdAt: '2025-01-17',
      phone: '+49 152 11223344',
      budget: '200-400€',
      lastContact: '2025-01-17'
    }
  ];

  const fallbackActiveCampaigns = [
    { 
      id: '1', 
      name: 'Altersvorsorge Q1 2025', 
      platform: 'Facebook', 
      status: 'active', 
      budget: 800, 
      spent: 245, 
      leads: 23, 
      cpl: 10.65,
      ctr: 3.8,
      impressions: 15420
    },
    { 
      id: '2', 
      name: 'Baufinanzierung Winter', 
      platform: 'Google', 
      status: 'active', 
      budget: 1200, 
      spent: 890, 
      leads: 45, 
      cpl: 19.78,
      ctr: 4.2,
      impressions: 21200
    },
    { 
      id: '3', 
      name: 'KV für Selbstständige', 
      platform: 'Instagram', 
      status: 'paused', 
      budget: 600, 
      spent: 234, 
      leads: 12, 
      cpl: 19.50,
      ctr: 2.9,
      impressions: 8050
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'neu': return 'bg-blue-100 text-blue-600';
      case 'warm': return 'bg-orange-100 text-orange-600';
      case 'heiß': return 'bg-red-100 text-red-600';
      case 'qualifiziert': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">
                Willkommen zurück, {dashboardData.user?.name || user?.email}! 
                Hier ist Ihre Leadgenerierungs-Übersicht für {dashboardData.user?.tenant}.
              </p>
            </div>
            
            <div className="flex space-x-3">
              <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                className="input-field py-2 px-3"
              >
                <option value="7d">Letzte 7 Tage</option>
                <option value="30d">Letzte 30 Tage</option>
                <option value="90d">Letzte 90 Tage</option>
              </select>
              
              <button className="btn-primary">
                <Plus className="h-5 w-5 mr-2" />
                Neue Kampagne
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Leads Card */}
          <div className="glass-card p-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Gesamt Leads</p>
                <p className="text-3xl font-bold text-gray-900">{stats.leads.total}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +{stats.leads.new} neue heute
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Kampagnen Card */}
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Aktive Kampagnen</p>
                <p className="text-3xl font-bold text-gray-900">{stats.campaigns.active}</p>
                <p className="text-sm text-gray-500 mt-1">
                  von {stats.campaigns.total} gesamt
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-900">{stats.performance.conversionRate}%</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +1.2% vs. letzte Woche
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          {/* Cost per Lead */}
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cost per Lead</p>
                <p className="text-3xl font-bold text-gray-900">€{stats.performance.cpl}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1 rotate-180" />
                  -€2.15 vs. letzte Woche
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lead Pipeline */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6 mb-6 animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Lead Pipeline</h2>
                <button className="btn-secondary text-sm">
                  Alle Leads ansehen
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>

              {/* Pipeline Stages */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-lg mb-2 transition-all hover:bg-blue-200">
                    <p className="text-2xl font-bold text-blue-600">{dashboardData.pipeline?.new || 0}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Neu</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 p-4 rounded-lg mb-2 transition-all hover:bg-yellow-200">
                    <p className="text-2xl font-bold text-yellow-600">{dashboardData.pipeline?.qualified || 0}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Qualifiziert</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 p-4 rounded-lg mb-2 transition-all hover:bg-orange-200">
                    <p className="text-2xl font-bold text-orange-600">{dashboardData.pipeline?.warm || 0}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Warm</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 p-4 rounded-lg mb-2 transition-all hover:bg-red-200">
                    <p className="text-2xl font-bold text-red-600">{dashboardData.pipeline?.hot || 0}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-600">Heiß</p>
                </div>
              </div>

              {/* Recent Leads List */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Neueste Leads</h3>
                {(recentLeads.length > 0 ? recentLeads : fallbackRecentLeads).map((lead: any) => (
                  <div key={lead.id} className="p-4 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gray-100 p-2 rounded-lg">
                          <Users className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{lead.name}</p>
                          <p className="text-sm text-gray-500">{lead.email}</p>
                          <p className="text-xs text-gray-400">{lead.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{lead.interest}</p>
                          <p className="text-xs text-gray-500">{lead.source} • {lead.budget}</p>
                        </div>
                        
                        <div className="text-center">
                          <p className={`text-sm font-bold ${getScoreColor(lead.score)}`}>
                            Score: {lead.score}
                          </p>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStageColor(lead.stage)}`}>
                            {lead.stage}
                          </span>
                        </div>
                        
                        <div className="flex space-x-1">
                          <button className="p-2 hover:bg-blue-100 rounded text-blue-600" title="Anrufen">
                            <Phone className="h-4 w-4" />
                          </button>
                          <button className="p-2 hover:bg-green-100 rounded text-green-600" title="E-Mail">
                            <Mail className="h-4 w-4" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded text-gray-400">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Aktive Kampagnen */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Aktive Kampagnen</h3>
                <button className="text-primary-600 hover:text-primary-700">
                  <Eye className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                {(activeCampaigns.length > 0 ? activeCampaigns : fallbackActiveCampaigns).map((campaign: any) => (
                  <div key={campaign.id} className="p-4 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{campaign.name}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        campaign.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {campaign.status === 'active' ? 'Aktiv' : 'Pausiert'}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-500 mb-3">{campaign.platform}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium">€{campaign.spent}/€{campaign.budget}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all" 
                          style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Leads:</span>
                          <span className="font-medium">{campaign.leads}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">CPL:</span>
                          <span className="font-medium">€{campaign.cpl}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">CTR:</span>
                          <span className="font-medium">{campaign.ctr}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Reach:</span>
                          <span className="font-medium">{campaign.impressions.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-colors">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-primary-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Lead Follow-up</p>
                      <p className="text-sm text-gray-500">12 Leads warten auf Antwort</p>
                    </div>
                  </div>
                </button>
                
                <button className="w-full text-left p-3 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-colors">
                  <div className="flex items-center">
                    <FileDown className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">PMA Export</p>
                      <p className="text-sm text-gray-500">34 qualifizierte Leads bereit</p>
                    </div>
                  </div>
                </button>
                
                <button className="w-full text-left p-3 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-colors">
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-purple-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Neue Kampagne</p>
                      <p className="text-sm text-gray-500">Starten Sie Ihre nächste Kampagne</p>
                    </div>
                  </div>
                </button>
                
                <button className="w-full text-left p-3 bg-white/50 rounded-lg border border-white/20 hover:bg-white/70 transition-colors">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Termine planen</p>
                      <p className="text-sm text-gray-500">8 Leads für Beratungstermine</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Performance Highlights */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Highlights</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">Beste Kampagne</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">Google Ads</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Wachstum</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">+23% diese Woche</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Ø Reaktionszeit</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">2.3 Stunden</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 