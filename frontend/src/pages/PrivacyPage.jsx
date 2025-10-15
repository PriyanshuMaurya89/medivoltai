import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Eye, Database, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
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
                <Lock size={32} className="text-purple-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Privacy Policy</h1>
              <p className="text-gray-400 text-sm sm:text-base">Last Updated: October 15, 2025</p>
            </motion.div>
        
            <div className="space-y-8">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-white">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="h-4 w-4 text-purple-400" />
                  </div>
                  1. Introduction
                </h2>
                <div className="ml-11 space-y-3">
                  <p className="text-gray-300 leading-relaxed">At MediVolt, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.</p>
                  <p className="text-gray-300 leading-relaxed">Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.</p>
                </div>
              </motion.section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Database className="mr-2" size={24} />
              2. Information We Collect
            </h2>
            <div className="ml-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
                <p className="mb-2">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Health Data</h3>
                <p className="mb-2">To provide our health-related services, we may collect health information that you provide, such as:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Medical history</li>
                  <li>Symptoms</li>
                  <li>Medical reports</li>
                  <li>Medication information</li>
                  <li>Fitness and activity data</li>
                </ul>
                <p>This information is used solely to provide you with our services and is handled with the utmost confidentiality.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
                <p>We may also collect information on how the Service is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Eye className="mr-2" size={24} />
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the collected data for various purposes:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              4. Data Security
            </h2>
            <p className="mb-3">The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information, including:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>All sensitive information is encrypted using secure socket layer technology (SSL)</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular data backups and disaster recovery planning</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              5. Disclosure of Data
            </h2>
            <p className="mb-3">We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of MediVolt</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              6. Your Data Protection Rights
            </h2>
            <p className="mb-3">You have certain data protection rights. MediVolt aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
            <p className="mb-3">If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>
            <p>In certain circumstances, you have the following data protection rights:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>The right to access, update or to delete the information we have on you</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              7. Changes to This Privacy Policy
            </h2>
            <p className="mb-3">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              8. Contact Us
            </h2>
            <p className="mb-3 text-gray-300">If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <a href="mailto:privacy@medivolt.com" className="text-purple-400 hover:text-purple-300 underline font-medium">privacy@medivolt.com</a>
            </div>
          </section>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
