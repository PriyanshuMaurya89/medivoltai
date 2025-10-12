import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, Bell, MessageCircle, DollarSign, Calendar,
  Video, CheckCircle, Clock, Users, TrendingUp,
  Shield, Star, Settings, Phone, FileText
} from 'lucide-react';

const DoctorDashboard = () => {
  const [doctorName] = useState('Dr. Rajesh Kumar');
  const [isOnline, setIsOnline] = useState(true);
  const [weeklyEarnings] = useState(2850);

  const todayStats = {
    patientsToday: 12,
    pendingConsultations: 3,
    completedConsultations: 9,
    earnings: 1200
  };

  const todaySchedule = [
    {
      id: 1,
      patient: 'Priya Sharma',
      time: '2:30 PM',
      type: 'Video Consultation',
      condition: 'Routine Checkup',
      status: 'upcoming'
    },
    {
      id: 2,
      patient: 'Amit Singh',
      time: '3:00 PM',
      type: 'In-person',
      condition: 'Hypertension Follow-up',
      status: 'upcoming'
    },
    {
      id: 3,
      patient: 'Sunita Devi',
      time: '3:30 PM',
      type: 'Video Consultation',
      condition: 'Diabetes Management',
      status: 'upcoming'
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: 'Rahul Gupta',
      lastVisit: '2 days ago',
      condition: 'Cardiac Care',
      status: 'Stable'
    },
    {
      id: 2,
      name: 'Meera Patel',
      lastVisit: '1 week ago',
      condition: 'Diabetes',
      status: 'Improving'
    },
    {
      id: 3,
      name: 'Vikash Kumar',
      lastVisit: '3 days ago',
      condition: 'Hypertension',
      status: 'Monitoring'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'appointment',
      message: 'New appointment request from Priya Sharma',
      time: '5 min ago'
    },
    {
      id: 2,
      type: 'payment',
      message: 'Payment received: ₹500',
      time: '1 hour ago'
    },
    {
      id: 3,
      type: 'job',
      message: 'Job offer from Apollo Hospital',
      time: '2 hours ago'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <div className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">{doctorName}</h1>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Cardiologist</span>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                    <button
                      onClick={() => setIsOnline(!isOnline)}
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      {isOnline ? 'Online' : 'Offline'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></span>
              </button>
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span>₹{weeklyEarnings}</span>
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
          <h2 className="text-3xl font-bold mb-2">Good Morning, Dr. Kumar! 👨‍⚕️</h2>
          <p className="text-gray-400">You have {todayStats.patientsToday} patients scheduled today</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-sm">Patients Today</p>
                <p className="text-2xl font-bold">{todayStats.patientsToday}</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-orange-900/50 to-orange-800/50 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-300 text-sm">Pending</p>
                <p className="text-2xl font-bold">{todayStats.pendingConsultations}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-green-900/50 to-green-800/50 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-300 text-sm">Completed</p>
                <p className="text-2xl font-bold">{todayStats.completedConsultations}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm">Today's Earnings</p>
                <p className="text-2xl font-bold">₹{todayStats.earnings}</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-400" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Today's Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-400" />
              Today's Schedule
            </h3>

            <div className="space-y-4">
              {todaySchedule.map((appointment) => (
                <div key={appointment.id} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{appointment.patient}</h4>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      {appointment.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{appointment.condition}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{appointment.time}</span>
                    <div className="flex space-x-2">
                      {appointment.type === 'Video Consultation' && (
                        <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs font-medium transition-colors flex items-center space-x-1">
                          <Video className="h-3 w-3" />
                          <span>Join</span>
                        </button>
                      )}
                      <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-xs font-medium transition-colors">
                        Mark Done
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Patient List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-400" />
                Recent Patients
              </h3>
              <button className="text-green-400 hover:text-green-300 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{patient.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      patient.status === 'Stable' ? 'bg-green-500/20 text-green-300' :
                      patient.status === 'Improving' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {patient.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{patient.condition}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Last visit: {patient.lastVisit}</span>
                    <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                      View History
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Earnings & Payments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-purple-400" />
                Earnings & Payments
              </h3>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Withdraw Funds
              </button>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">This Week</span>
                <span className="text-2xl font-bold text-green-400">₹{weeklyEarnings}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">75% of monthly target</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Available Balance</span>
                <span className="font-medium">₹1,250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pending Payments</span>
                <span className="font-medium">₹800</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Earned</span>
                <span className="font-medium">₹12,450</span>
              </div>
            </div>
          </motion.div>

          {/* Professional Profile & Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Bell className="h-5 w-5 mr-2 text-orange-400" />
              Notifications
            </h3>

            {/* Verification Status */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="font-medium text-green-400">Verified Professional</span>
              </div>
              <p className="text-sm text-gray-400">Your profile is verified and active in the marketplace</p>
              <button className="text-green-400 hover:text-green-300 text-sm font-medium mt-2">
                Edit Profile
              </button>
            </div>

            {/* Recent Notifications */}
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div key={notification.id} className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-sm font-medium mb-1">{notification.message}</p>
                  <p className="text-xs text-gray-400">{notification.time}</p>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg text-sm transition-colors">
              View All Notifications
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
