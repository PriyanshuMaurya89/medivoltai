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
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6">👤 Patient Registration</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                placeholder="your@email.com"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Gender</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
              <input
                type="number"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                placeholder="25"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Blood Group</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500">
                <option>Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                placeholder="Mumbai"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">State</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                placeholder="Maharashtra"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Allergies (Optional)</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
              rows={3}
              placeholder="List any known allergies..."
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-700 bg-gray-800 text-purple-600" />
            <span className="text-gray-300 text-sm">I accept the Terms & Conditions and Privacy Policy</span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold"
          >
            Create Patient Account
          </button>
        </form>
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
    </div>
  );
};

export default RegistrationSystemPage;
