import Link from 'next/link';
import LoginTest from '../components/LoginTest';
import { 
  Target, 
  Users, 
  BarChart3, 
  MessageSquare, 
  FileDown,
  Headphones,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Shield
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ihre <span className="text-blue-300">Whitelabel-Plattform</span><br />
              für Leadgenerierung
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Jeder PMA-Makler erhält seine eigene Instanz zur Leadgenerierung und -verarbeitung.
              Von der Kampagne bis zur Übergabe an PMA - alles an einem Ort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/onboarding" className="btn-primary text-lg px-8 py-4">
                Jetzt Partner werden
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/demo" className="btn-secondary text-lg px-8 py-4">
                Live-Demo ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Schritte Prozess */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              In 7 Schritten zum Erfolg
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der ersten Kampagne bis zur Übergabe qualifizierter Leads an PMA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Schritt 1: Onboarding */}
            <div className="glass-card p-6 animate-slide-up">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Onboarding & Branding</h3>
              <p className="text-gray-600 mb-4">
                Erhalten Sie Zugang zu Ihrer individuellen Plattform mit persönlichem Branding,
                Logo und Farben.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Schulungsvideos</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Persönliches Branding</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Funktionseinführung</li>
              </ul>
            </div>

            {/* Schritt 2: Kampagnenerstellung */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Kampagnenerstellung</h3>
              <p className="text-gray-600 mb-4">
                Erstellen Sie Kampagnen für Facebook, Instagram, Google und YouTube mit 
                kuratierten Vorlagen.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Multi-Platform Support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Fertige Vorlagen</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Step-by-Step Anleitung</li>
              </ul>
            </div>

            {/* Schritt 3: Landingpage */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. DSGVO-konforme Landingpage</h3>
              <p className="text-gray-600 mb-4">
                Automatisch generierte Landingpages mit Double-Opt-In und 
                individuellem Makler-Branding.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />DSGVO-konform</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Double-Opt-In</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Individuell anpassbar</li>
              </ul>
            </div>

            {/* Schritt 4: Automatisierte Kommunikation */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg w-fit mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">4. Automatisierte Lead-Kommunikation</h3>
              <p className="text-gray-600 mb-4">
                Sofortige Erstansprache per E-Mail, WhatsApp oder SMS mit 
                KI-gestützten Textvorschlägen.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Multi-Channel</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />KI-Textvorschläge</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Auto Follow-ups</li>
              </ul>
            </div>

            {/* Schritt 5: Lead-Qualifizierung */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">5. Lead-Qualifizierung & Pipeline</h3>
              <p className="text-gray-600 mb-4">
                Visuelle Pipeline-Darstellung von Neu bis Heiß mit automatischer 
                Bewertung und Kategorisierung.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Visuelle Pipeline</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Auto-Bewertung</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Kategorisierung</li>
              </ul>
            </div>

            {/* Schritt 6: PMA Export */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-lg w-fit mb-4">
                <FileDown className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">6. Übergabe an PMA</h3>
              <p className="text-gray-600 mb-4">
                Standardisierter CSV-Export qualifizierter Leads - automatisch 
                oder manuell auf Knopfdruck.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Standardisiertes Format</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Auto/Manuell Export</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />CRM-Integration</li>
              </ul>
            </div>

            {/* Schritt 7: Support */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-3 rounded-lg w-fit mb-4">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">7. Betreuung & Support</h3>
              <p className="text-gray-600 mb-4">
                Umfassender Support gemäß SLA-Paket mit Hotline, Workshops 
                und Vorlagenoptimierung.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Basic bis Enterprise</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Hotline-Support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Team-Workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Vorteile für PMA-Berater
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Selbstbestimmtes Arbeiten</h3>
                    <p className="text-gray-600">Mit eigenem Branding und individueller Anpassung</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Kein technisches Know-how nötig</h3>
                    <p className="text-gray-600">Schritt-für-Schritt Anleitungen für alle Funktionen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Alles an einem Ort</h3>
                    <p className="text-gray-600">Werbung, Landingpage, Leadmanagement & Übergabe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Strukturierte Workflows</h3>
                    <p className="text-gray-600">Sorgen für maximale Effizienz und bessere Ergebnisse</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bereit loszulegen?</h3>
              <p className="text-gray-600 mb-6">
                Werden Sie Teil der PMA-Leadgenerierungs-Plattform und starten Sie noch heute 
                mit der professionellen Akquise neuer Kunden.
              </p>
              <Link href="/onboarding" className="btn-primary w-full text-center">
                Jetzt kostenlos starten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Tenant Login Test */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Multi-Tenant System Test
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Testen Sie die verschiedenen Benutzerrollen und Tenant-Instanzen:
          </p>
          <LoginTest />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PMA Leadgenerierung</h3>
              <p className="text-gray-400">
                Ihre Whitelabel-Plattform für professionelle Leadgenerierung 
                und -verarbeitung.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Plattform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Preise</Link></li>
                <li><Link href="/demo" className="hover:text-white transition-colors">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Hilfe</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link></li>
                <li><Link href="/training" className="hover:text-white transition-colors">Schulungen</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Über uns</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">AGB</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PMA Leadgenerierungs-Plattform. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 