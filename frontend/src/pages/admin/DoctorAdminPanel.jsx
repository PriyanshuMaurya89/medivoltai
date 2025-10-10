import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Calendar, Users, User, Bell, BarChart3, Settings,
  Menu, X, Stethoscope, Activity, DollarSign, Clock, CheckCircle,
  XCircle, Plus, Eye, Edit, Phone, Mail, Video, MessageSquare,
  Brain, Heart, Zap, Star, TrendingUp, FileText, Shield, Award
} from 'lucide-react';
import { Button } from '../../components/ui/button.jsx';

// Dashboard Overview Component
const DoctorDashboard = ({ setActiveTab }) => {
  const [stats, setStats] = useState({
    todayAppointments: 12,
    completedConsultations: 8,
    pendingAppointments: 4,
    totalPatients: 156,
    monthlyEarnings: 45000,
    avgRating: 4.8,
    onlineStatus: 'online'
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl border border-purple-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">Today's Appointments</p>
              <p className="text-3xl font-bold text-white">{stats.todayAppointments}</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-xl border border-green-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-300 text-sm">Completed Today</p>
              <p className="text-3xl font-bold text-white">{stats.completedConsultations}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl border border-blue-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm">Total Patients</p>
              <p className="text-3xl font-bold text-white">{stats.totalPatients}</p>
            </div>
            <Users className="h-8 w-8 text-blue-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-xl border border-yellow-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-300 text-sm">Monthly Earnings</p>
              <p className="text-3xl font-bold text-white">₹{stats.monthlyEarnings.toLocaleString()}</p>
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
          <Button onClick={() => setActiveTab('appointments')} className="bg-purple-600 hover:bg-purple-700 text-white h-12 flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Appointment
          </Button>
          <Button onClick={() => setActiveTab('patients')} className="bg-blue-600 hover:bg-blue-700 text-white h-12 flex items-center gap-2">
            <User className="h-4 w-4" />
            View Patients
          </Button>
          <Button onClick={() => setActiveTab('consultations')} className="bg-green-600 hover:bg-green-700 text-white h-12 flex items-center gap-2">
            <Video className="h-4 w-4" />
            Start Consultation
          </Button>
          <Button onClick={() => setActiveTab('analytics')} className="bg-orange-600 hover:bg-orange-700 text-white h-12 flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            View Analytics
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

// Appointments Management
const AppointmentsManager = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "John Doe", time: "09:00 AM", date: "Today", type: "video", status: "confirmed", phone: "+91 98765 43210" },
    { id: 2, patient: "Jane Smith", time: "10:30 AM", date: "Today", type: "in-person", status: "pending", phone: "+91 98765 43211" },
    { id: 3, patient: "Mike Johnson", time: "02:00 PM", date: "Today", type: "video", status: "completed", phone: "+91 98765 43212" }
  ]);

  const addAppointment = () => {
    const newAppointment = {
      id: Date.now(),
      patient: `Patient ${Math.floor(Math.random() * 1000)}`,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      date: "Today",
      type: Math.random() > 0.5 ? "video" : "in-person",
      status: "pending",
      phone: `+91 ${Math.floor(Math.random() * 10000000000)}`
    };
    setAppointments(prev => [newAppointment, ...prev]);
    alert("New appointment scheduled!");
  };

  const updateStatus = (id, status) => {
    setAppointments(prev => prev.map(apt => 
      apt.id === id ? { ...apt, status } : apt
    ));
    alert(`Appointment ${status}!`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">My Appointments</h2>
          <p className="text-gray-400">Manage your patient appointments</p>
        </div>
        <Button onClick={addAppointment} className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Appointment
        </Button>
      </div>

      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50 border-b border-gray-700">
              <tr>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Patient</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Time</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Type</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Status</th>
                <th className="text-left text-gray-300 font-semibold py-4 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                  <td className="py-4 px-6">
                    <div>
                      <span className="text-white font-medium">{appointment.patient}</span>
                      <p className="text-gray-400 text-sm">{appointment.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{appointment.time}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.type === 'video' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {appointment.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'confirmed' ? 'bg-green-500/20 text-green-400' :
                      appointment.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button onClick={() => updateStatus(appointment.id, 'confirmed')} className="text-green-400 hover:text-green-300 p-2 rounded-lg hover:bg-green-500/20">
                        <CheckCircle className="h-4 w-4" />
                      </button>
                      <button onClick={() => alert(`Starting consultation with ${appointment.patient}`)} className="text-purple-400 hover:text-purple-300 p-2 rounded-lg hover:bg-purple-500/20">
                        <Video className="h-4 w-4" />
                      </button>
                      <button onClick={() => updateStatus(appointment.id, 'cancelled')} className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/20">
                        <XCircle className="h-4 w-4" />
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

// Patients Management
const PatientsManager = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 45, lastVisit: "2024-10-05", condition: "Hypertension", phone: "+91 98765 43210" },
    { id: 2, name: "Jane Smith", age: 32, lastVisit: "2024-10-04", condition: "Diabetes", phone: "+91 98765 43211" },
    { id: 3, name: "Mike Johnson", age: 28, lastVisit: "2024-10-03", condition: "Asthma", phone: "+91 98765 43212" }
  ]);

  const addPatient = () => {
    const conditions = ["Hypertension", "Diabetes", "Asthma", "Heart Disease", "Arthritis"];
    const newPatient = {
      id: Date.now(),
      name: `Patient ${Math.floor(Math.random() * 1000)}`,
      age: Math.floor(Math.random() * 60) + 20,
      lastVisit: new Date().toLocaleDateString(),
      condition: conditions[Math.floor(Math.random() * conditions.length)],
      phone: `+91 ${Math.floor(Math.random() * 10000000000)}`
    };
    setPatients(prev => [...prev, newPatient]);
    alert("New patient added!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">My Patients</h2>
          <p className="text-gray-400">Manage your patient records</p>
        </div>
        <Button onClick={addPatient} className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Patient
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <motion.div key={patient.id} className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{patient.name}</h3>
                <p className="text-gray-400 text-sm">Age: {patient.age}</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Last Visit</span>
                <span className="text-white">{patient.lastVisit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Condition</span>
                <span className="text-white">{patient.condition}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Phone</span>
                <span className="text-white text-sm">{patient.phone}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm" onClick={() => alert(`Viewing medical history for ${patient.name}`)} className="flex-1 bg-purple-600 hover:bg-purple-700">
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
              <Button size="sm" variant="outline" onClick={() => alert(`Editing ${patient.name}`)} className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800">
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

// Online Consultations Manager
const ConsultationsManager = () => {
  const [consultations, setConsultations] = useState([
    { id: 1, patient: "John Doe", status: "ongoing", startTime: "10:30 AM", duration: "15 min", type: "video", symptoms: "Fever, headache" },
    { id: 2, patient: "Jane Smith", status: "waiting", startTime: "11:00 AM", duration: "0 min", type: "video", symptoms: "Chest pain" },
    { id: 3, patient: "Mike Johnson", status: "completed", startTime: "09:45 AM", duration: "25 min", type: "audio", symptoms: "Cough, cold" }
  ]);

  const startConsultation = (id) => {
    setConsultations(prev => prev.map(cons => 
      cons.id === id ? { ...cons, status: 'ongoing', startTime: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) } : cons
    ));
    alert("Consultation started!");
  };

  const endConsultation = (id) => {
    setConsultations(prev => prev.map(cons => 
      cons.id === id ? { ...cons, status: 'completed', duration: Math.floor(Math.random() * 30) + 10 + " min" } : cons
    ));
    alert("Consultation completed!");
  };

  const newConsultation = () => {
    const symptoms = ["Fever", "Headache", "Chest pain", "Cough", "Stomach ache"];
    const newCons = {
      id: Date.now(),
      patient: `Patient ${Math.floor(Math.random() * 1000)}`,
      status: "waiting",
      startTime: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      duration: "0 min",
      type: "video",
      symptoms: symptoms[Math.floor(Math.random() * symptoms.length)]
    };
    setConsultations(prev => [newCons, ...prev]);
    alert("New consultation session created!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Online Consultations</h2>
          <p className="text-gray-400">Manage your virtual consultations</p>
        </div>
        <Button onClick={newConsultation} className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Consultation
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {consultations.map((consultation) => (
          <motion.div key={consultation.id} className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Video className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{consultation.patient}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    consultation.status === 'ongoing' ? 'bg-green-500/20 text-green-400' :
                    consultation.status === 'waiting' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {consultation.status}
                  </span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                consultation.type === 'video' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
              }`}>
                {consultation.type}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Start Time</span>
                <span className="text-white">{consultation.startTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration</span>
                <span className="text-white">{consultation.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Symptoms</span>
                <span className="text-white text-sm">{consultation.symptoms}</span>
              </div>
            </div>

            <div className="flex gap-2">
              {consultation.status === 'waiting' && (
                <Button size="sm" onClick={() => startConsultation(consultation.id)} className="flex-1 bg-green-600 hover:bg-green-700">
                  <Video className="h-4 w-4 mr-1" />
                  Start
                </Button>
              )}
              {consultation.status === 'ongoing' && (
                <Button size="sm" onClick={() => endConsultation(consultation.id)} className="flex-1 bg-red-600 hover:bg-red-700">
                  <XCircle className="h-4 w-4 mr-1" />
                  End
                </Button>
              )}
              {consultation.status === 'completed' && (
                <Button size="sm" onClick={() => alert(`Viewing consultation notes for ${consultation.patient}`)} className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <Eye className="h-4 w-4 mr-1" />
                  View Notes
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Analytics Dashboard
const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState({
    weeklyAppointments: [12, 18, 15, 22, 19, 25, 20],
    monthlyEarnings: [35000, 42000, 38000, 45000],
    patientSatisfaction: 4.8,
    consultationTypes: { video: 65, inPerson: 35 },
    topConditions: [
      { condition: "Hypertension", count: 45 },
      { condition: "Diabetes", count: 32 },
      { condition: "Respiratory Issues", count: 28 },
      { condition: "Heart Disease", count: 22 }
    ]
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>
        <p className="text-gray-400">Track your practice performance and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl border border-purple-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">Weekly Average</p>
              <p className="text-3xl font-bold text-white">{Math.round(analytics.weeklyAppointments.reduce((a,b) => a+b) / 7)}</p>
              <p className="text-purple-400 text-xs">appointments/day</p>
            </div>
            <BarChart3 className="h-8 w-8 text-purple-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-xl border border-green-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-300 text-sm">Monthly Growth</p>
              <p className="text-3xl font-bold text-white">+12%</p>
              <p className="text-green-400 text-xs">vs last month</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-xl border border-yellow-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-300 text-sm">Patient Rating</p>
              <p className="text-3xl font-bold text-white">{analytics.patientSatisfaction}</p>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className={`h-3 w-3 ${star <= analytics.patientSatisfaction ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                ))}
              </div>
            </div>
            <Star className="h-8 w-8 text-yellow-400" />
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl border border-blue-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm">Video Consultations</p>
              <p className="text-3xl font-bold text-white">{analytics.consultationTypes.video}%</p>
              <p className="text-blue-400 text-xs">of total consultations</p>
            </div>
            <Video className="h-8 w-8 text-blue-400" />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Top Conditions Treated</h3>
          <div className="space-y-4">
            {analytics.topConditions.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300">{item.condition}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{width: `${(item.count / analytics.topConditions[0].count) * 100}%`}}
                    ></div>
                  </div>
                  <span className="text-white font-medium w-8">{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Monthly Earnings Trend</h3>
          <div className="space-y-4">
            {analytics.monthlyEarnings.map((earning, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300">Month {index + 1}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{width: `${(earning / Math.max(...analytics.monthlyEarnings)) * 100}%`}}
                    ></div>
                  </div>
                  <span className="text-white font-medium">₹{earning.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Doctor Profile Management
const DoctorProfile = () => {
  const [profile, setProfile] = useState({
    name: "Dr. Sarah Smith",
    specialty: "Cardiologist",
    experience: "8 years",
    qualification: "MBBS, MD Cardiology",
    license: "MED123456789",
    phone: "+91 98765 43210",
    email: "dr.sarah@medivolt.com",
    address: "123 Medical Center, Mumbai",
    consultationFee: 800,
    rating: 4.8,
    totalPatients: 1250,
    languages: ["English", "Hindi", "Marathi"]
  });

  const [isEditing, setIsEditing] = useState(false);

  const updateProfile = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const saveProfile = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Doctor Profile</h2>
          <p className="text-gray-400">Manage your professional information</p>
        </div>
        <Button 
          onClick={() => isEditing ? saveProfile() : setIsEditing(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Edit className="h-4 w-4 mr-2" />
          {isEditing ? 'Save Profile' : 'Edit Profile'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div className="lg:col-span-2 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
              <p className="text-purple-400 text-lg">{profile.specialty}</p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white">{profile.rating}</span>
                <span className="text-gray-400">({profile.totalPatients} patients)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">Qualification</label>
                {isEditing ? (
                  <input 
                    value={profile.qualification}
                    onChange={(e) => updateProfile('qualification', e.target.value)}
                    className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
                  />
                ) : (
                  <p className="text-white font-medium">{profile.qualification}</p>
                )}
              </div>
              <div>
                <label className="text-gray-400 text-sm">Experience</label>
                {isEditing ? (
                  <input 
                    value={profile.experience}
                    onChange={(e) => updateProfile('experience', e.target.value)}
                    className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
                  />
                ) : (
                  <p className="text-white font-medium">{profile.experience}</p>
                )}
              </div>
              <div>
                <label className="text-gray-400 text-sm">License Number</label>
                {isEditing ? (
                  <input 
                    value={profile.license}
                    onChange={(e) => updateProfile('license', e.target.value)}
                    className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
                  />
                ) : (
                  <p className="text-white font-medium">{profile.license}</p>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">Phone</label>
                {isEditing ? (
                  <input 
                    value={profile.phone}
                    onChange={(e) => updateProfile('phone', e.target.value)}
                    className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
                  />
                ) : (
                  <p className="text-white font-medium">{profile.phone}</p>
                )}
              </div>
              <div>
                <label className="text-gray-400 text-sm">Email</label>
                {isEditing ? (
                  <input 
                    value={profile.email}
                    onChange={(e) => updateProfile('email', e.target.value)}
                    className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
                  />
                ) : (
                  <p className="text-white font-medium">{profile.email}</p>
                )}
              </div>
              <div>
                <label className="text-gray-400 text-sm">Consultation Fee</label>
                {isEditing ? (
                  <input 
                    type="number"
                    value={profile.consultationFee}
                    onChange={(e) => updateProfile('consultationFee', parseInt(e.target.value))}
                    className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
                  />
                ) : (
                  <p className="text-white font-medium">₹{profile.consultationFee}</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
            <h4 className="text-lg font-bold text-white mb-4">Quick Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Patients</span>
                <span className="text-white font-medium">{profile.totalPatients}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Rating</span>
                <span className="text-white font-medium">{profile.rating}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Experience</span>
                <span className="text-white font-medium">{profile.experience}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
            <h4 className="text-lg font-bold text-white mb-4">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {profile.languages.map((lang, index) => (
                <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Settings Panel
const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      push: true,
      appointments: true,
      reminders: true
    },
    availability: {
      monday: { start: "09:00", end: "17:00", available: true },
      tuesday: { start: "09:00", end: "17:00", available: true },
      wednesday: { start: "09:00", end: "17:00", available: true },
      thursday: { start: "09:00", end: "17:00", available: true },
      friday: { start: "09:00", end: "17:00", available: true },
      saturday: { start: "10:00", end: "14:00", available: true },
      sunday: { start: "10:00", end: "14:00", available: false }
    },
    preferences: {
      autoAcceptAppointments: false,
      maxDailyAppointments: 20,
      consultationDuration: 30,
      breakBetweenConsultations: 10
    }
  });

  const updateNotification = (key, value) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: value }
    }));
  };

  const updateAvailability = (day, field, value) => {
    setSettings(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: { ...prev.availability[day], [field]: value }
      }
    }));
  };

  const saveSettings = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Settings</h2>
          <p className="text-gray-400">Configure your practice preferences</p>
        </div>
        <Button onClick={saveSettings} className="bg-purple-600 hover:bg-purple-700 text-white">
          <Settings className="h-4 w-4 mr-2" />
          Save Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5 text-purple-400" />
            Notifications
          </h3>
          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <button
                  onClick={() => updateNotification(key, !value)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    value ? 'bg-purple-600' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`}></div>
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-purple-400" />
            Practice Preferences
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm">Max Daily Appointments</label>
              <input
                type="number"
                value={settings.preferences.maxDailyAppointments}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  preferences: { ...prev.preferences, maxDailyAppointments: parseInt(e.target.value) }
                }))}
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm">Consultation Duration (minutes)</label>
              <input
                type="number"
                value={settings.preferences.consultationDuration}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  preferences: { ...prev.preferences, consultationDuration: parseInt(e.target.value) }
                }))}
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Auto Accept Appointments</span>
              <button
                onClick={() => setSettings(prev => ({
                  ...prev,
                  preferences: { ...prev.preferences, autoAcceptAppointments: !prev.preferences.autoAcceptAppointments }
                }))}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.preferences.autoAcceptAppointments ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.preferences.autoAcceptAppointments ? 'translate-x-6' : 'translate-x-1'
                }`}></div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-purple-400" />
          Weekly Availability
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
          {Object.entries(settings.availability).map(([day, schedule]) => (
            <div key={day} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium capitalize">{day}</span>
                <button
                  onClick={() => updateAvailability(day, 'available', !schedule.available)}
                  className={`w-8 h-4 rounded-full transition-colors ${
                    schedule.available ? 'bg-green-600' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                    schedule.available ? 'translate-x-4' : 'translate-x-0.5'
                  }`}></div>
                </button>
              </div>
              {schedule.available && (
                <div className="space-y-2">
                  <input
                    type="time"
                    value={schedule.start}
                    onChange={(e) => updateAvailability(day, 'start', e.target.value)}
                    className="w-full bg-gray-700 text-white p-2 rounded text-sm"
                  />
                  <input
                    type="time"
                    value={schedule.end}
                    onChange={(e) => updateAvailability(day, 'end', e.target.value)}
                    className="w-full bg-gray-700 text-white p-2 rounded text-sm"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Main Doctor Admin Panel
export default function DoctorAdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'patients', label: 'My Patients', icon: Users },
    { id: 'consultations', label: 'Consultations', icon: Video },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DoctorDashboard setActiveTab={setActiveTab} />;
      case 'appointments':
        return <AppointmentsManager />;
      case 'patients':
        return <PatientsManager />;
      case 'consultations':
        return <ConsultationsManager />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'profile':
        return <DoctorProfile />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <DoctorDashboard setActiveTab={setActiveTab} />;
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
                <Stethoscope className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">MediVolt</h1>
                <p className="text-purple-400 text-sm">Doctor Panel</p>
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
                  <h1 className="text-2xl font-bold text-white">Doctor Dashboard</h1>
                  <p className="text-gray-400">Welcome back, Dr. Smith</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Online</span>
                </div>
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
                      <Stethoscope className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">MediVolt</h1>
                      <p className="text-purple-400 text-sm">Doctor Panel</p>
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
