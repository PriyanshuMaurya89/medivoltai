import React from 'react';
import { Book, Lightbulb, Settings, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GuidesPage() {
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
            <Book className="h-5 w-5 text-purple-300" />
            <span className="text-purple-200 font-semibold tracking-wide">GUIDES & TUTORIALS</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Master <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">MediVolt</span> Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Unlock the full potential of MediVolt with our comprehensive guides and step-by-step tutorials designed to help you navigate our platform and maximize its benefits.</p>
        </motion.div>
        
        {/* Featured Guides */}
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
                <Lightbulb className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Getting Started with MediVolt AI</h2>
              <p className="text-gray-300 leading-relaxed">A beginner-friendly guide to setting up your MediVolt account and understanding the basics of our AI-powered health insights.</p>
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
                <Settings className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Interpreting Your Medical Reports</h2>
              <p className="text-gray-300 leading-relaxed">Learn how to use MediVolt to decipher complex medical terminology and understand your lab results with ease.</p>
            </div>
          </motion.div>
        </div>
        
        {/* Guide Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <HelpCircle size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Account Management</h3>
              <p className="opacity-90">Guides on managing your profile, privacy settings, and data.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <HelpCircle size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">AI Features</h3>
              <p className="opacity-90">Deep dives into our AI capabilities, from symptom analysis to personalized recommendations.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <HelpCircle size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Troubleshooting</h3>
              <p className="opacity-90">Solutions to common issues and FAQs to help you get back on track.</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">If you can't find what you're looking for, our support team is here to assist you.</p>
          <a href="/support" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Contact Support</a>
        </div>
      </div>
    </div>
  );
}
