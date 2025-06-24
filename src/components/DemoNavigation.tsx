'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Building2, 
  Users, 
  Target, 
  BarChart3, 
  FileDown, 
  PaintBucket,
  Settings,
  Layers,
  Puzzle,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function DemoNavigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      name: 'Übersicht',
      href: '/',
      icon: Building2,
    },
    {
      name: 'Module',
      href: '/modules',
      icon: Puzzle,
    },
    {
      name: 'Demo',
      href: '/demo',
      icon: Settings,
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: BarChart3,
    },
    {
      name: 'Kampagnen',
      href: '/campaigns',
      icon: Target,
    },
    {
      name: 'Leads',
      href: '/leads',
      icon: Users,
    },
    {
      name: 'Landing Pages',
      href: '/landingpage-builder',
      icon: PaintBucket,
    },
    {
      name: 'Export',
      href: '/export',
      icon: FileDown,
    },
    {
      name: 'Analytics',
      href: '/analytics',
      icon: BarChart3,
    }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logo-icon.svg" 
              alt="InsureAI Pro" 
              width={32} 
              height={32}
              className="w-8 h-8"
              priority
            />
            <span className="text-xl font-semibold text-gray-900">
              InsureAI Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-3">
              <span className="text-sm text-gray-500">Demo Makler GmbH</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                STARTER
              </span>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Einstellungen
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm text-gray-500">Demo Makler GmbH</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    STARTER
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 