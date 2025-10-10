import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Calendar, Users, UserPlus, Bell, BarChart3, Shield, 
  Menu, X, User, Stethoscope, Activity, DollarSign, Clock, AlertTriangle,
  CheckCircle, XCircle, RefreshCw, Plus, Filter, Eye, Edit, Trash2, Star,
  Phone, Mail, TrendingUp, Video, MessageSquare, FileText, Settings,
  Search, Download, Upload, Brain, Heart, Zap, Globe, Building2,
  UserCheck, Briefcase, PieChart, LineChart, Calendar as CalendarIcon,
  MapPin, Award, Target, Wifi, WifiOff, Monitor, Tablet, Smartphone
} from 'lucide-react';

import { Button } from '../../components/ui/button.jsx';

// Dashboard Overview Component
const DashboardOverview = ({ setActiveTab }) => {
  const [realTimeStats, setRealTimeStats] = useState({
    activeConsultations: 8,
    todayAppointments: 47,
    onlineDoctors: 12,
    waitingPatients: 6,
    completedToday: 23,
    revenue: 125600,
    emergencyCases: 3,
    bedOccupancy: 78
  });

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, type: 'consultation', message: 'Dr. Smith started video consultation with John Doe', time: '2 min ago', status: 'ongoing' },
    { id: 2, type: 'appointment', message: 'New appointment scheduled for Cardiology', time: '5 min ago', status: 'scheduled' },
    { id: 3, type: 'emergency', message: 'Emergency case admitted to ICU', time: '8 min ago', status: 'critical' },
    { id: 4, type: 'consultation', message: 'Dr. Johnson completed consultation with Sarah Wilson', time: '12 min ago', status: 'completed' },
    { id: 5, type: 'system', message: 'New doctor Dr. Martinez joined the platform', time: '15 min ago', status: 'info' }
  ]);

  const [chartData, setChartData] = useState({
    consultations: [12, 19, 15, 25, 22, 18, 28, 24],
    appointments: [8, 15, 12, 20, 18, 14, 22, 19],
    revenue: [45000, 52000, 48000, 61000, 55000, 49000, 67000, 58000]
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeStats(prev => ({
        ...prev,
        activeConsultations: prev.activeConsultations + Math.floor(Math.random() * 3) - 1,
        waitingPatients: Math.max(0, prev.waitingPatients + Math.floor(Math.random() * 3) - 1)
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'consultation': return Video;
      case 'appointment': return Calendar;
      case 'emergency': return AlertTriangle;
      case 'system': return Settings;
      default: return Bell;
    }
  };

  const getActivityColor = (status) => {
    switch (status) {
      case 'ongoing': return 'text-green-400 bg-green-500/20';
      case 'scheduled': return 'text-blue-400 bg-blue-500/20';
      case 'critical': return 'text-red-400 bg-red-500/20';
      case 'completed': return 'text-purple-400 bg-purple-500/20';
      case 'info': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 backdrop-blur-lg rounded-2xl border border-purple-500/30 p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-purple-300 text-sm font-medium">Active Consultations</p>
              <p className="text-3xl font-bold text-white mt-1">{realTimeStats.activeConsultations}</p>
              <p className="text-green-400 text-xs mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12% from yesterday
              </p>
            </div>
            <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Video className="h-7 w-7 text-purple-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 backdrop-blur-lg rounded-2xl border border-blue-500/30 p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-blue-300 text-sm font-medium">Today's Appointments</p>
              <p className="text-3xl font-bold text-white mt-1">{realTimeStats.todayAppointments}</p>
              <p className="text-green-400 text-xs mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +8% from yesterday
              </p>
            </div>
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Calendar className="h-7 w-7 text-blue-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-600/20 to-green-700/20 backdrop-blur-lg rounded-2xl border border-green-500/30 p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-green-300 text-sm font-medium">Online Doctors</p>
              <p className="text-3xl font-bold text-white mt-1">{realTimeStats.onlineDoctors}</p>
              <p className="text-green-400 text-xs mt-1 flex items-center gap-1">
                <Wifi className="h-3 w-3" />
                All systems online
              </p>
            </div>
            <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Stethoscope className="h-7 w-7 text-green-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 backdrop-blur-lg rounded-2xl border border-orange-500/30 p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-orange-300 text-sm font-medium">Today's Revenue</p>
              <p className="text-3xl font-bold text-white mt-1">₹{realTimeStats.revenue.toLocaleString()}</p>
              <p className="text-green-400 text-xs mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +15% from yesterday
              </p>
            </div>
            <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <DollarSign className="h-7 w-7 text-orange-400" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Consultation Trends Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <LineChart className="h-5 w-5 text-purple-400" />
              Consultation Trends
            </h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">Weekly</span>
              <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs font-medium">Monthly</span>
            </div>
          </div>
          
          {/* Simple Chart Representation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Video Consultations</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-purple-500 rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium">75%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Chat Consultations</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium">50%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Phone Consultations</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-1/4 h-full bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium">25%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-400" />
              Recent Activities
            </h3>
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const IconComponent = getActivityIcon(activity.type);
              return (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getActivityColor(activity.status)}`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{activity.message}</p>
                    <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Zap className="h-5 w-5 text-purple-400" />
          Quick Actions
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            onClick={() => setActiveTab('consultations')}
            className="bg-purple-600 hover:bg-purple-700 text-white h-12 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            New Consultation
          </Button>
          <Button 
            onClick={() => setActiveTab('appointments')}
            className="bg-blue-600 hover:bg-blue-700 text-white h-12 flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Schedule Appointment
          </Button>
          <Button 
            onClick={() => setActiveTab('doctors')}
            className="bg-green-600 hover:bg-green-700 text-white h-12 flex items-center gap-2"
          >
            <UserPlus className="h-4 w-4" />
            Add Doctor
          </Button>
          <Button 
            onClick={() => setActiveTab('analytics')}
            className="bg-orange-600 hover:bg-orange-700 text-white h-12 flex items-center gap-2"
          >
            <BarChart3 className="h-4 w-4" />
            View Reports
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

// Online Consultation Management Component
const OnlineConsultationManager = () => {
  const [activeConsultations, setActiveConsultations] = useState([
    { 
      id: 1, 
      patient: "John Doe", 
      doctor: "Dr. Sarah Smith", 
      startTime: "09:30 AM", 
      duration: "15 min",
      status: "ongoing", 
      type: "video",
      symptoms: "Chest pain, shortness of breath",
      priority: "high"
    },
    { 
      id: 2, 
      patient: "Emily Johnson", 
      doctor: "Dr. Michael Brown", 
      startTime: "10:00 AM", 
      duration: "8 min",
      status: "waiting", 
      type: "chat",
      symptoms: "Headache, fever",
      priority: "medium"
    },
    { 
      id: 3, 
      patient: "Robert Wilson", 
      doctor: "Dr. Lisa Davis", 
      startTime: "10:15 AM", 
      duration: "12 min",
      status: "completed", 
      type: "video",
      symptoms: "Follow-up consultation",
      priority: "low"
    }
  ]);

  const [appointments, setAppointments] = useState([
    { 
      id: 1, 
      patient: "Alice Cooper", 
      doctor: "Dr. James Wilson", 
      scheduledTime: "11:00 AM", 
      status: "confirmed", 
      type: "online",
      department: "Cardiology",
      phone: "+91 98765 43210",
      email: "alice@email.com"
    },
    { 
      id: 2, 
      patient: "Mark Thompson", 
      doctor: "Dr. Anna Lee", 
      scheduledTime: "11:30 AM", 
      status: "pending", 
      type: "online",
      department: "Neurology",
      phone: "+91 98765 43211",
      email: "mark@email.com"
    },
    { 
      id: 3, 
      patient: "Sophie Chen", 
      doctor: "Dr. Robert Kim", 
      scheduledTime: "12:00 PM", 
      status: "rescheduled", 
      type: "video",
      department: "Dermatology",
      phone: "+91 98765 43212",
      email: "sophie@email.com"
    }
  ]);

  const [stats, setStats] = useState([
    { title: "Active Consultations", value: 3, icon: Video, color: "purple", trend: "+2" },
    { title: "Today's Appointments", value: 24, icon: Calendar, color: "purple", trend: "+12%" },
    { title: "Online Doctors", value: 8, icon: Stethoscope, color: "green", trend: "+1" },
    { title: "Waiting Patients", value: 5, icon: Clock, color: "orange", trend: "-2" },
    { title: "Completed Today", value: 18, icon: CheckCircle, color: "blue", trend: "+6" }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ongoing': return 'text-green-400 bg-green-500/20';
      case 'waiting': return 'text-yellow-400 bg-yellow-500/20';
      case 'completed': return 'text-blue-400 bg-blue-500/20';
      case 'confirmed': return 'text-purple-400 bg-purple-500/20';
      case 'pending': return 'text-orange-400 bg-orange-500/20';
      case 'rescheduled': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const handleConsultationAction = (id, action) => {
    setActiveConsultations(prev => prev.map(consultation => {
      if (consultation.id === id) {
        // Update status and show notification
        const updatedConsultation = { ...consultation, status: action };
        
        // Add to recent activities
        const newActivity = {
          id: Date.now(),
          type: 'consultation',
          message: `Consultation with ${consultation.patient} ${action}`,
          time: 'Just now',
          status: action
        };
        
        // Update activities in parent component if needed
        return updatedConsultation;
      }
      return consultation;
    }));
    
    // Show success notification
    alert(`Consultation ${action} successfully!`);
  };

  const handleAppointmentAction = (id, action) => {
    setAppointments(prev => prev.map(appointment => {
      if (appointment.id === id) {
        const updatedAppointment = { ...appointment, status: action };
        
        // Show success notification
        alert(`Appointment ${action} successfully for ${appointment.patient}!`);
        return updatedAppointment;
      }
      return appointment;
    }));
  };

  const startNewConsultation = () => {
    const newConsultation = {
      id: Date.now(),
      patient: "New Patient",
      doctor: "Available Doctor",
      startTime: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      duration: "0 min",
      status: "waiting",
      type: "video",
      symptoms: "Initial consultation",
      priority: "medium"
    };
    
    setActiveConsultations(prev => [newConsultation, ...prev]);
    alert("New consultation session created!");
  };

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                <p className="text-purple-400 text-xs mt-1">{stat.trend}</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Active Consultations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Video className="h-5 w-5 text-purple-400" />
            Active Online Consultations
          </h3>
          <Button 
            onClick={startNewConsultation}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Consultation
          </Button>
        </div>

        <div className="space-y-4">
          {activeConsultations.map((consultation) => (
            <motion.div
              key={consultation.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{consultation.patient}</h4>
                    <p className="text-gray-400 text-sm">with {consultation.doctor}</p>
                    <p className="text-gray-500 text-xs">{consultation.symptoms}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-white text-sm">{consultation.startTime}</p>
                    <p className="text-gray-400 text-xs">{consultation.duration}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(consultation.status)}`}>
                      {consultation.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(consultation.priority)}`}>
                      {consultation.priority}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {consultation.type === 'video' ? (
                      <Video className="h-5 w-5 text-purple-400" />
                    ) : (
                      <MessageSquare className="h-5 w-5 text-blue-400" />
                    )}
                    
                    <div className="flex gap-1">
                      <button 
                        onClick={() => handleConsultationAction(consultation.id, 'ongoing')}
                        className="text-green-400 hover:text-green-300 p-1 rounded hover:bg-green-500/20"
                        title="Join Consultation"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-purple-400 hover:text-purple-300 p-1 rounded hover:bg-purple-500/20" title="Edit">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleConsultationAction(consultation.id, 'completed')}
                        className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-500/20" 
                        title="End Consultation"
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Appointment Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-400" />
            Upcoming Online Appointments
          </h3>
          <div className="flex gap-2">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Appointment
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left text-gray-400 font-medium py-3">Patient</th>
                <th className="text-left text-gray-400 font-medium py-3">Doctor</th>
                <th className="text-left text-gray-400 font-medium py-3">Time</th>
                <th className="text-left text-gray-400 font-medium py-3">Department</th>
                <th className="text-left text-gray-400 font-medium py-3">Status</th>
                <th className="text-left text-gray-400 font-medium py-3">Contact</th>
                <th className="text-left text-gray-400 font-medium py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <motion.tr
                  key={appointment.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-gray-800 hover:bg-gray-800/30"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-purple-400" />
                      </div>
                      <span className="text-white">{appointment.patient}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{appointment.doctor}</td>
                  <td className="py-4 text-gray-300">{appointment.scheduledTime}</td>
                  <td className="py-4 text-gray-300">{appointment.department}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300 p-1 rounded hover:bg-blue-500/20" title="Call">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="text-green-400 hover:text-green-300 p-1 rounded hover:bg-green-500/20" title="Email">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-1">
                      {appointment.status === 'pending' && (
                        <>
                          <button 
                            onClick={() => handleAppointmentAction(appointment.id, 'confirmed')}
                            className="text-green-400 hover:text-green-300 p-1 rounded hover:bg-green-500/20" 
                            title="Approve"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleAppointmentAction(appointment.id, 'cancelled')}
                            className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-500/20" 
                            title="Cancel"
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      <button 
                        onClick={() => handleAppointmentAction(appointment.id, 'rescheduled')}
                        className="text-purple-400 hover:text-purple-300 p-1 rounded hover:bg-purple-500/20" 
                        title="Reschedule"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-300 p-1 rounded hover:bg-gray-500/20" title="View Details">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

// Appointment Manager Component
const AppointmentManager = () => {
  const [appointments, setAppointments] = useState([
    { 
      id: 1, 
      patient: "Alice Cooper", 
      doctor: "Dr. James Wilson", 
      scheduledTime: "11:00 AM", 
      date: "2024-10-06",
      status: "confirmed", 
      type: "video",
      department: "Cardiology",
      phone: "+91 98765 43210",
      email: "alice@email.com",
      symptoms: "Chest pain, irregular heartbeat"
    },
    { 
      id: 2, 
      patient: "Mark Thompson", 
      doctor: "Dr. Anna Lee", 
      scheduledTime: "11:30 AM", 
      date: "2024-10-06",
      status: "pending", 
      type: "chat",
      department: "Neurology",
      phone: "+91 98765 43211",
      email: "mark@email.com",
      symptoms: "Severe headaches, dizziness"
    },
    { 
      id: 3, 
      patient: "Sophie Chen", 
      doctor: "Dr. Robert Kim", 
      scheduledTime: "12:00 PM", 
      date: "2024-10-06",
      status: "rescheduled", 
      type: "video",
      department: "Dermatology",
      phone: "+91 98765 43212",
      email: "sophie@email.com",
      symptoms: "Skin rash, allergic reaction"
    }
  ]);

  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false);

  const filteredAppointments = appointments.filter(appointment => {
    const matchesStatus = filterStatus === 'all' || appointment.status === filterStatus;
    const matchesSearch = appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleAppointmentAction = (id, action) => {
    setAppointments(prev => prev.map(appointment => {
      if (appointment.id === id) {
        const updatedAppointment = { ...appointment, status: action };
        alert(`Appointment ${action} successfully for ${appointment.patient}!`);
        return updatedAppointment;
      }
      return appointment;
    }));
  };

  const scheduleNewAppointment = () => {
    const newAppointment = {
      id: Date.now(),
      patient: "New Patient " + Math.floor(Math.random() * 1000),
      doctor: "Dr. Available",
      scheduledTime: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      date: new Date().toLocaleDateString(),
      status: "pending",
      type: "video",
      department: "General",
      phone: "+91 " + Math.floor(Math.random() * 10000000000),
      email: "patient@email.com",
      symptoms: "General consultation"
    };
    
    setAppointments(prev => [newAppointment, ...prev]);
    alert("New appointment scheduled successfully!");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'rescheduled': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'cancelled': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Appointment Management</h2>
          <p className="text-gray-400">Manage and schedule patient appointments</p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={scheduleNewAppointment}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients or doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {['all', 'pending', 'confirmed', 'rescheduled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterStatus === status
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50 border-b border-gray-700">
              <tr>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Patient</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Doctor</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Date & Time</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Department</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Type</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Status</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <motion.tr
                  key={appointment.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{appointment.patient}</p>
                        <p className="text-gray-400 text-sm">{appointment.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{appointment.doctor}</td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-white">{appointment.scheduledTime}</p>
                      <p className="text-gray-400 text-sm">{appointment.date}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{appointment.department}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {appointment.type === 'video' ? (
                        <Video className="h-4 w-4 text-purple-400" />
                      ) : (
                        <MessageSquare className="h-4 w-4 text-blue-400" />
                      )}
                      <span className="text-gray-300 text-sm capitalize">{appointment.type}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleAppointmentAction(appointment.id, 'confirmed')}
                        className="text-green-400 hover:text-green-300 p-2 rounded-lg hover:bg-green-500/20 transition-colors" 
                        title="Approve"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleAppointmentAction(appointment.id, 'rescheduled')}
                        className="text-blue-400 hover:text-blue-300 p-2 rounded-lg hover:bg-blue-500/20 transition-colors" 
                        title="Reschedule"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => alert(`Viewing details for ${appointment.patient}\nDoctor: ${appointment.doctor}\nSymptoms: ${appointment.symptoms}\nPhone: ${appointment.phone}\nEmail: ${appointment.email}`)}
                        className="text-purple-400 hover:text-purple-300 p-2 rounded-lg hover:bg-purple-500/20 transition-colors" 
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleAppointmentAction(appointment.id, 'cancelled')}
                        className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/20 transition-colors" 
                        title="Cancel"
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Doctor Management Component
const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Sarah Smith", specialty: "Cardiology", status: "online", patients: 24, rating: 4.9, experience: "8 years" },
    { id: 2, name: "Dr. Michael Brown", specialty: "Neurology", status: "busy", patients: 18, rating: 4.8, experience: "12 years" },
    { id: 3, name: "Dr. Lisa Davis", specialty: "Dermatology", status: "offline", patients: 15, rating: 4.7, experience: "6 years" },
    { id: 4, name: "Dr. James Wilson", specialty: "Cardiology", status: "online", patients: 22, rating: 4.9, experience: "10 years" }
  ]);

  const addNewDoctor = () => {
    const specialties = ["Cardiology", "Neurology", "Dermatology", "Pediatrics", "Orthopedics", "Psychiatry"];
    const statuses = ["online", "busy", "offline"];
    
    const newDoctor = {
      id: Date.now(),
      name: `Dr. New Doctor ${Math.floor(Math.random() * 100)}`,
      specialty: specialties[Math.floor(Math.random() * specialties.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      patients: Math.floor(Math.random() * 30),
      rating: (4.0 + Math.random()).toFixed(1),
      experience: `${Math.floor(Math.random() * 15) + 1} years`
    };
    
    setDoctors(prev => [...prev, newDoctor]);
    alert(`New doctor ${newDoctor.name} added successfully!`);
  };

  const toggleDoctorStatus = (id) => {
    setDoctors(prev => prev.map(doctor => {
      if (doctor.id === id) {
        const statuses = ["online", "busy", "offline"];
        const currentIndex = statuses.indexOf(doctor.status);
        const nextStatus = statuses[(currentIndex + 1) % statuses.length];
        
        alert(`${doctor.name} status changed to ${nextStatus}`);
        return { ...doctor, status: nextStatus };
      }
      return doctor;
    }));
  };

  const viewDoctorDetails = (doctor) => {
    alert(`Doctor Details:\nName: ${doctor.name}\nSpecialty: ${doctor.specialty}\nStatus: ${doctor.status}\nPatients Today: ${doctor.patients}\nRating: ${doctor.rating}\nExperience: ${doctor.experience}`);
  };

  const editDoctor = (doctor) => {
    const newName = prompt("Enter new name:", doctor.name);
    if (newName && newName !== doctor.name) {
      setDoctors(prev => prev.map(d => 
        d.id === doctor.id ? { ...d, name: newName } : d
      ));
      alert(`Doctor name updated to ${newName}`);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-green-400 bg-green-500/20';
      case 'busy': return 'text-yellow-400 bg-yellow-500/20';
      case 'offline': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Doctor Management</h2>
          <p className="text-gray-400">Manage hospital doctors and specialists</p>
        </div>
        <Button 
          onClick={addNewDoctor}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Add Doctor
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{doctor.name}</h3>
                <p className="text-gray-400 text-sm">{doctor.specialty}</p>
                <button 
                  onClick={() => toggleDoctorStatus(doctor.id)}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-colors hover:opacity-80 ${getStatusColor(doctor.status)}`}
                >
                  {doctor.status}
                </button>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Patients Today</span>
                <span className="text-white font-medium">{doctor.patients}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Rating</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{doctor.rating}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Experience</span>
                <span className="text-white font-medium">{doctor.experience}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button 
                size="sm" 
                onClick={() => viewDoctorDetails(doctor)}
                className="flex-1 bg-purple-600 hover:bg-purple-700"
              >
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => editDoctor(doctor)}
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Patient Records Component
const PatientRecords = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 45, phone: "+91 98765 43210", lastVisit: "2024-10-05", condition: "Hypertension" },
    { id: 2, name: "Jane Smith", age: 32, phone: "+91 98765 43211", lastVisit: "2024-10-04", condition: "Diabetes" },
    { id: 3, name: "Mike Johnson", age: 28, phone: "+91 98765 43212", lastVisit: "2024-10-03", condition: "Asthma" }
  ]);

  const addNewPatient = () => {
    const conditions = ["Hypertension", "Diabetes", "Asthma", "Heart Disease", "Arthritis"];
    const newPatient = {
      id: Date.now(),
      name: `Patient ${Math.floor(Math.random() * 1000)}`,
      age: Math.floor(Math.random() * 60) + 20,
      phone: `+91 ${Math.floor(Math.random() * 10000000000)}`,
      lastVisit: new Date().toLocaleDateString(),
      condition: conditions[Math.floor(Math.random() * conditions.length)]
    };
    
    setPatients(prev => [...prev, newPatient]);
    alert(`New patient ${newPatient.name} added successfully!`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Patient Records</h2>
          <p className="text-gray-400">Manage patient information and medical history</p>
        </div>
        <Button 
          onClick={addNewPatient}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Patient
        </Button>
      </div>

      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50 border-b border-gray-700">
              <tr>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Patient</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Age</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Phone</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Last Visit</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Condition</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-purple-400" />
                      </div>
                      <span className="text-white font-medium">{patient.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{patient.age}</td>
                  <td className="py-4 px-6 text-gray-300">{patient.phone}</td>
                  <td className="py-4 px-6 text-gray-300">{patient.lastVisit}</td>
                  <td className="py-4 px-6 text-gray-300">{patient.condition}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => alert(`Viewing medical history for ${patient.name}`)}
                        className="text-purple-400 hover:text-purple-300 p-2 rounded-lg hover:bg-purple-500/20"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => alert(`Editing patient ${patient.name}`)}
                        className="text-blue-400 hover:text-blue-300 p-2 rounded-lg hover:bg-blue-500/20"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Analytics Dashboard Component
const AnalyticsDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>
        <p className="text-gray-400">Hospital performance metrics and insights</p>
      </div>
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-8 text-center">
        <BarChart3 className="h-16 w-16 text-purple-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
        <p className="text-gray-400 mb-4">Detailed reports and performance metrics coming soon</p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <PieChart className="h-4 w-4 mr-2" />
          View Reports
        </Button>
      </div>
    </div>
  );
};

// Settings Panel Component
const SettingsPanel = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Settings</h2>
        <p className="text-gray-400">Configure hospital and system settings</p>
      </div>
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-8 text-center">
        <Settings className="h-16 w-16 text-purple-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">System Settings</h3>
        <p className="text-gray-400 mb-4">Hospital configuration and preferences</p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Shield className="h-4 w-4 mr-2" />
          Configure
        </Button>
      </div>
    </div>
  );
};

// Main Hospital Admin Panel Component
export default function HospitalAdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'consultations', label: 'Online Consultations', icon: Video },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'doctors', label: 'Doctor Management', icon: Stethoscope },
    { id: 'patients', label: 'Patient Records', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview setActiveTab={setActiveTab} />;
      case 'consultations':
        return <OnlineConsultationManager />;
      case 'appointments':
        return <AppointmentManager />;
      case 'doctors':
        return <DoctorManagement />;
      case 'patients':
        return <PatientRecords />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <DashboardOverview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/8 via-transparent to-transparent"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 flex h-screen">
        {/* Sidebar */}
        <div className="w-80 h-full bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-lg border-r border-gray-700/50 hidden lg:block">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">MediVolt</h1>
                <p className="text-purple-400 text-sm">Hospital Admin</p>
              </div>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-lg border-b border-gray-700/50 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800/50"
                >
                  <Menu className="h-6 w-6" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {menuItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
                  </h2>
                  <p className="text-gray-400">Manage your hospital's online services</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search patients, doctors..."
                    className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                
                <button className="relative p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/50">
                  <Bell className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>

                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-purple-400" />
                </div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed left-0 top-0 w-80 h-full bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-lg border-r border-gray-700/50 z-50"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">MediVolt</h1>
                      <p className="text-purple-400 text-sm">Hospital Admin</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800/50"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ x: 4 }}
                      onClick={() => {
                        setActiveTab(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
