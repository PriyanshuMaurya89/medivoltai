import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import aiModel from '../../assets/3d-ai-model.svg';
import medicalDataModel from '../../assets/3d-medical-data.svg';
import robotAssistantModel from '../../assets/3d-robot-assistant.svg';
import './3DAIAnimations.css';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* 3D Models Animation Container */}
      <div className="ai-models-wrapper">
        {/* 3D AI Model Animation */}
        <div className="ai-model-container">
          <img src={aiModel} alt="3D AI Model" className="ai-model" />
        </div>
        
        {/* 3D Medical Data Model Animation */}
        <div className="ai-model-container medical-data-container">
          <img src={medicalDataModel} alt="3D Medical Data Model" className="ai-model medical-data-model" />
        </div>
        
        {/* 3D Robot Assistant Model Animation */}
        <div className="ai-model-container robot-assistant-container">
          <img src={robotAssistantModel} alt="3D Robot Assistant Model" className="ai-model robot-assistant-model" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo and Message */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">MEDIVOLT</h2>
            <p className="text-sm text-gray-400 max-w-md">
              Because if your workspace software can't handle all the current situation, maybe we will
              review your workspace.
            </p>
          </div>
          
          {/* Demo Request Form */}
          <div className="w-full md:w-auto">
            <div className="bg-transparent">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">DEMO</h3>
              <h2 className="text-3xl font-bold text-white mb-4">Request a Demo</h2>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="px-4 py-2 rounded-l-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/why-medivolt" className="text-gray-400 hover:text-white text-sm">Why Medivolt?</Link></li>
              <li><Link to="/customer-stories" className="text-gray-400 hover:text-white text-sm">Customer Stories</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
              <li><Link to="/guides" className="text-gray-400 hover:text-white text-sm">Guides</Link></li>
              <li><Link to="/webinars" className="text-gray-400 hover:text-white text-sm">Webinars</Link></li>
              <li><Link to="/workspace-management" className="text-gray-400 hover:text-white text-sm">Workspace Management</Link></li>
              <li><Link to="/glossary" className="text-gray-400 hover:text-white text-sm">Glossary</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white text-sm">Careers</Link></li>
              <li><Link to="/leadership" className="text-gray-400 hover:text-white text-sm">Leadership</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white text-sm">Partners</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white text-sm">Press</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
            <ul className="space-y-2">
              <li><Link to="https://linkedin.com" className="text-gray-400 hover:text-white text-sm">LinkedIn</Link></li>
              <li><Link to="https://twitter.com" className="text-gray-400 hover:text-white text-sm">Twitter</Link></li>
              <li><Link to="https://facebook.com" className="text-gray-400 hover:text-white text-sm">Facebook</Link></li>
              <li><Link to="https://instagram.com" className="text-gray-400 hover:text-white text-sm">Instagram</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Policies */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 sm:mb-0">
            <p>© 2023 Medivolt Software Inc.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/support" className="text-gray-400 hover:text-white">Support</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Use</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}