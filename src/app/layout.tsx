import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthNavigation from '@/components/DemoNavigation'
import { AuthProvider } from '@/contexts/AuthContext'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InsureAI Pro - KI-gestützte Versicherungsberatung',
  description: 'Moderne Leadgenerierungs-Demo für PMA-Makler mit umfassenden Tools für Versicherungen, Kapitalanlagen und Finanzierungen.',
  keywords: 'Leadgenerierung, PMA, Demo, Versicherungsmakler, Finanzberatung, Whitelabel, KI, AI',
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233B82F6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231D4ED8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='2' y='2' width='28' height='28' rx='6' ry='6' fill='url(%23grad)'/%3E%3Ccircle cx='12' cy='14' r='1.5' fill='white'/%3E%3Ccircle cx='20' cy='14' r='1.5' fill='white'/%3E%3Ccircle cx='16' cy='22' r='1.5' fill='white'/%3E%3Ccircle cx='16' cy='10' r='1.5' fill='%2306B6D4'/%3E%3Cline x1='12' y1='14' x2='20' y2='14' stroke='white' stroke-width='1'/%3E%3Cline x1='12' y1='14' x2='16' y2='22' stroke='white' stroke-width='1'/%3E%3Cline x1='20' y1='14' x2='16' y2='22' stroke='white' stroke-width='1'/%3E%3Cline x1='12' y1='14' x2='16' y2='10' stroke='%2306B6D4' stroke-width='1'/%3E%3Cline x1='20' y1='14' x2='16' y2='10' stroke='%2306B6D4' stroke-width='1'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <AuthNavigation />
            {children}
          </div>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
} 