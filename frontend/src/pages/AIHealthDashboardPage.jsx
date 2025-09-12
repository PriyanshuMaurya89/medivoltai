import React from 'react';
import { LayoutDashboard, Heart, Activity, ShieldCheck, TrendingUp } from 'lucide-react';

export default function AIHealthDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <LayoutDashboard size={64} className="mx-auto text-white mb-4 animate-pulse" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">AI Health Dashboard</h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">Your personalized hub for comprehensive wellness monitoring and proactive health management, powered by AI.</p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Heart size={48} className="text-white mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Personalized Health Scoring</h2>
            <p className="text-lg opacity-90">Receive an AI-driven health score based on your data, providing a holistic view of your well-being and areas for improvement.</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Activity size={48} className="text-white mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Activity & Lifestyle Tracking</h2>
            <p className="text-lg opacity-90">Seamlessly integrate data from wearables and apps to track your physical activity, sleep patterns, and daily habits.</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <TrendingUp size={48} className="text-white mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Progress & Goal Management</h2>
            <p className="text-lg opacity-90">Set and monitor your health goals with intelligent insights and recommendations to keep you on track.</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <ShieldCheck size={48} className="text-white mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Preventative Health Insights</h2>
            <p className="text-lg opacity-90">Leverage AI to identify potential health risks early and receive personalized preventative care suggestions.</p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">How Your AI Health Dashboard Works</h2>
          <div className="space-y-6">
            <p className="text-lg opacity-90">1. <strong>Data Integration:</strong> Connect your health apps, wearables, and medical records for a unified view of your health data.</p>
            <p className="text-lg opacity-90">2. <strong>AI Analysis:</strong> Our advanced AI algorithms process your data to identify patterns, trends, and potential health insights.</p>
            <p className="text-lg opacity-90">3. <strong>Personalized Insights:</strong> Receive actionable recommendations, health scores, and progress reports tailored to your unique profile.</p>
            <p className="text-lg opacity-90">4. <strong>Proactive Management:</strong> Use your dashboard to make informed decisions about your health and well-being, with Medivolt as your intelligent health partner.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Health Journey Today</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Unlock the power of AI to understand and manage your health like never before. Get your personalized health dashboard now.</p>
          <a href="#" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Access Your Dashboard</a>
        </div>
      </div>
    </div>
  );
}