'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Home,
  BarChart3,
  Target,
  Globe,
  Users,
  FileDown,
  Settings,
  HelpCircle,
  LogOut,
  Sparkles,
  LogIn,
  Shield,
  User
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, isAuthenticated, logout, isSuperAdmin, isTenantAdmin, getCurrentTenant } = useAuth();

  // Get current tenant
  const tenant = getCurrentTenant();

  // Navigation for authenticated users
  const authenticatedNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3, roles: ['all'] },
    { name: 'Leads', href: '/leads', icon: Users, roles: ['all'] },
    { name: 'Kampagnen', href: '/campaigns', icon: Target, roles: ['all'] },
    { name: 'Landingpages', href: '/landingpage-builder', icon: Globe, roles: ['admin', 'tenant_admin'] },
    { name: 'PMA Export', href: '/export', icon: FileDown, roles: ['all'] },
  ];

  // Navigation for guests
  const guestNavigation = [
    { name: 'Übersicht', href: '/', icon: Home },
  ];

  const handleLogout = async () => {
    try {
      logout();
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  // Filter navigation based on user role
  const getFilteredNavigation = () => {
    if (!isAuthenticated) return guestNavigation;
    
    return authenticatedNavigation.filter(item => {
      if (item.roles.includes('all')) return true;
      if (item.roles.includes('admin') && isSuperAdmin) return true;
      if (item.roles.includes('tenant_admin') && isTenantAdmin) return true;
      return false;
    });
  };

  const navigation = getFilteredNavigation();

  // Show loading state
  if (loading) {
    return (
      <div className="bg-white/70 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-lg bg-gray-200 h-10 w-10"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/70 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-2 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PMA Leadgen</h1>
              {isAuthenticated ? (
                <p className="text-xs text-gray-500">
                  {tenant?.name || 'Multi-Tenant Platform'}
                  {isSuperAdmin && ' (Super Admin)'}
                  {isTenantAdmin && ' (Admin)'}
                </p>
              ) : (
                <p className="text-xs text-gray-500">Lead-Management-Platform</p>
              )}
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* User Info */}
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-gray-900 flex items-center">
                    {user?.makler?.firstName ? `${user.makler.firstName} ${user.makler.lastName}` : user?.email}
                    {isSuperAdmin && <Shield className="h-3 w-3 ml-1 text-red-500" />}
                    {isTenantAdmin && <User className="h-3 w-3 ml-1 text-blue-500" />}
                  </p>
                  <p className="text-xs text-gray-500">
                    {user?.role === 'SUPER_ADMIN' ? 'Super Administrator' : 
                     user?.role === 'TENANT_ADMIN' ? 'Tenant Administrator' : 
                     'Makler'} • {tenant?.name}
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                    <Settings className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                    <HelpCircle className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                    title="Ausloggen"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              </>
            ) : (
              /* Guest Actions */
              <div className="flex items-center space-x-3">
                <Link 
                  href="/login"
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Anmelden</span>
                </Link>
                <Link 
                  href="/register"
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>Registrieren</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <div className="grid grid-cols-3 gap-2">
            {navigation.slice(0, 6).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center space-y-1 p-3 rounded-lg text-xs font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Mobile User Actions */}
          {isAuthenticated ? (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {user?.makler?.firstName ? `${user.makler.firstName} ${user.makler.lastName}` : user?.email}
                  </p>
                  <p className="text-xs text-gray-500">{tenant?.name}</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-3">
              <Link 
                href="/login"
                className="flex-1 text-center py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Anmelden
              </Link>
              <Link 
                href="/register"
                className="flex-1 text-center py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Registrieren
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 