'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
interface User {
  id: string;
  email: string;
  role: 'SUPER_ADMIN' | 'TENANT_ADMIN' | 'MAKLER' | 'VIEWER';
  tenantId: string | null;
  makler?: {
    id: string;
    firstName: string;
    lastName: string;
    company: string;
    primaryColor: string;
    secondaryColor: string;
  };
  tenant?: {
    id: string;
    name: string;
    subdomain: string;
    plan: 'STARTER' | 'PROFESSIONAL' | 'ENTERPRISE';
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
  isSuperAdmin: boolean;
  isTenantAdmin: boolean;
  isMakler: boolean;
  getCurrentTenant: () => User['tenant'] | null;
}

// Create Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'login',
          email,
          password,
        }),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Login fehlgeschlagen' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Netzwerk-Fehler' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // Clear cookie by making request to logout endpoint (you may want to add this)
    fetch('/api/auth/logout', { method: 'POST', credentials: 'include' }).catch(() => {
      // Silent fail - just clear local state
    });
    
    setUser(null);
    // Redirect to home
    window.location.href = '/';
  };

  // Helper functions
  const isAuthenticated = !!user;
  const isSuperAdmin = user?.role === 'SUPER_ADMIN';
  const isTenantAdmin = user?.role === 'TENANT_ADMIN';
  const isMakler = user?.role === 'MAKLER';
  const getCurrentTenant = () => user?.tenant || null;

  const contextValue: AuthContextType = {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
    isSuperAdmin,
    isTenantAdmin,
    isMakler,
    getCurrentTenant,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// HOC for protected routes
export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requiredRole?: User['role']
) {
  return function AuthenticatedComponent(props: P) {
    const { user, loading } = useAuth();

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
        </div>
      );
    }

    if (!user) {
      // Redirect to login or show login form
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Anmeldung erforderlich</h2>
              <p className="mt-2 text-gray-600">
                Sie müssen sich anmelden, um diese Seite zu sehen.
              </p>
              <button
                onClick={() => window.location.href = '/'}
                className="mt-4 btn-primary"
              >
                Zur Anmeldung
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (requiredRole && user.role !== requiredRole) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Zugriff verweigert</h2>
              <p className="mt-2 text-gray-600">
                Sie haben nicht die erforderlichen Berechtigungen für diese Seite.
              </p>
              <p className="text-sm text-gray-500">
                Erforderliche Rolle: {requiredRole} | Ihre Rolle: {user.role}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
} 