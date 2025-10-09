import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPage() {
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
            <BookOpen className="h-5 w-5 text-purple-300" />
            <span className="text-purple-200 font-semibold tracking-wide">MEDIVOLT BLOG</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Health Insights & <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">AI Innovation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Stay updated with the latest in healthcare technology, AI advancements, and wellness tips from our expert team.</p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid-zoom-3 mb-16">
          <motion.article 
            className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">The Future of AI in Healthcare</h2>
              <p className="text-gray-300 mb-4">Exploring how artificial intelligence is revolutionizing patient care and medical diagnostics.</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Dec 15, 2024
                </span>
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Dr. Sarah Chen
                </span>
              </div>
            </div>
          </motion.article>

          <motion.article 
            className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                <Heart className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Understanding Your Health Reports</h2>
              <p className="text-gray-300 mb-4">A comprehensive guide to interpreting medical test results and lab reports.</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Dec 12, 2024
                </span>
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Dr. Raj Patel
                </span>
              </div>
            </div>
          </motion.article>

          <motion.article 
            className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                <BookOpen className="h-6 w-6 text-purple-300" />
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Preventive Healthcare Tips</h2>
              <p className="text-gray-300 mb-4">Simple lifestyle changes that can significantly improve your long-term health outcomes.</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Dec 10, 2024
                </span>
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Dr. Priya Sharma
                </span>
              </div>
            </div>
          </motion.article>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated with <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Health Insights</span></h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">Subscribe to our newsletter for the latest healthcare tips and AI innovations.</p>
          <motion.a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
