'use client';

import { Module } from '@/types';
import { useState } from 'react';
import { 
  Users, 
  Target, 
  Zap, 
  BarChart3, 
  Settings, 
  Palette,
  MessageCircle,
  FileText,
  Brain,
  Shield,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Workflow,
  Database,
  Globe,
  Lock,
  Phone,
  Calendar,
  MessageSquare,
  BookOpen,
  Mic,
  HeadphonesIcon,
  GraduationCap,
  Bot,
  FileCode,
  Lightbulb,
  PhoneCall,
  Heart,
  Mail,
  Bell,
  CreditCard,
  UserCheck,
  Activity,
  HelpCircle,
  ArrowRight,
  RefreshCw,
  Award
} from 'lucide-react';

// Quiz-System Typen
interface QuizQuestion {
  id: string;
  question: string;
  answers: {
    id: string;
    text: string;
    weight: { [key: string]: number };
  }[];
}

interface QuizResult {
  moduleId: string;
  score: number;
  reasoning: string;
}

// Quiz-Fragen
const quizQuestions: QuizQuestion[] = [
  {
    id: 'company-size',
    question: 'Wie groß ist Ihr Versicherungsunternehmen?',
    answers: [
      {
        id: 'solo',
        text: 'Solo-Makler (nur ich)',
        weight: { 'leadgen-basic': 3, 'automation-suite': 2, 'whatsapp-business': 3 }
      },
      {
        id: 'small',
        text: '2-5 Mitarbeiter',
        weight: { 'campaign-pro': 2, 'crm-complete': 3, 'pipeline-advanced': 2 }
      },
      {
        id: 'medium',
        text: '6-20 Mitarbeiter',
        weight: { 'ai-call-center': 3, 'analytics-pro': 3, 'white-label': 2 }
      },
      {
        id: 'large',
        text: '20+ Mitarbeiter',
        weight: { 'enterprise-ai': 3, 'white-label': 3, 'compliance-center': 3 }
      }
    ]
  },
  {
    id: 'main-challenge',
    question: 'Was ist Ihre größte Herausforderung?',
    answers: [
      {
        id: 'leads',
        text: 'Zu wenig Leads generieren',
        weight: { 'campaign-pro': 3, 'leadgen-basic': 2, 'landingpage-builder': 2 }
      },
      {
        id: 'follow-up',
        text: 'Follow-ups vergessen/zu zeitaufwändig',
        weight: { 'automation-suite': 3, 'whatsapp-business': 2, 'ai-call-center': 2 }
      },
      {
        id: 'conversion',
        text: 'Leads zu Kunden konvertieren',
        weight: { 'pipeline-advanced': 3, 'contract-builder': 2, 'ai-training': 2 }
      },
      {
        id: 'data',
        text: 'Kundendaten organisieren',
        weight: { 'crm-complete': 3, 'export-pro': 2, 'analytics-pro': 2 }
      }
    ]
  },
  {
    id: 'time-spent',
    question: 'Wie viel Zeit verbringen Sie wöchentlich mit administrativen Aufgaben?',
    answers: [
      {
        id: 'minimal',
        text: 'Weniger als 5 Stunden',
        weight: { 'leadgen-basic': 2, 'basic-pipeline': 2 }
      },
      {
        id: 'moderate',
        text: '5-15 Stunden',
        weight: { 'automation-suite': 3, 'crm-complete': 2, 'export-pro': 2 }
      },
      {
        id: 'high',
        text: '15-25 Stunden',
        weight: { 'ai-call-center': 3, 'automation-suite': 2, 'white-label': 2 }
      },
      {
        id: 'excessive',
        text: 'Mehr als 25 Stunden',
        weight: { 'enterprise-ai': 3, 'ai-call-center': 2, 'automation-suite': 3 }
      }
    ]
  },
  {
    id: 'communication',
    question: 'Wie kommunizieren Sie hauptsächlich mit Kunden?',
    answers: [
      {
        id: 'phone',
        text: 'Telefon & persönliche Gespräche',
        weight: { 'ai-call-center': 3, 'ai-training': 2, 'phone-system': 2 }
      },
      {
        id: 'whatsapp',
        text: 'WhatsApp & Messenger',
        weight: { 'whatsapp-business': 3, 'automation-suite': 2, 'communication-center': 2 }
      },
      {
        id: 'email',
        text: 'E-Mail & Briefe',
        weight: { 'automation-suite': 2, 'export-pro': 2, 'crm-complete': 2 }
      },
      {
        id: 'mixed',
        text: 'Mix aus allem',
        weight: { 'communication-center': 3, 'omnichannel': 3, 'crm-complete': 2 }
      }
    ]
  },
  {
    id: 'tech-level',
    question: 'Wie schätzen Sie Ihre technischen Fähigkeiten ein?',
    answers: [
      {
        id: 'beginner',
        text: 'Anfänger - ich brauche einfache Lösungen',
        weight: { 'leadgen-basic': 3, 'basic-pipeline': 3, 'whatsapp-business': 2 }
      },
      {
        id: 'intermediate',
        text: 'Fortgeschritten - ich kann neue Tools lernen',
        weight: { 'campaign-pro': 2, 'automation-suite': 2, 'crm-complete': 2 }
      },
      {
        id: 'advanced',
        text: 'Experte - ich will alles konfigurieren können',
        weight: { 'white-label': 3, 'enterprise-ai': 3, 'integration-hub': 2 }
      }
    ]
  },
  {
    id: 'budget',
    question: 'Wie viel möchten Sie monatlich für ein Modul investieren?',
    answers: [
      {
        id: 'free',
        text: 'Kostenlos (nur Grundfunktionen)',
        weight: { 'leadgen-basic': 3, 'basic-pipeline': 3, 'basic-export': 3 }
      },
      {
        id: 'low',
        text: '€20-40 pro Monat',
        weight: { 'campaign-pro': 2, 'automation-suite': 2, 'pipeline-advanced': 2 }
      },
      {
        id: 'medium',
        text: '€40-70 pro Monat',
        weight: { 'crm-complete': 2, 'ai-call-center': 2, 'analytics-pro': 2 }
      },
      {
        id: 'high',
        text: '€70+ pro Monat',
        weight: { 'enterprise-ai': 3, 'white-label': 2, 'integration-hub': 2 }
      }
    ]
  }
];

// Helper-Funktionen
const getIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    Users, Target, Zap, BarChart3, Settings, Palette, MessageCircle, FileText, Brain, Shield,
    Phone, Calendar, MessageSquare, BookOpen, Mic, HeadphonesIcon, GraduationCap, Bot, 
    FileCode, Lightbulb, PhoneCall, Heart, Mail, Bell, CreditCard, UserCheck, Activity,
    Database, Globe, Lock, TrendingUp, Clock, Workflow
  };
  const IconComponent = icons[iconName] || Users;
  return <IconComponent className="w-6 h-6" />;
};

// Quiz-Komponente
function ModuleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult[]>([]);

  const handleAnswer = (questionId: string, answerId: string) => {
    const newAnswers = { ...answers, [questionId]: answerId };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (userAnswers: { [key: string]: string }) => {
    const moduleScores: { [key: string]: number } = {};

    // Berechne Scores für jedes Modul basierend auf Antworten
    Object.entries(userAnswers).forEach(([questionId, answerId]) => {
      const question = quizQuestions.find(q => q.id === questionId);
      if (question) {
        const answer = question.answers.find(a => a.id === answerId);
        if (answer) {
          Object.entries(answer.weight).forEach(([moduleId, weight]) => {
            moduleScores[moduleId] = (moduleScores[moduleId] || 0) + weight;
          });
        }
      }
    });

    // Sortiere Module nach Score und erstelle Empfehlungen
    const sortedResults = Object.entries(moduleScores)
      .map(([moduleId, score]) => ({
        moduleId,
        score,
        reasoning: getRecommendationReasoning(moduleId, userAnswers)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3); // Top 3 Empfehlungen

    setQuizResult(sortedResults);
    setShowResult(true);
  };

  const getRecommendationReasoning = (moduleId: string, userAnswers: { [key: string]: string }): string => {
    const reasoningMap: { [key: string]: string } = {
      'leadgen-basic': 'Perfekt für den Einstieg - einfach zu bedienen und kostenlos',
      'campaign-pro': 'Ideal für die Lead-Generierung mit professionellen Marketing-Tools',
      'automation-suite': 'Spart viel Zeit bei Follow-ups und administrativen Aufgaben',
      'pipeline-advanced': 'Optimiert Ihre Verkaufsprozesse mit intelligenten Features',
      'crm-complete': 'Vollständige Kundenverwaltung für wachsende Unternehmen',
      'ai-call-center': 'Revolutioniert Ihre Telefonkommunikation mit KI-Unterstützung',
      'whatsapp-business': 'Moderne Kundenkommunikation über WhatsApp',
      'analytics-pro': 'Datenbasierte Entscheidungen für bessere Ergebnisse',
      'white-label': 'Professionelle Lösung mit Ihrem eigenen Branding',
      'enterprise-ai': 'Enterprise-Lösung für große Unternehmen mit maximaler Automatisierung'
    };

    return reasoningMap[moduleId] || 'Empfohlen basierend auf Ihren Antworten';
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setQuizResult([]);
  };

  const getModuleById = (moduleId: string) => {
    return modules.find(m => m.id === moduleId);
  };

  if (showResult) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12 border border-blue-200">
        <div className="text-center mb-8">
          <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Ihre persönlichen Empfehlungen</h2>
          <p className="text-gray-600">Basierend auf Ihren Antworten haben wir die perfekten Module für Sie gefunden</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {quizResult.map((result, index) => {
            const module = getModuleById(result.moduleId);
            if (!module) return null;

            return (
              <div key={result.moduleId} className={`
                relative bg-white rounded-xl p-6 border-2 transition-all duration-300
                ${index === 0 ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200 hover:border-blue-300'}
              `}>
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Top Empfehlung
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {getIcon(module.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{module.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{result.reasoning}</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Match-Score:</span>
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(result.score / 18) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">
                        {Math.round((result.score / 18) * 100)}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {module.monthlyPrice === 0 ? 'Kostenlos' : `€${module.monthlyPrice}`}
                    </span>
                    {module.monthlyPrice > 0 && (
                      <span className="text-sm text-gray-600">/Monat</span>
                    )}
                  </div>
                </div>

                <div className="text-xs text-gray-500 mb-4">
                  <p className="line-clamp-2">{module.description}</p>
                </div>

                <button className={`
                  w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200
                  ${index === 0 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}>
                  {index === 0 ? 'Jetzt starten' : 'Mehr erfahren'}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={resetQuiz}
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Quiz wiederholen
          </button>
        </div>
      </div>
    );
  }

  const currentQ = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12 border border-blue-200">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Modul-Finder Quiz</h2>
          <p className="text-gray-600">Finden Sie in 2 Minuten heraus, welches Modul perfekt zu Ihnen passt</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Frage {currentQuestion + 1} von {quizQuestions.length}
            </span>
            <span className="text-sm text-blue-600 font-semibold">
              {Math.round(progress)}% abgeschlossen
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            {currentQ.question}
          </h3>

          <div className="space-y-3">
            {currentQ.answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswer(currentQ.id, answer.id)}
                className="w-full p-4 text-left bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 group-hover:text-blue-900 font-medium">
                    {answer.text}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Back Button (nur wenn nicht erste Frage) */}
        {currentQuestion > 0 && (
          <div className="text-center">
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="text-gray-600 hover:text-gray-800 text-sm font-medium"
            >
              ← Zurück zur vorherigen Frage
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const modules: Module[] = [
  // Grundpaket Module (inklusive)
  {
    id: 'leadgen-basic',
    name: 'LEADGEN',
    description: 'Die Basis für professionelle Leaderfassung mit optimierten Prozessen für die Versicherungsbranche',
    category: 'basic',
    monthlyPrice: 0,
    yearlyPrice: 0,
    included: true,
    icon: 'Users',
    features: [
      'Unlimited Lead-Erfassung mit Versicherungs-spezifischen Datenfeldern',
      'Basis Lead-Scoring (0-100 Punkte) nach Versicherungsrelevanz',
      'DSGVO-konforme Datenspeicherung mit Audit-Trail',
      'Mobile-optimierte Lead-Erfassung für Außendienst',
      'Standard-Kategorisierung nach Versicherungssparten',
      'Basis-Duplikatserkennung',
      'E-Mail Benachrichtigungen bei neuen Leads',
      'CSV-Import für bestehende Kundendaten'
    ]
  },
  {
    id: 'basic-pipeline',
    name: 'PIPELINE',
    description: 'Grundlegende Pipeline-Verwaltung mit den wichtigsten Verkaufsstufen',
    category: 'basic',
    monthlyPrice: 0,
    yearlyPrice: 0,
    included: true,
    icon: 'Target',
    features: [
      '8-stufige Standard-Pipeline (Neu → Kontaktiert → Qualifiziert → Warm → Heiß → Termin → Abgeschlossen → Verloren)',
      'Basis-Statusverfolgung mit Zeitstempel',
      'Einfache Drag & Drop Verwaltung zwischen Stufen',
      'Grundlegende Konversionsmetriken',
      'Pipeline-Wert Berechnung',
      'Automatische Stufenwechsel-Benachrichtigungen'
    ]
  },
  {
    id: 'basic-export',
    name: 'EXPORT',
    description: 'Standard-Export für die Übertragung zu PMA und anderen Systemen',
    category: 'basic',
    monthlyPrice: 0,
    yearlyPrice: 0,
    included: true,
    icon: 'FileText',
    features: [
      'CSV Export für PMA-CRM mit standardisiertem Format',
      'Excel-Export mit vorkonfigurierten Spalten',
      'Manuelle Export-Funktionen mit Filteroptionen',
      'Basis-Datenvalidierung vor Export',
      'Export-Protokollierung für Nachverfolgung',
      'Standard Lead-Status Übertragung'
    ]
  },

  // Premium Module
  {
    id: 'campaign-pro',
    name: 'CAMPAIGN PRO',
    description: 'Professionelles Multi-Channel Kampagnenmanagement mit erweiterten Targeting-Optionen',
    category: 'premium',
    monthlyPrice: 29,
    yearlyPrice: 290,
    icon: 'Target',
    features: [
      'Multi-Platform Kampagnen (Facebook, Instagram, Google Ads, YouTube)',
      'Erweiterte Zielgruppen-Segmentierung nach Alter, Einkommen, Region',
      'A/B-Testing für Landing Pages mit automatischer Optimierung',
      'Performance-Tracking & ROI-Analyse in Echtzeit',
      'Kampagnen-Templates für alle Versicherungssparten',
      'Automatische Budget-Optimierung basierend auf Performance',
      'Cross-Platform Retargeting',
      'Custom Audience Integration',
      'Competitive Analysis Dashboard',
      'Automated Bid Management'
    ]
  },
  {
    id: 'automation-suite',
    name: 'AUTOMATION',
    description: 'Intelligente Automatisierung für Follow-ups, Reminder und Lead-Nurturing',
    category: 'premium',
    monthlyPrice: 39,
    yearlyPrice: 390,
    icon: 'Zap',
    features: [
      'Automatisierte Follow-up Sequenzen basierend auf Lead-Verhalten',
      'Intelligentes Reminder-System für wichtige Termine und Deadlines',
      'Multi-Channel Kommunikation (E-Mail, SMS, WhatsApp)',
      'Behavioral Trigger-Automation (Website-Besuche, E-Mail-Öffnungen)',
      'AI-gestützte Nachrichtengenerierung mit Versicherungs-Kontext',
      'Zeitzonenoptimierte Versendung',
      'Lead-Nurturing Workflows für verschiedene Versicherungsprodukte',
      'Abandoned Application Recovery',
      'Birthday & Anniversary Automation',
      'Custom Trigger Creation'
    ]
  },
  {
    id: 'pipeline-advanced',
    name: 'PIPELINE ADVANCED',
    description: 'Erweiterte Pipeline-Features mit Clustering und Vorqualifizierung',
    category: 'premium',
    monthlyPrice: 25,
    yearlyPrice: 250,
    icon: 'Brain',
    features: [
      'Intelligente Lead-Clusterung nach Verhalten, Demografie und Präferenzen',
      'Automatisierte Vorqualifizierung mit konfigurierbaren Fragebäumen',
      'Individuell konfigurierbare Pipeline-Stufen für verschiedene Produkte',
      'Erweiterte Scoring-Algorithmen mit Machine Learning',
      'Predictive Lead-Bewertung basierend auf historischen Daten',
      'Custom Qualification Workflows',
      'Lead-Health-Score Monitoring',
      'Automatic Pipeline Optimization',
      'Risk Assessment für Leads',
      'Pipeline Forecasting'
    ]
  },
  {
    id: 'contract-builder',
    name: 'CONTRACT BUILDER',
    description: 'Individuell konfigurierbare Antrags- und Vertragsstrecken für verschiedene Versicherungsprodukte',
    category: 'premium',
    monthlyPrice: 35,
    yearlyPrice: 350,
    icon: 'FileText',
    features: [
      'Drag & Drop Antrags-Builder mit visueller Oberfläche',
      'Versicherungsspezifische Templates (Leben, Kranken, Sach, Rente)',
      'Dynamische Formular-Logik mit bedingten Feldern',
      'E-Signatur Integration mit rechtlicher Gültigkeit',
      'Automatische Datenvalidierung und Plausibilitätsprüfung',
      'Progress-Tracking für Kunden mit Status-Updates',
      'Multi-Step Application Flows',
      'Document Generation & PDF Creation',
      'Integration zu Versicherungsrechnern',
      'Compliance-Checks für Regulatorische Anforderungen'
    ]
  },
  {
    id: 'crm-complete',
    name: 'CRM COMPLETE',
    description: 'Vollsystematisiertes CRM mit Empfehlungstracking, Kundenverwaltung und intelligenten Prozessen',
    category: 'premium',
    monthlyPrice: 49,
    yearlyPrice: 490,
    icon: 'Database',
    features: [
      'Vollständige 360°-Kundensicht mit allen Interaktionen',
      'Empfehlungstracking mit Provisionsberechnung',
      'Automatische Vertragsablauf-Erinnerungen',
      'Kundenaktivitäts-Monitoring mit Engagement-Score',
      'Beziehungs-Mapping (Familie, Freunde, Kollegen)',
      'Cross-Selling & Up-Selling Empfehlungen',
      'Kundenlebenszyklus-Management',
      'Automatische Geburtstags- und Jubiläums-Nachrichten',
      'Risiko-Assessment für Kunden',
      'Customer Journey Tracking'
    ]
  },
  {
    id: 'ai-conversation-analysis',
    name: 'AI CONVERSATION ANALYSIS',
    description: 'KI-gestützte Analyse von Gesprächen mit Handlungsempfehlungen und Produktvorschlägen',
    category: 'premium',
    monthlyPrice: 59,
    yearlyPrice: 590,
    icon: 'Mic',
    features: [
      'Automatische Transkription von Telefongesprächen',
      'KI-Analyse von Gesprächsinhalten und Stimmung',
      'Zusammenfassungen mit Schlüsselerkenntnissen',
      'Handlungsempfehlungen basierend auf Gesprächsinhalt',
      'Produktvorschläge passend zum Kundenbedarf',
      'Follow-up Vorschläge mit personalisierten Nachrichten',
      'Compliance-Check für Beratungsqualität',
      'Objection-Handling Tipps in Echtzeit',
      'Gesprächsqualitäts-Scoring',
      'Automatische CRM-Updates nach Gesprächen'
    ]
  },
  {
    id: 'communication-center',
    name: 'COMMUNICATION CENTER',
    description: 'Integrierte Kommunikationszentrale mit Direktanruf, WhatsApp und Terminbuchung',
    category: 'premium',
    monthlyPrice: 45,
    yearlyPrice: 450,
    icon: 'PhoneCall',
    features: [
      'Direktanruf aus der App mit Click-to-Call',
      'WhatsApp Business Integration mit Templates',
      'SMS-Versand mit Tracking und Delivery Reports',
      'Integrierte Terminbuchung mit Kalender-Sync',
      'Automatische Erinnerungen per E-Mail/SMS/WhatsApp',
      'Video-Call Integration (Zoom, Teams, Meet)',
      'Gesprächsnotizen mit Sprach-zu-Text',
      'Call Recording mit Einverständnis-Management',
      'Multi-Channel Conversation Threading',
      'Response-Time Tracking'
    ]
  },

  // KI & Schulungs-Module (Premium)
  {
    id: 'ai-call-center',
    name: 'AI CALL CENTER',
    description: 'KI-gestütztes Call Center mit intelligenten Bots für Erstberatung und FAQ',
    category: 'premium',
    monthlyPrice: 69,
    yearlyPrice: 690,
    icon: 'Bot',
    features: [
      'KI-Chatbots für Website und WhatsApp',
      'Intelligente Sprachbots für Telefonanrufe',
      'Automatische Terminvereinbarung durch KI',
      'FAQ-System mit selbstlernender KI',
      'Mehrsprachige Unterstützung',
      'Eskalation zu menschlichen Beratern',
      'KI-Training mit Versicherungs-Fachwissen',
      '24/7 Verfügbarkeit',
      'Sentiment-Analyse in Echtzeit',
      'Automatische Lead-Qualifizierung'
    ]
  },
  {
    id: 'script-portal',
    name: 'SCRIPT PORTAL',
    description: 'Digitales Portal für Verkaufsskripte, Einwandbehandlung und Best Practices',
    category: 'premium',
    monthlyPrice: 29,
    yearlyPrice: 290,
    icon: 'FileCode',
    features: [
      'Umfangreiche Skript-Bibliothek für alle Versicherungssparten',
      'Einwandbehandlungs-Datenbank mit Lösungsansätzen',
      'Produktspezifische Gesprächsleitfäden',
      'Compliance-konforme Formulierungen',
      'Personalisierbare Skript-Templates',
      'Verkaufstechnik-Tutorials',
      'Erfolgsgeschichten und Case Studies',
      'Mobile App für unterwegs',
      'Favoriten und persönliche Notizen',
      'Regelmäßige Updates mit neuen Inhalten'
    ]
  },
  {
    id: 'ai-training-center',
    name: 'AI TRAINING CENTER',
    description: 'Digitales Schulungszentrum mit KI-Rollenspielen und personalisierten Trainings',
    category: 'premium',
    monthlyPrice: 79,
    yearlyPrice: 790,
    icon: 'GraduationCap',
    features: [
      'KI-Interessenten für realistische Rollenspiele',
      'Personalisierte Trainingsszenarien basierend auf Schwächen',
      'Automatische Auswertung mit detailliertem Feedback',
      'Verkaufstechnik-Assessment mit Scoring',
      'Progressive Schwierigkeitsstufen',
      'Spezielle Szenarien für verschiedene Kundentypen',
      'Objection-Handling Training mit KI-Feedback',
      'Leistungsvergleich mit anderen Beratern',
      'Zertifizierungs-System',
      'Mobile Training für flexibles Lernen'
    ]
  },

  // Enterprise Module
  {
    id: 'analytics-pro',
    name: 'ANALYTICS PRO',
    description: 'Umfassende Business Intelligence mit Advanced Reporting und Predictive Analytics',
    category: 'enterprise',
    monthlyPrice: 49,
    yearlyPrice: 490,
    icon: 'BarChart3',
    features: [
      'Advanced Business Intelligence Dashboard mit Echtzeit-Metriken',
      'Predictive Analytics & Forecasting für Lead-Entwicklung',
      'Custom Report Builder mit Drag & Drop Interface',
      'Geographic Lead-Distribution Analysis mit Heat Maps',
      'ROI-Tracking über die gesamte Customer Journey',
      'Executive Summary Reports für Management',
      'Cohort Analysis für Lead-Gruppen',
      'Attribution Modeling für Multi-Channel Kampagnen',
      'Competitive Benchmarking',
      'AI-powered Insights & Recommendations'
    ]
  },
  {
    id: 'integration-hub',
    name: 'INTEGRATION HUB',
    description: 'Erweiterte Integrationen zu CRM-Systemen, Maklerverwaltungsprogrammen und APIs',
    category: 'enterprise',
    monthlyPrice: 59,
    yearlyPrice: 590,
    icon: 'Settings',
    features: [
      'Bi-direktionale CRM-Synchronisation (Salesforce, HubSpot, Pipedrive)',
      'API-Zugang für Custom Integrationen mit umfangreicher Dokumentation',
      'Real-time Data Sync zwischen Systemen',
      'Webhook-Support für Event-basierte Aktionen',
      'MVP-Integration (Maklerverwaltungsprogramme wie AMOS, ADCURI)',
      'Custom Field Mapping mit visueller Oberfläche',
      'Data Transformation Rules',
      'Error Handling & Retry Logic',
      'Integration Monitoring & Logging',
      'White-Label API für Partner'
    ]
  },
  {
    id: 'whitelabel-pro',
    name: 'WHITELABEL PRO',
    description: 'Vollständige White-Label Lösung mit individueller Broker-Brand und Domain',
    category: 'enterprise',
    monthlyPrice: 79,
    yearlyPrice: 790,
    icon: 'Palette',
    features: [
      'Custom Domain & SSL-Zertifikat Setup',
      'Vollständiges Corporate Branding mit Logo, Farben, Fonts',
      'Individuelle E-Mail Templates für alle Kommunikationen',
      'Broker-spezifische Landing Pages mit Custom Design',
      'White-Label Mobile App für iOS und Android',
      'Custom Email Domain Setup',
      'Branded Document Templates',
      'Custom CSS/JS Injection',
      'Multi-Language Support',
      'Brand Guidelines Enforcement'
    ]
  },
  {
    id: 'compliance-shield',
    name: 'COMPLIANCE SHIELD',
    description: 'Erweiterte Compliance-Features für regulierte Versicherungsmärkte',
    category: 'enterprise',
    monthlyPrice: 45,
    yearlyPrice: 450,
    icon: 'Shield',
    features: [
      'Erweiterte DSGVO-Compliance Tools mit automatischen Protokollen',
      'Automatische Audit-Protokolle für alle Datenverarbeitungen',
      'Consent-Management mit granularen Einstellungen',
      'Data Retention Policies mit automatischer Löschung',
      'Regulatory Reporting für BaFin und andere Aufsichtsbehörden',
      'Compliance Dashboard mit Risk Scoring',
      'Data Privacy Impact Assessments',
      'Breach Notification System',
      'Compliance Training Modules',
      'Legal Document Management'
    ]
  },
  {
    id: 'enterprise-ai-suite',
    name: 'ENTERPRISE AI SUITE',
    description: 'Vollständige KI-Lösung für große Organisationen mit Custom AI-Modellen',
    category: 'enterprise',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    icon: 'Brain',
    features: [
      'Custom AI-Modelle trainiert auf Ihre Daten',
      'Predictive Customer Lifetime Value',
      'AI-gestützte Risikobewertung',
      'Automatische Produktempfehlungen',
      'Churn-Prediction mit Intervention-Strategien',
      'Natural Language Processing für alle Texte',
      'Computer Vision für Dokumentenverarbeitung',
      'AI-Assistenten für Berater',
      'Automated Decision Making',
      'Custom AI-Training Programme'
    ]
  },
  {
    id: 'omnichannel-experience',
    name: 'OMNICHANNEL EXPERIENCE',
    description: 'Nahtlose Kundenerfahrung über alle Touchpoints mit intelligenter Orchestrierung',
    category: 'enterprise',
    monthlyPrice: 149,
    yearlyPrice: 1490,
    icon: 'Globe',
    features: [
      'Einheitliche Kundenerfahrung über alle Kanäle',
      'Intelligente Kanal-Orchestrierung',
      'Cross-Channel Journey Tracking',
      'Personalisierte Content-Delivery',
      'Real-time Channel Switching',
      'Unified Customer Profile',
      'Advanced Attribution Modeling',
      'Journey Optimization mit AI',
      'Contextual Recommendations',
      'Seamless Handoff zwischen Kanälen'
    ]
  }
];

export default function ModulesPage() {
  const basicModules = modules.filter(m => m.category === 'basic');
  const premiumModules = modules.filter(m => m.category === 'premium');
  const enterpriseModules = modules.filter(m => m.category === 'enterprise');

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Users, Target, Zap, BarChart3, Settings, Palette, MessageCircle, FileText, Brain, Shield,
      Phone, Calendar, MessageSquare, BookOpen, Mic, HeadphonesIcon, GraduationCap, Bot, 
      FileCode, Lightbulb, PhoneCall, Heart, Mail, Bell, CreditCard, UserCheck, Activity,
      Database, Globe, Lock, TrendingUp, Clock, Workflow
    };
    const IconComponent = icons[iconName] || Users;
    return <IconComponent className="w-6 h-6" />;
  };

  const getCategoryBadge = (category: string) => {
    const styles = {
      basic: 'bg-green-100 text-green-800',
      premium: 'bg-blue-100 text-blue-800',
      enterprise: 'bg-purple-100 text-purple-800'
    };
    const labels = {
      basic: 'Grundpaket',
      premium: 'Premium',
      enterprise: 'Enterprise'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[category as keyof typeof styles]}`}>
        {labels[category as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      {/* Quiz Section */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <ModuleQuiz />
        </div>
      </section>

      {/* Header */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4" />
            Komplette Modulübersicht - Jetzt mit KI & Automatisierung
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Alle <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Module</span> von InsureAI Pro
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Vollständige Digitalisierung Ihres Maklergeschäfts - von KI-gestützter Beratung bis zu automatisierten 
            Prozessen. Entdecken Sie über 15 Module für maximale Effizienz.
          </p>
        </div>
      </section>

      {/* Grundpaket Module */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Grundpaket Module</h2>
            <p className="text-lg text-slate-600">Inklusive im LEADGEN STARTER Paket - keine zusätzlichen Kosten</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicModules.map((module) => (
              <div key={module.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-green-600">
                      {getIcon(module.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{module.name}</h3>
                  </div>
                  {getCategoryBadge(module.category)}
                </div>
                
                <p className="text-slate-600 mb-4">{module.description}</p>
                
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-semibold">Inklusive im Grundpaket</span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-slate-900 mb-3">Features:</h4>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Module */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Premium Module</h2>
            <p className="text-lg text-slate-600">
              Erweiterte Funktionen mit KI-Integration und Automatisierung für professionelle Leadgenerierung
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {premiumModules.map((module) => (
              <div key={module.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-blue-600">
                      {getIcon(module.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{module.name}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {getCategoryBadge(module.category)}
                    {['ai-call-center', 'ai-conversation-analysis', 'ai-training-center'].includes(module.id) && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        🤖 KI
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">{module.description}</p>
                
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 text-blue-800">
                    <span className="font-semibold">€{module.monthlyPrice}/Monat</span>
                    <span className="text-sm">oder €{module.yearlyPrice}/Jahr</span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-slate-900 mb-3">Features:</h4>
                <ul className="space-y-2 mb-6">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all">
                  Mehr erfahren
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Module */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise Module</h2>
            <p className="text-lg text-slate-600">
              Professionelle KI-Lösungen für große Organisationen mit Custom AI-Modellen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {enterpriseModules.map((module) => (
              <div key={module.id} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-yellow-400">
                      {getIcon(module.icon)}
                    </div>
                    <h3 className="text-xl font-bold">{module.name}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500 text-slate-900">
                      Enterprise
                    </span>
                    {['enterprise-ai-suite'].includes(module.id) && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500 text-white">
                        🧠 AI
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{module.description}</p>
                
                <div className="bg-yellow-500/20 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <span className="font-semibold">€{module.monthlyPrice}/Monat</span>
                    <span className="text-sm">oder €{module.yearlyPrice}/Jahr</span>
                  </div>
                </div>
                
                <h4 className="font-semibold mb-3">Features:</h4>
                <ul className="space-y-2 mb-6">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-3 h-3 text-yellow-400 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 py-3 px-4 rounded-lg font-medium transition-all">
                  Mehr erfahren
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Vollständige Digitalisierung Ihres Maklergeschäfts
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Mit über 15 Modulen von der Lead-Erfassung bis zur KI-gestützten Beratung. 
            Alles aus einer Hand - nahtlos integriert.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8 text-center">
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-blue-200">Module verfügbar</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-blue-200">KI-Module</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-200">Integriert</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200">KI-Support</div>
            </div>
          </div>
          
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all">
            Jetzt Demo vereinbaren
          </button>
        </div>
      </section>
    </div>
  );
} 