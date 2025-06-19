'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Phone, 
  Mail, 
  MessageSquare,
  Calendar,
  User,
  MapPin,
  Clock,
  Star,
  Filter,
  Search,
  Plus,
  FileDown,
  Edit,
  Trash2,
  Eye,
  ArrowRight,
  TrendingUp,
  RefreshCw,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  status: 'NEU' | 'KONTAKTIERT' | 'QUALIFIZIERT' | 'WARM' | 'HEISS' | 'TERMIN' | 'ABGESCHLOSSEN' | 'VERLOREN';
  score: number;
  interest?: string;
  source?: string;
  budget?: number;
  location?: string;
  age?: number;
  createdAt: string;
  campaign?: {
    id: string;
    name: string;
  };
  communications?: Array<{
    id: string;
    type: string;
    sentAt: string;
    status: string;
  }>;
  activities?: Array<{
    id: string;
    type: string;
    description: string;
    createdAt: string;
  }>;
}

interface LeadsData {
  leads: Lead[];
  pagination: {
    current: number;
    total: number;
    count: number;
    limit: number;
  };
}

export default function LeadsPage() {
  const { isAuthenticated, user } = useAuth();
  const [leadsData, setLeadsData] = useState<LeadsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const stages = [
    { id: 'NEU', name: 'Neu', color: 'bg-blue-100 text-blue-600' },
    { id: 'KONTAKTIERT', name: 'Kontaktiert', color: 'bg-indigo-100 text-indigo-600' },
    { id: 'QUALIFIZIERT', name: 'Qualifiziert', color: 'bg-yellow-100 text-yellow-600' },
    { id: 'WARM', name: 'Warm', color: 'bg-orange-100 text-orange-600' },
    { id: 'HEISS', name: 'Heiß', color: 'bg-red-100 text-red-600' },
    { id: 'TERMIN', name: 'Termin', color: 'bg-purple-100 text-purple-600' },
    { id: 'ABGESCHLOSSEN', name: 'Abgeschlossen', color: 'bg-green-100 text-green-600' },
    { id: 'VERLOREN', name: 'Verloren', color: 'bg-gray-100 text-gray-600' }
  ];

  // Fetch leads data
  const fetchLeads = async () => {
    if (!isAuthenticated) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams();
      if (selectedStatus && selectedStatus !== 'all') {
        params.append('status', selectedStatus);
      }
      if (searchTerm) {
        params.append('search', searchTerm);
      }
      params.append('page', currentPage.toString());
      params.append('limit', '20');

      const response = await fetch(`/api/leads?${params.toString()}`, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Nicht authentifiziert');
        }
        throw new Error('Fehler beim Laden der Leads');
      }

      const data = await response.json();
      setLeadsData(data);
    } catch (err) {
      console.error('Error fetching leads:', err);
      setError(err instanceof Error ? err.message : 'Unbekannter Fehler');
    } finally {
      setLoading(false);
    }
  };

  // Effect for initial load and filter changes
  useEffect(() => {
    fetchLeads();
  }, [isAuthenticated, selectedStatus, searchTerm, currentPage]);

  // Search handler with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(1); // Reset to first page on search
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStageColor = (status: string) => {
    const stageInfo = stages.find(s => s.id === status);
    return stageInfo?.color || 'bg-gray-100 text-gray-600';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatBudget = (budget?: number) => {
    if (!budget) return 'Nicht angegeben';
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(budget);
  };

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Anmeldung erforderlich</h2>
          <p className="text-gray-600">Sie müssen sich anmelden, um Ihre Leads zu sehen.</p>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading && !leadsData) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-64"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
            <div className="h-96 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Fehler beim Laden</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={fetchLeads}
              className="btn-primary"
            >
              <RefreshCw className="h-5 w-5 mr-2" />
              Erneut versuchen
            </button>
          </div>
        </div>
      </div>
    );
  }

  const leads = leadsData?.leads || [];
  const pagination = leadsData?.pagination;

  // Calculate stats from current leads
  const totalLeads = pagination?.count || 0;
  const avgScore = leads.length > 0 ? leads.reduce((sum, lead) => sum + lead.score, 0) / leads.length : 0;
  const todayFollowUps = leads.filter(lead => 
    lead.activities && lead.activities.some(activity => 
      activity.type === 'FOLLOW_UP' && 
      new Date(activity.createdAt).toDateString() === new Date().toDateString()
    )
  ).length;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Lead-Management</h1>
            <p className="text-gray-600">
              Verwalten Sie Ihre Leads durch die gesamte Sales-Pipeline
              {user?.makler && ` • ${user.makler.firstName} ${user.makler.lastName}`}
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button 
              onClick={fetchLeads}
              disabled={loading}
              className="btn-secondary"
            >
              <RefreshCw className={`h-5 w-5 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Aktualisieren
            </button>
            <button className="btn-secondary">
              <FileDown className="h-5 w-5 mr-2" />
              PMA Export
            </button>
            <button className="btn-primary">
              <Plus className="h-5 w-5 mr-2" />
              Manueller Lead
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Gesamt Leads</p>
                <p className="text-3xl font-bold text-gray-900">{totalLeads}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <User className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ø Lead Score</p>
                <p className={`text-3xl font-bold ${getScoreColor(avgScore)}`}>
                  {Math.round(avgScore)}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Follow-ups heute</p>
                <p className="text-3xl font-bold text-gray-900">{todayFollowUps}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Neue heute</p>
                <p className="text-3xl font-bold text-green-600">
                  {leads.filter(lead => 
                    new Date(lead.createdAt).toDateString() === new Date().toDateString()
                  ).length}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="glass-card p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Stage Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedStatus('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedStatus === 'all'
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Alle ({totalLeads})
              </button>
              {stages.map((stage) => {
                const count = leads.filter(lead => lead.status === stage.id).length;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedStatus(stage.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedStatus === stage.id
                        ? stage.color
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {stage.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative min-w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Nach Name, E-Mail oder Telefon suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10 w-full"
              />
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="glass-card overflow-hidden">
          {leads.length === 0 ? (
            <div className="p-8 text-center">
              <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Keine Leads gefunden</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm || selectedStatus !== 'all' 
                  ? 'Keine Leads entsprechen Ihren Filterkriterien.' 
                  : 'Sie haben noch keine Leads. Erstellen Sie Ihre erste Kampagne!'}
              </p>
              {(!searchTerm && selectedStatus === 'all') && (
                <button className="btn-primary">
                  <Plus className="h-5 w-5 mr-2" />
                  Erste Kampagne erstellen
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Table Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="col-span-3">Lead</div>
                  <div className="col-span-2">Kontakt</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-2">Interesse</div>
                  <div className="col-span-2">Letzte Aktivität</div>
                  <div className="col-span-1">Aktionen</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {leads.map((lead) => (
                  <div key={lead.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      {/* Lead Info */}
                      <div className="col-span-3">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gray-100 p-2 rounded-lg">
                            <User className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {lead.firstName} {lead.lastName}
                            </p>
                            <p className="text-sm text-gray-500">{lead.email}</p>
                            <div className="flex items-center mt-1">
                              <Star className="h-3 w-3 text-yellow-400 mr-1" />
                              <span className={`text-sm font-medium ${getScoreColor(lead.score)}`}>
                                {lead.score}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="col-span-2">
                        <div className="space-y-1">
                          {lead.phone && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="h-3 w-3 mr-1" />
                              {lead.phone}
                            </div>
                          )}
                          {lead.location && (
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="h-3 w-3 mr-1" />
                              {lead.location}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Status */}
                      <div className="col-span-2">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStageColor(lead.status)}`}>
                          {stages.find(s => s.id === lead.status)?.name || lead.status}
                        </span>
                        {lead.source && (
                          <p className="text-xs text-gray-500 mt-1">via {lead.source}</p>
                        )}
                      </div>

                      {/* Interest & Budget */}
                      <div className="col-span-2">
                        <p className="text-sm font-medium text-gray-900">{lead.interest || 'Nicht angegeben'}</p>
                        <p className="text-xs text-gray-500">{formatBudget(lead.budget)}</p>
                        {lead.campaign && (
                          <p className="text-xs text-blue-600">{lead.campaign.name}</p>
                        )}
                      </div>

                      {/* Last Activity */}
                      <div className="col-span-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatDate(lead.createdAt)}
                        </div>
                        {lead.communications && lead.communications.length > 0 && (
                          <p className="text-xs text-gray-500 mt-1">
                            {lead.communications[0].type} • {formatDate(lead.communications[0].sentAt)}
                          </p>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="col-span-1">
                        <div className="flex space-x-1">
                          <button 
                            onClick={() => setSelectedLead(lead)}
                            className="p-1 hover:bg-blue-100 rounded text-blue-600"
                            title="Details anzeigen"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          {lead.phone && (
                            <button className="p-1 hover:bg-green-100 rounded text-green-600" title="Anrufen">
                              <Phone className="h-4 w-4" />
                            </button>
                          )}
                          <button className="p-1 hover:bg-blue-100 rounded text-blue-600" title="E-Mail">
                            <Mail className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {pagination && pagination.total > 1 && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Zeige {((pagination.current - 1) * pagination.limit) + 1} bis{' '}
                      {Math.min(pagination.current * pagination.limit, pagination.count)} von{' '}
                      {pagination.count} Leads
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      
                      <span className="px-4 py-2 text-sm font-medium text-gray-700">
                        {pagination.current} von {pagination.total}
                      </span>
                      
                      <button
                        onClick={() => setCurrentPage(Math.min(pagination.total, currentPage + 1))}
                        disabled={currentPage === pagination.total}
                        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Lead Details Modal */}
        {selectedLead && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {selectedLead.firstName} {selectedLead.lastName}
                  </h3>
                  <button
                    onClick={() => setSelectedLead(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Lead Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">E-Mail</label>
                    <p className="text-gray-900">{selectedLead.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Telefon</label>
                    <p className="text-gray-900">{selectedLead.phone || 'Nicht angegeben'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Status</label>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStageColor(selectedLead.status)}`}>
                      {stages.find(s => s.id === selectedLead.status)?.name || selectedLead.status}
                    </span>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Lead Score</label>
                    <p className={`font-semibold ${getScoreColor(selectedLead.score)}`}>{selectedLead.score}</p>
                  </div>
                </div>

                {/* Communications */}
                {selectedLead.communications && selectedLead.communications.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Letzte Kommunikationen</h4>
                    <div className="space-y-2">
                      {selectedLead.communications.map((comm) => (
                        <div key={comm.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <MessageSquare className="h-4 w-4 text-gray-400" />
                            <span className="text-sm capitalize">{comm.type}</span>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">{formatDate(comm.sentAt)}</p>
                            <p className="text-xs text-gray-500 capitalize">{comm.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Activities */}
                {selectedLead.activities && selectedLead.activities.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Aktivitäten</h4>
                    <div className="space-y-2">
                      {selectedLead.activities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Clock className="h-4 w-4 text-gray-400 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{activity.description}</p>
                            <p className="text-xs text-gray-500">{formatDate(activity.createdAt)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 