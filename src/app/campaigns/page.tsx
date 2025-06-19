'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Plus, 
  Play, 
  Pause, 
  Edit,
  Copy,
  Trash2,
  TrendingUp,
  TrendingDown,
  Eye,
  Target,
  DollarSign,
  Users,
  BarChart3,
  Filter,
  Search,
  Calendar,
  ExternalLink,
  Loader2,
  AlertCircle,
  RefreshCw
} from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  platform: string;
  status: string;
  category: string;
  startDate: string;
  endDate: string;
  budget: {
    daily: number;
    total: number;
    spent: number;
  };
  performance: {
    impressions: number;
    clicks: number;
    leads: number;
    ctr: number;
    cpl: number;
    conversionRate: number;
  };
  targeting: {
    ageRange: string;
    location: string;
    interests: string[];
  };
  createdAt: string;
  qualifiedLeads: number;
}

interface CampaignsData {
  campaigns: Campaign[];
  stats: {
    total: number;
    active: number;
    paused: number;
    completed: number;
    totalSpent: number;
    totalLeads: number;
    avgCPL: number;
    avgCTR: number;
  };
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
  user: {
    name: string;
    email: string;
    tenant: string;
    role: string;
  };
}

export default function CampaignsPage() {
  const { user, isAuthenticated } = useAuth();
  const [campaignsData, setCampaignsData] = useState<CampaignsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch campaigns data from API
  const fetchCampaignsData = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (filterStatus !== 'all') params.append('status', filterStatus);
      if (filterPlatform !== 'all') params.append('platform', filterPlatform);
      
      const response = await fetch(`/api/campaigns?${params.toString()}`);
      
      if (!response.ok) {
        if (response.status === 401) {
          setError('Nicht authentifiziert. Bitte melden Sie sich an.');
          return;
        }
        throw new Error('Fehler beim Laden der Kampagnen-Daten');
      }

      const data = await response.json();
      setCampaignsData(data);
    } catch (err) {
      console.error('Campaigns fetch error:', err);
      setError(err instanceof Error ? err.message : 'Unbekannter Fehler');
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch data on component mount and filter changes
  useEffect(() => {
    if (isAuthenticated) {
      fetchCampaignsData();
    }
  }, [isAuthenticated, filterStatus, filterPlatform]);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Anmeldung erforderlich</h1>
          <p className="text-gray-600 mb-6">Sie müssen sich anmelden, um Kampagnen zu verwalten.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="btn-primary"
          >
            Zur Anmeldung
          </button>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary-600" />
          <p className="text-gray-600">Kampagnen werden geladen...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <AlertCircle className="h-8 w-8 mx-auto mb-4 text-red-500" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Fehler</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={fetchCampaignsData}
            className="btn-primary flex items-center mx-auto"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Erneut versuchen
          </button>
        </div>
      </div>
    );
  }

  // No data state
  if (!campaignsData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <p className="text-gray-600">Keine Daten verfügbar</p>
        </div>
      </div>
    );
  }

  // Use real data from API
  const stats = campaignsData.stats;
  const campaigns = campaignsData.campaigns || [];

  // Demo Kampagnen-Daten (Fallback)
  const fallbackCampaigns = [
    {
      id: '1',
      name: 'Altersvorsorge Q1 2025',
      platform: 'Facebook',
      status: 'active',
      category: 'altersvorsorge',
      startDate: '2025-01-15',
      endDate: '2025-03-31',
      budget: {
        daily: 25,
        total: 800,
        spent: 245
      },
      performance: {
        impressions: 15420,
        clicks: 586,
        leads: 23,
        ctr: 3.8,
        cpl: 10.65,
        conversionRate: 3.9
      },
      targeting: {
        ageRange: '35-55',
        location: 'München, Bayern',
        interests: ['Finanzen', 'Vorsorge', 'Familie']
      },
      createdAt: '2025-01-15'
    },
    {
      id: '2',
      name: 'Baufinanzierung Winter',
      platform: 'Google',
      status: 'active',
      category: 'baufinanzierung',
      startDate: '2025-01-10',
      endDate: '2025-02-28',
      budget: {
        daily: 40,
        total: 1200,
        spent: 890
      },
      performance: {
        impressions: 21200,
        clicks: 892,
        leads: 45,
        ctr: 4.2,
        cpl: 19.78,
        conversionRate: 5.0
      },
      targeting: {
        ageRange: '28-45',
        location: 'München, Augsburg, Nürnberg',
        interests: ['Immobilien', 'Finanzierung', 'Eigenheim']
      },
      createdAt: '2025-01-10'
    },
    {
      id: '3',
      name: 'KV für Selbstständige',
      platform: 'Instagram',
      status: 'paused',
      category: 'krankenversicherung',
      startDate: '2025-01-05',
      endDate: '2025-02-15',
      budget: {
        daily: 20,
        total: 600,
        spent: 234
      },
      performance: {
        impressions: 8050,
        clicks: 234,
        leads: 12,
        ctr: 2.9,
        cpl: 19.50,
        conversionRate: 5.1
      },
      targeting: {
        ageRange: '25-40',
        location: 'Deutschland',
        interests: ['Selbstständigkeit', 'Freiberufler', 'Gesundheit']
      },
      createdAt: '2025-01-05'
    },
    {
      id: '4',
      name: 'Lebensversicherung Familien',
      platform: 'YouTube',
      status: 'completed',
      category: 'lebensversicherung',
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      budget: {
        daily: 30,
        total: 900,
        spent: 900
      },
      performance: {
        impressions: 18500,
        clicks: 740,
        leads: 37,
        ctr: 4.0,
        cpl: 24.32,
        conversionRate: 5.0
      },
      targeting: {
        ageRange: '30-50',
        location: 'Bayern',
        interests: ['Familie', 'Absicherung', 'Lebensversicherung']
      },
      createdAt: '2024-12-01'
    }
  ];

  const platforms = [
    { id: 'facebook', name: 'Facebook', color: 'bg-blue-500', icon: '📘' },
    { id: 'google', name: 'Google', color: 'bg-red-500', icon: '🔍' },
    { id: 'instagram', name: 'Instagram', color: 'bg-purple-500', icon: '📷' },
    { id: 'youtube', name: 'YouTube', color: 'bg-red-600', icon: '📺' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-600';
      case 'paused': return 'bg-yellow-100 text-yellow-600';
      case 'completed': return 'bg-blue-100 text-blue-600';
      case 'draft': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Aktiv';
      case 'paused': return 'Pausiert';
      case 'completed': return 'Abgeschlossen';
      case 'draft': return 'Entwurf';
      default: return status;
    }
  };

  // Apply client-side search filter
  const filteredCampaigns = campaigns.filter(campaign => {
    if (searchTerm && !campaign.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Use campaigns for empty state fallback
  const displayCampaigns = filteredCampaigns.length > 0 ? filteredCampaigns : 
    (campaigns.length === 0 ? fallbackCampaigns.slice(0, 3) : filteredCampaigns);

  const totalStats = stats;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Kampagnen-Management</h1>
            <p className="text-gray-600">
              Willkommen zurück, {campaignsData.user?.name}! 
              Verwalten Sie Ihre Leadgenerierungs-Kampagnen für {campaignsData.user?.tenant}.
            </p>
          </div>
          
          <button className="btn-primary">
            <Plus className="h-5 w-5 mr-2" />
            Neue Kampagne
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Gesamt Budget</p>
                <p className="text-2xl font-bold text-gray-900">€{totalStats.totalSpent.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Gesamt Leads</p>
                <p className="text-2xl font-bold text-gray-900">{totalStats.totalLeads}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ø Cost per Lead</p>
                <p className="text-2xl font-bold text-gray-900">€{totalStats.avgCPL.toFixed(2)}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ø Click-Through-Rate</p>
                <p className="text-2xl font-bold text-gray-900">{totalStats.avgCTR.toFixed(1)}%</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Filter:</span>
              </div>
              
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="input-field py-2 px-3 text-sm"
              >
                <option value="all">Alle Status</option>
                <option value="active">Aktiv</option>
                <option value="paused">Pausiert</option>
                <option value="completed">Abgeschlossen</option>
                <option value="draft">Entwurf</option>
              </select>

              <select 
                value={filterPlatform}
                onChange={(e) => setFilterPlatform(e.target.value)}
                className="input-field py-2 px-3 text-sm"
              >
                <option value="all">Alle Plattformen</option>
                <option value="facebook">Facebook</option>
                <option value="google">Google</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">YouTube</option>
              </select>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Kampagnen suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10 pr-4 py-2 text-sm w-full md:w-64"
              />
            </div>
          </div>
        </div>

        {/* Campaigns Table */}
        <div className="glass-card overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Kampagnen ({displayCampaigns.length})
              {campaigns.length === 0 && (
                <span className="text-sm font-normal text-gray-500 ml-2">(Demo-Daten)</span>
              )}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kampagne
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plattform
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Leads
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aktionen
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                        <div className="text-sm text-gray-500 flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>{campaign.startDate} - {campaign.endDate}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">
                          {platforms.find(p => p.name === campaign.platform)?.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-900">{campaign.platform}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(campaign.status)}`}>
                        {getStatusText(campaign.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        €{campaign.budget.spent} / €{campaign.budget.total}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-primary-600 h-2 rounded-full" 
                          style={{ width: `${(campaign.budget.spent / campaign.budget.total) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">CTR: {campaign.performance.ctr}%</div>
                      <div className="text-sm text-gray-500">CPL: €{campaign.performance.cpl}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">{campaign.performance.leads}</span>
                        {campaign.performance.conversionRate > 4 ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                      <div className="text-sm text-gray-500">{campaign.performance.conversionRate}% Conv.</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        {campaign.status === 'active' ? (
                          <button className="p-1 text-yellow-600 hover:text-yellow-900" title="Pausieren">
                            <Pause className="h-4 w-4" />
                          </button>
                        ) : campaign.status === 'paused' ? (
                          <button className="p-1 text-green-600 hover:text-green-900" title="Starten">
                            <Play className="h-4 w-4" />
                          </button>
                        ) : null}
                        
                        <button className="p-1 text-blue-600 hover:text-blue-900" title="Bearbeiten">
                          <Edit className="h-4 w-4" />
                        </button>
                        
                        <button className="p-1 text-purple-600 hover:text-purple-900" title="Duplizieren">
                          <Copy className="h-4 w-4" />
                        </button>
                        
                        <button className="p-1 text-gray-600 hover:text-gray-900" title="Anzeigen">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                        
                        <button className="p-1 text-red-600 hover:text-red-900" title="Löschen">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Platform Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div key={platform.id} className="glass-card p-6 text-center">
              <div className="text-2xl mb-3">{platform.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Neue Kampagne auf {platform.name} erstellen
              </p>
              <button className="btn-secondary w-full">
                <Plus className="h-4 w-4 mr-2" />
                Kampagne erstellen
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 