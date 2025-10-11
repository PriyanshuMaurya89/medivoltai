import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain, User, UserCheck, Building2, ArrowLeft, Mail, Lock,
  Phone, MapPin, Calendar, Briefcase, GraduationCap, Award,
  Users, Stethoscope, Heart, Shield, CheckCircle, Eye, EyeOff
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function SmartRegistrationPage() {
  const [currentStep, setCurrentStep] = useState('role-selection');
  const [selectedRole, setSelectedRole] = useState('new user');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Common fields
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    
    // Patient specific
    dateOfBirth: '',
    gender: '',
    emergencyContact: '',
    
    // Doctor specific
    specialization: '',
    licenseNumber: '',
    experience: '',
    qualification: '',
    
    // Hospital specific
    hospitalName: '',
    hospitalType: '',
    address: '',
    registrationNumber: '',
    totalBeds: '',
    departments: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setCurrentStep('registration-form');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    alert(`${selectedRole} registration submitted!`);
  };

  // Role Selection Screen
  const RoleSelectionScreen = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-8"
    >
      <div className="space-y-4">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Brain className="h-10 w-10 text-purple-400" />
        </motion.div>
        <h1 className="text-4xl font-bold text-white">Welcome to MediVolt</h1>
        <p className="text-xl text-gray-400">Who are you?</p>
        <p className="text-gray-500">Choose your role to get started with a personalized experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Patient Card */}
        <motion.button
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleRoleSelection('new user')}
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 text-left hover:border-purple-500/50 transition-all duration-300 group"
        >
          <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
            <User className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Patient</h3>
          <p className="text-gray-400 mb-4">Get personalized healthcare, book appointments, and manage your health records</p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Book appointments
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              AI health insights
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Medical records
            </li>
          </ul>
        </motion.button>

        {/* Doctor Card */}
        <motion.button
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleRoleSelection('doctor')}
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 text-left hover:border-purple-500/50 transition-all duration-300 group"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
            <UserCheck className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Doctor/Nurse</h3>
          <p className="text-gray-400 mb-4">Manage your practice, connect with new users, and provide quality healthcare</p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Patient management
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Online consultations
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Practice analytics
            </li>
          </ul>
        </motion.button>

        {/* Hospital Card */}
        <motion.button
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleRoleSelection('hospital')}
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 text-left hover:border-purple-500/50 transition-all duration-300 group"
        >
          <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
            <Building2 className="h-8 w-8 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Hospital/Clinic</h3>
          <p className="text-gray-400 mb-4">Streamline operations, manage staff, and enhance new user care delivery</p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Staff management
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Resource optimization
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Analytics dashboard
            </li>
          </ul>
        </motion.button>
      </div>

      <div className="text-center">
        <p className="text-gray-500">Already have an account?</p>
        <Link to="/login" className="text-purple-400 hover:text-purple-300 font-medium">
          Sign in here
        </Link>
      </div>
    </motion.div>
  );

  // New User Registration Form
  const PatientForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Date of Birth</label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Gender</label>
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Emergency Contact</label>
          <input
            type="tel"
            value={formData.emergencyContact}
            onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="Emergency contact number"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors pr-12"
              placeholder="Create a strong password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="Confirm your password"
          />
        </div>
      </div>
    </div>
  );

  // Doctor Registration Form
  const DoctorForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="Dr. Your Name"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="doctor@hospital.com"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Specialization</label>
          <select
            value={formData.specialization}
            onChange={(e) => handleInputChange('specialization', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
          >
            <option value="">Select specialization</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="dermatology">Dermatology</option>
            <option value="general">General Medicine</option>
            <option value="nursing">Nursing</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Medical License Number</label>
          <input
            type="text"
            value={formData.licenseNumber}
            onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="MED123456789"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Years of Experience</label>
          <input
            type="number"
            value={formData.experience}
            onChange={(e) => handleInputChange('experience', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="5"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Qualification</label>
          <input
            type="text"
            value={formData.qualification}
            onChange={(e) => handleInputChange('qualification', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="MBBS, MD"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors pr-12"
              placeholder="Create a strong password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Hospital Registration Form
  const HospitalForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Hospital/Clinic Name</label>
          <input
            type="text"
            value={formData.hospitalName}
            onChange={(e) => handleInputChange('hospitalName', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="City Medical Center"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Hospital Type</label>
          <select
            value={formData.hospitalType}
            onChange={(e) => handleInputChange('hospitalType', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
          >
            <option value="">Select type</option>
            <option value="general">General Hospital</option>
            <option value="specialty">Specialty Hospital</option>
            <option value="clinic">Clinic</option>
            <option value="diagnostic">Diagnostic Center</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="admin@hospital.com"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-300 text-sm font-medium mb-2">Address</label>
          <textarea
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="Complete hospital address"
            rows="3"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Registration Number</label>
          <input
            type="text"
            value={formData.registrationNumber}
            onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="HOSP123456"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Total Beds</label>
          <input
            type="number"
            value={formData.totalBeds}
            onChange={(e) => handleInputChange('totalBeds', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="100"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors pr-12"
              placeholder="Create a strong password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            className="w-full bg-gray-800/50 text-white p-4 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="Confirm your password"
          />
        </div>
      </div>
    </div>
  );

  // Registration Form Screen
  const RegistrationFormScreen = () => {
    const roleConfig = {
      'new user': {
        title: 'New User',
        subtitle: 'Join thousands of new users managing their health with MediVolt',
        icon: User,
        color: 'blue',
        form: PatientForm
      },
      doctor: {
        title: 'Doctor/Nurse Registration',
        subtitle: 'Connect with new users and grow your practice',
        icon: UserCheck,
        color: 'green',
        form: DoctorForm
      },
      hospital: {
        title: 'Hospital/Clinic Registration',
        subtitle: 'Streamline your healthcare operations',
        icon: Building2,
        color: 'purple',
        form: HospitalForm
      }
    };

    const config = roleConfig[selectedRole];
    const IconComponent = config.icon;

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => setCurrentStep('role-selection')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to role selection
          </button>
          
          <div className={`w-16 h-16 bg-${config.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
            <IconComponent className={`h-8 w-8 text-${config.color}-400`} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{config.title}</h1>
          <p className="text-gray-400">{config.subtitle}</p>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8">
          <form onSubmit={handleSubmit}>
            <config.form />
            
            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Create {selectedRole} Account
              </Button>
            </div>

            {/* Role Switch Links */}
            <div className="mt-6 text-center space-y-2">
              <p className="text-gray-500">Not a {selectedRole}?</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {selectedRole !== 'doctor' && (
                  <button
                    type="button"
                    onClick={() => setSelectedRole('doctor')}
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Register as Doctor/Nurse
                  </button>
                )}
                {selectedRole !== 'hospital' && (
                  <button
                    type="button"
                    onClick={() => setSelectedRole('hospital')}
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Register as Hospital/Clinic
                  </button>
                )}
                {selectedRole !== 'new user' && (
                  <button
                    type="button"
                    onClick={() => setSelectedRole('new user')}
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Register as New User
                  </button>
                )}
              </div>
            </div>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="text-purple-400 hover:text-purple-300 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/8 via-transparent to-transparent"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          <AnimatePresence mode="wait">
            {currentStep === 'role-selection' && (
              <RoleSelectionScreen key="role-selection" />
            )}
            {currentStep === 'registration-form' && (
              <RegistrationFormScreen key="registration-form" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
