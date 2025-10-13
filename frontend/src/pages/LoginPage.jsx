import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Lock, Mail, AlertCircle, Brain, Phone, Eye, EyeOff, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';

export default function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Role-based dashboard routing
  const getRoleBasedDashboard = (userRole) => {
    switch (userRole?.toLowerCase()) {
      case 'patient':
        return '/dashboard';
      case 'doctor':
      case 'nurse':
      case 'freelancer':
        return '/doctor-dashboard';
      case 'hospital':
      case 'clinic':
        return '/hospital-admin';
      default:
        return '/dashboard';
    }
  };

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated && user) {
      const dashboardRoute = getRoleBasedDashboard(user.role);
      const from = location.state?.from?.pathname || dashboardRoute;
      navigate(from);
    }
  }, [isAuthenticated, user, navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!emailOrPhone || !password) {
      setError('Please enter both email/phone and password');
      setLoading(false);
      return;
    }

    try {
      const response = await login(emailOrPhone, password);
      
      // Role-based redirection after successful login
      const userRole = response?.user?.role || user?.role;
      const dashboardRoute = getRoleBasedDashboard(userRole);
      const from = location.state?.from?.pathname || dashboardRoute;
      
      navigate(from);
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4 py-4 sm:py-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/8 via-transparent to-transparent"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">MediVolt</h1>
            </div>
            <p className="text-purple-100 text-center text-sm sm:text-base">Your AI-Powered Healthcare Platform</p>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Welcome Back! 👋</h2>
              <p className="text-gray-400 text-sm sm:text-base">Sign in to access your personalized healthcare dashboard</p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-6 flex items-center"
              >
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/30">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-400" />
                  Login Credentials
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-300 mb-2">
                      Email or Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        id="emailOrPhone"
                        name="emailOrPhone"
                        type="text"
                        autoComplete="username"
                        required
                        className="block w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 transition-all duration-300 text-base sm:text-sm min-h-[48px]"
                        placeholder="Enter email or phone number"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="block w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 transition-all duration-300 text-base sm:text-sm min-h-[48px]"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center min-w-[44px] min-h-[44px] justify-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-400 transition-colors" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500 hover:text-gray-400 transition-colors" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 sm:mt-4">
                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-500 hover:via-purple-600 hover:to-blue-500 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-base sm:text-lg min-h-[48px]"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Lock className="h-5 w-5 mr-2" />
                      Sign In to Dashboard
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>

            {/* Register Link */}
            <div className="mt-8 text-center">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                <p className="text-gray-300 text-sm mb-3">Don't have an account yet?</p>
                <Link
                  to="/registration"
                  className="inline-flex items-center justify-center w-full py-3 px-4 border border-purple-500/50 rounded-lg text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 font-medium"
                >
                  <User className="h-4 w-4 mr-2" />
                  Create New Account
                </Link>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
              <p>🔒 Your data is encrypted and secure with MediVolt</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
