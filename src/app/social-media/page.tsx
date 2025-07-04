'use client';

import { useState } from 'react';
import { 
  Share2, 
  Calendar, 
  TrendingUp, 
  Zap, 
  Settings,
  BarChart3
} from 'lucide-react';

export default function SocialMediaPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <Share2 className="w-8 h-8 text-blue-600 mr-3" />
                Social Media AI Manager
              </h1>
              <p className="text-gray-600">KI-gestützte Content-Erstellung und Multi-Platform Management</p>
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
              { id: 'posts', name: 'Posts', icon: Share2 },
              { id: 'calendar', name: 'Kalender', icon: Calendar },
              { id: 'analytics', name: 'Analytics', icon: TrendingUp },
              { id: 'automation', name: 'Automatisierung', icon: Zap }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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

        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Platform Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Instagram', icon: 'IG', connected: true, followers: '5.6K', growth: '+12.4%' },
                { name: 'Facebook', icon: 'FB', connected: true, followers: '3.8K', growth: '+8.7%' },
                { name: 'LinkedIn', icon: 'LI', connected: true, followers: '2.9K', growth: '+15.2%' },
                { name: 'TikTok', icon: 'TT', connected: true, followers: '1.8K', growth: '+28.9%' }
              ].map((platform) => (
                <div key={platform.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-xs font-bold">
                        {platform.icon}
                      </div>
                      <h3 className="font-medium text-gray-900">{platform.name}</h3>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${platform.connected ? 'bg-green-500' : 'bg-red-500'}`} />
                  </div>
                  
                  {platform.connected && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Follower</span>
                        <span className="font-medium">{platform.followers}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Wachstum</span>
                        <span className="font-medium text-green-600">{platform.growth}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Gesamtreichweite</p>
                    <p className="text-2xl font-bold text-gray-900">89,543</p>
                    <p className="text-sm text-green-600">+12.5% vs. letzter Monat</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Engagement</p>
                    <p className="text-2xl font-bold text-gray-900">12,847</p>
                    <p className="text-sm text-green-600">14.3% Rate</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Leads generiert</p>
                    <p className="text-2xl font-bold text-gray-900">76</p>
                    <p className="text-sm text-green-600">18.50 EUR CPL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">KI-Empfehlungen</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 rounded-lg bg-green-100">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Erstelle mehr Video-Content für TikTok und Instagram Reels</h4>
                    <p className="text-sm text-gray-600 mt-1">Video-Posts haben 3x höhere Engagement-Rate</p>
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      Hoher Impact
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Umsetzen
                  </button>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 rounded-lg bg-yellow-100">
                    <Calendar className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Poste werktags zwischen 17-19 Uhr für höchste Reichweite</h4>
                    <p className="text-sm text-gray-600 mt-1">Analyse der letzten 30 Tage zeigt peak Aktivität</p>
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                      Mittlerer Impact
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Umsetzen
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs placeholder */}
        {activeTab !== 'dashboard' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Settings className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab === 'calendar' && 'Social Media Kalender'}
              {activeTab === 'posts' && 'Posts Verwaltung'}
              {activeTab === 'analytics' && 'Detaillierte Analytics'}
              {activeTab === 'automation' && 'Automatisierung & KI'}
            </h3>
            <p className="text-gray-600 mb-4">
              Dieser Bereich wird in Kürze verfügbar sein.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Mehr erfahren
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 