'use client';

import Link from 'next/link';
import { 
  Users, 
  Target, 
  Zap, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Layers,
  TrendingUp,
  FileText,
  Settings,
  Puzzle,
  Building2,
  Globe,
  Award
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Professionelle Leaderfassung',
    description: 'DSGVO-konforme Lead-Erfassung mit intelligenter Scoring-Funktion und automatischer Kategorisierung nach Versicherungssparten.'
  },
  {
    icon: Target,
    title: 'Multi-Channel Kampagnen',
    description: 'Erstellen Sie Kampagnen auf Facebook, Instagram, Google und YouTube mit erweiterten Targeting-Optionen.'
  },
  {
    icon: Zap,
    title: 'Intelligente Automatisierung',
    description: 'Automatisierte Follow-ups, E-Mail-Sequenzen und Reminder-Systeme für optimale Lead-Nurturing.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Umfassende Reporting-Tools mit Predictive Analytics und ROI-Tracking über die gesamte Customer Journey.'
  },
  {
    icon: Shield,
    title: 'Compliance & Sicherheit',
    description: 'Vollständige DSGVO-Compliance mit automatischen Audit-Protokollen und erweiterten Sicherheitsfeatures.'
  },
  {
    icon: Puzzle,
    title: 'Modularer Aufbau',
    description: 'Starten Sie mit dem Grundpaket und erweitern Sie nach Bedarf mit Premium- und Enterprise-Modulen.'
  }
];

const benefits = [
  { text: 'Bis zu 300% mehr qualifizierte Leads', icon: TrendingUp },
  { text: 'Automatisierung spart 15+ Stunden/Woche', icon: Clock },
  { text: 'Integration zu allen gängigen CRM-Systemen', icon: Settings },
  { text: 'White-Label Lösung verfügbar', icon: Building2 }
];

const testimonials = [
  {
    name: 'Michael Weber',
    company: 'Weber Versicherungsmakler',
            text: 'Mit InsureAI Pro haben wir unsere Lead-Qualität um 250% gesteigert. Die Automatisierung spart uns täglich mehrere Stunden.',
    rating: 5
  },
  {
    name: 'Sarah Klein',
    company: 'FinanzProfi GmbH', 
    text: 'Das beste Investment in unsere Digitalisierung. ROI bereits nach 2 Monaten erreicht.',
    rating: 5
  },
  {
    name: 'Thomas Schmidt',
    company: 'Schmidt & Partner',
    text: 'Endlich eine Lösung, die speziell für Versicherungsmakler entwickelt wurde. Perfekte PMA-Integration.',
    rating: 5
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Award className="w-4 h-4" />
            <span>Deutschlands führende Leadgenerierungs-Plattform für Makler</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Mehr Leads.<br />
            Bessere Conversion.<br />
            <span className="text-blue-600">Modulare Flexibilität.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            InsureAI Pro ist die modulare Leadgenerierungs-Plattform speziell für Versicherungsmakler. 
            Digitalisieren Sie Ihre Kundenakquise mit intelligenten Tools und automatisierten Prozessen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/demo" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              Live Demo starten <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/modules" 
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Module entdecken
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-500">
            <div>
              <div className="text-2xl font-bold text-gray-900">2.500+</div>
              <div className="text-sm">Zufriedene Makler</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">1.2M+</div>
              <div className="text-sm">Generierte Leads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm">Kundenzufriedenheit</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">DSGVO</div>
              <div className="text-sm">100% Konform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alles was Sie für erfolgreiche Leadgenerierung brauchen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Lead-Erfassung bis zum Abschluss - unsere Plattform deckt alle Schritte 
              Ihrer Kundenakquise ab.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="bg-blue-50 p-3 rounded-lg w-fit mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nachweisbare Ergebnisse für Ihr Maklerunternehmen
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Unsere Kunden berichten von signifikanten Verbesserungen in allen 
                wichtigen KPIs bereits in den ersten Wochen.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-green-50 p-2 rounded-lg">
                      <benefit.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-800 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/dashboard" 
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold mt-8"
              >
                <span>Dashboard ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">ROI</div>
                <div className="text-2xl font-bold text-gray-900 mb-4">350%</div>
                <p className="text-gray-600 mb-6">
                  Durchschnittliche Investitionsrendite unserer Kunden im ersten Jahr
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">-67%</div>
                    <div className="text-sm text-gray-600">Cost per Lead</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">+280%</div>
                    <div className="text-sm text-gray-600">Lead Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-gray-600">
              Über 2.500 Versicherungsmakler vertrauen bereits auf InsureAI Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für mehr qualifizierte Leads?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Starten Sie noch heute mit InsureAI Pro und transformieren Sie Ihre Kundenakquise. 
            Kostenlose Testphase - keine Verpflichtungen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-2"
            >
              Kostenlos testen <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/modules" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Module ansehen
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm mt-6">
            ✓ 14 Tage kostenlos ✓ Keine Einrichtungsgebühren ✓ DSGVO-konform
          </p>
        </div>
      </section>
    </div>
  );
} 