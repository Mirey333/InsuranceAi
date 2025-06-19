'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface Lead {
  leadId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
  score: number;
  interest: string;
  budget: string;
  createdAt: string;
  campaign?: {
    name: string;
    platform: string;
  };
  makler: {
    name: string;
    company: string;
  };
  consentGiven: boolean;
  marketingConsent: boolean;
}

interface ExportData {
  success: boolean;
  exportDate: string;
  totalRecords: number;
  format: string;
  data: Lead[];
}

export default function ExportPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const [exportData, setExportData] = useState<ExportData | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState('json');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (user) {
      fetchExportData();
    }
  }, [user]);

  const fetchExportData = async () => {
    setIsLoadingData(true);
    setError(null);
    
    try {
      const params = new URLSearchParams();
      if (dateFrom) params.append('dateFrom', dateFrom);
      if (dateTo) params.append('dateTo', dateTo);
      
      const response = await fetch(`/api/export?${params.toString()}`);
      
      if (response.ok) {
        const data = await response.json();
        setExportData(data);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Fehler beim Laden der Export-Daten');
      }
    } catch (err) {
      setError('Netzwerkfehler beim Laden der Export-Daten');
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleExport = async () => {
    if (!exportData || exportData.data.length === 0) {
      setError('Keine Daten zum Exportieren verfügbar');
      return;
    }

    setIsExporting(true);
    setError(null);

    try {
      if (selectedFormat === 'csv' || selectedFormat === 'pma' || selectedFormat === 'excel') {
        // Direct download for file formats
        const params = new URLSearchParams({
          format: selectedFormat,
          ...(dateFrom && { dateFrom }),
          ...(dateTo && { dateTo })
        });
        
        const response = await fetch(`/api/export?${params.toString()}`);
        
        if (response.ok) {
          if (selectedFormat === 'csv') {
            const csvContent = await response.text();
            downloadFile(csvContent, `pma-export-${new Date().toISOString().split('T')[0]}.csv`, 'text/csv');
          } else {
            const jsonData = await response.json();
            downloadFile(JSON.stringify(jsonData, null, 2), `pma-export-${new Date().toISOString().split('T')[0]}.json`, 'application/json');
          }
          alert(`Export erfolgreich! ${exportData.totalRecords} Leads exportiert.`);
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Fehler beim Export');
        }
      } else {
        // Mark selected leads as exported
        const response = await fetch('/api/export', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            leadIds: selectedLeads.length > 0 ? selectedLeads : exportData.data.map(lead => lead.leadId),
            exportFormat: selectedFormat,
            notes: `Export via Web-Interface - Format: ${selectedFormat}`
          }),
        });

        if (response.ok) {
          const result = await response.json();
          alert(result.message);
          fetchExportData(); // Refresh data
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Fehler beim Export');
        }
      }
    } catch (err) {
      setError('Netzwerkfehler beim Export');
    } finally {
      setIsExporting(false);
    }
  };

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const toggleLeadSelection = (leadId: string) => {
    setSelectedLeads(prev => 
      prev.includes(leadId) 
        ? prev.filter(id => id !== leadId)
        : [...prev, leadId]
    );
  };

  const selectAllLeads = () => {
    if (!exportData) return;
    
    if (selectedLeads.length === exportData.data.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(exportData.data.map(lead => lead.leadId));
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'QUALIFIZIERT': return 'bg-green-500';
      case 'WARM': return 'bg-yellow-500';
      case 'HEISS': return 'bg-red-500';
      case 'TERMIN': return 'bg-blue-500';
      case 'ABGESCHLOSSEN': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  if (isLoading || isLoadingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p className="text-white text-center mt-4">Lade Export-Daten...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">📤 PMA Export</h1>
              <p className="text-white/80">
                Exportiere qualifizierte Leads für {user.tenant?.name}
              </p>
            </div>
            <div className="text-right text-white/80">
              <p className="text-sm">Benutzer: {user.makler?.firstName} {user.makler?.lastName}</p>
              <p className="text-sm">Rolle: {user.role}</p>
            </div>
          </div>
        </div>

        {/* Export Configuration */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">🔧 Export-Konfiguration</h2>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {/* Date From */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Von Datum</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date To */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Bis Datum</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Format Selection */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Export-Format</label>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="json">JSON (Standard)</option>
                <option value="csv">CSV (Excel kompatibel)</option>
                <option value="pma">PMA Format</option>
                <option value="excel">Excel (.xlsx)</option>
              </select>
            </div>

            {/* Action Button */}
            <div className="flex items-end">
              <button
                onClick={fetchExportData}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                🔄 Aktualisieren
              </button>
            </div>
          </div>

          {/* Export Button */}
          <div className="flex justify-center">
            <button
              onClick={handleExport}
              disabled={isExporting || !exportData || exportData.data.length === 0}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              {isExporting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Exportiere...
                </>
              ) : (
                <>
                  📤 Export starten
                  {selectedLeads.length > 0 && ` (${selectedLeads.length} ausgewählt)`}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">❌</span>
              <div>
                <h3 className="text-red-200 font-semibold">Fehler</h3>
                <p className="text-red-100">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Export Statistics */}
        {exportData && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">📊 Export-Statistiken</h2>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">{exportData.totalRecords}</div>
                <div className="text-white/80 text-sm">Qualifizierte Leads</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">{selectedLeads.length}</div>
                <div className="text-white/80 text-sm">Ausgewählt</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">{selectedFormat.toUpperCase()}</div>
                <div className="text-white/80 text-sm">Export-Format</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">
                  {new Date(exportData.exportDate).toLocaleDateString('de-DE')}
                </div>
                <div className="text-white/80 text-sm">Letzter Export</div>
              </div>
            </div>
          </div>
        )}

        {/* Leads Table */}
        {exportData && exportData.data.length > 0 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
            <div className="p-6 border-b border-white/20">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">📋 Verfügbare Leads ({exportData.data.length})</h2>
                <button
                  onClick={selectAllLeads}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  {selectedLeads.length === exportData.data.length ? 'Alle abwählen' : 'Alle auswählen'}
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Auswahl
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Lead
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Interesse
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Kampagne
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Erstellt
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      GDPR
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {exportData.data.map((lead) => (
                    <tr key={lead.leadId} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedLeads.includes(lead.leadId)}
                          onChange={() => toggleLeadSelection(lead.leadId)}
                          className="h-4 w-4 text-blue-600 rounded border-white/30 bg-white/20 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-white">
                            {lead.firstName} {lead.lastName}
                          </div>
                          <div className="text-sm text-white/60">{lead.email}</div>
                          <div className="text-sm text-white/60">{lead.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getStatusBadgeColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-white">{lead.score}</div>
                          <div className="ml-2 w-16 bg-white/20 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${Math.min(lead.score, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/80">
                        {lead.interest}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white/80">
                          {lead.campaign?.name || 'Keine Kampagne'}
                        </div>
                        <div className="text-xs text-white/60">
                          {lead.campaign?.platform}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/80">
                        {new Date(lead.createdAt).toLocaleDateString('de-DE')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-1">
                          {lead.consentGiven && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-500/20 text-green-200">
                              ✓ GDPR
                            </span>
                          )}
                          {lead.marketingConsent && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-200">
                              ✓ Marketing
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {exportData && exportData.data.length === 0 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 text-center">
            <div className="text-6xl mb-4">📤</div>
            <h3 className="text-xl font-semibold text-white mb-2">Keine qualifizierten Leads verfügbar</h3>
            <p className="text-white/60 mb-6">
              Es wurden keine Leads mit dem Status QUALIFIZIERT, WARM, HEISS, TERMIN oder ABGESCHLOSSEN gefunden.
            </p>
            <button
              onClick={() => router.push('/leads')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Zu den Leads
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 