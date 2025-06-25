'use client';

import { useState } from 'react';
import { X, Play, Volume2, Settings, Bot, User } from 'lucide-react';

interface VoiceConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  agentId: string;
  agentName: string;
}

export default function VoiceConfigModal({ isOpen, onClose, agentId, agentName }: VoiceConfigModalProps) {
  const [config, setConfig] = useState({
    voice: 'female',
    language: 'de',
    personality: 'friendly',
    responseSpeed: 'normal',
    maxCallDuration: 20,
    transferThreshold: 3,
    customInstructions: 'Seien Sie höflich und professionell. Hören Sie aktiv zu.'
  });

  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  const playVoiceTest = () => {
    setIsPlaying(true);
    // Simuliere Audio-Playback
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Bot className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Voice Konfiguration</h2>
              <p className="text-sm text-gray-500">{agentName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Voice Settings */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stimme
              </label>
              <select
                value={config.voice}
                onChange={(e) => setConfig({...config, voice: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="female">Weiblich (Sophie)</option>
                <option value="male">Männlich (Marcus)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sprache
              </label>
              <select
                value={config.language}
                onChange={(e) => setConfig({...config, language: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="de">Deutsch</option>
                <option value="en">Englisch</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Persönlichkeit
              </label>
              <select
                value={config.personality}
                onChange={(e) => setConfig({...config, personality: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="professional">Professionell</option>
                <option value="friendly">Freundlich</option>
                <option value="enthusiastic">Enthusiastisch</option>
                <option value="empathetic">Empathisch</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Antwortgeschwindigkeit
              </label>
              <select
                value={config.responseSpeed}
                onChange={(e) => setConfig({...config, responseSpeed: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="fast">Schnell</option>
                <option value="normal">Normal</option>
                <option value="thoughtful">Bedacht</option>
              </select>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max. Gesprächsdauer (Min)
              </label>
              <input
                type="number"
                value={config.maxCallDuration}
                onChange={(e) => setConfig({...config, maxCallDuration: parseInt(e.target.value)})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="5"
                max="60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weiterleitung nach (Versuchen)
              </label>
              <input
                type="number"
                value={config.transferThreshold}
                onChange={(e) => setConfig({...config, transferThreshold: parseInt(e.target.value)})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                max="10"
              />
            </div>
          </div>

          {/* Custom Instructions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Benutzerdefinierte Anweisungen
            </label>
            <textarea
              value={config.customInstructions}
              onChange={(e) => setConfig({...config, customInstructions: e.target.value})}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Spezielle Verhaltensweisen und Anweisungen für den AI-Agenten..."
            />
          </div>

          {/* Voice Test */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-900">Sprachtest</h4>
              <button
                onClick={playVoiceTest}
                disabled={isPlaying}
                className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {isPlaying ? (
                  <>
                    <Volume2 className="w-4 h-4 animate-pulse" />
                    <span>Spielt ab...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Test abspielen</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm text-gray-600">
              "Guten Tag! Hier spricht {config.voice === 'female' ? 'Sophie' : 'Marcus'} von InsureAI Pro. 
              Vielen Dank für Ihr Interesse an unseren Versicherungslösungen."
            </p>
          </div>

          {/* Knowledge Base */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Wissensbasis</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Lebensversicherung Basics',
                'Altersvorsorge Produkte',
                'KFZ-Versicherung',
                'Hausratversicherung',
                'DSGVO Compliance',
                'Verkaufsprozesse'
              ].map((topic) => (
                <label key={topic} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{topic}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Abbrechen
          </button>
          <button
            onClick={() => {
              // Save configuration
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
} 