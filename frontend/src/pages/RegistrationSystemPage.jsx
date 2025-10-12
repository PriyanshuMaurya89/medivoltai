import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  User, Stethoscope, Building, ArrowRight, Upload,
  Phone, Mail, Lock, MapPin, Calendar, Heart,
  Shield, CheckCircle, Clock, AlertTriangle,
  Camera, FileText, GraduationCap, DollarSign, Brain
} from 'lucide-react';

const RegistrationSystemPage = () => {
  const [step, setStep] = useState('account-type'); // 'account-type', 'form', 'verification', 'success'
  const [accountType, setAccountType] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [documents, setDocuments] = useState({});

  // Account Type Selection
  const AccountTypeSelection = () => (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Join MediVolt</h1>
          <p className="text-gray-400 text-lg">Choose your account type to get started</p>

          {/* Login Link */}
          <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl max-w-md mx-auto">
            <p className="text-gray-300 text-sm mb-3">Already have an account?</p>
            <Link
              to="/login"
              className="inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Lock className="h-4 w-4 mr-2" />
              Sign In to Your Account
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Patient Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => { setAccountType('new users'); setStep('form'); }}
            className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 cursor-pointer hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <User className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">👤 New Users</h3>
              <p className="text-gray-300 text-center mb-6">For individuals using MediVolt's AI tools & booking appointments</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li>• AI Health Tools</li>
                <li>• Book Appointments</li>
                <li>• Emergency SOS</li>
                <li>• Health Tracking</li>
              </ul>
              <div className="flex items-center justify-center text-purple-400 font-medium">
                Get Started <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>
          </motion.div>

          {/* Freelancer Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => { setAccountType('freelancer'); setStep('form'); }}
            className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 cursor-pointer hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-purple-600/10 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Stethoscope className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">👨‍⚕️ Doctor/Nurse</h3>
              <p className="text-gray-300 text-center mb-6">For healthcare experts offering consultations or seeking employment</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li>• Freelancer Marketplace</li>
                <li>• Set Consultation Fees</li>
                <li>• Hospital Hiring</li>
                <li>• Professional Verification</li>
              </ul>
              <div className="flex items-center justify-center text-green-400 font-medium">
                Join as Professional <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>
          </motion.div>

          {/* Hospital Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => { setAccountType('hospital'); setStep('form'); }}
            className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 cursor-pointer hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Building className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">🏥 Hospital/Clinic</h3>
              <p className="text-gray-300 text-center mb-6">For institutions managing appointments & hiring freelancers</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                <li>• Admin Panel Access</li>
                <li>• Hire Freelancers</li>
                <li>• Patient Management</li>
                <li>• Appointment System</li>
              </ul>
              <div className="flex items-center justify-center text-blue-400 font-medium">
                Register Institution <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  // New User Registration Form
  const PatientForm = () => (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
              <User className="h-6 w-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">👤 New User Registration</h2>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-400">Step {currentStep} of 3</span>
            <div className="flex space-x-1">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    step <= currentStep ? 'bg-purple-500 shadow-lg shadow-purple-500/50' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

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
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    placeholder="your@email.com"
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
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">State *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    placeholder="Maharashtra"
                    required
                  />
                </div>
              </div>
            </div>

            <motion.button
              type="button"
              onClick={() => setCurrentStep(2)}
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
                  <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300" required>
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
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Blood Group</label>
                  <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300">
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
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ongoing Medical Conditions (Optional)</label>
                  <textarea
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    rows={3}
                    placeholder="Any chronic conditions, medications, or ongoing treatments"
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
                onClick={() => setCurrentStep(3)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/25"
              >
                Continue to Final Step →
              </motion.button>
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
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
                onClick={() => setStep('verification')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-purple-500 hover:via-purple-600 hover:to-blue-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-purple-500/25"
              >
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Create New User Account - Get Instant Access
                </div>
              </motion.button>
            </div>

            <div className="text-center text-sm text-gray-400">
              <p>✅ <strong>Instant Access:</strong> No verification needed - Start using MediVolt immediately!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Freelancer Registration Form
  const FreelancerForm = () => (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
              <Stethoscope className="h-6 w-6 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">👨‍⚕️ Healthcare Professional Registration</h2>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-400">Step {currentStep} of 3</span>
            <div className="flex space-x-1">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    step <= currentStep ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <form className="space-y-6">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-green-400" />
                Basic Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="Dr. John Smith"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="doctor@email.com"
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
                      className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-l-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      placeholder="+91 9876543210"
                      required
                    />
                    <button
                      type="button"
                      className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-r-lg hover:from-green-500 hover:to-green-600 transition-all duration-300 font-medium shadow-lg"
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Password *</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="Create strong password"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">City *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="Mumbai"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">State *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="Maharashtra"
                    required
                  />
                </div>
              </div>
            </div>

            <motion.button
              type="button"
              onClick={() => setCurrentStep(2)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-green-500/25"
            >
              Continue to Professional Details →
            </motion.button>
          </form>
        )}

        {currentStep === 2 && (
          <form className="space-y-6">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-green-400" />
                Professional Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Medical Specialty *</label>
                  <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300" required>
                    <option value="">Select Your Specialty</option>
                    <option>Cardiologist</option>
                    <option>Neurologist</option>
                    <option>Orthopedic Surgeon</option>
                    <option>Pediatrician</option>
                    <option>Registered Nurse</option>
                    <option>Nutritionist</option>
                    <option>Physiotherapist</option>
                    <option>Dermatologist</option>
                    <option>Psychiatrist</option>
                    <option>General Practitioner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Years of Experience *</label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="5"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Education & Certifications *</label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  rows={3}
                  placeholder="MBBS from AIIMS Delhi, MD Cardiology from PGI Chandigarh, Board Certified..."
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Consultation Fee (₹) *</label>
                  <input
                    type="number"
                    min="100"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="2500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Hourly Rate (₹) *</label>
                  <input
                    type="number"
                    min="100"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    placeholder="1200"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-3">Availability *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <label key={day} className="flex items-center space-x-2 bg-gray-800/30 p-2 rounded-lg border border-gray-700/30">
                      <input type="checkbox" className="rounded border-gray-600 bg-gray-800 text-green-600 focus:ring-green-500" />
                      <span className="text-gray-300 text-sm">{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-3">Service Type *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label className="flex items-center space-x-2 bg-gray-800/30 p-3 rounded-lg border border-gray-700/30">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-800 text-green-600 focus:ring-green-500" />
                    <span className="text-gray-300">Remote Consultation (Online)</span>
                  </label>
                  <label className="flex items-center space-x-2 bg-gray-800/30 p-3 rounded-lg border border-gray-700/30">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-800 text-green-600 focus:ring-green-500" />
                    <span className="text-gray-300">On-site Visit (In-person)</span>
                  </label>
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
                onClick={() => setCurrentStep(3)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25"
              >
                Continue to Verification →
              </motion.button>
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <form className="space-y-6">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-400" />
                Document Verification 🔒
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Government ID *</label>
                  <div className="border-2 border-dashed border-green-600/30 rounded-lg p-8 text-center hover:border-green-500/50 transition-all duration-300">
                    <Upload className="h-10 w-10 text-green-400 mx-auto mb-3" />
                    <p className="text-green-400 text-sm font-medium">Upload Aadhaar/PAN Card</p>
                    <p className="text-gray-400 text-xs mt-1">PDF, JPG, PNG (Max 5MB)</p>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Medical License *</label>
                  <div className="border-2 border-dashed border-green-600/30 rounded-lg p-8 text-center hover:border-green-500/50 transition-all duration-300">
                    <FileText className="h-10 w-10 text-green-400 mx-auto mb-3" />
                    <p className="text-green-400 text-sm font-medium">Upload Medical License</p>
                    <p className="text-gray-400 text-xs mt-1">PDF, JPG, PNG (Max 5MB)</p>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Profile Picture *</label>
                  <div className="border-2 border-dashed border-green-600/30 rounded-lg p-8 text-center hover:border-green-500/50 transition-all duration-300">
                    <Camera className="h-10 w-10 text-green-400 mx-auto mb-3" />
                    <p className="text-green-400 text-sm font-medium">Upload Professional Photo</p>
                    <p className="text-gray-400 text-xs mt-1">JPG, PNG (Max 2MB)</p>
                    <input type="file" className="hidden" accept=".jpg,.jpeg,.png" required />
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Certificates (Optional)</label>
                  <div className="border-2 border-dashed border-gray-600/30 rounded-lg p-8 text-center hover:border-green-500/30 transition-all duration-300">
                    <GraduationCap className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-400 text-sm">Upload Degree/Certificates</p>
                    <p className="text-gray-500 text-xs mt-1">Multiple files allowed</p>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" multiple />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  className="mt-1 rounded border-gray-600 bg-gray-800 text-green-600 focus:ring-green-500" 
                  required 
                />
                <div className="text-sm text-gray-300">
                  <p>I accept the <a href="/terms" className="text-green-400 hover:text-green-300 underline">Terms & Conditions</a> and <a href="/privacy" className="text-green-400 hover:text-green-300 underline">Privacy Policy</a></p>
                  <p className="text-xs text-gray-400 mt-1">I understand that my profile will be listed in the Freelancer Marketplace only after MediVolt Admin verification.</p>
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
                onClick={() => setStep('verification')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-green-600 via-green-700 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-green-500 hover:via-green-600 hover:to-blue-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-green-500/25"
              >
                <div className="flex items-center justify-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Submit for Verification 🔒
                </div>
              </motion.button>
            </div>

            <div className="text-center text-sm text-gray-400">
              <p>⏳ <strong>Verification Process:</strong> 24-48 hours → ✅ Listed in Freelancer Marketplace</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  // Hospital Registration Form
  const HospitalForm = () => (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
              <Building className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">🏥 Hospital/Clinic Registration</h2>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-400">Step {currentStep} of 3</span>
            <div className="flex space-x-1">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    step <= currentStep ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <form className="space-y-6">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Building className="h-5 w-5 mr-2 text-blue-400" />
                Institution Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Hospital/Clinic Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Apollo Hospital Mumbai"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Institution Type *</label>
                  <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required>
                    <option value="">Select Institution Type</option>
                    <option>Hospital</option>
                    <option>Clinic</option>
                    <option>Diagnostic Center</option>
                    <option>Nursing Home</option>
                    <option>Specialty Center</option>
                    <option>Rehabilitation Center</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Address *</label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  rows={3}
                  placeholder="Complete address with landmark, city, state, pincode"
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Official Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="admin@apollohospital.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Official Phone *</label>
                  <div className="flex">
                    <input
                      type="tel"
                      className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-l-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="+91 22 12345678"
                      required
                    />
                    <button
                      type="button"
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-r-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg"
                    >
                      Verify
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Contact Person (Admin) *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Dr. Rajesh Kumar (Chief Administrator)"
                  required
                />
              </div>
            </div>

            <motion.button
              type="button"
              onClick={() => setCurrentStep(2)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-blue-500/25"
            >
              Continue to Institution Details →
            </motion.button>
          </form>
        )}

        {currentStep === 2 && (
          <form className="space-y-6">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Heart className="h-5 w-5 mr-2 text-blue-400" />
                Institution Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Number of Doctors</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="25"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Number of Beds</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Established Year</label>
                  <input
                    type="number"
                    min="1900"
                    max="2024"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="1995"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-3">Specialties Offered</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Emergency', 'ICU', 'Surgery'].map((specialty) => (
                    <label key={specialty} className="flex items-center space-x-2 bg-gray-800/30 p-2 rounded-lg border border-gray-700/30">
                      <input type="checkbox" className="rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500" />
                      <span className="text-gray-300 text-sm">{specialty}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-3">Services Provided</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label className="flex items-center space-x-2 bg-gray-800/30 p-3 rounded-lg border border-gray-700/30">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-300">24/7 Emergency Services</span>
                  </label>
                  <label className="flex items-center space-x-2 bg-gray-800/30 p-3 rounded-lg border border-gray-700/30">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-300">Diagnostic Services</span>
                  </label>
                  <label className="flex items-center space-x-2 bg-gray-800/30 p-3 rounded-lg border border-gray-700/30">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-300">Ambulance Services</span>
                  </label>
                  <label className="flex items-center space-x-2 bg-gray-800/30 p-3 rounded-lg border border-gray-700/30">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-300">Telemedicine</span>
                  </label>
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
                onClick={() => setCurrentStep(3)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-500/25"
              >
                Continue to Verification →
              </motion.button>
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <form className="space-y-6">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-400" />
                Document Verification 🔒
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Hospital Registration Certificate *</label>
                  <div className="border-2 border-dashed border-blue-600/30 rounded-lg p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                    <Upload className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                    <p className="text-blue-400 text-sm font-medium">Upload Registration Certificate</p>
                    <p className="text-gray-400 text-xs mt-1">PDF, JPG, PNG (Max 10MB)</p>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <label className="block text-sm font-medium text-gray-300 mb-3">PAN/GST Certificate *</label>
                  <div className="border-2 border-dashed border-blue-600/30 rounded-lg p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                    <FileText className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                    <p className="text-blue-400 text-sm font-medium">Upload PAN/GST Certificate</p>
                    <p className="text-gray-400 text-xs mt-1">PDF, JPG, PNG (Max 5MB)</p>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Doctor's License *</label>
                  <div className="border-2 border-dashed border-blue-600/30 rounded-lg p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                    <Stethoscope className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                    <p className="text-blue-400 text-sm font-medium">At least 1 Doctor's License</p>
                    <p className="text-gray-400 text-xs mt-1">PDF, JPG, PNG (Max 5MB)</p>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Authorized Person ID *</label>
                  <div className="border-2 border-dashed border-blue-600/30 rounded-lg p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                    <User className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                    <p className="text-blue-400 text-sm font-medium">ID Proof of Admin/Owner</p>
                    <p className="text-gray-400 text-xs mt-1">Aadhaar/PAN/Passport</p>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <label className="block text-sm font-medium text-gray-300 mb-3">Additional Documents (Optional)</label>
                <div className="border-2 border-dashed border-gray-600/30 rounded-lg p-8 text-center hover:border-blue-500/30 transition-all duration-300">
                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">Upload Insurance, Accreditation Certificates</p>
                  <p className="text-gray-500 text-xs mt-1">Multiple files allowed (Max 20MB total)</p>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" multiple />
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  className="mt-1 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500" 
                  required 
                />
                <div className="text-sm text-gray-300">
                  <p>I accept the <a href="/terms" className="text-blue-400 hover:text-blue-300 underline">Terms & Conditions</a> and <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a></p>
                  <p className="text-xs text-gray-400 mt-1">I understand that after verification, our hospital will get Admin Panel Access for appointments, freelancer hiring, and new users management.</p>
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
                onClick={() => setStep('verification')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-500 hover:via-blue-600 hover:to-purple-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-blue-500/25"
              >
                <div className="flex items-center justify-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Submit for Verification 🔒
                </div>
              </motion.button>
            </div>

            <div className="text-center text-sm text-gray-400">
              <p>⏳ <strong>Verification Process:</strong> 24-48 hours → ✅ Admin Panel Access Granted</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  // Verification Status Page
  const VerificationPage = () => {
    const getStatusColor = () => {
      if (accountType === 'new users') return 'purple';
      if (accountType === 'freelancer') return 'green';
      return 'blue';
    };

    const getStatusIcon = () => {
      if (accountType === 'new users') return <CheckCircle className="h-8 w-8 text-green-400" />;
      return <Clock className="h-8 w-8 text-yellow-400" />;
    };

    const getStatusMessage = () => {
      if (accountType === 'new users') {
        return {
          title: "Account Created Successfully! ✅",
          message: "Welcome to MediVolt! Your new users account is ready to use.",
          status: "✅ Active - Ready to Use",
          access: "🎉 You now have instant access to all new users features!"
        };
      }
      
      return {
        title: "Account Under Verification 🔒",
        message: "Thank you for registering with MediVolt! Your account is currently being reviewed by our verification team.",
        status: "⏳ Pending Verification",
        access: accountType === 'freelancer' 
          ? "📋 After verification, you'll be listed in our Freelancer Marketplace"
          : "🏥 After verification, you'll get Admin Panel access for your hospital"
      };
    };

    const statusInfo = getStatusMessage();
    const colorClass = getStatusColor();

    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
          >
            <div className={`w-20 h-20 bg-${accountType === 'new users' ? 'green' : 'yellow'}-500/20 rounded-full flex items-center justify-center mx-auto mb-6`}>
              {getStatusIcon()}
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">{statusInfo.title}</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {statusInfo.message}
            </p>
            
            <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-700/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-gray-300 font-medium">Account Type:</span>
                  <span className="text-white font-semibold capitalize flex items-center">
                    {accountType === 'new users' && '👤'}
                    {accountType === 'freelancer' && '👨‍⚕️'}
                    {accountType === 'hospital' && '🏥'}
                    <span className="ml-2">{accountType}</span>
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-gray-300 font-medium">Status:</span>
                  <span className="flex items-center space-x-2">
                    <span className={`w-3 h-3 bg-${accountType === 'new users' ? 'green' : 'yellow'}-400 rounded-full ${accountType !== 'new users' ? 'animate-pulse' : ''}`}></span>
                    <span className={`text-${accountType === 'new users' ? 'green' : 'yellow'}-400 font-semibold`}>
                      {statusInfo.status}
                    </span>
                  </span>
                </div>
                
                {accountType !== 'new users' && (
                  <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                    <span className="text-gray-300 font-medium">Expected Time:</span>
                    <span className="text-white font-semibold">24-48 hours</span>
                  </div>
                )}
                
                <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-gray-300 font-medium">Security:</span>
                  <span className="text-green-400 font-semibold flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    Encrypted & Secure
                  </span>
                </div>
              </div>
            </div>

            <div className={`bg-${colorClass}-500/10 border border-${colorClass}-500/30 rounded-xl p-6 mb-8`}>
              <h3 className="text-lg font-semibold text-white mb-3">What's Next?</h3>
              <p className={`text-${colorClass}-300 text-sm leading-relaxed`}>
                {statusInfo.access}
              </p>
              
              {accountType !== 'new users' && (
                <div className="mt-4 space-y-2 text-sm text-gray-400">
                  <p>• Our verification team will review your documents</p>
                  <p>• You'll receive an email notification once verified</p>
                  <p>• Check your email regularly for updates</p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {accountType === 'new users' ? (
                <motion.button
                  onClick={() => window.location.href = '/dashboard/new-user'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-green-600 via-green-700 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-green-500 hover:via-green-600 hover:to-blue-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-green-500/25"
                >
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Go to Your Dashboard
                  </div>
                </motion.button>
              ) : accountType === 'freelancer' ? (
                <motion.button
                  onClick={() => window.location.href = '/dashboard/doctor'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 bg-gradient-to-r from-${colorClass}-600 to-${colorClass}-700 text-white py-4 px-6 rounded-xl hover:from-${colorClass}-500 hover:to-${colorClass}-600 transition-all duration-300 font-semibold text-lg shadow-lg`}
                >
                  <div className="flex items-center justify-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Go to Doctor Dashboard
                  </div>
                </motion.button>
              ) : (
                <motion.button
                  onClick={() => window.location.href = '/dashboard/hospital'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 bg-gradient-to-r from-${colorClass}-600 to-${colorClass}-700 text-white py-4 px-6 rounded-xl hover:from-${colorClass}-500 hover:to-${colorClass}-600 transition-all duration-300 font-semibold text-lg shadow-lg`}
                >
                  <div className="flex items-center justify-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Go to Hospital Dashboard
                  </div>
                </motion.button>
              )}
              
              <button
                onClick={() => {setStep('account-type'); setCurrentStep(1); setAccountType('');}}
                className="flex-1 bg-gray-700/50 text-white py-4 px-6 rounded-xl hover:bg-gray-600/50 transition-all duration-300 font-semibold border border-gray-600/30"
              >
                Register Another Account
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-400">
              <p>Need help? Contact us at <a href="mailto:support@medivolt.com" className={`text-${colorClass}-400 hover:text-${colorClass}-300 underline`}>support@medivolt.com</a></p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {step === 'account-type' && <AccountTypeSelection />}
      {step === 'form' && accountType === 'new users' && (
        <div className="py-12 px-6">
          <PatientForm />
        </div>
      )}
      {step === 'form' && accountType === 'freelancer' && (
        <div className="py-12 px-6">
          <FreelancerForm />
        </div>
      )}
      {step === 'form' && accountType === 'hospital' && (
        <div className="py-12 px-6">
          <HospitalForm />
        </div>
      )}
      {step === 'verification' && <VerificationPage />}
    </div>
  );
};

export default RegistrationSystemPage;
