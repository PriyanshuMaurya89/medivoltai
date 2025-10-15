import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/8 via-transparent to-transparent"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
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

          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText size={32} className="text-purple-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Terms of Use</h1>
              <p className="text-gray-400 text-sm sm:text-base">Last Updated: October 15, 2025</p>
            </motion.div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              1. Acceptance of Terms
            </h2>
            <p className="mb-3">By accessing or using MediVolt's services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.</p>
            <p>These terms apply to all users of MediVolt, including registered users, guests, and API users.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              2. Description of Service
            </h2>
            <p className="mb-3">MediVolt provides AI-powered healthcare tools and services designed to help users understand health information, interpret medical reports, and manage their health data.</p>
            <p className="mb-3">Our services include but are not limited to AI symptom checking, medical report explanation, medicine information, calorie calculation, and health dashboards.</p>
            <p>MediVolt reserves the right to modify, suspend, or discontinue any part of the service at any time without prior notice.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <AlertTriangle className="mr-2" size={24} />
              3. Medical Disclaimer
            </h2>
            <p className="mb-3">MediVolt is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with any questions you may have regarding medical conditions.</p>
            <p className="mb-3">The information provided by MediVolt is for informational purposes only and should not be used for self-diagnosis or to replace professional medical care.</p>
            <p>Never disregard professional medical advice or delay seeking it because of information provided by MediVolt.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              4. User Accounts
            </h2>
            <p className="mb-3">You may need to create an account to access certain features of MediVolt. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            <p className="mb-3">You agree to provide accurate and complete information when creating an account and to update your information to keep it accurate and current.</p>
            <p>MediVolt reserves the right to terminate accounts that violate these terms or for any other reason at our sole discretion.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              5. Privacy and Data Usage
            </h2>
            <p className="mb-3">Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>
            <p>By using MediVolt, you consent to the collection and use of your information as described in our Privacy Policy.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              6. Subscription and Billing
            </h2>
            <p className="mb-3">MediVolt offers various subscription plans with different features and pricing. By subscribing to a paid plan, you agree to pay the subscription fees as described.</p>
            <p className="mb-3">Subscription fees are billed in advance and are non-refundable except as required by law or as explicitly stated in these terms.</p>
            <p>You may cancel your subscription at any time, but no refunds will be provided for any unused portion of your subscription period.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              7. Limitation of Liability
            </h2>
            <p className="mb-3">To the maximum extent permitted by law, MediVolt and its affiliates, officers, employees, agents, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>
            <p>In no event shall our total liability to you for all damages exceed the amount paid by you, if any, for accessing our services during the twelve months prior to the claim.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              8. Changes to Terms
            </h2>
            <p className="mb-3">MediVolt reserves the right to modify these Terms of Use at any time. We will provide notice of significant changes through our website or by sending you an email.</p>
            <p>Your continued use of MediVolt after such modifications constitutes your acceptance of the updated terms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              9. Contact Information
            </h2>
            <p>If you have any questions about these Terms of Use, please contact us at:</p>
            <p className="mt-2">
              <a href="mailto:legal@medivolt.com" className="text-blue-300 hover:text-blue-100 underline">legal@medivolt.com</a>
            </p>
          </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
