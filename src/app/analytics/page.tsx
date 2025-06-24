'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Users, TrendingUp, Euro, Target, Globe, Smartphone, Calendar, Award } from 'lucide-react';

// Demo-Daten für beeindruckende Präsentation
const generateDemoData = () => {
  const today = new Date();
  const last7Days = Array.from({length: 7}, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - (6 - i));
    return {
      date: date.toLocaleDateString('de-DE', { weekday: 'short' }),
      visitors: Math.floor(Math.random() * 200) + 150,
      leads: Math.floor(Math.random() * 45) + 25,
      conversions: Math.floor(Math.random() * 12) + 8,
      revenue: Math.floor(Math.random() * 15000) + 8000
    };
  });

  const campaignData = [
    { name: 'Lebensversicherung Premium', leads: 156, conversion: 34.2, revenue: 89400 },
    { name: 'KFZ-Versicherung Digital', leads: 143, conversion: 28.7, revenue: 67200 },
    { name: 'Hausratversicherung Plus', leads: 98, conversion: 41.3, revenue: 45600 },
    { name: 'Berufsunfähigkeit Comfort', leads: 87, conversion: 52.1, revenue: 78300 },
    { name: 'Riester-Rente Optimiert', leads: 76, conversion: 38.9, revenue: 92100 }
  ];

  const deviceData = [
    { name: 'Desktop', value: 45, color: '#3B82F6' },
    { name: 'Mobile', value: 38, color: '#10B981' },
    { name: 'Tablet', value: 17, color: '#F59E0B' }
  ];

  const regionData = [
    { region: 'Bayern', leads: 234, revenue: 156700 },
    { region: 'NRW', leads: 198, revenue: 134200 },
    { region: 'Baden-Württemberg', leads: 167, revenue: 112400 },
    { region: 'Hessen', leads: 145, revenue: 98600 },
    { region: 'Berlin', leads: 134, revenue: 87300 }
  ];

  return { last7Days, campaignData, deviceData, regionData };
};

export default function AnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const [realTimeVisitors, setRealTimeVisitors] = useState(47);
  
  useEffect(() => {
    setData(generateDemoData());
    
    // Simuliere Echtzeit-Besucher
    const interval = setInterval(() => {
      setRealTimeVisitors(prev => {
        const change = Math.floor(Math.random() * 6) - 2; // -2 bis +3
        return Math.max(20, Math.min(80, prev + change));
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div className="p-8">Lade Analytics...</div>;

  const totalRevenue = data.last7Days.reduce((sum: number, day: any) => sum + day.revenue, 0);
  const totalLeads = data.last7Days.reduce((sum: number, day: any) => sum + day.leads, 0);
  const avgConversion = (data.last7Days.reduce((sum: number, day: any) => sum + day.conversions, 0) / data.last7Days.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            📊 Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Live-Einblicke in deine Leadgenerierungs-Performance
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Live Besucher</p>
                <p className="text-3xl font-bold text-green-600">{realTimeVisitors}</p>
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
                <p className="text-3xl font-bold text-blue-600">{totalLeads}</p>
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
                <p className="text-3xl font-bold text-purple-600">€{totalRevenue.toLocaleString('de-DE')}</p>
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
                <p className="text-3xl font-bold text-orange-600">{avgConversion}%</p>
                <p className="text-sm text-green-500 flex items-center mt-1">
                  <Award className="h-4 w-4 mr-1" />
                  Über Branchenschnitt
                </p>
              </div>
              <Award className="h-12 w-12 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Lead Verlauf */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📈 Lead-Entwicklung (7 Tage)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data.last7Days}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'leads' ? `${value} Leads` : `${value} Conversions`,
                    name === 'leads' ? 'Leads' : 'Conversions'
                  ]}
                />
                <Area type="monotone" dataKey="leads" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="conversions" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Device Split */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📱 Device-Verteilung</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.deviceData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Anteil']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              {data.deviceData.map((item: any, index: number) => (
                <div key={index} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2`} style={{backgroundColor: item.color}}></div>
                  <span className="text-sm font-medium">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mb-8">
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
                {data.campaignData.map((campaign: any, index: number) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">{campaign.name}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {campaign.leads}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-600 font-semibold">{campaign.conversion}%</span>
                    </td>
                    <td className="py-4 px-4 text-center font-semibold">
                      €{campaign.revenue.toLocaleString('de-DE')}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" 
                          style={{width: `${Math.min(campaign.conversion, 100)}%`}}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regional Performance */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">🗺️ Regionale Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.regionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'leads' ? `${value} Leads` : `€${value.toLocaleString('de-DE')}`,
                  name === 'leads' ? 'Leads' : 'Umsatz'
                ]}
              />
              <Bar yAxisId="left" dataKey="leads" fill="#3B82F6" />
              <Bar yAxisId="right" dataKey="revenue" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-500">
          <p>🚀 InsureAI Analytics Dashboard • Alle Daten werden in Echtzeit aktualisiert</p>
          <p className="text-sm mt-2">💡 Diese Demo zeigt die Leistungsfähigkeit unserer Analytics-Engine</p>
        </div>
      </div>
    </div>
  );
} 