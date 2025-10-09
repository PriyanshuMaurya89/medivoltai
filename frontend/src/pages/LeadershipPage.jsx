import React from 'react';
import { Crown, Users, Briefcase, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LeadershipPage() {
  const leadershipTeam = [
    {
      name: 'Dr. Anya Sharma',
      title: 'CEO & Founder',
      description: 'A visionary physician and AI ethicist, Dr. Sharma founded Medivolt with a passion for democratizing healthcare access through technology. Her leadership drives our commitment to innovation and patient-centric solutions.',
      image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=AS',
    },
    {
      name: 'Mr. Raj Patel',
      title: 'Chief Technology Officer',
      description: 'With over 20 years in software architecture and AI development, Raj leads our engineering teams. His expertise ensures Medivolt's platform is robust, scalable, and at the forefront of technological advancement.',
      image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=RP',
    },
    {
      name: 'Ms. Priya Singh',
      title: 'Chief Medical Officer',
      description: 'A distinguished cardiologist, Ms. Singh oversees all clinical aspects of Medivolt's products. Her guidance guarantees that our AI solutions are medically sound, safe, and effective for real-world applications.',
      image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=PS',
    },
    {
      name: 'Mr. David Lee',
      title: 'Chief Operating Officer',
      description: 'David brings extensive experience in healthcare operations and strategic partnerships. He is responsible for streamlining our processes and expanding Medivolt's reach to new markets and communities.',
      image: 'https://via.placeholder.com/150/FFFF00/000000?text=DL',
    },
    {
      name: 'Dr. Emily Chen',
      title: 'Head of AI Research',
      description: 'Dr. Chen is a leading expert in machine learning and natural language processing. Her team is dedicated to pushing the boundaries of AI to create more intelligent and intuitive healthcare tools.',
      image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=EC',
    },
    {
      name: 'Ms. Sarah Khan',
      title: 'VP of Product Management',
      description: 'Sarah is passionate about user experience and product innovation. She works closely with our users to ensure Medivolt's offerings meet their needs and exceed their expectations.',
      image: 'https://via.placeholder.com/150/00FFFF/000000?text=SK',
    },
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
            <Crown className="h-5 w-5 text-purple-300" />
            <span className="text-purple-200 font-semibold tracking-wide">LEADERSHIP</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Leadership Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Meet the visionary leaders guiding MediVolt's mission to transform healthcare through innovative AI solutions.</p>
        </motion.div>

        {/* Leadership Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">The Driving Force Behind Medivolt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center transform transition-all duration-500 ease-in-out hover:scale-105">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg" />
                <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-lg text-blue-200 mb-3">{member.title}</p>
                <p className="opacity-90 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Philosophy Section */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Leadership Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center"><Lightbulb size={24} className="mr-3 text-yellow-300" />Innovation-Driven</h3>
              <p className="text-lg opacity-90">We foster a culture of continuous innovation, encouraging bold ideas and embracing new technologies to solve complex healthcare challenges.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center"><Users size={24} className="mr-3 text-green-300" />People-Centric</h3>
              <p className="text-lg opacity-90">Our leadership is committed to creating an inclusive environment where every team member can thrive, grow, and contribute their unique talents.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center"><Briefcase size={24} className="mr-3 text-purple-300" />Impact-Focused</h3>
              <p className="text-lg opacity-90">We are dedicated to making a tangible positive impact on global health, guided by ethical principles and a deep sense of responsibility.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center"><Crown size={24} className="mr-3 text-red-300" />Visionary Guidance</h3>
              <p className="text-lg opacity-90">Our leaders provide clear strategic direction, inspiring the team to achieve ambitious goals and navigate the evolving landscape of health technology.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Vision</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Be a part of a team led by pioneers in health tech. Explore career opportunities and help us shape the future of healthcare.</p>
          <a href="/careers" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">View Careers</a>
        </div>
      </div>
    </div>
  );
}