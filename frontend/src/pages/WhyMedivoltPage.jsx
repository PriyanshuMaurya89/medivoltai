import React from 'react';
import { Info, Users, Award, Heart, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyMedivoltPage() {
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
            <Info className="h-5 w-5 text-purple-300" />
            <span className="text-purple-200 font-semibold tracking-wide">WHY MEDIVOLT</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">MediVolt?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Discover how our AI-powered healthcare solutions can transform your experience with personalized, accessible, and effective healthcare technology.</p>
        </motion.div>
        
        {/* Benefits */}
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
                <Users className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">For Patients</h2>
              <p className="text-gray-300 leading-relaxed">Get personalized health insights, understand medical reports, and make informed decisions about your well-being with our easy-to-use platform.</p>
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
                <Globe className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">For Healthcare Providers</h2>
              <p className="text-gray-300 leading-relaxed">Enhance your practice with our AI tools that help interpret complex medical data, saving time while improving patient outcomes.</p>
            </div>
          </motion.div>
        </div>
        
        {/* Key Features */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Our Key <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Differentiators</span></h2>
          <div className="grid-zoom-3">
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Award className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Cutting-Edge AI</h3>
              <p className="text-gray-300">Our proprietary algorithms deliver accurate, personalized health insights you can trust.</p>
            </motion.div>
            
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Heart className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">User-Centric Design</h3>
              <p className="text-gray-300">Intuitive interfaces make complex healthcare information accessible to everyone.</p>
            </motion.div>
            
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Clock className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Continuous Innovation</h3>
              <p className="text-gray-300">We constantly evolve our platform to address emerging healthcare challenges.</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Testimonials */}
        <motion.div 
          className="bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white">What Our <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Users Say</span></h2>
          <div className="space-y-4">
            <p className="text-gray-300 text-lg italic">"MediVolt transformed how I understand my health reports. The AI explanations are clear and actionable." <span className="text-purple-300 font-semibold">- Priya K., Patient</span></p>
            <p className="text-gray-300 text-lg italic">"As a doctor, I appreciate how MediVolt helps bridge the communication gap with my patients." <span className="text-purple-300 font-semibold">- Dr. Sharma, Cardiologist</span></p>
            <p className="text-gray-300 text-lg italic">"The personalized health insights have helped me make better lifestyle choices." <span className="text-purple-300 font-semibold">- Rohan M., Fitness Enthusiast</span></p>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Experience the <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Difference?</span></h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">Join thousands of satisfied users who are taking control of their health with MediVolt.</p>
          <motion.a 
            href="/smart-registration" 
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
