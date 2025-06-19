import { PrismaClient } from '../generated/prisma';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Cleanup existing data
  await prisma.leadActivity.deleteMany();
  await prisma.communication.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.landingPage.deleteMany();
  await prisma.campaign.deleteMany();
  await prisma.makler.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();

  // Create demo user
  const hashedPassword = await bcryptjs.hash('demo123', 12);
  
  const demoUser = await prisma.user.create({
    data: {
      email: 'max.mustermann@pma-demo.de',
      password: hashedPassword,
      role: 'MAKLER',
      makler: {
        create: {
          firstName: 'Max',
          lastName: 'Mustermann',
          company: 'PMA Finanzberatung München',
          phone: '+49 89 123456789',
          website: 'www.pma-muenchen.de',
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

  console.log(`✅ Created demo user: ${demoUser.email}`);

  // Create campaigns
  const campaigns = await Promise.all([
    prisma.campaign.create({
      data: {
        maklerId: demoUser.makler!.id,
        name: 'Altersvorsorge Facebook Kampagne',
        description: 'Zielgruppe: 35-55 Jahre, Interesse an Altersvorsorge',
        status: 'ACTIVE',
        budget: 2000,
        spent: 876.50,
        platform: 'FACEBOOK',
        targeting: {
          ageMin: 35,
          ageMax: 55,
          interests: ['Altersvorsorge', 'Investmentfonds', 'Finanzplanung'],
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
        maklerId: demoUser.makler!.id,
        name: 'Baufinanzierung Google Ads',
        description: 'Keywords: Hausfinanzierung, Baukredit, Immobilienfinanzierung',
        status: 'ACTIVE',
        budget: 1500,
        spent: 1234.80,
        platform: 'GOOGLE',
        targeting: {
          keywords: ['Hausfinanzierung', 'Baukredit', 'Immobilienfinanzierung München'],
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
    }),
    prisma.campaign.create({
      data: {
        maklerId: demoUser.makler!.id,
        name: 'Krankenversicherung Instagram',
        description: 'Selbstständige und Freiberufler PKV',
        status: 'PAUSED',
        budget: 800,
        spent: 456.30,
        platform: 'INSTAGRAM',
        targeting: {
          interests: ['Selbstständigkeit', 'Freiberufler', 'Gesundheit'],
          demographics: 'Selbstständige'
        },
        impressions: 18900,
        clicks: 567,
        leads: 23,
        conversions: 5,
        ctr: 3.00,
        cpl: 19.84,
        conversionRate: 8.11
      }
    })
  ]);

  console.log(`✅ Created ${campaigns.length} campaigns`);

  // Create demo leads with realistic German data
  const leads = await Promise.all([
    prisma.lead.create({
      data: {
        maklerId: demoUser.makler!.id,
        campaignId: campaigns[0].id,
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
        notes: 'Interessiert an Baufinanzierung für Einfamilienhaus. Eigenkapital vorhanden.',
        consentGiven: true,
        consentDate: new Date(),
        marketingConsent: true,
        lastContact: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        nextFollowUp: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // tomorrow
        activities: {
          create: [
            {
              type: 'CREATED',
              description: 'Lead über Facebook Kampagne generiert'
            },
            {
              type: 'CONTACTED',
              description: 'Erstkontakt per E-Mail - sehr interessiert'
            },
            {
              type: 'STATUS_CHANGED',
              description: 'Status geändert von NEU zu HEISS'
            }
          ]
        },
        communications: {
          create: [
            {
              type: 'EMAIL',
              direction: 'OUTBOUND',
              subject: 'Ihre Anfrage zur Baufinanzierung',
              content: 'Vielen Dank für Ihr Interesse an unserer Baufinanzierungsberatung...',
              status: 'READ',
              readAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
            }
          ]
        }
      }
    }),
    prisma.lead.create({
      data: {
        maklerId: demoUser.makler!.id,
        campaignId: campaigns[0].id,
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
        lastContact: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        nextFollowUp: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // in 2 days
        activities: {
          create: [
            {
              type: 'CREATED',
              description: 'Lead über Google Ads generiert'
            },
            {
              type: 'CONTACTED',
              description: 'Telefonkontakt - Informationen gesendet'
            }
          ]
        }
      }
    }),
    prisma.lead.create({
      data: {
        maklerId: demoUser.makler!.id,
        campaignId: campaigns[1].id,
        firstName: 'Sarah',
        lastName: 'Müller',
        email: 'sarah.mueller@gmail.com',
        phone: '+49 89 777888999',
        dateOfBirth: new Date('1990-08-22'),
        address: 'Sendling',
        city: 'München',
        postalCode: '81379',
        status: 'QUALIFIZIERT',
        score: 85,
        source: 'Instagram',
        interest: 'ALTERSVORSORGE',
        budget: 75000,
        notes: 'Junge Führungskraft, sehr interessiert an nachhaltiger Altersvorsorge',
        consentGiven: true,
        consentDate: new Date(),
        marketingConsent: true,
        lastContact: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // yesterday
        nextFollowUp: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // in 3 days
        activities: {
          create: [
            {
              type: 'CREATED',
              description: 'Lead über Instagram Kampagne generiert'
            },
            {
              type: 'CONTACTED',
              description: 'WhatsApp Erstkontakt - sehr positiv'
            },
            {
              type: 'SCORE_UPDATED',
              description: 'Lead-Score erhöht aufgrund hohem Interesse'
            }
          ]
        }
      }
    })
  ]);

  console.log(`✅ Created ${leads.length} demo leads`);

  // Create landing pages
  const landingPages = await Promise.all([
    prisma.landingPage.create({
      data: {
        maklerId: demoUser.makler!.id,
        campaignId: campaigns[0].id,
        name: 'Altersvorsorge Beratung',
        slug: 'altersvorsorge-beratung-muenchen',
        template: 'ALTERSVORSORGE',
        status: 'PUBLISHED',
        headline: 'Sichere Altersvorsorge für Ihre Zukunft',
        subheadline: 'Professionelle Beratung für nachhaltige finanzielle Sicherheit',
        content: {
          benefits: [
            'Kostenlose Erstberatung',
            'Individuelle Lösungen',
            'Langfristige Betreuung',
            'Transparente Kosten'
          ]
        },
        formFields: {
          fields: [
            { name: 'firstName', label: 'Vorname', type: 'text', required: true },
            { name: 'lastName', label: 'Nachname', type: 'text', required: true },
            { name: 'email', label: 'E-Mail', type: 'email', required: true },
            { name: 'phone', label: 'Telefon', type: 'tel', required: false }
          ]
        },
        metaTitle: 'Altersvorsorge Beratung München - PMA Finanzberatung',
        metaDescription: 'Professionelle Altersvorsorge Beratung in München. Kostenlose Erstberatung für nachhaltige finanzielle Sicherheit.',
        views: 2340,
        submissions: 67,
        conversionRate: 2.86,
        publishedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 days ago
      }
    })
  ]);

  console.log(`✅ Created ${landingPages.length} landing pages`);

  console.log('🎉 Database seeded successfully!');
  console.log('');
  console.log('Demo Login:');
  console.log('Email: max.mustermann@pma-demo.de');
  console.log('Password: demo123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 