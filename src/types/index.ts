// Leadgenerierungs-Plattform Typen für Versicherungsmakler

export interface Makler {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  companyName?: string;
  partnerId: string;
  
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
  exportedToCRM: boolean;
  crmExportDate?: Date;
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
export interface CRMExport {
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

// Modulares System
export interface Module {
  id: string;
  name: string;
  description: string;
  category: 'basic' | 'premium' | 'enterprise';
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  included?: boolean; // für Grundpaket
  icon: string;
  comingSoon?: boolean;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  includedModules: string[];
  features: string[];
  target: string;
}

// Erweiterte Lead-Typen für modulare Features
export interface LeadCluster {
  id: string;
  name: string;
  criteria: {
    ageRange?: [number, number];
    income?: [number, number];
    region?: string[];
    interests?: string[];
    behavior?: string[];
  };
  leadCount: number;
  conversionRate: number;
  averageValue: number;
}

export interface AutomationRule {
  id: string;
  name: string;
  trigger: 'time_based' | 'action_based' | 'score_based' | 'stage_based';
  conditions: {
    field: string;
    operator: 'equals' | 'greater' | 'less' | 'contains';
    value: string | number;
  }[];
  actions: {
    type: 'email' | 'sms' | 'whatsapp' | 'task' | 'stage_change' | 'tag';
    content?: string;
    delay?: number; // in hours
    assignTo?: string;
  }[];
  isActive: boolean;
  lastExecuted?: Date;
  executionCount: number;
}

export interface ContractTemplate {
  id: string;
  name: string;
  category: 'lebensversicherung' | 'krankenversicherung' | 'sachversicherung' | 'altersvorsorge';
  steps: {
    id: string;
    title: string;
    fields: {
      name: string;
      type: 'text' | 'number' | 'select' | 'date' | 'checkbox' | 'file';
      required: boolean;
      options?: string[];
      validation?: string;
    }[];
    optional: boolean;
  }[];
  estimatedDuration: number; // in minutes
  conversionRate: number;
}

export interface PrequalificationProcess {
  id: string;
  name: string;
  insuranceType: string;
  questions: {
    id: string;
    question: string;
    type: 'single' | 'multiple' | 'range' | 'text';
    options?: string[];
    scoring: { [key: string]: number };
    required: boolean;
    dependsOn?: string; // other question id
  }[];
  scoringRules: {
    minScore: number;
    maxScore: number;
    qualification: 'hoch' | 'mittel' | 'niedrig' | 'ungeeignet';
    recommendedActions: string[];
  }[];
}

export interface Analytics {
  leadSources: { source: string; count: number; conversionRate: number }[];
  conversionFunnel: { stage: string; count: number; dropOffRate: number }[];
  campaignPerformance: { campaign: string; roi: number; cpl: number; conversions: number }[];
  geographicDistribution: { region: string; leads: number; value: number }[];
  timeBasedMetrics: { period: string; leads: number; conversions: number; revenue: number }[];
  clusterAnalysis: LeadCluster[];
}

// AI Call Center Types
export interface CallCenterAgent {
  id: string;
  name: string;
  status: 'available' | 'busy' | 'offline';
  type: 'ai' | 'human';
  specializations: string[];
  currentCalls: number;
  maxConcurrentCalls: number;
  avgCallDuration: number;
  totalCallsToday: number;
  successRate: number;
}

export interface Call {
  id: string;
  leadId?: string;
  customerPhone: string;
  customerName?: string;
  agentId: string;
  type: 'inbound' | 'outbound';
  status: 'ringing' | 'active' | 'hold' | 'completed' | 'missed' | 'failed';
  category: 'support' | 'sales' | 'followup' | 'appointment';
  startTime: Date;
  endTime?: Date;
  duration?: number; // in seconds
  transcript?: string;
  summary?: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  outcome?: 'lead_qualified' | 'appointment_scheduled' | 'callback_requested' | 'not_interested' | 'resolved';
  followUpRequired: boolean;
  followUpDate?: Date;
  notes?: string;
  recording?: string;
}

export interface CallQueue {
  id: string;
  name: string;
  type: 'general' | 'priority' | 'vip';
  waitingCalls: Call[];
  averageWaitTime: number;
  maxWaitTime: number;
  abandonmentRate: number;
}

export interface CallScript {
  id: string;
  name: string;
  category: string;
  type: 'greeting' | 'qualification' | 'objection_handling' | 'closing';
  content: string;
  variables: string[];
  useCase: string;
  isActive: boolean;
}

export interface VoiceAnalytics {
  callId: string;
  speakingRatio: number; // agent vs customer
  silencePercentage: number;
  interruptionCount: number;
  keywordMatches: string[];
  emotionAnalysis: {
    timestamp: number;
    emotion: 'happy' | 'neutral' | 'frustrated' | 'angry' | 'excited';
    confidence: number;
  }[];
  talkSpeed: number; // words per minute
  volume: number;
}

export interface CallCenterMetrics {
  date: Date;
  totalCalls: number;
  answeredCalls: number;
  missedCalls: number;
  averageWaitTime: number;
  averageCallDuration: number;
  firstCallResolution: number;
  customerSatisfaction: number;
  leadsGenerated: number;
  appointmentsScheduled: number;
  conversionRate: number;
  aiVsHumanPerformance: {
    ai: { calls: number; satisfaction: number; resolution: number };
    human: { calls: number; satisfaction: number; resolution: number };
  };
}

export interface AISettings {
  id: string;
  name: string;
  voice: 'male' | 'female';
  language: 'de' | 'en';
  personality: 'professional' | 'friendly' | 'enthusiastic' | 'empathetic';
  responseSpeed: 'fast' | 'normal' | 'thoughtful';
  maxCallDuration: number;
  transferThreshold: number; // when to transfer to human
  knowledgeBase: string[];
  customInstructions?: string;
  isActive: boolean;
}

// ===== SOCIAL MEDIA MANAGEMENT =====

export interface SocialMediaPost {
  id: string;
  maklerId: string;
  title: string;
  content: string;
  contentType: 'text' | 'image' | 'video' | 'carousel' | 'reel' | 'story';
  
  // AI-Generated Content
  aiGenerated: boolean;
  aiPrompt?: string;
  tone: 'professional' | 'casual' | 'educational' | 'promotional' | 'inspirational';
  target: 'b2b' | 'b2c' | 'young_professionals' | 'families' | 'seniors';
  
  // Platform-specific content
  platforms: {
    platform: 'facebook' | 'instagram' | 'linkedin' | 'tiktok' | 'youtube' | 'twitter';
    customContent?: string;
    hashtags: string[];
    mentions: string[];
    scheduledFor: Date;
    posted: boolean;
    postUrl?: string;
    performance?: SocialMediaPerformance;
  }[];
  
  // Media assets
  media: {
    type: 'image' | 'video' | 'carousel';
    url: string;
    alt?: string;
    thumbnail?: string;
  }[];
  
  // Insurance-specific
  category: 'altersvorsorge' | 'krankenversicherung' | 'lebensversicherung' | 'sachversicherung' | 'beratung' | 'tipps';
  complianceApproved: boolean;
  legalDisclaimer?: string;
  
  // Status & Planning
  status: 'draft' | 'scheduled' | 'published' | 'failed' | 'archived';
  createdAt: Date;
  publishedAt?: Date;
  
  // Campaign Integration
  campaignId?: string;
  leadMagnet?: {
    type: 'whitepaper' | 'calculator' | 'checklist' | 'webinar';
    title: string;
    landingPageUrl: string;
  };
}

export interface SocialMediaPerformance {
  platform: string;
  postId: string;
  
  // Engagement metrics
  views: number;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  clickthroughs: number;
  
  // Lead metrics
  leadClicks: number;
  conversions: number;
  conversionRate: number;
  
  // Reach & Impressions
  reach: number;
  impressions: number;
  
  // Time-based
  publishedAt: Date;
  lastUpdated: Date;
  
  // Audience insights
  demographics: {
    ageGroups: { range: string; percentage: number }[];
    gender: { male: number; female: number };
    locations: { city: string; percentage: number }[];
  };
}

export interface SocialMediaCalendar {
  id: string;
  maklerId: string;
  month: number;
  year: number;
  
  // Calendar structure
  days: {
    date: Date;
    posts: SocialMediaPost[];
    events: {
      type: 'campaign_start' | 'campaign_end' | 'compliance_review' | 'content_planning';
      title: string;
      description?: string;
    }[];
  }[];
  
  // Planning goals
  monthlyGoals: {
    totalPosts: number;
    platformDistribution: { platform: string; posts: number }[];
    contentTypes: { type: string; count: number }[];
    expectedReach: number;
    leadTarget: number;
  };
  
  // Templates & Planning
  recurringPosts: {
    frequency: 'daily' | 'weekly' | 'monthly';
    template: string;
    platforms: string[];
    lastPosted?: Date;
  }[];
}

export interface SocialMediaTemplate {
  id: string;
  name: string;
  category: string;
  
  // Template content
  content: {
    headline: string;
    body: string;
    callToAction: string;
    hashtags: string[];
    variables: string[]; // e.g., {{customerName}}, {{productName}}
  };
  
  // Platform customization
  platformVersions: {
    platform: string;
    maxLength: number;
    customContent?: string;
    requiredHashtags: string[];
  }[];
  
  // Insurance compliance
  requiresApproval: boolean;
  complianceNotes?: string;
  legalText?: string;
  
  // Usage statistics
  usageCount: number;
  averagePerformance: {
    engagement: number;
    reach: number;
    conversions: number;
  };
  
  isActive: boolean;
  createdAt: Date;
}

export interface SocialMediaCampaign {
  id: string;
  maklerId: string;
  name: string;
  description: string;
  
  // Campaign strategy
  objective: 'brand_awareness' | 'lead_generation' | 'engagement' | 'traffic' | 'conversions';
  target: {
    demographics: {
      ageMin: number;
      ageMax: number;
      gender?: 'male' | 'female' | 'all';
      income?: { min: number; max: number };
    };
    interests: string[];
    behaviors: string[];
    locations: string[];
    customAudience?: string;
  };
  
  // Timeline & Budget
  startDate: Date;
  endDate: Date;
  budget: {
    total: number;
    platformDistribution: { platform: string; amount: number }[];
  };
  
  // Content strategy
  contentPlan: {
    totalPosts: number;
    contentTypes: { type: string; percentage: number }[];
    postingFrequency: { platform: string; postsPerWeek: number }[];
    themes: string[];
  };
  
  // Performance tracking
  performance: {
    totalReach: number;
    totalEngagement: number;
    websiteClicks: number;
    leadsGenerated: number;
    costPerLead: number;
    roi: number;
  };
  
  // Posts associated with campaign
  posts: SocialMediaPost[];
  
  status: 'planning' | 'active' | 'paused' | 'completed' | 'cancelled';
  createdAt: Date;
}

export interface SocialMediaAnalytics {
  maklerId: string;
  period: 'week' | 'month' | 'quarter' | 'year';
  
  // Overall performance
  totalFollowers: { platform: string; count: number; growth: number }[];
  totalReach: number;
  totalEngagement: number;
  engagementRate: number;
  
  // Content performance
  topPosts: {
    postId: string;
    platform: string;
    content: string;
    engagement: number;
    reach: number;
    conversions: number;
  }[];
  
  // Platform breakdown
  platformMetrics: {
    platform: string;
    posts: number;
    reach: number;
    engagement: number;
    followers: number;
    leadGeneration: number;
  }[];
  
  // Lead generation
  leadSources: {
    platform: string;
    leads: number;
    conversionRate: number;
    costPerLead: number;
  }[];
  
  // Competitor analysis
  competitorInsights?: {
    name: string;
    followers: number;
    engagementRate: number;
    postsPerWeek: number;
    topContent: string[];
  }[];
  
  // Recommendations
  aiRecommendations: {
    type: 'content' | 'timing' | 'hashtag' | 'platform' | 'audience';
    suggestion: string;
    reasoning: string;
    expectedImpact: 'low' | 'medium' | 'high';
  }[];
}

export interface SocialMediaAutomation {
  id: string;
  maklerId: string;
  name: string;
  
  // Trigger conditions
  triggers: {
    type: 'time_based' | 'event_based' | 'performance_based';
    condition: string;
    value?: string | number;
  }[];
  
  // Actions
  actions: {
    type: 'post_content' | 'send_dm' | 'comment_response' | 'follow_up' | 'report_generate';
    platform?: string;
    templateId?: string;
    content?: string;
    delay?: number; // hours
  }[];
  
  // Content rules
  contentRules: {
    autoHashtags: boolean;
    autoMentions: boolean;
    complianceCheck: boolean;
    platformOptimization: boolean;
  };
  
  // Performance tracking
  executionCount: number;
  lastExecuted?: Date;
  successRate: number;
  
  isActive: boolean;
  createdAt: Date;
}

export interface AIContentGenerator {
  id: string;
  type: 'post' | 'headline' | 'hashtags' | 'description' | 'script';
  
  // Input parameters
  prompt: string;
  tone: string;
  length: 'short' | 'medium' | 'long';
  platform: string;
  category: string;
  
  // Generated content
  generatedContent: {
    text: string;
    alternatives: string[];
    confidence: number;
    complianceScore: number;
    improvementSuggestions: string[];
  };
  
  // User feedback
  userRating?: number;
  userFeedback?: string;
  wasUsed: boolean;
  
  generatedAt: Date;
}

export interface SocialMediaCompliance {
  id: string;
  maklerId: string;
  
  // Compliance rules
  rules: {
    platform: string;
    maxHashtags: number;
    requiredDisclosures: string[];
    bannedWords: string[];
    requiresApproval: boolean;
  }[];
  
  // Review queue
  pendingPosts: {
    postId: string;
    platform: string;
    content: string;
    submittedAt: Date;
    priority: 'low' | 'medium' | 'high';
  }[];
  
  // Approval workflow
  approvers: {
    userId: string;
    role: 'compliance_officer' | 'legal_counsel' | 'marketing_manager';
    permissions: string[];
  }[];
  
  // Audit trail
  auditLog: {
    postId: string;
    action: 'submitted' | 'approved' | 'rejected' | 'modified';
    userId: string;
    reason?: string;
    timestamp: Date;
  }[];
}

export interface SocialMediaIntegration {
  id: string;
  maklerId: string;
  platform: 'facebook' | 'instagram' | 'linkedin' | 'tiktok' | 'youtube' | 'twitter';
  
  // Authentication
  accessToken: string;
  refreshToken?: string;
  expiresAt?: Date;
  accountId: string;
  accountName: string;
  
  // Permissions
  permissions: string[];
  canPost: boolean;
  canAnalyze: boolean;
  canMessage: boolean;
  
  // Settings
  autoPosting: boolean;
  defaultHashtags: string[];
  brandingSettings: {
    logo?: string;
    watermark?: string;
    brandColors: string[];
  };
  
  // Sync status
  lastSync: Date;
  syncErrors: string[];
  isActive: boolean;
  
  connectedAt: Date;
}

// Lead Generation from Social Media
export interface SocialMediaLead {
  id: string;
  postId: string;
  platform: string;
  maklerId: string;
  
  // Lead information
  socialProfile: {
    username: string;
    displayName: string;
    profileUrl: string;
    followerCount?: number;
    isVerified: boolean;
  };
  
  // Interaction
  interactionType: 'comment' | 'dm' | 'form_fill' | 'link_click' | 'phone_call';
  message?: string;
  intent: 'information' | 'quote' | 'appointment' | 'complaint' | 'general';
  
  // Lead scoring
  score: number;
  qualityIndicators: {
    profileComplete: boolean;
    hasContactInfo: boolean;
    engagementHistory: boolean;
    networkSize: 'small' | 'medium' | 'large';
  };
  
  // Follow-up
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  assignedTo?: string;
  nextAction?: string;
  scheduledFollowUp?: Date;
  
  createdAt: Date;
  convertedAt?: Date;
} 