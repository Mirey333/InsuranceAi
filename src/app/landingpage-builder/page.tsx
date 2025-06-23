'use client';

import { useState, useEffect } from 'react';
import { 
  Eye, 
  Smartphone, 
  Monitor,
  Save,
  Settings,
  Palette,
  Type,
  Image,
  FormInput,
  CheckSquare,
  ArrowLeft,
  Copy,
  Globe,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Loader2,
  AlertCircle,
  RefreshCw,
  ExternalLink,
  BarChart3,
  Users,
  MousePointer
} from 'lucide-react';

interface LandingPage {
  id: string;
  name: string;
  slug: string;
  template: string;
  status: string;
  headline: string;
  subheadline: string;
  content: any;
  formFields: any[];
  metaTitle: string;
  metaDescription: string;
  views: number;
  submissions: number;
  conversionRate: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  campaign?: {
    id: string;
    name: string;
    platform: string;
  };
  makler: {
    name: string;
    company: string;
    branding: {
      primaryColor: string;
      secondaryColor: string;
      logo?: string;
    };
  };
}

interface LandingPagesData {
  landingPages: LandingPage[];
  stats: {
    total: number;
    published: number;
    draft: number;
    archived: number;
    totalViews: number;
    totalSubmissions: number;
    avgConversionRate: number;
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

export default function LandingPageBuilder() {
  const [view, setView] = useState<'list' | 'builder'>('list');
  const [selectedTemplate, setSelectedTemplate] = useState('altersvorsorge');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterTemplate, setFilterTemplate] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Builder state
  const [builderMode, setBuilderMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeSection, setActiveSection] = useState('content');
  const [isCreating, setIsCreating] = useState(false);

  // Demo Landing Pages Data
  const demoLandingPagesData: LandingPagesData = {
    landingPages: [
      {
        id: 'lp-001',
        name: 'Altersvorsorge 2024',
        slug: 'altersvorsorge-2024',
        template: 'altersvorsorge',
        status: 'published',
        headline: 'Sichern Sie Ihre Zukunft mit der optimalen Altersvorsorge',
        subheadline: 'Kostenlose Beratung und individuelle Lösungen für Ihre finanzielle Sicherheit im Alter',
        content: {},
        formFields: [],
        metaTitle: 'Altersvorsorge 2024 - Kostenlose Beratung',
        metaDescription: 'Optimale Altersvorsorge mit individueller Beratung',
        views: 2847,
        submissions: 312,
        conversionRate: 10.9,
        createdAt: '15.11.2024',
        updatedAt: '22.12.2024',
        publishedAt: '16.11.2024',
        campaign: {
          id: 'camp-001',
          name: 'Facebook Altersvorsorge Q4',
          platform: 'Facebook'
        },
        makler: {
          name: 'Thomas Müller',
          company: 'Müller Finanzberatung',
          branding: {
            primaryColor: '#2563eb',
            secondaryColor: '#1e40af'
          }
        }
      },
      {
        id: 'lp-002',
        name: 'Traumhaus Finanzierung',
        slug: 'traumhaus-finanzierung',
        template: 'baufinanzierung',
        status: 'published',
        headline: 'Verwirklichen Sie Ihren Traum vom Eigenheim',
        subheadline: 'Günstige Konditionen und persönliche Beratung für Ihre Baufinanzierung',
        content: {},
        formFields: [],
        metaTitle: 'Baufinanzierung - Günstige Zinsen',
        metaDescription: 'Traumhaus finanzieren mit besten Konditionen',
        views: 1926,
        submissions: 298,
        conversionRate: 15.5,
        createdAt: '08.11.2024',
        updatedAt: '20.12.2024',
        publishedAt: '09.11.2024',
        campaign: {
          id: 'camp-002',
          name: 'Google Ads Baufinanzierung',
          platform: 'Google'
        },
        makler: {
          name: 'Thomas Müller',
          company: 'Müller Finanzberatung',
          branding: {
            primaryColor: '#2563eb',
            secondaryColor: '#1e40af'
          }
        }
      },
      {
        id: 'lp-003',
        name: 'PKV Wechsel Guide',
        slug: 'pkv-wechsel-guide',
        template: 'krankenversicherung',
        status: 'published',
        headline: 'Die beste Krankenversicherung für Ihre Bedürfnisse',
        subheadline: 'Umfassender Schutz und optimale Leistungen zu fairen Preisen',
        content: {},
        formFields: [],
        metaTitle: 'Private Krankenversicherung - Wechsel',
        metaDescription: 'PKV Wechsel leicht gemacht - Experten Beratung',
        views: 1453,
        submissions: 127,
        conversionRate: 8.7,
        createdAt: '02.12.2024',
        updatedAt: '18.12.2024',
        publishedAt: '03.12.2024',
        campaign: {
          id: 'camp-005',
          name: 'LinkedIn PKV Kampagne',
          platform: 'LinkedIn'
        },
        makler: {
          name: 'Thomas Müller',
          company: 'Müller Finanzberatung',
          branding: {
            primaryColor: '#2563eb',
            secondaryColor: '#1e40af'
          }
        }
      },
      {
        id: 'lp-004',
        name: 'Berufsunfähigkeit Premium',
        slug: 'berufsunfaehigkeit-premium',
        template: 'altersvorsorge',
        status: 'draft',
        headline: 'Schützen Sie Ihr Einkommen bei Berufsunfähigkeit',
        subheadline: 'Umfassender Schutz für Ihre finanzielle Sicherheit',
        content: {},
        formFields: [],
        metaTitle: 'Berufsunfähigkeitsversicherung Premium',
        metaDescription: 'BU Schutz mit besten Leistungen',
        views: 0,
        submissions: 0,
        conversionRate: 0,
        createdAt: '20.12.2024',
        updatedAt: '22.12.2024',
        makler: {
          name: 'Thomas Müller',
          company: 'Müller Finanzberatung',
          branding: {
            primaryColor: '#2563eb',
            secondaryColor: '#1e40af'
          }
        }
      },
      {
        id: 'lp-005',
        name: 'Kfz Versicherung 2025',
        slug: 'kfz-versicherung-2025',
        template: 'baufinanzierung',
        status: 'published',
        headline: 'Sparen Sie bis zu 850€ bei der Kfz-Versicherung',
        subheadline: 'Kostenloser Vergleich und sofortiger Wechsel möglich',
        content: {},
        formFields: [],
        metaTitle: 'Kfz Versicherung 2025 - Bis zu 850€ sparen',
        metaDescription: 'Günstige Autoversicherung finden und wechseln',
        views: 3124,
        submissions: 478,
        conversionRate: 15.3,
        createdAt: '01.12.2024',
        updatedAt: '21.12.2024',
        publishedAt: '02.12.2024',
        campaign: {
          id: 'camp-007',
          name: 'Instagram Kfz Stories',
          platform: 'Instagram'
        },
        makler: {
          name: 'Thomas Müller',
          company: 'Müller Finanzberatung',
          branding: {
            primaryColor: '#2563eb',
            secondaryColor: '#1e40af'
          }
        }
      },
      {
        id: 'lp-006',
        name: 'Risikolebensversicherung Familie',
        slug: 'risikolebensversicherung-familie',
        template: 'krankenversicherung',
        status: 'archived',
        headline: 'Schutz für Ihre Familie im Ernstfall',
        subheadline: 'Günstige Risikolebensversicherung für finanzielle Absicherung',
        content: {},
        formFields: [],
        metaTitle: 'Risikolebensversicherung für Familien',
        metaDescription: 'Finanzielle Absicherung der Familie',
        views: 892,
        submissions: 45,
        conversionRate: 5.0,
        createdAt: '15.10.2024',
        updatedAt: '30.11.2024',
        publishedAt: '16.10.2024',
        makler: {
          name: 'Thomas Müller',
          company: 'Müller Finanzberatung',
          branding: {
            primaryColor: '#2563eb',
            secondaryColor: '#1e40af'
          }
        }
      }
    ],
    stats: {
      total: 6,
      published: 4,
      draft: 1,
      archived: 1,
      totalViews: 10242,
      totalSubmissions: 1260,
      avgConversionRate: 12.3
    },
    pagination: {
      total: 6,
      limit: 20,
      offset: 0,
      hasMore: false
    },
    user: {
      name: 'Thomas Müller',
      email: 'thomas.mueller@finanzberatung-demo.de',
      tenant: 'Müller Finanzberatung',
      role: 'Admin'
    }
  };

  // Templates configuration
  const templates = [
    {
      id: 'altersvorsorge',
      name: 'Altersvorsorge',
      description: 'Optimiert für Rentenberatung und private Altersvorsorge',
      icon: '🏦',
      color: 'bg-blue-500',
      conversionRate: 12.4,
      defaultContent: {
        headline: 'Sichern Sie Ihre Zukunft mit der optimalen Altersvorsorge',
        subheadline: 'Kostenlose Beratung und individuelle Lösungen für Ihre finanzielle Sicherheit im Alter',
        benefits: [
          'Kostenlose und unverbindliche Erstberatung',
          'Individuelle Analyse Ihrer aktuellen Situation',
          'Maßgeschneiderte Vorsorgelösungen',
          'Langfristige Betreuung und Optimierung'
        ]
      }
    },
    {
      id: 'baufinanzierung',
      name: 'Baufinanzierung', 
      description: 'Speziell für Immobilienfinanzierung und Kredite',
      icon: '🏠',
      color: 'bg-green-500',
      conversionRate: 15.2,
      defaultContent: {
        headline: 'Verwirklichen Sie Ihren Traum vom Eigenheim',
        subheadline: 'Günstige Konditionen und persönliche Beratung für Ihre Baufinanzierung',
        benefits: [
          'Beste Zinssätze durch Vergleich von über 400 Banken',
          'Kostenlose Machbarkeitsprüfung',
          'Persönliche Betreuung vor Ort',
          'Schnelle Zusage und unkomplizierte Abwicklung'
        ]
      }
    },
    {
      id: 'krankenversicherung',
      name: 'Krankenversicherung',
      description: 'Für private und gesetzliche Krankenversicherung', 
      icon: '🏥',
      color: 'bg-red-500',
      conversionRate: 9.8,
      defaultContent: {
        headline: 'Die beste Krankenversicherung für Ihre Bedürfnisse',
        subheadline: 'Umfassender Schutz und optimale Leistungen zu fairen Preisen',
        benefits: [
          'Unabhängiger Vergleich aller Tarife',
          'Persönliche Beratung durch Experten',
          'Kostenlose Analyse Ihrer aktuellen Situation',
          'Wechselservice ohne Risiko'
        ]
      }
    }
  ];

  // Use demo data directly
  const landingPagesData = demoLandingPagesData;

  // Demo function for creating landing pages
  const createLandingPage = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;

    setIsCreating(true);
    
    // Simulate creation delay
    setTimeout(() => {
      setIsCreating(false);
      setView('list');
      // In real implementation, this would add to the list
      alert(`Demo: ${template.name} Landing Page würde erstellt werden!`);
    }, 1000);
  };

  // Template selection view
  if (view === 'builder') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setView('list')}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Landing Page erstellen</h1>
                <p className="text-gray-600">Wählen Sie ein Template für Ihre neue Landing Page</p>
              </div>
            </div>
          </div>

          {/* Template Selection */}
          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div 
                key={template.id}
                className="glass-card p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className={`w-16 h-16 ${template.color} rounded-lg flex items-center justify-center text-2xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {template.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">
                      {template.conversionRate}% Conversion Rate
                    </span>
                  </div>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    createLandingPage(template.id);
                  }}
                  disabled={isCreating}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {isCreating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Wird erstellt...
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" />
                      Template verwenden
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // No data state  
  if (!landingPagesData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <p className="text-gray-600">Keine Daten verfügbar</p>
        </div>
      </div>
    );
  }

  // Use real data from API
  const stats = landingPagesData.stats;
  const landingPages = landingPagesData.landingPages || [];

  // Apply client-side search filter
  const filteredPages = landingPages.filter(page => {
    if (searchTerm && !page.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-600';
      case 'draft': return 'bg-yellow-100 text-yellow-600';
      case 'archived': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return 'Veröffentlicht';
      case 'draft': return 'Entwurf';
      case 'archived': return 'Archiviert';
      default: return status;
    }
  };

  const getTemplateIcon = (template: string) => {
    const templateConfig = templates.find(t => t.id === template);
    return templateConfig?.icon || '📄';
  };

  // Main list view
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Landing Page Builder</h1>
            <p className="text-gray-600">
              Willkommen zurück, {landingPagesData.user?.name}! 
              Erstellen Sie DSGVO-konforme Landing Pages für {landingPagesData.user?.tenant}.
            </p>
          </div>
          
          <button 
            onClick={() => setView('builder')}
            className="btn-primary"
          >
            <Plus className="h-5 w-5 mr-2" />
            Neue Landing Page
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Gesamt Pages</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Gesamt Views</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalViews}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Submissions</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalSubmissions}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ø Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{stats.avgConversionRate.toFixed(1)}%</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <MousePointer className="h-6 w-6 text-purple-600" />
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
                <option value="published">Veröffentlicht</option>
                <option value="draft">Entwurf</option>
                <option value="archived">Archiviert</option>
              </select>

              <select 
                value={filterTemplate}
                onChange={(e) => setFilterTemplate(e.target.value)}
                className="input-field py-2 px-3 text-sm"
              >
                <option value="all">Alle Templates</option>
                <option value="altersvorsorge">Altersvorsorge</option>
                <option value="baufinanzierung">Baufinanzierung</option>
                <option value="krankenversicherung">Krankenversicherung</option>
              </select>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Landing Pages suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10 pr-4 py-2 text-sm w-full md:w-64"
              />
            </div>
          </div>
        </div>

        {/* Landing Pages Table */}
        <div className="glass-card overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Landing Pages ({filteredPages.length})
              {landingPages.length === 0 && (
                <span className="text-sm font-normal text-gray-500 ml-2">(Keine Pages erstellt)</span>
              )}
            </h3>
          </div>

          {filteredPages.length === 0 ? (
            <div className="p-8 text-center">
              <Globe className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Keine Landing Pages gefunden</h3>
              <p className="text-gray-600 mb-6">
                Erstellen Sie Ihre erste Landing Page um loszulegen.
              </p>
              <button 
                onClick={() => setView('builder')}
                className="btn-primary"
              >
                <Plus className="h-4 w-4 mr-2" />
                Erste Landing Page erstellen
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Landing Page
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Template
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Performance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Erstellt
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aktionen
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPages.map((page) => (
                    <tr key={page.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{page.name}</div>
                          <div className="text-sm text-gray-500">{page.slug}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{getTemplateIcon(page.template)}</span>
                          <span className="text-sm font-medium text-gray-900 capitalize">{page.template}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(page.status)}`}>
                          {getStatusText(page.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {page.views} Views • {page.submissions} Submissions
                        </div>
                        <div className="text-sm text-gray-500">
                          {page.conversionRate.toFixed(1)}% Conversion Rate
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {page.createdAt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-900" title="Bearbeiten">
                            <Edit className="h-4 w-4" />
                          </button>
                          
                          <button className="p-1 text-green-600 hover:text-green-900" title="Anzeigen">
                            <ExternalLink className="h-4 w-4" />
                          </button>
                          
                          <button className="p-1 text-purple-600 hover:text-purple-900" title="Duplizieren">
                            <Copy className="h-4 w-4" />
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
          )}
        </div>
      </div>
    </div>
  );
} 