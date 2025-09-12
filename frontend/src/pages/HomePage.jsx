import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PremiumCard, FeatureCard } from "../components/ui/PremiumCard";
import { ExpandableCard } from "../components/ui/ExpandableCard";
import MedicalScene from "../components/3d/MedicalScene";
import SupportFeatures from "../components/features/SupportFeatures";
import {
  ArrowRight,
  Brain,
  FileText,
  Shield,
  BarChart3,
  Calculator,
  Building,
  Stethoscope,
  AlertTriangle,
  Dumbbell,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  MapPin,
  Sparkles,
  Zap,
  Star,
  Bot,
  MessageSquare,
  Activity,
  Cpu,
} from "lucide-react";
import {
  AITypingAnimation,
  AIProcessingIndicator,
} from "../components/ui/AITypingAnimation";
import { Apple, Play } from "lucide-react";

export default function HomePage() {
  // State to track which card is currently expanded
  const [expandedCardId, setExpandedCardId] = useState(null);

  const aiFeatures = [
    {
      id: "report-explainer",
      title: "AI Medical Report Explainer",
      description:
        "Advanced AI interpretation of medical reports with bilingual explanations",
      icon: FileText,
      color: "bg-blue-500",
      benefits: [
        "Clinical insights simplified",
        "Dual-language support (Hindi/English)",
        "Comprehensive health intelligence",
        "Professional-grade analysis",
      ],
    },
    {
      id: "medicine-info",
      title: "AI Medicine Information",
      description:
        "Comprehensive drug information, interactions, and cost-effective alternatives",
      icon: Shield,
      color: "bg-green-500",
      benefits: [
        "Complete pharmaceutical database",
        "Safety profile analysis",
        "Economic optimization",
        "Regulatory compliance",
      ],
    },
    {
      id: "insurance-explainer",
      title: "AI Insurance Explainer & Finder",
      description:
        "AI-powered policy interpretation, coverage mapping, and claim assistance",
      icon: Shield,
      color: "bg-purple-500",
      benefits: [
        "Policy transparency engine",
        "Coverage optimization",
        "Claims navigation support",
        "Financial protection analysis",
      ],
    },
    {
      id: "ai-health-dashboard",
      title: "AI Health Dashboard",
      description:
        "Comprehensive wellness monitoring with personalized health scoring",
      icon: BarChart3,
      color: "bg-indigo-500",
      benefits: [
        "360° health assessment",
        "Predictive analytics",
        "Personalized recommendations",
        "Progress tracking system",
      ],
    },
    {
      id: "nutrition-calculator",
      title: "Calories & Nutrition Calculator (AI Diet Buddy)",
      description:
        "AI-powered nutritional analysis with regional Indian cuisine database",
      icon: Calculator,
      color: "bg-orange-500",
      benefits: [
        "Regional food intelligence",
        "Personalized dietary planning",
        "Nutritional optimization",
        "Cultural dietary adaptation",
      ],
    },
    {
      id: "govt-schemes",
      title: "Government Health Scheme Finder",
      description:
        "Intelligent eligibility assessment for national health schemes",
      icon: Building,
      color: "bg-red-500",
      benefits: [
        "Multi-scheme eligibility analysis",
        "Application optimization",
        "Policy benefit mapping",
        "Accessibility streamlining",
      ],
    },
    {
      id: "symptom-checker",
      title: "AI Symptom Checker",
      description: "Advanced AI symptom analysis with clinical guidance",
      icon: Stethoscope,
      color: "bg-teal-500",
      benefits: [
        "24/7 clinical assessment",
        "Triage guidance system",
        "Healthcare navigation",
        "Emergency protocol mapping",
      ],
    },
    {
      id: "emergency-sos",
      title: "Emergency Response System",
      description:
        "Intelligent emergency coordination with real-time health data sharing",
      icon: AlertTriangle,
      color: "bg-red-600",
      benefits: [
        "Real-time coordination",
        "Medical data integration",
        "Emergency protocol activation",
        "Family network integration",
      ],
    },
    {
      id: "fitness-planner",
      title: "AI Lifestyle & Fitness Planner",
      description: "AI-driven fitness programming with cultural adaptation",
      icon: Dumbbell,
      color: "bg-pink-500",
      benefits: [
        "Cultural exercise integration",
        "Personalized programming",
        "Progress optimization",
        "Lifestyle adaptation",
      ],
    },
    {
      id: "health-literacy",
      title: "Health Education Platform",
      description:
        "Advanced medical knowledge dissemination with visual learning",
      icon: BookOpen,
      color: "bg-yellow-500",
      benefits: [
        "Medical education simplified",
        "Visual learning system",
        "Disease awareness platform",
        "Health literacy enhancement",
      ],
    },
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Active Users" },
    { icon: FileText, value: "25,000+", label: "Reports Explained" },
    { icon: Shield, value: "15,000+", label: "Medicines Scanned" },
    { icon: TrendingUp, value: "30,000+", label: "Health Scores Generated" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
        {/* 3D Medical Background */}
        <div className="absolute inset-0 opacity-40">
          <MedicalScene />
        </div>

        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90 z-10"></div>

        {/* Subtle geometric elements */}
        <div className="absolute inset-0 z-5">
          <motion.div
            className="absolute top-20 right-20 w-2 h-2 bg-primary/20 rounded-full"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 left-16 w-1 h-1 bg-accent/30 rounded-full"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            className="flex flex-col items-center space-y-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Minimal Badge */}
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full"
              variants={itemVariants}
            >
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-neutral-600 tracking-wide">
                AI-Powered Health Platform
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="flex items-center justify-center gap-3 mb-2">
                  Healthcare powered by
                  <motion.span
                    className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-lg font-bold rounded-lg shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 4px 14px 0 rgba(37, 99, 235, 0.3)",
                        "0 8px 20px 0 rgba(37, 99, 235, 0.5)",
                        "0 4px 14px 0 rgba(37, 99, 235, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    AI Intelligence
                  </motion.span>
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Advanced Medical Intelligence Simplified
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto max-w-[600px] text-neutral-600 text-lg md:text-xl leading-relaxed"
                variants={itemVariants}
              >
                India's premier AI-driven healthcare intelligence platform.
                Professional-grade medical analysis, comprehensive health
                insights, and intelligent wellness management for informed
                healthcare decisions.
              </motion.p>
            </motion.div>

            {/* Simple Feature List */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 text-sm"
              variants={itemVariants}
            >
              {[
                "Hindi Support",
                "Indian Food Database",
                "Government Schemes",
                "24/7 AI Assistant",
              ].map((feature, index) => (
                <motion.span
                  key={index}
                  className="text-neutral-500 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>

            {/* Clean CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-8"
              variants={itemVariants}
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 text-base font-medium rounded-lg transition-all duration-200"
                  asChild
                >
                  <Link to="/ai-health-dashboard" className="flex items-center gap-2">
                    Get Your Health Score
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 py-3 text-base font-medium border border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-lg transition-all duration-200"
                  asChild
                >
                  <Link
                    to="/report-explainer"
                    className="flex items-center gap-2"
                  >
                    Explain My Report
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Simple Trust Indicators */}
            <motion.div
              className="flex items-center justify-center gap-8 pt-8 text-neutral-400 text-sm"
              variants={itemVariants}
            >
              <span>Trusted by 50,000+ users</span>
              <span className="text-neutral-300">•</span>
              <span>100% Secure & Private</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Live AI Demo Section */}
      <section className="w-full py-16 bg-white border-t border-neutral-200">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bot className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wide">
                Live AI Demo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              See AI in action
            </h2>
            <p className="text-neutral-600 text-lg">
              Watch how our AI processes and explains complex medical
              information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Medical Report Demo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 w-full h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Medical Report Analysis
                  </h3>
                  <p className="text-sm text-neutral-500">
                    Real-time AI explanation
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-xs text-neutral-400 mb-2">
                    UPLOADED REPORT
                  </div>
                  <div className="text-sm text-neutral-700">
                    "Hemoglobin: 8.5 g/dL (Normal: 12-15 g/dL)"
                  </div>
                </div>

                <motion.div
                  className="bg-primary/5 p-4 rounded-lg border border-primary/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <AITypingAnimation
                    messages={[
                      "Your hemoglobin level is 8.5 g/dL, which is below the normal range.",
                      "This indicates anemia. You should eat iron-rich foods like spinach.",
                      "आपका हीमोग्लोबिन कम है। आयरन युक्त भोजन लें और डॉक्टर से मिलें।",
                    ]}
                    speed={50}
                    className="text-sm text-neutral-700"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Symptom Checker Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 w-full h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    AI Symptom Checker
                  </h3>
                  <p className="text-sm text-neutral-500">
                    24/7 health assistant
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-xs text-neutral-400 mb-2">
                    USER INPUT
                  </div>
                  <div className="text-sm text-neutral-700">
                    "Fever, headache, and body aches for 2 days"
                  </div>
                </div>

                <motion.div
                  className="bg-accent/5 p-4 rounded-lg border border-accent/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <AITypingAnimation
                    messages={[
                      "Likely viral infection. Rest, hydration recommended.",
                      "Monitor temperature. See doctor if fever >101°F for 3+ days.",
                      "Consider COVID test if symptoms persist or worsen.",
                    ]}
                    speed={60}
                    className="text-sm text-neutral-700"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Nutrition Calculator Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 w-full h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Calories & Nutrition Calculator
                  </h3>
                  <p className="text-sm text-neutral-500">AI Diet Buddy</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-xs text-neutral-400 mb-2">FOOD ITEM</div>
                  <div className="text-sm text-neutral-700">
                    "Butter Chicken with 2 Rotis"
                  </div>
                </div>

                <motion.div
                  className="bg-orange-500/5 p-4 rounded-lg border border-orange-500/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <AITypingAnimation
                    messages={[
                      "Calories: 650 kcal (Butter Chicken: 450 kcal, Rotis: 200 kcal)",
                      "Protein: 32g | Carbs: 58g | Fat: 35g | Fiber: 6g",
                      "Healthier option: Replace cream with yogurt to reduce calories by 120 kcal",
                    ]}
                    speed={60}
                    className="text-sm text-neutral-700"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* AI Processing Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10"
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Cpu className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  AI Performance
                </span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Real-time processing power
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <motion.div
                  className="text-2xl font-bold text-primary mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  0.3s
                </motion.div>
                <div className="text-sm text-neutral-600">Response Time</div>
              </div>
              <div>
                <motion.div
                  className="text-2xl font-bold text-accent mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  99.9%
                </motion.div>
                <div className="text-sm text-neutral-600">Accuracy</div>
              </div>
              <div>
                <motion.div
                  className="text-2xl font-bold text-primary mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                >
                  24/7
                </motion.div>
                <div className="text-sm text-neutral-600">Availability</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10 AI Features with Premium 3D Background */}
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-br from-white to-gray-100">
        {/* Premium 3D Medical Background */}
        <div className="absolute inset-0 opacity-40">
          {" "}
          {/* Reduced opacity from 60% to 40% */}
          <MedicalScene customColors={true} />
        </div>

        {/* Enhanced gradient overlay with premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-gray-100/80 to-gray-200/85 z-5"></div>

        {/* Animated particles and glowing elements */}
        <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-${Math.floor(Math.random() * 3) + 1} h-${
                Math.floor(Math.random() * 3) + 1
              } bg-white/30 rounded-full`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(1px)",
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-800 font-semibold tracking-wide">
                PREMIUM AI FEATURES
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span
                className="text-gray-800 drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]"
                style={{ textShadow: "0 0 10px rgba(0,0,0,0.1)" }}
              >
                AI Features
              </span>
            </motion.h2>

            <motion.p
              className="mx-auto max-w-[900px] text-white/90 text-lg md:text-xl leading-relaxed font-medium drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}
            >
              India's most comprehensive AI health platform - from medical
              report explanation to government health schemes, all in one
              intelligent ecosystem
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Mobile view for Medical Report Analysis, AI Symptom Checker, and Calories & Nutrition Calculator */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:hidden mb-6">
              {aiFeatures
                .filter(
                  (feature) =>
                    feature.id === "report-explainer" ||
                    feature.id === "symptom-checker" ||
                    feature.id === "nutrition-calculator"
                )
                .map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ExpandableCard
                        id={feature.id}
                        expandedCardId={expandedCardId}
                        setExpandedCardId={setExpandedCardId}
                        icon={IconComponent}
                        title={feature.title}
                        description={feature.description}
                        benefits={feature.benefits}
                        color={feature.color}
                        className="h-full group"
                      >
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">
                              How it works
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {feature.id === "report-explainer" &&
                                "Upload your medical reports and our AI will analyze and explain them in simple language, making complex medical terms easy to understand."}
                              {feature.id === "symptom-checker" &&
                                "Enter your symptoms and our AI will analyze possible causes and suggest next steps, providing 24/7 free consultation guidance."}
                              {feature.id === "nutrition-calculator" &&
                                "Take a photo of your food or search for Indian dishes. Our AI Diet Buddy will calculate calories and provide detailed nutritional information tailored for Indian cuisine."}
                            </p>
                          </div>

                          <motion.div
                            className="pt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                          >
                            <Button
                              className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                              asChild
                            >
                              <Link
                                to={`/${feature.id}`}
                                className="flex items-center justify-center gap-2"
                              >
                                <span>Try Now</span>
                                <motion.div
                                  whileHover={{ x: 5 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                  }}
                                >
                                  <ArrowRight className="h-4 w-4" />
                                </motion.div>
                              </Link>
                            </Button>
                          </motion.div>
                        </div>
                      </ExpandableCard>
                    </motion.div>
                  );
                })}
            </div>

            {/* Sidebar for Medical Report Analysis, AI Symptom Checker, and Calories & Nutrition Calculator in desktop mode */}
            <div className="lg:w-1/4 space-y-6 hidden lg:block">
              {aiFeatures
                .filter(
                  (feature) =>
                    feature.id === "report-explainer" ||
                    feature.id === "symptom-checker" ||
                    feature.id === "nutrition-calculator"
                )
                .map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ExpandableCard
                        id={feature.id}
                        expandedCardId={expandedCardId}
                        setExpandedCardId={setExpandedCardId}
                        icon={IconComponent}
                        title={feature.title}
                        description={feature.description}
                        benefits={feature.benefits}
                        color={feature.color}
                        className="h-full group"
                      >
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">
                              How it works
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {feature.id === "report-explainer" &&
                                "Upload your medical reports and our AI will analyze and explain them in simple language, making complex medical terms easy to understand."}
                              {feature.id === "symptom-checker" &&
                                "Enter your symptoms and our AI will analyze possible causes and suggest next steps, providing 24/7 free consultation guidance."}
                            </p>
                          </div>

                          <motion.div
                            className="pt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                          >
                            <Button
                              className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                              asChild
                            >
                              <Link
                                to={`/${feature.id}`}
                                className="flex items-center justify-center gap-2"
                              >
                                <span>Try Now</span>
                                <motion.div
                                  whileHover={{ x: 5 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                  }}
                                >
                                  <ArrowRight className="h-4 w-4" />
                                </motion.div>
                              </Link>
                            </Button>
                          </motion.div>
                        </div>
                      </ExpandableCard>
                    </motion.div>
                  );
                })}
            </div>

            {/* Main grid for other features - Professional Layout */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {aiFeatures
                  .filter(
                    (feature) =>
                      feature.id !== "report-explainer" &&
                      feature.id !== "symptom-checker" &&
                      feature.id !== "nutrition-calculator"
                  )
                  .map((feature, index) => {
                    const IconComponent = feature.icon;
                    // For staggered vertical alignment: offset every alternate card vertically
                    return (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`w-full max-w-sm`}
                      >
                        <ExpandableCard
                          id={feature.id}
                          expandedCardId={expandedCardId}
                          setExpandedCardId={setExpandedCardId}
                          icon={IconComponent}
                          title={feature.title}
                          description={feature.description}
                          benefits={feature.benefits}
                          color={feature.color}
                          className="h-full group shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
                        >
                          <>
                            <div className="space-y-6">
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                                  How it works
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {feature.id === "report-explainer" &&
                                    "Upload your medical reports and our AI will analyze and explain them in simple language, making complex medical terms easy to understand."}
                                  {feature.id === "medicine-info" &&
                                    "Search for any medicine or scan its packaging. Our AI will provide detailed information about usage, side effects, and suggest cost-effective alternatives."}
                                  {feature.id === "insurance-explainer" &&
                                    "Upload your insurance policy documents and our AI will break down the coverage details, exclusions, and guide you through the claims process."}
                                  {feature.id === "health-dashboard" &&
                                    "Connect your health devices or manually input your health data. Our AI will analyze and present a comprehensive health score with personalized recommendations."}
                                  {feature.id === "nutrition-calculator" &&
                                    "Take a photo of your food or search for Indian dishes. Our AI will calculate calories and provide detailed nutritional information tailored for Indian cuisine."}
                                  {feature.id === "govt-schemes" &&
                                    "AI checks your eligibility for government health schemes like Ayushman Bharat, PMJAY, and state-specific programs with instant application guidance."}
                                  {feature.id === "emergency-sos" &&
                                    "Emergency panic button sends your live GPS location and health details to family and doctors instantly for immediate assistance."}
                                  {feature.id === "fitness-planner" &&
                                    "Personalized fitness plans incorporating Indian lifestyle, yoga, traditional exercises, and cultural fitness approaches."}
                                  {feature.id === "health-literacy" &&
                                    "Complex diseases explained in simple Hindi/English with interactive visuals and easy-to-understand educational content."}
                                </p>
                              </div>
                            </div>

                            <motion.div
                              className="pt-4"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                            >
                              <Button
                                className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold py-3"
                                asChild
                              >
                                <Link
                                  to={`/${feature.id}`}
                                  className="flex items-center justify-center gap-2"
                                >
                                  <span>Try Now</span>
                                  <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 400,
                                      damping: 17,
                                    }}
                                  >
                                    <ArrowRight className="h-4 w-4" />
                                  </motion.div>
                                </Link>
                              </Button>
                            </motion.div>
                          </>
                        </ExpandableCard>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SupportFeatures />

      {/* Why MediVolt */}
      <section className="w-full py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🎯 Why People Will Come to MediVolt?
            </h2>
            <p className="mx-auto max-w-[800px] text-white/70 text-lg leading-relaxed">
              In India, the problem is not tracking health → it's{" "}
              <strong>understanding it</strong>.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PremiumCard className="text-center p-8">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Most apps give data (numbers)
              </h3>
              <p className="text-white/70">
                Blood pressure: 140/90, Sugar: 180mg/dl, Cholesterol: 250mg/dl
              </p>
            </PremiumCard>
            <PremiumCard className="text-center p-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-primary-200">
                MediVolt gives meaning (explanation)
              </h3>
              <p className="text-white/70">
                "Aapka BP high hai, exercise kariye aur namak kam kariye. Doctor
                se miliye."
              </p>
            </PremiumCard>
            <PremiumCard className="text-center p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                All in One Platform
              </h3>
              <p className="text-white/70">
                AI Doctor + Nutritionist + Insurance Advisor + Fitness Trainer +
                Govt Guide
              </p>
            </PremiumCard>
          </div>
        </div>
      </section>
    </div>
  );
}
