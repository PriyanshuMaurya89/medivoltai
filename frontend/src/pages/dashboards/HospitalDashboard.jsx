import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building, Bell, Plus, Settings, Users, Calendar,
  DollarSign, TrendingUp, UserCheck, UserX, Clock,
  CheckCircle, Star, MapPin, Phone, FileText, Search,
  X, Edit, Save, Eye, Filter, MessageCircle
} from 'lucide-react';

const HospitalDashboard = () => {
  const [hospitalName] = useState('Apollo Hospital Mumbai');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Patient Registration', message: 'Priya Sharma registered for cardiology consultation', time: '5 min ago', read: false },
    { id: 2, title: 'Staff Update', message: 'Dr. Rajesh Kumar is now online', time: '15 min ago', read: false },
    { id: 3, title: 'Payment Received', message: 'Payment of ₹2,500 received from patient ID P001234', time: '30 min ago', read: true }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const todayStats = {
    totalPatients: 156,
    activeDoctors: 24,
    scheduledAppointments: 89,
    revenue: 125000
  };

  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: 1,
      patient: 'Priya Sharma',
      doctor: 'Dr. Rajesh Kumar',
      time: '2:30 PM',
      department: 'Cardiology',
      status: 'confirmed'
    },
    {
      id: 2,
      patient: 'Amit Singh',
      doctor: 'Dr. Sunita Devi',
      time: '3:00 PM',
      department: 'General Medicine',
      status: 'waiting'
    },
    {
      id: 3,
      patient: 'Meera Patel',
      doctor: 'Dr. Vikash Kumar',
      time: '3:30 PM',
      department: 'Orthopedics',
      status: 'confirmed'
    }
  ]);

  const [staffMembers, setStaffMembers] = useState([
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      role: 'Cardiologist',
      status: 'online',
      patients: 8,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Dr. Sunita Devi',
      role: 'General Physician',
      status: 'online',
      patients: 12,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Nurse Priya Singh',
      role: 'Senior Nurse',
      status: 'offline',
      patients: 15,
      rating: 4.7
    }
  ]);

  const [freelancerApplications, setFreelancerApplications] = useState([
    {
      id: 1,
      name: 'Dr. Amit Sharma',
      specialty: 'Neurologist',
      experience: '8 years',
      rating: 4.6,
      status: 'pending'
    },
    {
      id: 2,
      name: 'Dr. Kavita Patel',
      specialty: 'Pediatrician',
      experience: '5 years',
      rating: 4.8,
      status: 'pending'
    },
    {
      id: 3,
      name: 'Dr. Rohit Gupta',
      specialty: 'Orthopedic Surgeon',
      experience: '12 years',
      rating: 4.9,
      status: 'pending'
    }
  ]);

  const recentPatients = [
    {
      id: 1,
      name: 'Rahul Gupta',
      patientId: 'P001234',
      lastVisit: 'Today',
      department: 'Cardiology',
      status: 'Discharged'
    },
    {
      id: 2,
      name: 'Sunita Devi',
      patientId: 'P001235',
      lastVisit: 'Yesterday',
      department: 'General Medicine',
      status: 'Admitted'
    },
    {
      id: 3,
      name: 'Vikash Kumar',
      patientId: 'P001236',
      lastVisit: '2 days ago',
      department: 'Orthopedics',
      status: 'Follow-up'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <div className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">{hospitalName}</h1>
                <p className="text-sm text-gray-400">Multi-Specialty Hospital</p>
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
                onClick={() => alert('Add Appointment modal would open here')}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Appointment</span>
              </button>
              <div className="relative">
                <button 
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Settings className="h-5 w-5" />
                </button>
              </div>
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
          <h2 className="text-3xl font-bold mb-2">Hospital Dashboard 🏥</h2>
          <p className="text-gray-400">Overview of today's operations and performance</p>
        </motion.div>

        {/* Summary Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-sm">Total Patients Today</p>
                <p className="text-2xl font-bold">{todayStats.totalPatients}</p>
                <p className="text-xs text-green-400 mt-1">+12% from yesterday</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-green-900/50 to-green-800/50 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-300 text-sm">Active Doctors/Nurses</p>
                <p className="text-2xl font-bold">{todayStats.activeDoctors}</p>
                <p className="text-xs text-green-400 mt-1">18 online now</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-orange-900/50 to-orange-800/50 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-300 text-sm">Scheduled Appointments</p>
                <p className="text-2xl font-bold">{todayStats.scheduledAppointments}</p>
                <p className="text-xs text-orange-400 mt-1">15 pending</p>
              </div>
              <Calendar className="h-8 w-8 text-orange-400" />
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
                <p className="text-purple-300 text-sm">Revenue Summary</p>
                <p className="text-2xl font-bold">₹{todayStats.revenue.toLocaleString()}</p>
                <p className="text-xs text-green-400 mt-1">+8% this month</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-400" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Appointment Management */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-400" />
                Appointment Management
              </h3>
              <div className="flex space-x-2">
                <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm font-medium transition-colors">
                  Add Appointment
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{appointment.patient}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      appointment.status === 'confirmed' ? 'bg-green-500/20 text-green-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                    <div>Doctor: {appointment.doctor}</div>
                    <div>Time: {appointment.time}</div>
                    <div>Department: {appointment.department}</div>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button 
                      onClick={() => alert(`Assigning doctor to ${appointment.patient}...`)}
                      className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs font-medium transition-colors"
                    >
                      Assign Doctor
                    </button>
                    <button 
                      onClick={() => {
                        setUpcomingAppointments(prev => 
                          prev.map(apt => 
                            apt.id === appointment.id 
                              ? {...apt, status: 'completed'} 
                              : apt
                          )
                        );
                        alert(`Appointment with ${appointment.patient} marked as completed!`);
                      }}
                      className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-xs font-medium transition-colors"
                    >
                      {appointment.status === 'completed' ? 'Completed' : 'Mark Complete'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Staff Management */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-400" />
                Staff Management
              </h3>
              <button 
                onClick={() => alert('Add Staff modal would open here')}
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm font-medium transition-colors"
              >
                Add Staff
              </button>
            </div>

            <div className="space-y-4">
              {staffMembers.map((staff) => (
                <div key={staff.id} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{staff.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        staff.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
                      }`}></div>
                      <span className="text-xs text-gray-400">{staff.status}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{staff.role}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Patients: {staff.patients}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400" />
                      <span className="text-yellow-400">{staff.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => alert('Staff management page would open here')}
              className="w-full mt-4 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg text-sm transition-colors"
            >
              View All Staff
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Patient Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-400" />
                Patient Management
              </h3>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search patients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{patient.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      patient.status === 'Discharged' ? 'bg-green-500/20 text-green-300' :
                      patient.status === 'Admitted' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {patient.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-2">
                    <div>ID: {patient.patientId}</div>
                    <div>Last Visit: {patient.lastVisit}</div>
                    <div>Department: {patient.department}</div>
                  </div>
                  <button 
                    onClick={() => alert(`Opening medical history for ${patient.name}...`)}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    View History & Treatments
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Freelancer Hiring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <UserCheck className="h-5 w-5 mr-2 text-orange-400" />
                Freelancer Hiring
              </h3>
              <button 
                onClick={() => alert('Post Job modal would open here')}
                className="bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded text-sm font-medium transition-colors"
              >
                Post Job
              </button>
            </div>

            <div className="space-y-4">
              {freelancerApplications.map((application) => (
                <div key={application.id} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{application.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400" />
                      <span className="text-yellow-400 text-sm">{application.rating}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-3">
                    <div>Specialty: {application.specialty}</div>
                    <div>Experience: {application.experience}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => {
                        setFreelancerApplications(prev => 
                          prev.filter(app => app.id !== application.id)
                        );
                        alert(`${application.name} has been approved and added to staff!`);
                      }}
                      className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs font-medium transition-colors"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => {
                        setFreelancerApplications(prev => 
                          prev.filter(app => app.id !== application.id)
                        );
                        alert(`${application.name}'s application has been rejected.`);
                      }}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs font-medium transition-colors"
                    >
                      Reject
                    </button>
                    <button 
                      onClick={() => alert(`Opening profile for ${application.name}...`)}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs font-medium transition-colors"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Reports & Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
            Reports & Analytics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-medium mb-4">Patient Traffic</h4>
              <div className="h-32 bg-gray-700/50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Daily/Weekly/Monthly trends</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-medium mb-4">Appointment Completion Rate</h4>
              <div className="h-32 bg-gray-700/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">94%</div>
                  <p className="text-sm text-gray-400">This month</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-medium mb-4">Financial Trends</h4>
              <div className="h-32 bg-gray-700/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">₹45.2L</div>
                  <p className="text-sm text-gray-400">Monthly Revenue</p>
                  <p className="text-xs text-green-400">+12% growth</p>
                </div>
              </div>
            </div>
          </div>
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
            <h3 className="text-lg font-semibold text-white">Hospital Notifications</h3>
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
                    : 'bg-blue-500/10 border-blue-500/30'
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
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                )}
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => {
              setNotifications(prev => prev.map(n => ({...n, read: true})));
            }}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
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
            <h3 className="text-lg font-semibold text-white">Hospital Settings</h3>
            <button 
              onClick={() => setShowSettings(false)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-medium text-white mb-2">Hospital Information</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white">{hospitalName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Type:</span>
                  <span className="text-white">Multi-Specialty</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Departments:</span>
                  <span className="text-white">15</span>
                </div>
              </div>
              <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
                <Edit className="h-4 w-4" />
                <span>Edit Hospital Info</span>
              </button>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-medium text-white mb-2">System Settings</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-300">Auto-assign doctors</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-300">Email notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-300">SMS alerts</span>
                </label>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-medium text-white mb-2">Access Control</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-300">Allow freelancer applications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-300">Patient self-registration</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-300">Emergency access</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-6">
            <button 
              onClick={() => {
                alert('Hospital settings saved successfully!');
                setShowSettings(false);
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
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
</div>
</div>
