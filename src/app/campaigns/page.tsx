'use client';

import { useState } from 'react';
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

export default function CampaignsPage() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Demo-Daten - sofort verfügbar
  const stats = {
    total: 8,
    active: 5,
    paused: 2,
    completed: 1,
    totalSpent: 4265,
    totalLeads: 89,
    avgCPL: 47.90,
    avgCTR: 3.4
  };

  const campaigns: Campaign[] = [
    {
      id: '1',
      name: 'Altersvorsorge Q1 2025',
      platform: 'Facebook',
      status: 'active',
      category: 'Altersvorsorge',
      startDate: '2025-01-01',
      endDate: '2025-03-31',
      budget: {
        daily: 25,
        total: 2250,
        spent: 445
      },
      performance: {
        impressions: 34520,
        clicks: 1208,
        leads: 23,
        ctr: 3.5,
        cpl: 19.35,
        conversionRate: 1.9
      },
      targeting: {
        ageRange: '30-55',
        location: 'Deutschland',
        interests: ['Altersvorsorge', 'Finanzen', 'Investment']
      },
      createdAt: '2025-01-01',
      qualifiedLeads: 18
    },
    {
      id: '2',
      name: 'Baufinanzierung Winter',
      platform: 'Google',
      status: 'active',
      category: 'Baufinanzierung',
      startDate: '2024-12-01',
      endDate: '2025-02-28',
      budget: {
        daily: 45,
        total: 4050,
        spent: 1890
      },
      performance: {
        impressions: 28750,
        clicks: 945,
        leads: 34,
        ctr: 3.3,
        cpl: 55.59,
        conversionRate: 3.6
      },
      targeting: {
        ageRange: '25-45',
        location: 'Deutschland',
        interests: ['Immobilien', 'Hausbau', 'Finanzierung']
      },
      createdAt: '2024-12-01',
      qualifiedLeads: 28
    },
    {
      id: '3',
      name: 'PKV für Selbstständige',
      platform: 'Instagram',
      status: 'paused',
      category: 'Krankenversicherung',
      startDate: '2024-11-15',
      endDate: '2025-01-31',
      budget: {
        daily: 20,
        total: 1400,
        spent: 680
      },
      performance: {
        impressions: 19420,
        clicks: 623,
        leads: 15,
        ctr: 3.2,
        cpl: 45.33,
        conversionRate: 2.4
      },
      targeting: {
        ageRange: '25-50',
        location: 'Deutschland',
        interests: ['Selbstständig', 'Krankenversicherung', 'Gesundheit']
      },
      createdAt: '2024-11-15',
      qualifiedLeads: 12
    },
    {
      id: '4',
      name: 'Lebensversicherung Familien',
      platform: 'Facebook',
      status: 'active',
      category: 'Lebensversicherung',
      startDate: '2025-01-10',
      endDate: '2025-04-10',
      budget: {
        daily: 30,
        total: 2700,
        spent: 390
      },
      performance: {
        impressions: 22100,
        clicks: 787,
        leads: 17,
        ctr: 3.6,
        cpl: 22.94,
        conversionRate: 2.2
      },
      targeting: {
        ageRange: '30-50',
        location: 'Deutschland',
        interests: ['Familie', 'Lebensversicherung', 'Vorsorge']
      },
      createdAt: '2025-01-10',
      qualifiedLeads: 14
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
    (campaigns.length === 0 ? campaigns.slice(0, 3) : filteredCampaigns);

  const totalStats = stats;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Kampagnen-Management</h1>
            <p className="text-gray-600">
                             Willkommen zurück, Max Mustermann! 
               Verwalten Sie Ihre Leadgenerierungs-Kampagnen für Demo Makler GmbH.
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