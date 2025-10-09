import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Building2, Users, UserCheck, Settings, Shield,
  Menu, X, Brain, BarChart3, Activity, DollarSign, TrendingUp,
  Plus, Eye, Edit, Trash2, Search, Filter, Bell, Globe,
  Server, Database, Lock, Key, Mail, Phone, MapPin, Star,
  CheckCircle, XCircle, AlertTriangle, Clock, Zap, Target
} from 'lucide-react';
import { Button } from '../../components/ui/button';

// Super Admin Dashboard Overview
const SuperAdminDashboard = ({ setActiveTab }) => {
  const [systemStats, setSystemStats] = useState({
    totalHospitals: 45,
    totalDoctors: 1250,
    totalPatients: 15600,
    activeConsultations: 89,
    monthlyRevenue: 2500000,
    systemUptime: 99.8,
    dailyTransactions: 3420,
    supportTickets: 12
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl border border-purple-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">Total Hospitals</p>
              <p className="text-3xl font-bold text-white">{systemStats.totalHospitals}</p>
            </div>
            <Building2 className="h-8 w-8 text-purple-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl border border-blue-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm">Total Doctors</p>
              <p className="text-3xl font-bold text-white">{systemStats.totalDoctors}</p>
            </div>
            <UserCheck className="h-8 w-8 text-blue-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-xl border border-green-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-300 text-sm">Total Patients</p>
              <p className="text-3xl font-bold text-white">{systemStats.totalPatients.toLocaleString()}</p>
            </div>
            <Users className="h-8 w-8 text-green-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-xl border border-yellow-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-300 text-sm">Monthly Revenue</p>
              <p className="text-3xl font-bold text-white">₹{(systemStats.monthlyRevenue / 100000).toFixed(1)}L</p>
            </div>
            <DollarSign className="h-8 w-8 text-yellow-400" />
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Zap className="h-5 w-5 text-purple-400" />
          Quick Actions
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button onClick={() => setActiveTab('hospitals')} className="bg-purple-600 hover:bg-purple-700 text-white h-12 flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Hospital
          </Button>
          <Button onClick={() => setActiveTab('doctors')} className="bg-blue-600 hover:bg-blue-700 text-white h-12 flex items-center gap-2">
            <UserCheck className="h-4 w-4" />
            Verify Doctor
          </Button>
          <Button onClick={() => setActiveTab('analytics')} className="bg-green-600 hover:bg-green-700 text-white h-12 flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            View Analytics
          </Button>
          <Button onClick={() => setActiveTab('system')} className="bg-orange-600 hover:bg-orange-700 text-white h-12 flex items-center gap-2">
            <Settings className="h-4 w-4" />
            System Settings
          </Button>
        </div>
      </motion.div>

      {/* System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h4 className="text-lg font-bold text-white mb-4">System Health</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">System Uptime</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">{systemStats.systemUptime}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Active Consultations</span>
              <span className="text-white font-medium">{systemStats.activeConsultations}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Daily Transactions</span>
              <span className="text-white font-medium">{systemStats.dailyTransactions}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Support Tickets</span>
              <span className="text-yellow-400 font-medium">{systemStats.supportTickets} pending</span>
            </div>
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h4 className="text-lg font-bold text-white mb-4">Recent Activities</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-gray-300 text-sm">New hospital "City Medical" approved</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
              <UserCheck className="h-4 w-4 text-blue-400" />
              <span className="text-gray-300 text-sm">Dr. Smith verification completed</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
              <span className="text-gray-300 text-sm">System maintenance scheduled</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Hospital Management
const HospitalManagement = () => {
  const [hospitals, setHospitals] = useState([
    { id: 1, name: "City Medical Center", location: "Mumbai", status: "active", doctors: 45, patients: 1200, rating: 4.8 },
    { id: 2, name: "Metro Hospital", location: "Delhi", status: "active", doctors: 32, patients: 890, rating: 4.6 },
    { id: 3, name: "Care Hospital", location: "Bangalore", status: "pending", doctors: 28, patients: 650, rating: 4.7 }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addHospital = () => {
    const newHospital = {
      id: Date.now(),
      name: `Hospital ${Math.floor(Math.random() * 1000)}`,
      location: ["Mumbai", "Delhi", "Bangalore", "Chennai"][Math.floor(Math.random() * 4)],
      status: "pending",
      doctors: Math.floor(Math.random() * 50) + 10,
      patients: Math.floor(Math.random() * 1000) + 200,
      rating: (4.0 + Math.random()).toFixed(1)
    };
    setHospitals(prev => [...prev, newHospital]);
    alert("New hospital added for review!");
  };

  const updateStatus = (id, status) => {
    setHospitals(prev => prev.map(hospital => 
      hospital.id === id ? { ...hospital, status } : hospital
    ));
    alert(`Hospital ${status}!`);
  };

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Hospital Management</h2>
          <p className="text-gray-400">Manage and monitor all hospitals in the network</p>
        </div>
        <Button onClick={addHospital} className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Hospital
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search hospitals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-purple-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredHospitals.map((hospital) => (
          <motion.div key={hospital.id} className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{hospital.name}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {hospital.location}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                hospital.status === 'active' ? 'bg-green-500/20 text-green-400' :
                hospital.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {hospital.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Doctors</span>
                <span className="text-white font-medium">{hospital.doctors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Patients</span>
                <span className="text-white font-medium">{hospital.patients}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Rating</span>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{hospital.rating}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              {hospital.status === 'pending' && (
                <Button size="sm" onClick={() => updateStatus(hospital.id, 'active')} className="flex-1 bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Approve
                </Button>
              )}
              <Button size="sm" onClick={() => alert(`Viewing details for ${hospital.name}`)} className="flex-1 bg-purple-600 hover:bg-purple-700">
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
              <Button size="sm" variant="outline" onClick={() => alert(`Editing ${hospital.name}`)} className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800">
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

// Doctor Verification System
const DoctorVerification = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology", hospital: "City Medical", status: "pending", experience: "8 years", license: "MED123456" },
    { id: 2, name: "Dr. Mike Chen", specialty: "Neurology", hospital: "Independent", status: "verified", experience: "12 years", license: "MED789012" },
    { id: 3, name: "Dr. Lisa Patel", specialty: "Pediatrics", hospital: "Metro Hospital", status: "rejected", experience: "5 years", license: "MED345678" }
  ]);

  const updateVerification = (id, status) => {
    setDoctors(prev => prev.map(doctor => 
      doctor.id === id ? { ...doctor, status } : doctor
    ));
    alert(`Doctor ${status}!`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Doctor Verification</h2>
        <p className="text-gray-400">Review and verify doctor credentials</p>
      </div>

      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50 border-b border-gray-700">
              <tr>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Doctor</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Specialty</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Hospital</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Status</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                  <td className="py-4 px-6">
                    <div>
                      <span className="text-white font-medium">{doctor.name}</span>
                      <p className="text-gray-400 text-sm">License: {doctor.license}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{doctor.specialty}</td>
                  <td className="py-4 px-6 text-gray-300">{doctor.hospital}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      doctor.status === 'verified' ? 'bg-green-500/20 text-green-400' :
                      doctor.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {doctor.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      {doctor.status === 'pending' && (
                        <>
                          <button onClick={() => updateVerification(doctor.id, 'verified')} className="text-green-400 hover:text-green-300 p-2 rounded-lg hover:bg-green-500/20">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button onClick={() => updateVerification(doctor.id, 'rejected')} className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/20">
                            <XCircle className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      <button onClick={() => alert(`Viewing profile for ${doctor.name}`)} className="text-purple-400 hover:text-purple-300 p-2 rounded-lg hover:bg-purple-500/20">
                        <Eye className="h-4 w-4" />
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

// User Management
const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "patient", status: "active", joinDate: "2024-01-15" },
    { id: 2, name: "Dr. Sarah Smith", email: "sarah@hospital.com", role: "doctor", status: "active", joinDate: "2024-02-20" },
    { id: 3, name: "Admin User", email: "admin@medivolt.com", role: "admin", status: "active", joinDate: "2024-01-01" }
  ]);

  const updateUserStatus = (id, status) => {
    setUsers(prev => prev.map(user => user.id === id ? { ...user, status } : user));
    alert(`User ${status}!`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">User Management</h2>
        <p className="text-gray-400">Manage all platform users</p>
      </div>

      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800/50 border-b border-gray-700">
            <tr>
              <th className="text-left text-gray-300 font-semibold py-4 px-6">User</th>
              <th className="text-left text-gray-300 font-semibold py-4 px-6">Role</th>
              <th className="text-left text-gray-300 font-semibold py-4 px-6">Status</th>
              <th className="text-left text-gray-300 font-semibold py-4 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                <td className="py-4 px-6">
                  <div>
                    <span className="text-white font-medium">{user.name}</span>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.role === 'admin' ? 'bg-red-500/20 text-red-400' :
                    user.role === 'doctor' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex gap-2">
                    <button onClick={() => updateUserStatus(user.id, user.status === 'active' ? 'suspended' : 'active')} 
                            className="text-yellow-400 hover:text-yellow-300 p-2 rounded-lg hover:bg-yellow-500/20">
                      <Shield className="h-4 w-4" />
                    </button>
                    <button onClick={() => alert(`Viewing ${user.name}`)} className="text-purple-400 hover:text-purple-300 p-2 rounded-lg hover:bg-purple-500/20">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// System Analytics
const SystemAnalytics = () => {
  const [analytics] = useState({
    userGrowth: [1200, 1450, 1680, 1920, 2150],
    revenue: [180000, 220000, 195000, 280000, 320000],
    consultations: [450, 520, 480, 650, 720],
    satisfaction: 4.7
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">System Analytics</h2>
        <p className="text-gray-400">Platform performance insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl border border-purple-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">User Growth</p>
              <p className="text-3xl font-bold text-white">+{((analytics.userGrowth[4] - analytics.userGrowth[0]) / analytics.userGrowth[0] * 100).toFixed(0)}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-xl border border-green-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-300 text-sm">Revenue Growth</p>
              <p className="text-3xl font-bold text-white">+{((analytics.revenue[4] - analytics.revenue[0]) / analytics.revenue[0] * 100).toFixed(0)}%</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl border border-blue-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm">Consultations</p>
              <p className="text-3xl font-bold text-white">{analytics.consultations[4]}</p>
            </div>
            <Activity className="h-8 w-8 text-blue-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-xl border border-yellow-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-300 text-sm">Satisfaction</p>
              <p className="text-3xl font-bold text-white">{analytics.satisfaction}</p>
            </div>
            <Star className="h-8 w-8 text-yellow-400" />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Monthly Revenue</h3>
          <div className="space-y-4">
            {analytics.revenue.map((amount, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300">Month {index + 1}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: `${(amount / Math.max(...analytics.revenue)) * 100}%`}}></div>
                  </div>
                  <span className="text-white font-medium">₹{(amount / 1000).toFixed(0)}K</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4">User Growth Trend</h3>
          <div className="space-y-4">
            {analytics.userGrowth.map((users, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300">Month {index + 1}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: `${(users / Math.max(...analytics.userGrowth)) * 100}%`}}></div>
                  </div>
                  <span className="text-white font-medium">{users}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// System Settings
const SystemSettings = () => {
  const [settings, setSettings] = useState({
    maintenance: false,
    registrations: true,
    notifications: true,
    backups: true,
    maxUsers: 10000,
    sessionTimeout: 30
  });

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    alert(`${key} updated!`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">System Settings</h2>
        <p className="text-gray-400">Configure platform settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4">General Settings</h3>
          <div className="space-y-4">
            {Object.entries(settings).filter(([key]) => typeof settings[key] === 'boolean').map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <button
                  onClick={() => updateSetting(key, !value)}
                  className={`w-12 h-6 rounded-full transition-colors ${value ? 'bg-purple-600' : 'bg-gray-600'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${value ? 'translate-x-6' : 'translate-x-1'}`}></div>
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Limits & Timeouts</h3>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm">Max Users</label>
              <input
                type="number"
                value={settings.maxUsers}
                onChange={(e) => updateSetting('maxUsers', parseInt(e.target.value))}
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm">Session Timeout (minutes)</label>
              <input
                type="number"
                value={settings.sessionTimeout}
                onChange={(e) => updateSetting('sessionTimeout', parseInt(e.target.value))}
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Security Settings
const SecuritySettings = () => {
  const [security, setSecurity] = useState({
    twoFactor: true,
    encryption: true,
    loginAttempts: 5,
    passwordExpiry: 90,
    ipWhitelist: ["192.168.1.1", "10.0.0.1"]
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Security Settings</h2>
        <p className="text-gray-400">Configure security policies</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-red-400" />
            Security Features
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Two-Factor Authentication</span>
              <button className={`w-12 h-6 rounded-full transition-colors ${security.twoFactor ? 'bg-green-600' : 'bg-gray-600'}`}>
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${security.twoFactor ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Data Encryption</span>
              <button className={`w-12 h-6 rounded-full transition-colors ${security.encryption ? 'bg-green-600' : 'bg-gray-600'}`}>
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${security.encryption ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Lock className="h-5 w-5 text-yellow-400" />
            Access Control
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm">Max Login Attempts</label>
              <input
                type="number"
                value={security.loginAttempts}
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
                readOnly
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm">Password Expiry (days)</label>
              <input
                type="number"
                value={security.passwordExpiry}
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
                readOnly
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4">IP Whitelist</h3>
        <div className="space-y-2">
          {security.ipWhitelist.map((ip, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-800/50 p-3 rounded-lg">
              <span className="text-gray-300">{ip}</span>
              <button className="text-red-400 hover:text-red-300">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Main Super Admin Panel
export default function SuperAdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'hospitals', label: 'Hospitals', icon: Building2 },
    { id: 'doctors', label: 'Doctor Verification', icon: UserCheck },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'system', label: 'System Settings', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <SuperAdminDashboard setActiveTab={setActiveTab} />;
      case 'hospitals':
        return <HospitalManagement />;
      case 'doctors':
        return <DoctorVerification />;
      case 'users':
        return <UserManagement />;
      case 'analytics':
        return <SystemAnalytics />;
      case 'system':
        return <SystemSettings />;
      case 'security':
        return <SecuritySettings />;
      default:
        return <SuperAdminDashboard setActiveTab={setActiveTab} />;
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
                <p className="text-purple-400 text-sm">Super Admin</p>
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
                  <h1 className="text-2xl font-bold text-white">Super Admin Dashboard</h1>
                  <p className="text-gray-400">Complete system management and control</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full">
                  <Shield className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-sm font-medium">Admin</span>
                </div>
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Brain className="h-5 w-5 text-purple-400" />
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
                      <p className="text-purple-400 text-sm">Super Admin</p>
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
