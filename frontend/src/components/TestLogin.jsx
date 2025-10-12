import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const TestLogin = () => {
  const { isAuthenticated, user, simulateLogin, logout } = useAuth();

  const handleTestLogin = (role) => {
    const userData = {
      name: role === 'new-user' ? 'John Patient' : 
            role === 'doctor' ? 'Dr. Sarah Smith' : 
            'Apollo Hospital',
      email: role === 'new-user' ? 'patient@example.com' : 
             role === 'doctor' ? 'doctor@example.com' : 
             'admin@apollo.com'
    };
    simulateLogin(role, userData);
  };

  if (isAuthenticated) {
    return (
      <div className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 rounded-lg p-4 text-white shadow-lg z-50">
        <div className="text-sm mb-2">
          <strong>Logged in as:</strong> {user?.name} ({user?.role})
        </div>
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition-colors"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 rounded-lg p-4 text-white shadow-lg z-50">
      <div className="text-sm mb-3 font-semibold">Test Login:</div>
      <div className="space-y-2">
        <button
          onClick={() => handleTestLogin('new-user')}
          className="block w-full bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm transition-colors"
        >
          Login as Patient
        </button>
        <button
          onClick={() => handleTestLogin('doctor')}
          className="block w-full bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm transition-colors"
        >
          Login as Doctor
        </button>
        <button
          onClick={() => handleTestLogin('hospital')}
          className="block w-full bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition-colors"
        >
          Login as Hospital
        </button>
      </div>
    </div>
  );
};

export default TestLogin;
