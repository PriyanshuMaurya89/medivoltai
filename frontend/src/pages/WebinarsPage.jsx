import React from 'react';
import { Calendar, Clock, Users, Play, Video, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Purple Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="section-content-zoom relative z-10 py-20">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Video className="h-5 w-5 text-purple-300" />
            <span className="text-purple-200 font-semibold tracking-wide">WEBINARS</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Learn from <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Healthcare Experts</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Join our interactive webinars to stay updated with the latest healthcare trends, AI innovations, and expert insights from leading medical professionals.</p>
        </motion.div>

        {/* Upcoming Webinars */}
        <div className="grid-zoom-2 mb-16">
          <motion.div 
            className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <Calendar className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">AI in Preventive Healthcare</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Discover how AI is revolutionizing preventive healthcare by identifying risks early and enabling personalized interventions.</p>
              <div className="flex items-center text-sm text-purple-300 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>November 15, 2024</span>
              </div>
              <div className="flex items-center text-sm text-purple-300">
                <Users className="h-4 w-4 mr-2" />
                <span>Dr. Anya Sharma, AI Health Specialist</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <Play className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Maximizing Your MediVolt Experience</h2>
              <p className="text-gray-300 leading-relaxed mb-4">A practical guide to utilizing all the features of MediVolt to manage your health data and insights effectively.</p>
              <div className="flex items-center text-sm text-purple-300 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>December 2, 2024</span>
              </div>
              <div className="flex items-center text-sm text-purple-300">
                <Users className="h-4 w-4 mr-2" />
                <span>MediVolt Product Team</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* On-Demand Webinars */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-white">On-Demand <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Webinars</span></h2>
          <div className="grid-zoom-3">
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Play className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Understanding Your Genetic Data</h3>
              <p className="text-gray-300">Watch now to learn how AI interprets genetic information for personalized health.</p>
            </motion.div>
            
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Award className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">The Ethics of AI in Medicine</h3>
              <p className="text-gray-300">Explore the ethical considerations and challenges of AI implementation in healthcare.</p>
            </motion.div>
            
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Clock className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Data Security in Digital Health</h3>
              <p className="text-gray-300">Learn about the measures MediVolt takes to ensure the security and privacy of your health data.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Missed a <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Webinar?</span></h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">Access our full library of past webinars on demand and catch up on valuable insights at your convenience.</p>
          <motion.a 
            href="/webinars-archive" 
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Archive
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}