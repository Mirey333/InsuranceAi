import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthNavigation from '@/components/DemoNavigation'
import { AuthProvider } from '@/contexts/AuthContext'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PMA Leadgenerierungs-Plattform - Demo',
  description: 'Moderne Leadgenerierungs-Demo für PMA-Makler mit umfassenden Tools für Versicherungen, Kapitalanlagen und Finanzierungen.',
  keywords: 'Leadgenerierung, PMA, Demo, Versicherungsmakler, Finanzberatung, Whitelabel',
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