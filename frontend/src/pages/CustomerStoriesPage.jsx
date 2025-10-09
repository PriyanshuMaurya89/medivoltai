import React from 'react';
import { Star, Quote, Users, Heart, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CustomerStoriesPage() {
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
            <Users className="h-5 w-5 text-purple-300" />
            <span className="text-purple-200 font-semibold tracking-wide">CUSTOMER STORIES</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Real Stories from <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Real People</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Discover how MediVolt has transformed healthcare experiences for patients and providers across the globe.</p>
        </motion.div>
        
        {/* Featured Stories */}
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
                <Heart className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Priya's Journey to Better Health</h2>
              <p className="text-gray-300 leading-relaxed mb-4">"Before MediVolt, I struggled to understand my lab results. The medical jargon was overwhelming and I felt lost."</p>
              <p className="text-gray-300 leading-relaxed italic">"Now, I feel empowered to make informed decisions about my health. The AI explanations are clear and actionable." <span className="text-purple-300 font-semibold">- Priya K., Patient</span></p>
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
                <Award className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Dr. Sharma's Enhanced Practice</h2>
              <p className="text-gray-300 leading-relaxed mb-4">"MediVolt's AI tools have streamlined my patient consultations significantly."</p>
              <p className="text-gray-300 leading-relaxed italic">"I can now focus more on care and less on data interpretation, improving patient outcomes." <span className="text-purple-300 font-semibold">- Dr. Sharma, Cardiologist</span></p>
            </div>
          </motion.div>
        </div>
        
        {/* More Stories */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-white">More Inspiring <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Stories</span></h2>
          <div className="grid-zoom-3">
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Rohan's Fitness Transformation</h3>
              <p className="text-gray-300">"The personalized health insights from MediVolt helped me optimize my fitness routine and achieve my goals."</p>
            </motion.div>
            
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Quote className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Community Health Initiative</h3>
              <p className="text-gray-300">"MediVolt's platform enabled us to reach more people with vital health information in remote areas."</p>
            </motion.div>
            
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Star className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Hospital Efficiency Boost</h3>
              <p className="text-gray-300">"Integrating MediVolt into our system significantly reduced administrative burden and improved patient flow."</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Share Your Story CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Have a Story to <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Share?</span></h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">We love hearing how MediVolt has made a difference in your life. Share your experience with us!</p>
          <motion.a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Share Your Story
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
