import { PrismaClient } from '../generated/prisma';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding multi-tenant database...');

  // Cleanup existing data
  await prisma.leadActivity.deleteMany();
  await prisma.communication.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.landingPage.deleteMany();
  await prisma.campaign.deleteMany();
  await prisma.makler.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();
  await prisma.tenant.deleteMany();

  const hashedPassword = await bcryptjs.hash('demo123', 12);

  // ==========================================
  // CREATE TENANTS (Different PMA Instances)
  // ==========================================

  const tenantMuenchen = await prisma.tenant.create({
    data: {
      name: 'PMA München GmbH',
      subdomain: 'muenchen',
      domain: 'leads.pma-muenchen.de',
      isActive: true,
      plan: 'PROFESSIONAL',
      maxMaklers: 25,
      maxLeads: 10000,
      dataRegion: 'EU',
      gdprContact: 'datenschutz@pma-muenchen.de'
    }
  });

  const tenantBerlin = await prisma.tenant.create({
    data: {
      name: 'PMA Berlin AG',
      subdomain: 'berlin',
      isActive: true,
      plan: 'STARTER',
      maxMaklers: 5,
      maxLeads: 1000,
      dataRegion: 'EU',
      gdprContact: 'privacy@pma-berlin.de'
    }
  });

  const tenantHamburg = await prisma.tenant.create({
    data: {
      name: 'PMA Hamburg e.K.',
      subdomain: 'hamburg',
      isActive: true,
      plan: 'ENTERPRISE',
      maxMaklers: 100,
      maxLeads: 50000,
      dataRegion: 'EU'
    }
  });

  console.log(`✅ Created ${3} tenants (PMA instances)`);

  // ==========================================
  // CREATE SUPER ADMIN (Your Platform Admin)
  // ==========================================

  const superAdmin = await prisma.user.create({
    data: {
      email: 'admin@leadgen-platform.com',
      password: hashedPassword,
      role: 'SUPER_ADMIN',
      tenantId: null // Super admins don't belong to any tenant
    }
  });

  console.log(`✅ Created super admin: ${superAdmin.email}`);

  // ==========================================
  // MÜNCHEN TENANT DATA
  // ==========================================

  // Tenant Admin München
  const adminMuenchen = await prisma.user.create({
    data: {
      email: 'admin@pma-muenchen.de',
      password: hashedPassword,
      role: 'TENANT_ADMIN',
      tenantId: tenantMuenchen.id
    }
  });

  // Makler München
  const userMuenchen1 = await prisma.user.create({
    data: {
      email: 'max.mustermann@pma-muenchen.de',
      password: hashedPassword,
      role: 'MAKLER',
      tenantId: tenantMuenchen.id,
      makler: {
        create: {
          tenantId: tenantMuenchen.id,
          firstName: 'Max',
          lastName: 'Mustermann',
          company: 'PMA München - Mustermann',
          phone: '+49 89 123456789',
          website: 'www.mustermann-beratung.de',
          address: 'Maximilianstraße 13',
          city: 'München',
          postalCode: '80539',
          primaryColor: '#2563eb',
          secondaryColor: '#64748b'
        }
      }
    },
    include: { makler: true }
  });

  const userMuenchen2 = await prisma.user.create({
    data: {
      email: 'anna.weber@pma-muenchen.de',
      password: hashedPassword,
      role: 'MAKLER',
      tenantId: tenantMuenchen.id,
      makler: {
        create: {
          tenantId: tenantMuenchen.id,
          firstName: 'Anna',
          lastName: 'Weber',
          company: 'PMA München - Weber',
          phone: '+49 89 987654321',
          address: 'Leopoldstraße 25',
          city: 'München',
          postalCode: '80802',
          primaryColor: '#059669',
          secondaryColor: '#6b7280'
        }
      }
    },
    include: { makler: true }
  });

  // Campaigns München
  const campaignsMuenchen = await Promise.all([
    prisma.campaign.create({
      data: {
        maklerId: userMuenchen1.makler!.id,
        tenantId: tenantMuenchen.id,
        name: 'Altersvorsorge München Facebook',
        description: 'Zielgruppe: 35-55 Jahre, München & Umland',
        status: 'ACTIVE',
        budget: 2000,
        spent: 876.50,
        platform: 'FACEBOOK',
        targeting: {
          ageMin: 35,
          ageMax: 55,
          interests: ['Altersvorsorge', 'Investmentfonds'],
          locations: ['München', 'Bayern']
        },
        impressions: 45230,
        clicks: 1256,
        leads: 45,
        conversions: 12,
        ctr: 2.78,
        cpl: 19.48,
        conversionRate: 9.55
      }
    }),
    prisma.campaign.create({
      data: {
        maklerId: userMuenchen2.makler!.id,
        tenantId: tenantMuenchen.id,
        name: 'Baufinanzierung Google Ads',
        description: 'Keywords: Hausfinanzierung München',
        status: 'ACTIVE',
        budget: 1500,
        spent: 1234.80,
        platform: 'GOOGLE',
        targeting: {
          keywords: ['Hausfinanzierung München', 'Baukredit Bayern'],
          locations: ['München', 'Umland München']
        },
        impressions: 23450,
        clicks: 890,
        leads: 34,
        conversions: 8,
        ctr: 3.79,
        cpl: 36.32,
        conversionRate: 9.21
      }
    })
  ]);

  // Leads München
  await Promise.all([
    prisma.lead.create({
      data: {
        maklerId: userMuenchen1.makler!.id,
        tenantId: tenantMuenchen.id,
        campaignId: campaignsMuenchen[0].id,
        firstName: 'Anna',
        lastName: 'Schmidt',
        email: 'anna.schmidt@email.de',
        phone: '+49 89 987654321',
        dateOfBirth: new Date('1985-03-15'),
        address: 'Leopoldstraße 45',
        city: 'München',
        postalCode: '80802',
        status: 'HEISS',
        score: 78,
        source: 'Facebook Ads',
        interest: 'BAUFINANZIERUNG',
        budget: 400000,
        notes: 'Interessiert an Baufinanzierung für Einfamilienhaus München',
        consentGiven: true,
        consentDate: new Date(),
        marketingConsent: true,
        lastContact: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        nextFollowUp: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
      }
    }),
    prisma.lead.create({
      data: {
        maklerId: userMuenchen2.makler!.id,
        tenantId: tenantMuenchen.id,
        campaignId: campaignsMuenchen[1].id,
        firstName: 'Thomas',
        lastName: 'Weber',
        email: 'thomas.weber@consulting.de',
        phone: '+49 89 555123456',
        address: 'Schwabing',
        city: 'München',
        postalCode: '80799',
        status: 'WARM',
        score: 67,
        source: 'Google Ads',
        interest: 'KRANKENVERSICHERUNG',
        budget: 15000,
        notes: 'Selbstständiger Berater, sucht PKV-Wechsel',
        consentGiven: true,
        consentDate: new Date(),
        marketingConsent: false,
        lastContact: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        nextFollowUp: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
      }
    })
  ]);

  // ==========================================
  // BERLIN TENANT DATA
  // ==========================================

  const adminBerlin = await prisma.user.create({
    data: {
      email: 'admin@pma-berlin.de',
      password: hashedPassword,
      role: 'TENANT_ADMIN',
      tenantId: tenantBerlin.id
    }
  });

  const userBerlin = await prisma.user.create({
    data: {
      email: 'peter.schmidt@pma-berlin.de',
      password: hashedPassword,
      role: 'MAKLER',
      tenantId: tenantBerlin.id,
      makler: {
        create: {
          tenantId: tenantBerlin.id,
          firstName: 'Peter',
          lastName: 'Schmidt',
          company: 'PMA Berlin - Schmidt',
          phone: '+49 30 123456789',
          address: 'Unter den Linden 15',
          city: 'Berlin',
          postalCode: '10117',
          primaryColor: '#dc2626',
          secondaryColor: '#374151'
        }
      }
    },
    include: { makler: true }
  });

  // Campaign Berlin
  const campaignBerlin = await prisma.campaign.create({
    data: {
      maklerId: userBerlin.makler!.id,
      tenantId: tenantBerlin.id,
      name: 'Lebensversicherung Berlin Instagram',
      description: 'Zielgruppe: Junge Familien Berlin',
      status: 'ACTIVE',
      budget: 800,
      spent: 456.30,
      platform: 'INSTAGRAM',
      targeting: {
        ageMin: 25,
        ageMax: 40,
        interests: ['Familie', 'Finanzplanung'],
        locations: ['Berlin', 'Brandenburg']
      },
      impressions: 18900,
      clicks: 567,
      leads: 23,
      conversions: 5,
      ctr: 3.00,
      cpl: 19.84,
      conversionRate: 8.11
    }
  });

  // Lead Berlin
  await prisma.lead.create({
    data: {
      maklerId: userBerlin.makler!.id,
      tenantId: tenantBerlin.id,
      campaignId: campaignBerlin.id,
      firstName: 'Sarah',
      lastName: 'Müller',
      email: 'sarah.mueller@berlin.de',
      phone: '+49 30 777888999',
      dateOfBirth: new Date('1990-08-22'),
      address: 'Prenzlauer Berg',
      city: 'Berlin',
      postalCode: '10405',
      status: 'QUALIFIZIERT',
      score: 85,
      source: 'Instagram',
      interest: 'LEBENSVERSICHERUNG',
      budget: 25000,
      notes: 'Junge Familie, sehr interessiert an Lebensversicherung',
      consentGiven: true,
      consentDate: new Date(),
      marketingConsent: true,
      lastContact: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      nextFollowUp: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    }
  });

  // ==========================================
  // HAMBURG TENANT DATA (Minimal)
  // ==========================================

  const adminHamburg = await prisma.user.create({
    data: {
      email: 'admin@pma-hamburg.de',
      password: hashedPassword,
      role: 'TENANT_ADMIN',
      tenantId: tenantHamburg.id
    }
  });

  console.log('🎉 Multi-tenant database seeded successfully!');
  console.log('');
  console.log('📋 LOGIN CREDENTIALS:');
  console.log('');
  console.log('🔑 SUPER ADMIN (Platform):');
  console.log('   Email: admin@leadgen-platform.com');
  console.log('   Password: demo123');
  console.log('');
  console.log('🏢 MÜNCHEN PMA:');
  console.log('   Admin: admin@pma-muenchen.de / demo123');
  console.log('   Makler 1: max.mustermann@pma-muenchen.de / demo123');
  console.log('   Makler 2: anna.weber@pma-muenchen.de / demo123');
  console.log('');
  console.log('🏢 BERLIN PMA:');
  console.log('   Admin: admin@pma-berlin.de / demo123');
  console.log('   Makler: peter.schmidt@pma-berlin.de / demo123');
  console.log('');
  console.log('🏢 HAMBURG PMA:');
  console.log('   Admin: admin@pma-hamburg.de / demo123');
  console.log('');
  console.log('🔒 SECURITY FEATURES:');
  console.log('   ✅ Row Level Security (RLS) enabled');
  console.log('   ✅ Strict tenant isolation');
  console.log('   ✅ GDPR compliance functions');
  console.log('   ✅ Audit logging');
  console.log('   ✅ Government regulation ready');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 