import React from 'react';
import { BookOpen, Search, Filter, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GlossaryPage() {
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
            <span className="text-purple-200 font-semibold tracking-wide">MEDICAL GLOSSARY</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Healthcare <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Terms & Definitions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Your comprehensive guide to understanding medical terminology, healthcare concepts, and AI-powered health insights.</p>
        </motion.div>

        {/* Search and Alphabetical Filter */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="Search terms..." 
              className="px-4 py-3 rounded-full bg-gray-900/80 text-white border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 w-full backdrop-blur-sm"
            />
            <Search size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-300" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
              <span key={letter} className="bg-purple-600/30 hover:bg-purple-500/50 text-purple-200 text-sm px-3 py-1 rounded-full cursor-pointer transition-all duration-200 border border-purple-500/20 hover:border-purple-400/40">{letter}</span>
            ))}
          </div>
        </motion.div>

        {/* Glossary Terms */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Common <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Terms</span></h2>
          <div className="grid-zoom-2">
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Star className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Artificial Intelligence (AI)</h3>
                <p className="text-gray-300 leading-relaxed">The simulation of human intelligence processes by machines, especially computer systems used in healthcare diagnostics and treatment recommendations.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Filter className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Machine Learning (ML)</h3>
                <p className="text-gray-300 leading-relaxed">A subset of AI that enables systems to learn from data, identify patterns, and make decisions with minimal human intervention in medical analysis.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Terms Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid-zoom-3">
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <BookOpen className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Telemedicine</h3>
              <p className="text-gray-300">Remote healthcare services delivered through digital communication technologies.</p>
            </motion.div>
            
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Search className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Biomarkers</h3>
              <p className="text-gray-300">Biological indicators used to assess health conditions and treatment responses.</p>
            </motion.div>
            
            <motion.div 
              className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Star className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Precision Medicine</h3>
              <p className="text-gray-300">Personalized medical treatment based on individual genetic and lifestyle factors.</p>
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
          <h2 className="text-3xl font-bold mb-4 text-white">Can't Find a <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Term?</span></h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">Suggest a term to be added to our glossary or contact us for further clarification.</p>
          <motion.a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Suggest a Term
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}