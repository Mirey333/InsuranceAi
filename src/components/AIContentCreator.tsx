'use client';

import { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Send, 
  Copy, 
  RefreshCw, 
  Check, 
  Hash, 
  Target, 
  Globe,
  Image,
  Video,
  FileText,
  X,
  ArrowRight,
  Zap
} from 'lucide-react';

interface AIContentCreatorProps {
  isOpen: boolean;
  onClose: () => void;
  onContentGenerated: (content: any) => void;
}

export default function AIContentCreator({ isOpen, onClose, onContentGenerated }: AIContentCreatorProps) {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    category: 'altersvorsorge',
    tone: 'professional',
    contentType: 'text',
    platforms: ['instagram'],
    prompt: ''
  });

  const generateContent = async () => {
    setIsGenerating(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockContent = {
        content: '🎯 Früh anfangen lohnt sich! Mit nur 100€ monatlich können Sie bis zur Rente ein beachtliches Vermögen aufbauen.\n\nDer Zinseszinseffekt ist Ihr bester Freund:\n✅ Je früher Sie starten, desto weniger müssen Sie sparen\n✅ Zeit arbeitet für Sie\n✅ Finanzielle Freiheit im Alter\n\nStarten Sie noch heute! 💪',
        hashtags: ['#Altersvorsorge', '#Finanzplanung', '#Sparen', '#Zukunft'],
        estimatedReach: 12000,
        estimatedEngagement: 8.5,
        complianceScore: 92
      };
      
      setGeneratedContent(mockContent);
      setStep(3);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Bot className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">KI Content Creator</h2>
              <p className="text-sm text-gray-500">Schritt {step} von 3</p>
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
        <div className="p-6">
          {/* Step 1: Configuration */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Kategorie</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="altersvorsorge">Altersvorsorge</option>
                  <option value="krankenversicherung">Krankenversicherung</option>
                  <option value="beratung">Beratung & Service</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Tonalität</label>
                <select 
                  value={formData.tone}
                  onChange={(e) => setFormData({...formData, tone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="professional">Professionell</option>
                  <option value="casual">Locker</option>
                  <option value="educational">Lehrreich</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Content-Typ</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'text', name: 'Text-Post', icon: FileText },
                    { id: 'image', name: 'Bild-Post', icon: Image },
                    { id: 'video', name: 'Video-Script', icon: Video },
                    { id: 'carousel', name: 'Karussell', icon: Globe }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFormData({...formData, contentType: type.id})}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        formData.contentType === type.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <type.icon className="w-5 h-5 mb-2 mx-auto" />
                      <div className="text-sm font-medium">{type.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Spezielle Anweisungen</label>
                <textarea
                  value={formData.prompt}
                  onChange={(e) => setFormData({...formData, prompt: e.target.value})}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="z.B. 'Erwähne unser neues Beratungsangebot'"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                  <span>Content generieren</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Generation */}
          {step === 2 && (
            <div className="text-center py-12">
              {!isGenerating ? (
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Bereit zur Generierung</h3>
                    <p className="text-gray-600">Unsere KI erstellt optimierte Inhalte</p>
                  </div>
                  <button
                    onClick={generateContent}
                    className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors mx-auto"
                  >
                    <Bot className="w-5 h-5" />
                    <span>KI-Content erstellen</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <RefreshCw className="w-8 h-8 text-purple-600 animate-spin" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">KI generiert Content...</h3>
                    <p className="text-gray-600">Optimierung läuft</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Results */}
          {step === 3 && generatedContent && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Generierter Content</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Target className="w-4 h-4 text-green-600" />
                    <span>Reichweite: {generatedContent.estimatedReach.toLocaleString()}</span>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    Compliance: {generatedContent.complianceScore}%
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-gray-900">Content</h4>
                  <button
                    onClick={() => navigator.clipboard.writeText(generatedContent.content)}
                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-gray-800 whitespace-pre-wrap">{generatedContent.content}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Hash className="w-4 h-4 text-gray-500" />
                    <div className="flex flex-wrap gap-2">
                      {generatedContent.hashtags.map((hashtag: string, index: number) => (
                        <span key={index} className="text-blue-600 text-sm">{hashtag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-gray-200">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Neue Konfiguration
                </button>
                <div className="flex space-x-3">
                  <button
                    onClick={generateContent}
                    className="flex items-center space-x-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Neu generieren</span>
                  </button>
                  <button
                    onClick={() => {
                      onContentGenerated(generatedContent);
                      onClose();
                    }}
                    className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Content verwenden</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}