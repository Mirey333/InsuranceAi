

// Leadgenerierungs-Plattform Typen für PMA-Makler

export interface Makler {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  companyName?: string;
  pmaPartnerId: string;
  
  // Whitelabel Branding
  branding: {
    logo?: string;
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
    customTexts: {
      welcome: string;
      about: string;
      contact: string;
    };
  };
  
  // Account Status
  status: 'onboarding' | 'active' | 'suspended';
  slaPackage: 'basic' | 'professional' | 'enterprise';
  joinedAt: Date;
  lastLogin?: Date;
}

export interface Campaign {
  id: string;
  maklerId: string;
  name: string;
  
  // Kampagnen-Details
  platforms: ('facebook' | 'instagram' | 'google' | 'youtube')[];
  category: 'altersvorsorge' | 'baufinanzierung' | 'krankenversicherung' | 'lebensversicherung' | 'custom';
  
  // Targeting
  targetAudience: {
    ageRange: { min: number; max: number };
    location: string[];
    interests: string[];
    customAudience?: string;
  };
  
  // Budget & Laufzeit
  budget: {
    daily: number;
    total: number;
    currency: 'EUR';
  };
  
  startDate: Date;
  endDate?: Date;
  
  // Status & Performance
  status: 'draft' | 'pending_approval' | 'active' | 'paused' | 'completed';
  performance?: {
    impressions: number;
    clicks: number;
    leads: number;
    ctr: number;
    cpl: number; // Cost per Lead
    spend: number;
  };
  
  createdAt: Date;
  landingPageId?: string;
}

export interface LandingPage {
  id: string;
  maklerId: string;
  campaignId?: string;
  name: string;
  
  // Inhalt & Design
  template: 'altersvorsorge' | 'baufinanzierung' | 'krankenversicherung' | 'custom';
  content: {
    headline: string;
    subheadline: string;
    benefits: string[];
    ctaText: string;
    heroImage?: string;
    testimonials?: Testimonial[];
  };
  
  // Formular-Konfiguration
  leadForm: {
    fields: FormField[];
    doubleOptIn: boolean;
    privacyText: string;
    thankYouPage: string;
  };
  
  // DSGVO & Compliance
  gdprCompliant: boolean;
  cookieConsent: boolean;
  
  // URL & Status
  slug: string;
  url: string;
  isPublished: boolean;
  
  // Analytics
  analytics: {
    views: number;
    conversions: number;
    conversionRate: number;
  };
  
  createdAt: Date;
  updatedAt: Date;
}

export interface FormField {
  id: string;
  type: 'text' | 'email' | 'phone' | 'select' | 'textarea' | 'checkbox' | 'date';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[]; // für select fields
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
  };
}

export interface Lead {
  id: string;
  maklerId: string;
  campaignId?: string;
  landingPageId: string;
  
  // Kontaktdaten
  personalData: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    dateOfBirth?: Date;
    address?: {
      street: string;
      zipCode: string;
      city: string;
    };
  };
  
  // Interesse & Beratungsbedarf
  interest: {
    category: string;
    specificNeeds: string;
    urgency: 'low' | 'medium' | 'high';
    budget?: string;
    timeline?: string;
  };
  
  // Lead-Qualifizierung
  score: number; // 0-100
  stage: 'neu' | 'kontaktiert' | 'qualifiziert' | 'warm' | 'heiß' | 'termin' | 'abgeschlossen' | 'verloren';
  
  // Kommunikation
  communications: Communication[];
  nextFollowUp?: Date;
  
  // DSGVO
  consent: {
    marketing: boolean;
    dataProcessing: boolean;
    doubleOptInConfirmed: boolean;
    ipAddress: string;
    timestamp: Date;
  };
  
  // Tracking
  source: {
    platform: string;
    campaign: string;
    medium: string;
    referrer?: string;
  };
  
  createdAt: Date;
  lastContactAt?: Date;
  exportedToPMA: boolean;
  pmaExportDate?: Date;
}

export interface Communication {
  id: string;
  leadId: string;
  type: 'email' | 'whatsapp' | 'sms' | 'call' | 'meeting';
  direction: 'outbound' | 'inbound';
  
  content: {
    subject?: string;
    message: string;
    template?: string;
    attachments?: string[];
  };
  
  // Status
  status: 'sent' | 'delivered' | 'opened' | 'clicked' | 'replied' | 'failed';
  
  // Automatisierung
  isAutomated: boolean;
  triggerId?: string; // für automatisierte Follow-ups
  
  timestamp: Date;
  scheduledFor?: Date;
}

export interface AutomationTrigger {
  id: string;
  maklerId: string;
  name: string;
  
  // Trigger-Bedingungen
  conditions: {
    leadStage?: string;
    daysSinceLastContact?: number;
    leadScore?: { min?: number; max?: number };
    source?: string;
  };
  
  // Aktionen
  actions: {
    type: 'send_email' | 'send_whatsapp' | 'send_sms' | 'update_stage' | 'schedule_call';
    template?: string;
    delay?: number; // in Stunden
    content?: string;
  }[];
  
  isActive: boolean;
  createdAt: Date;
}

export interface Template {
  id: string;
  name: string;
  category: 'altersvorsorge' | 'baufinanzierung' | 'krankenversicherung' | 'general';
  type: 'campaign' | 'landingpage' | 'email' | 'whatsapp' | 'sms';
  
  content: {
    subject?: string;
    headline?: string;
    body: string;
    cta?: string;
    variables: string[]; // {{firstName}}, {{interest}} etc.
  };
  
  // Preview & Analytics
  thumbnail?: string;
  usage_count: number;
  conversion_rate?: number;
  
  isActive: boolean;
  createdAt: Date;
}

export interface SupportTicket {
  id: string;
  maklerId: string;
  
  subject: string;
  description: string;
  category: 'technical' | 'campaigns' | 'leads' | 'billing' | 'training';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  
  // SLA basiert auf Makler-Paket
  slaDeadline: Date;
  
  status: 'open' | 'in_progress' | 'waiting_for_customer' | 'resolved' | 'closed';
  assignedTo?: string;
  
  messages: SupportMessage[];
  
  createdAt: Date;
  resolvedAt?: Date;
}

export interface SupportMessage {
  id: string;
  ticketId: string;
  senderId: string;
  senderType: 'makler' | 'support' | 'system';
  
  message: string;
  attachments?: string[];
  
  timestamp: Date;
}

export interface Dashboard {
  maklerId: string;
  period: 'today' | 'week' | 'month' | 'quarter';
  
  campaigns: {
    active: number;
    total: number;
    totalSpend: number;
    avgCTR: number;
  };
  
  leads: {
    total: number;
    new: number;
    qualified: number;
    converted: number;
    conversionRate: number;
  };
  
  communications: {
    sent: number;
    opened: number;
    replied: number;
    openRate: number;
  };
  
  recentActivity: Activity[];
}

export interface Activity {
  id: string;
  type: 'new_lead' | 'lead_qualified' | 'campaign_started' | 'email_sent' | 'meeting_scheduled';
  description: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  text: string;
  rating: number;
  image?: string;
}

// CSV Export Format für PMA
export interface PMAExport {
  exportId: string;
  maklerId: string;
  leads: ExportLead[];
  exportDate: Date;
  format: 'csv' | 'excel';
}

export interface ExportLead {
  leadId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  interest: string;
  leadScore: number;
  stage: string;
  source: string;
  createdAt: Date;
  lastContactAt?: Date;
} 