import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Bell, Settings, AlertTriangle, Heart, Calendar,
  Activity, Brain, Stethoscope, TrendingUp, MapPin,
  Phone, Upload, Plus, Clock, CheckCircle, Star, X,
  Edit, Save, Eye, Download, Share, Filter
} from 'lucide-react';

const NewUserDashboard = () => {
  const [userName] = useState('Priya Sharma');
  const [healthScore] = useState(84);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Appointment Reminder', message: 'You have an appointment with Dr. Rajesh Kumar at 2:30 PM today', time: '10 min ago', read: false },
    { id: 2, title: 'Health Report Ready', message: 'Your blood test results are now available', time: '1 hour ago', read: false },
    { id: 3, title: 'Medication Reminder', message: 'Time to take your evening medication', time: '2 hours ago', read: true }
  ]);
  const [selectedFilter, setSelectedFilter] = useState('Today');

  const vitals = {
    heartRate: 72,
    bloodPressure: '120/80',
    glucose: 95
  };

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Rajesh Kumar',
      specialty: 'Cardiologist',
      date: 'Today',
      time: '2:30 PM',
      type: 'Video Consultation'
    },
    {
      id: 2,
      doctor: 'Dr. Priya Singh',
      specialty: 'General Physician',
      date: 'Tomorrow',
      time: '10:00 AM',
      type: 'In-person'
    }
  ];

  const aiTools = [
    {
      title: 'Symptom Checker',
      description: 'AI-powered symptom analysis',
      icon: Stethoscope,
      color: 'purple'
    },
    {
      title: 'AI Health Assistant',
      description: 'Get personalized health advice',
      icon: Brain,
      color: 'blue'
    },
    {
      title: 'Preventive Care Plan',
      description: 'Customized health recommendations',
      icon: Heart,
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <div className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">{userName}</h1>
                <p className="text-sm text-gray-400">New User</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Bell className="h-5 w-5" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                    {notifications.filter(n => !n.read).length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Settings className="h-5 w-5" />
              </button>
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Emergency SOS</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Good Morning, {userName.split(' ')[0]}! 🌅</h2>
          <p className="text-gray-400">Here's your health overview for today</p>
        </motion.div>

        {/* Health Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-purple-500/20"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Your Health Score</h3>
              <div className="flex items-center space-x-2">
                <div className="text-3xl font-bold text-green-400">{healthScore}%</div>
                <div className="text-sm text-gray-400">Excellent</div>
              </div>
            </div>
            <div className="w-20 h-20 relative">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="30"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-gray-700"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="30"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 30}`}
                  strokeDashoffset={`${2 * Math.PI * 30 * (1 - healthScore / 100)}`}
                  className="text-green-400"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </div>

          {/* Vitals */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <Activity className="h-5 w-5 text-red-400 mx-auto mb-2" />
              <div className="text-lg font-semibold">{vitals.heartRate}</div>
              <div className="text-xs text-gray-400">BPM</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <TrendingUp className="h-5 w-5 text-blue-400 mx-auto mb-2" />
              <div className="text-lg font-semibold">{vitals.bloodPressure}</div>
              <div className="text-xs text-gray-400">BP</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <Heart className="h-5 w-5 text-green-400 mx-auto mb-2" />
              <div className="text-lg font-semibold">{vitals.glucose}</div>
              <div className="text-xs text-gray-400">mg/dL</div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
            <p className="text-sm text-blue-300">
              💡 <strong>AI Insight:</strong> Your sleep patterns have improved this week. Keep maintaining your 7-hour sleep schedule!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Appointments Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-purple-400" />
                Appointments
              </h3>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Book New
              </button>
            </div>

            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{appointment.doctor}</h4>
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                      {appointment.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{appointment.specialty}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">
                      {appointment.date} at {appointment.time}
                    </span>
                    <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-2 mt-4">
              {['Today', 'This Week', 'All'].map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm transition-colors ${
                    selectedFilter === filter 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* AI Health Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Brain className="h-5 w-5 mr-2 text-blue-400" />
              AI Health Tools
            </h3>

            <div className="space-y-4">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 hover:bg-gray-800/70 rounded-lg p-4 cursor-pointer transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-${tool.color}-500/20 rounded-lg flex items-center justify-center`}>
                      <tool.icon className={`h-5 w-5 text-${tool.color}-400`} />
                    </div>
                    <div>
                      <h4 className="font-medium">{tool.title}</h4>
                      <p className="text-sm text-gray-400">{tool.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Health Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                Health Tracking
              </h3>
              <div className="flex space-x-2">
                <button 
                  onClick={() => document.getElementById('file-upload').click()}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                >
                  <Upload className="h-4 w-4" />
                  <span>Upload Reports</span>
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
              </div>
              <input 
                id="file-upload" 
                type="file" 
                accept=".pdf,.jpg,.png,.jpeg" 
                className="hidden" 
                onChange={(e) => {
                  if (e.target.files[0]) {
                    alert(`File "${e.target.files[0].name}" uploaded successfully!`);
                  }
                }}
              />
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 h-40 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Health trends will appear here</p>
                <p className="text-xs">Upload your reports to see insights</p>
              </div>
            </div>
          </motion.div>

          {/* Emergency Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
              Emergency Support
            </h3>

            <div className="space-y-4">
              <button 
                onClick={() => {
                  if (confirm('Are you sure you want to call emergency services?')) {
                    alert('Calling 108... Emergency services have been notified!');
                  }
                }}
                className="w-full bg-red-600 hover:bg-red-700 py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call for Help - 108</span>
              </button>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                  Nearest Hospitals
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Apollo Hospital</span>
                    <span className="text-gray-400">2.3 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fortis Healthcare</span>
                    <span className="text-gray-400">3.1 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max Hospital</span>
                    <span className="text-gray-400">4.2 km</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Notifications Modal */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-end p-6"
            onClick={() => setShowNotifications(false)}
          >
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-6 w-96 max-h-96 overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Notifications</h3>
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                      notification.read 
                        ? 'bg-gray-800/50 border-gray-700' 
                        : 'bg-purple-500/10 border-purple-500/30'
                    }`}
                    onClick={() => {
                      setNotifications(prev => 
                        prev.map(n => n.id === notification.id ? {...n, read: true} : n)
                      );
                    }}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-medium text-white text-sm">{notification.title}</h4>
                      <span className="text-xs text-gray-400">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-300">{notification.message}</p>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => {
                  setNotifications(prev => prev.map(n => ({...n, read: true})));
                }}
                className="w-full mt-4 bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
              >
                Mark All as Read
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Settings</h3>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Profile Settings</h4>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
                    <Edit className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Notifications</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-gray-300">Email notifications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-gray-300">Push notifications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-gray-300">SMS reminders</span>
                    </label>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Privacy</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-gray-300">Share health data with doctors</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-gray-300">Allow data for research</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button 
                  onClick={() => {
                    alert('Settings saved successfully!');
                    setShowSettings(false);
                  }}
                  className="flex-1 bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewUserDashboard;
