import React from 'react';
import { Check, X, Star, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Freemium',
      tagline: 'Free Forever',
      description: 'For regular users who want basic health tools.',
      price: '₹0',
      period: 'month',
      buttonText: 'Try Now (Free)',
      buttonLink: '/register',
      buttonStyle: 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700',
      icon: <Zap className="h-8 w-8 text-gray-400" />,
      features: [
        { name: 'AI Symptom Checker (limited queries/day)', included: true },
        { name: 'AI Medical Report Explainer (upload up to 2 reports/month)', included: true },
        { name: 'AI Medicine Info (basic info only)', included: true },
        { name: 'Calories Calculator (Indian food database, limited)', included: true },
        { name: 'Advanced insurance help', included: false },
        { name: 'Personalized health dashboard', included: false },
        { name: '24/7 AI Health Assistant', included: false },
      ],
    },
    {
      name: 'Pro',
      tagline: 'Most Popular',
      description: 'For serious health-conscious users.',
      price: '₹299',
      period: 'month',
      yearlyPrice: '₹2,999',
      yearlyPeriod: 'year',
      buttonText: 'Most Popular (Upgrade)',
      buttonLink: '/register?plan=pro',
      buttonStyle: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
      highlight: true,
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      features: [
        { name: 'Unlimited AI Symptom Checker', included: true },
        { name: 'Unlimited AI Medical Report Explainer', included: true },
        { name: 'Full AI Medicine Info (dosage, substitutes, side-effects)', included: true },
        { name: 'Personalized Health Dashboard (calories, fitness, medicine reminders)', included: true },
        { name: 'AI Insurance Explainer (upload any policy)', included: true },
        { name: 'Govt Scheme Finder', included: true },
        { name: 'Emergency SOS (connects family + SMS alert)', included: true },
        { name: 'Priority Support', included: true },
      ],
    },
    {
      name: 'Premium',
      tagline: 'For Families / Power Users',
      description: 'For families, chronic patients, or health professionals.',
      price: '₹699',
      period: 'month',
      yearlyPrice: '₹6,999',
      yearlyPeriod: 'year',
      buttonText: 'For Families (Best Value)',
      buttonLink: '/register?plan=premium',
      buttonStyle: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
      icon: <Award className="h-8 w-8 text-purple-400" />,
      features: [
        { name: 'All Pro Features', included: true },
        { name: 'Family Health Dashboard (up to 5 members)', included: true },
        { name: 'AI Fitness + Lifestyle Planner', included: true },
        { name: 'Advanced Insurance & Finance Support', included: true },
        { name: 'Unlimited Emergency SOS (multi-user linked)', included: true },
        { name: 'Early Access to new AI health tools', included: true },
        { name: 'Dedicated Health AI Assistant (chat anytime)', included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Pricing Plans</h1>
          <p className="text-xl max-w-3xl mx-auto">Choose the perfect plan for your health needs. All plans include access to our core AI health tools.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.name} 
              className={`rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${tier.highlight ? 'ring-4 ring-blue-400 shadow-xl scale-105 z-10' : 'bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg'}`}
            >
              <div className={`p-8 ${tier.highlight ? 'bg-gradient-to-br from-blue-600 to-indigo-700' : ''}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                    <p className="text-sm font-medium mt-1 text-blue-200">{tier.tagline}</p>
                  </div>
                  {tier.icon}
                </div>
                
                <p className="mt-4 text-sm">{tier.description}</p>
                
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold">{tier.price}</span>
                    <span className="ml-1 text-xl font-medium">/{tier.period}</span>
                  </div>
                  
                  {tier.yearlyPrice && (
                    <div className="mt-1 text-sm text-blue-200">
                      or {tier.yearlyPrice}/{tier.yearlyPeriod}
                    </div>
                  )}
                </div>
                
                <Link 
                  to={tier.buttonLink} 
                  className={`mt-8 w-full inline-flex justify-center py-3 px-5 rounded-lg text-white font-medium ${tier.buttonStyle}`}
                >
                  {tier.buttonText}
                </Link>
              </div>
              
              <div className="p-8 bg-white bg-opacity-10 space-y-4">
                <h4 className="text-lg font-semibold">What's included:</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? '' : 'text-gray-400'}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {tier.highlight && (
                <div className="bg-blue-700 py-2 text-center">
                  <span className="text-sm font-medium">⭐ Most Popular Choice</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom plan for your organization?</h2>
          <p className="mb-6">Contact us for enterprise pricing and custom solutions for healthcare providers.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}