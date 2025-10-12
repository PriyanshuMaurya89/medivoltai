import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored token and validate
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');
    if (token) {
      authAPI.getProfile()
        .then((userData) => {
          setUser({...userData.user, role: userRole || 'new-user'});
          setIsAuthenticated(true);
        })
        .catch(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('userRole');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await authAPI.login(email, password);
      localStorage.setItem('token', response.token);
      setUser(response.user);
      setIsAuthenticated(true);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password, name, role = 'new-user') => {
    setLoading(true);
    try {
      const response = await authAPI.register(email, password, name);
      localStorage.setItem('token', response.token);
      // Store user role in localStorage for persistence
      localStorage.setItem('userRole', role);
      setUser({...response.user, role});
      setIsAuthenticated(true);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  // Simulate login for registration completion
  const simulateLogin = (role, userData = {}) => {
    const mockToken = 'jwt-token-' + Date.now();
    const mockUser = {
      id: Date.now(),
      name: userData.name || 'User',
      email: userData.email || 'user@example.com',
      role: role
    };
    
    localStorage.setItem('token', mockToken);
    localStorage.setItem('userRole', role);
    setUser(mockUser);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout, simulateLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
