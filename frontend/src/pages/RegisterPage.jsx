import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User, Mail, Lock, AlertCircle, Heart, Shield, CheckCircle, Brain, Calendar, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [allergies, setAllergies] = useState('');
  const [conditions, setConditions] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/';
      navigate(from);
    }
  }, [isAuthenticated, navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (!acceptedTerms) {
      setError('Please accept the Terms & Conditions');
      return;
    }

    setLoading(true);

    try {
      await register(email, password, name);
      const from = location.state?.from?.pathname || '/';
      navigate(from);
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4 py-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/8 via-transparent to-transparent"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl relative z-10"
      >
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <User className="h-7 w-7 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white">👤 New User Registration</h1>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-purple-100">Step {currentStep} of 3</span>
                <div className="flex space-x-1">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        step <= currentStep ? 'bg-white shadow-lg shadow-white/50' : 'bg-purple-300/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
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

            {currentStep === 1 && (
              <form className="space-y-6">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-purple-400" />
                    Basic Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Mobile Number *</label>
                      <div className="flex">
                        <input
                          type="tel"
                          className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-l-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                          placeholder="+91 9876543210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-r-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-medium shadow-lg"
                        >
                          Send OTP
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Password *</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        placeholder="Create strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">City *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        placeholder="Mumbai"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">State *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        placeholder="Maharashtra"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={() => {
                    // Basic validation before proceeding
                    if (!name || !email || !password || !phone || !city || !state) {
                      setError('Please fill in all required fields');
                      return;
                    }
                    if (password.length < 6) {
                      setError('Password must be at least 6 characters long');
                      return;
                    }
                    setError('');
                    setCurrentStep(2);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-purple-500/25"
                >
                  Continue to Personal Details →
                </motion.button>
              </form>
            )}

            {currentStep === 2 && (
              <form className="space-y-6">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-purple-400" />
                    Personal & Health Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Gender *</label>
                      <select
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Age *</label>
                      <input
                        type="number"
                        min="1"
                        max="120"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        placeholder="25"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Blood Group</label>
                      <select
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                      >
                        <option value="">Select Blood Group</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>Unknown</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Known Allergies (Optional)</label>
                      <textarea
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        rows={3}
                        placeholder="List any known allergies (e.g., Penicillin, Peanuts, etc.)"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Ongoing Medical Conditions (Optional)</label>
                      <textarea
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                        rows={3}
                        placeholder="Any chronic conditions, medications, or ongoing treatments"
                        value={conditions}
                        onChange={(e) => setConditions(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 bg-gray-700/50 text-white py-3 px-6 rounded-xl hover:bg-gray-600/50 transition-all duration-300 font-semibold border border-gray-600/30"
                  >
                    ← Back
                  </button>
                  <motion.button
                    type="button"
                    onClick={() => {
                      // Basic validation before proceeding to final step
                      if (!gender || !age) {
                        setError('Please fill in required fields (Gender and Age)');
                        return;
                      }
                      setError('');
                      setCurrentStep(3);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/25"
                  >
                    Continue to Final Step →
                  </motion.button>
                </div>
              </form>
            )}

            {/* Debug info */}
            <div className="text-xs text-gray-500 mb-2">Debug: Current Step = {currentStep}</div>
            
            {currentStep === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-purple-400" />
                    Terms & Confirmation
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">🎉 What You Get with New User Account:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <Brain className="h-4 w-4 text-purple-400" />
                          </div>
                          <span className="text-gray-300">AI Health Analysis Tools</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <Calendar className="h-4 w-4 text-purple-400" />
                          </div>
                          <span className="text-gray-300">Book Doctor Appointments</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <AlertTriangle className="h-4 w-4 text-purple-400" />
                          </div>
                          <span className="text-gray-300">Emergency SOS Services</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <Heart className="h-4 w-4 text-purple-400" />
                          </div>
                          <span className="text-gray-300">Health Tracking & Reports</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          className="mt-1 rounded border-gray-600 bg-gray-800 text-purple-600 focus:ring-purple-500"
                          checked={acceptedTerms}
                          onChange={(e) => setAcceptedTerms(e.target.checked)}
                          required
                        />
                        <div className="text-sm text-gray-300">
                          <p>I accept the <a href="/terms" className="text-purple-400 hover:text-purple-300 underline">Terms & Conditions</a> and <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</a></p>
                          <p className="text-xs text-gray-400 mt-1">By registering, you agree to our data processing practices and consent to receive health-related communications.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 bg-gray-700/50 text-white py-3 px-6 rounded-xl hover:bg-gray-600/50 transition-all duration-300 font-semibold border border-gray-600/30"
                  >
                    ← Back
                  </button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-purple-500 hover:via-purple-600 hover:to-blue-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-purple-500/25"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Creating Account...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Create New User Account - Get Instant Access
                      </div>
                    )}
                  </motion.button>
                </div>

                <div className="text-center text-sm text-gray-400">
                  <p>✅ <strong>Instant Access:</strong> No verification needed - Start using MediVolt immediately!</p>
                </div>
              </form>
            )}

            {/* Fallback for unexpected states */}
            {currentStep !== 1 && currentStep !== 2 && currentStep !== 3 && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">⚠️ Unexpected State</h3>
                <p className="text-gray-300 mb-4">Current step: {currentStep}</p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all duration-300"
                >
                  Reset to Step 1
                </button>
              </div>
            )}

            {/* Login Link */}
            <div className="mt-8 text-center">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                <p className="text-gray-300 text-sm mb-3">Already have an account?</p>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center w-full py-3 px-4 border border-purple-500/50 rounded-lg text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 font-medium"
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Sign In to Your Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
