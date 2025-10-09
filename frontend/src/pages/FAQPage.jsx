import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "How does MediVolt's AI analyze my medical reports?",
      answer: "Our AI uses advanced machine learning algorithms and natural language processing to analyze medical reports. It extracts key information such as test results, diagnoses, and recommendations, then translates complex medical terminology into simple, understandable language. The AI cross-references your data with medical databases to provide personalized insights and health recommendations while maintaining complete privacy and security."
    },
    {
      question: "What do I need to get started?",
      answer: "To get started with MediVolt, you just need to create a free account. No medical background required! Our AI will guide you through uploading your medical reports, symptoms, or health questions. You can start using basic features immediately, and premium features are available with a subscription."
    },
    {
      question: "What kind of customization is available?",
      answer: "MediVolt offers extensive customization options including: personalized health dashboards, custom medication reminders, tailored nutrition plans, preferred language settings (Hindi/English), notification preferences, family member profiles, and specialized health tracking for chronic conditions. You can also customize your AI assistant's communication style and complexity level."
    },
    {
      question: "How easy is it to edit for beginners?",
      answer: "MediVolt is designed to be extremely user-friendly! Our AI speaks in simple Hindi and English, explains medical terms clearly, and guides you step-by-step. No technical knowledge needed - just ask questions naturally like you would to a doctor. We also provide video tutorials and 24/7 chat support for any assistance you need."
    },
    {
      question: "Let me know more about moneyback guarantee?",
      answer: "We offer a 30-day money-back guarantee on all premium subscriptions. If you're not completely satisfied with MediVolt's AI analysis and features, simply contact our support team within 30 days of purchase for a full refund. No questions asked - we're confident you'll love the personalized healthcare insights our platform provides."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Absolutely not! MediVolt is built for everyone - patients, families, and healthcare workers. No coding or technical knowledge required. Our AI interface is designed like having a conversation with a knowledgeable doctor. Simply upload your reports, ask questions in plain language, and get instant, easy-to-understand medical insights."
    },
    {
      question: "What will I get after purchasing the template?",
      answer: "After subscribing to MediVolt Premium, you'll receive: unlimited AI medical report analysis, personalized health insights, symptom checker with recommendations, medication interaction alerts, nutrition planning, emergency SOS features, priority customer support, family member profiles, and lifetime access to your health history and trends with regular AI model updates."
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Purple Flow Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/8 via-transparent to-transparent"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Header */}
          <motion.div
            className="lg:sticky lg:top-12 h-fit"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* FAQ Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HelpCircle className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">FAQ</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Frequently
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                Asked Questions
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have questions? Our FAQ section has you covered with quick answers to the most common inquiries about MediVolt's AI-powered healthcare platform.
            </motion.p>

            {/* Decorative Element */}
            <motion.div 
              className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>

          {/* Right Side - FAQ Items */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-purple-500/10 transition-colors focus:outline-none"
                >
                  <span className="text-white font-medium text-lg pr-4 group-hover:text-purple-300 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeQuestion === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30"
                  >
                    <Plus className="w-4 h-4 text-purple-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 border-t border-purple-500/20">
                        <motion.p 
                          className="text-gray-300 leading-relaxed pt-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              className="mt-12 p-8 bg-gradient-to-br from-purple-500/10 to-gray-900/90 border border-purple-500/30 rounded-xl backdrop-blur-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Still have questions?</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Can't find the answer you're looking for? Our support team is here to help 24/7 with any questions about MediVolt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/25"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Support
                </motion.button>
                <motion.button
                  className="border border-purple-500/50 hover:bg-purple-500/10 text-purple-300 hover:text-purple-200 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Live Chat
                </motion.button>
              </div>
              <div className="mt-4 pt-4 border-t border-purple-500/20">
                <p className="text-gray-500 text-sm">
                  Average response time: <span className="text-purple-400 font-medium">Under 2 minutes</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
