const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// AI Health Features
const aiFeatures = [
  {
    id: 'report-explainer',
    title: 'AI Medical Report Explainer',
    description: 'Upload any test/report → AI explains in simple Hindi/English',
    icon: '🏥',
    color: 'bg-blue-500',
    benefits: ['Removes medical jargon', 'Easy to understand explanations', 'Hindi & English support']
  },
  {
    id: 'medicine-info',
    title: 'AI Medicine Information',
    description: 'Scan or search medicine → AI explains usage, dosage, side effects, cheaper substitutes',
    icon: '💊',
    color: 'bg-green-500',
    benefits: ['Complete medicine database', 'Side effects & interactions', 'Cost-effective alternatives']
  },
  {
    id: 'insurance-explainer',
    title: 'AI Insurance Explainer',
    description: 'Upload/select policy → AI explains coverage, exclusions, claims process',
    icon: '🛡️',
    color: 'bg-purple-500',
    benefits: ['Plain language explanations', 'Policy comparisons', 'Claims guidance']
  },
  {
    id: 'health-dashboard',
    title: 'AI Health Dashboard',
    description: 'One dashboard with vitals, diet, fitness, sleep, stress - Health Score 0-100',
    icon: '📊',
    color: 'bg-indigo-500',
    benefits: ['Personalized health score', 'Daily health tips', 'Complete wellness tracking']
  },
  {
    id: 'nutrition-calculator',
    title: 'Calories & Nutrition Calculator',
    description: 'Scan food item → AI shows calories + nutrition for Indian foods',
    icon: '🍽️',
    color: 'bg-orange-500',
    benefits: ['Indian food database', 'Roti, dal, biryani tracking', 'Personalized diet plans']
  },
  {
    id: 'govt-schemes',
    title: 'Government Health Scheme Finder',
    description: 'AI checks eligibility for Ayushman Bharat, PMJAY, State schemes',
    icon: '🏛️',
    color: 'bg-red-500',
    benefits: ['Ayushman Bharat eligibility', 'State scheme finder', 'Application guidance']
  },
  {
    id: 'symptom-checker',
    title: 'AI Symptom Checker',
    description: 'Enter symptoms → AI suggests possible causes + next steps',
    icon: '🩺',
    color: 'bg-teal-500',
    benefits: ['24/7 free consultation', 'Symptom analysis', 'Doctor visit guidance']
  },
  {
    id: 'emergency-sos',
    title: 'Emergency SOS',
    description: 'Panic button → sends live GPS + health details to family/doctors',
    icon: '🚨',
    color: 'bg-red-600',
    benefits: ['Live GPS tracking', 'Family notifications', 'Medical history sharing']
  },
  {
    id: 'fitness-planner',
    title: 'AI Lifestyle & Fitness Planner',
    description: 'AI makes personal fitness plan for Indian lifestyle',
    icon: '🧘',
    color: 'bg-pink-500',
    benefits: ['Yoga & Indian exercises', 'Personalized workout', 'Cultural fitness approach']
  },
  {
    id: 'health-literacy',
    title: 'AI Health Literacy',
    description: 'Explains diseases in simple Hindi/English with visuals',
    icon: '📚',
    color: 'bg-yellow-500',
    benefits: ['Simple language education', 'Visual explanations', 'Disease awareness']
  }
];

// Sample health data
const healthStats = {
  totalUsers: 50000,
  reportsExplained: 25000,
  medicinesScanned: 15000,
  healthScoresGenerated: 30000
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'MediVolt API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/featured', (req, res) => {
  const featured = products.filter(p => p.isFeatured);
  res.json(featured);
});

app.get('/api/products/new-arrivals', (req, res) => {
  const newArrivals = products.filter(p => p.isNewArrival);
  res.json(newArrivals);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MediVolt API Server is running on port ${PORT}`);
  console.log(`📊 Loaded ${products.length} products`);
  console.log(`🔗 Frontend URL: http://localhost:5173`);
  console.log(`✅ All images are dummy placeholders that will definitely work!`);
});
