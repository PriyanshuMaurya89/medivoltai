import React from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy, Headset, BookOpen, MessageSquare, Phone, ArrowLeft, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/8 via-transparent to-transparent"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Link
              to="/"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <LifeBuoy size={40} className="text-purple-400 animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Support Center</h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">We're here to help! Find answers to your questions, troubleshoot issues, and get the most out of MediVolt.</p>
          </motion.div>

        {/* Support Options Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 text-center transform transition-all duration-500 ease-in-out hover:scale-105">
            <BookOpen size={48} className="mx-auto text-white mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Knowledge Base</h2>
            <p className="text-lg opacity-90 mb-4">Browse our extensive library of articles, FAQs, and guides to find instant answers.</p>
            <a href="#" className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">Search Articles</a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 text-center transform transition-all duration-500 ease-in-out hover:scale-105">
            <Headset size={48} className="mx-auto text-white mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
            <p className="text-lg opacity-90 mb-4">Can't find what you're looking for? Our support team is ready to assist you.</p>
            <a href="#" className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">Get in Touch</a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 text-center transform transition-all duration-500 ease-in-out hover:scale-105">
            <MessageSquare size={48} className="mx-auto text-white mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Community Forum</h2>
            <p className="text-lg opacity-90 mb-4">Connect with other Medivolt users, share tips, and get advice from the community.</p>
            <a href="#" className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">Join Forum</a>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">For urgent matters, you can reach us directly via phone or live chat during business hours.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="tel:+1234567890" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Phone size={24} className="mr-2" /> Call Us: +1 (234) 567-890
            </a>
            <a href="#" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <MessageSquare size={24} className="mr-2" /> Live Chat
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Our dedicated support team is always ready to provide you with the help you need.</p>
          <a href="#" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Submit a Ticket</a>
        </div>
      </div>
    </div>
  );
}
