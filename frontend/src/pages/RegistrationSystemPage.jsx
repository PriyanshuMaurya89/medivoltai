import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Stethoscope, Building, ArrowRight, Upload, 
  Phone, Mail, Lock, MapPin, Calendar, Heart,
  Shield, CheckCircle, Clock, AlertTriangle,
  Camera, FileText, GraduationCap, DollarSign
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Join MediVolt</h1>
          <p className="text-gray-400 text-lg">Choose your account type to get started</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Patient Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => { setAccountType('patient'); setStep('form'); }}
            className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 cursor-pointer hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <User className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">👤 Patient</h3>
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

  // Patient Registration Form
  const PatientForm = () => (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
            <User className="h-6 w-6 text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">👤 Patient Registration</h2>
        </div>
        
        <form className="space-y-6">
          {/* Basic Information */}
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
          </div>

          {/* Personal Details */}
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-purple-400" />
              Personal Details
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

          {/* Health Information (Optional) */}
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-purple-400" />
              Health Information (Optional)
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Known Allergies</label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  rows={3}
                  placeholder="List any known allergies (e.g., Penicillin, Peanuts, etc.)"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Ongoing Medical Conditions</label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                  rows={3}
                  placeholder="Any chronic conditions, medications, or ongoing treatments"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
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

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-purple-500 hover:via-purple-600 hover:to-blue-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-purple-500/25"
          >
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Create Patient Account - Get Instant Access
            </div>
          </motion.button>

          <div className="text-center text-sm text-gray-400">
            <p>✅ <strong>Instant Access:</strong> Use AI Health Tools, Book Appointments, Emergency SOS & Health Tracking</p>
          </div>
        </form>
      </div>
    </div>
  );

  // Freelancer Registration Form
  const FreelancerForm = () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">👨‍⚕️ Healthcare Professional Registration</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Step {currentStep} of 3</span>
            <div className="flex space-x-1">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full ${
                    step <= currentStep ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <form className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="Dr. John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="doctor@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mobile Number</label>
                <div className="flex">
                  <input
                    type="tel"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white focus:ring-2 focus:ring-purple-500"
                    placeholder="+91 9876543210"
                  />
                  <button
                    type="button"
                    className="px-4 py-3 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 transition-colors"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="Create password"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold"
            >
              Continue to Professional Details
            </button>
          </form>
        )}

        {currentStep === 2 && (
          <form className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Professional Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Specialty</label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500">
                  <option>Select Specialty</option>
                  <option>Cardiologist</option>
                  <option>Neurologist</option>
                  <option>Orthopedic Surgeon</option>
                  <option>Pediatrician</option>
                  <option>Registered Nurse</option>
                  <option>Nutritionist</option>
                  <option>Physiotherapist</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Years of Experience</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="5"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Consultation Fee (₹)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="2500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Hourly Rate (₹)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="1200"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold"
              >
                Continue to Verification
              </button>
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <form className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Document Verification</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <label className="block text-sm font-medium text-gray-300 mb-2">Medical License</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Upload Medical License</p>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <label className="block text-sm font-medium text-gray-300 mb-2">Profile Picture</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                  <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Upload Profile Photo</p>
                  <input type="file" className="hidden" accept=".jpg,.jpeg,.png" />
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                Back
              </button>
              <button
                type="submit"
                onClick={() => setStep('verification')}
                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold"
              >
                Submit for Verification
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  // Hospital Registration Form
  const HospitalForm = () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">🏥 Hospital/Clinic Registration</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Step {currentStep} of 3</span>
            <div className="flex space-x-1">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full ${
                    step <= currentStep ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <form className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Institution Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Hospital/Clinic Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Apollo Hospital Mumbai"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Institution Type</label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500">
                  <option>Select Type</option>
                  <option>Hospital</option>
                  <option>Clinic</option>
                  <option>Diagnostic Center</option>
                  <option>Nursing Home</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Official Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="admin@apollohospital.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Official Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 22 12345678"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-semibold"
            >
              Continue to Institution Details
            </button>
          </form>
        )}

        {currentStep === 2 && (
          <form className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Institution Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Number of Doctors</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Number of Beds</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="100"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-semibold"
              >
                Continue to Verification
              </button>
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <form className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Document Verification</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <label className="block text-sm font-medium text-gray-300 mb-2">Hospital Registration Certificate</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Upload Registration Certificate</p>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <label className="block text-sm font-medium text-gray-300 mb-2">PAN/GST Certificate</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Upload PAN/GST Certificate</p>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                Back
              </button>
              <button
                type="submit"
                onClick={() => setStep('verification')}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-semibold"
              >
                Submit for Verification
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  // Verification Status Page
  const VerificationPage = () => (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
        >
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="h-8 w-8 text-yellow-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">Account Under Verification</h2>
          <p className="text-gray-300 mb-6">
            Thank you for registering with MediVolt! Your account is currently being reviewed by our team.
          </p>
          
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Account Type:</span>
              <span className="text-white font-medium capitalize">{accountType}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Status:</span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                <span className="text-yellow-400 font-medium">⏳ Pending Verification</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Expected Time:</span>
              <span className="text-white font-medium">24-48 hours</span>
            </div>
          </div>

          <button
            onClick={() => {setStep('account-type'); setCurrentStep(1);}}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold"
          >
            Register Another Account
          </button>
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {step === 'account-type' && <AccountTypeSelection />}
      {step === 'form' && accountType === 'patient' && (
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
