'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginTest() {
  const { user, login, logout, loading: authLoading, isAuthenticated } = useAuth();
  const [loginData, setLoginData] = useState({
    email: 'max.mustermann@pma-muenchen.de',
    password: 'demo123'
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await login(loginData.email, loginData.password);
      setResult(response);
    } catch (error) {
      setResult({ error: 'Network error' });
    } finally {
      setLoading(false);
    }
  };

  const testAccounts = [
    { email: 'admin@leadgen-platform.com', password: 'demo123', role: 'SUPER_ADMIN' },
    { email: 'max.mustermann@pma-muenchen.de', password: 'demo123', role: 'MAKLER' },
    { email: 'admin@pma-muenchen.de', password: 'demo123', role: 'TENANT_ADMIN' },
    { email: 'peter.schmidt@pma-berlin.de', password: 'demo123', role: 'MAKLER' },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Multi-Tenant Login Test</h2>
      
      {/* Current User Display */}
      {isAuthenticated && user && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">✅ Angemeldet als:</h3>
          <div className="space-y-1 text-sm">
            <p><strong>Name:</strong> {user.makler?.firstName} {user.makler?.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Rolle:</strong> {user.role}</p>
            <p><strong>Tenant:</strong> {user.tenant?.name || 'Kein Tenant'}</p>
            <p><strong>Plan:</strong> {user.tenant?.plan || 'N/A'}</p>
          </div>
          <button
            onClick={logout}
            className="mt-3 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Abmelden
          </button>
        </div>
      )}
      
      <div className="grid gap-4 mb-6">
        <h3 className="text-lg font-semibold">Test Accounts:</h3>
        {testAccounts.map((account, index) => (
          <button
            key={index}
            onClick={() => setLoginData({ email: account.email, password: account.password })}
            className="p-3 text-left border rounded-lg hover:bg-gray-50"
          >
            <div className="font-medium">{account.email}</div>
            <div className="text-sm text-gray-500">{account.role}</div>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>

      {result && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Result:</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 