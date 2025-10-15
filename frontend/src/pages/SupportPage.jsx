import React from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy, Headset, BookOpen, MessageSquare, Phone, Mail, Clock, Users, Search, HelpCircle } from 'lucide-react';

export default function SupportPage() {
  const supportOptions = [
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Browse our extensive library of articles, FAQs, and guides to find instant answers.",
      action: "Search Articles",
      color: "from-blue-500/30 to-blue-600/30"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get real-time assistance from our support team. Available 24/7 for urgent issues.",
      action: "Start Chat",
      color: "from-green-500/30 to-green-600/30"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message and we'll get back to you within 24 hours.",
      action: "Send Email",
      color: "from-purple-500/30 to-purple-600/30"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical support team for complex issues.",
      action: "Call Now",
      color: "from-orange-500/30 to-orange-600/30"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other MediVolt users and share experiences and solutions.",
      action: "Join Forum",
      color: "from-pink-500/30 to-pink-600/30"
    },
    {
      icon: HelpCircle,
      title: "Video Tutorials",
      description: "Watch step-by-step video guides to master MediVolt's features.",
      action: "Watch Videos",
      color: "from-indigo-500/30 to-indigo-600/30"
    }
  ];

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
            <LifeBuoy className="h-5 w-5 text-purple-300" />
            <span className="text-purple-200 font-semibold tracking-wide">SUPPORT CENTER</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            How Can We <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Help You?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Get the support you need with our comprehensive help resources, expert assistance, and community support.</p>
        </motion.div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <motion.button
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.action}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Information Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Need Immediate Assistance?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto text-gray-300">For urgent matters, you can reach us directly via phone or email during business hours.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <motion.a
              href="tel:+1234567890"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} className="mr-2" /> Call Us: +1 (234) 567-890
            </motion.a>
            <motion.a
              href="mailto:support@medivolt.com"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="mr-2" /> support@medivolt.com
            </motion.a>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Still Have Questions?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto text-gray-300">Our dedicated support team is always ready to provide you with the help you need.</p>
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit a Ticket
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
