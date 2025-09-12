const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3002;

// Simple middleware
app.use(cors());
app.use(express.json());

// Test products data
const products = [
  {
    id: 'med001',
    name: 'Digital Blood Pressure Monitor',
    description: 'Accurate blood pressure monitor for home use',
    price: 1500,
    image: 'https://via.placeholder.com/300x300/2196f3/ffffff?text=BP+Monitor',
    category: 'Medical Devices',
    stock: 45,
    rating: 4.5,
    reviews: 128,
    brand: 'OmronHealth'
  },
  {
    id: 'sup001',
    name: 'Vitamin D3 Supplements (60 caps)',
    description: 'High-potency Vitamin D3 for bone health and immunity',
    price: 450,
    image: 'https://via.placeholder.com/300x300/4caf50/ffffff?text=Vitamin+D3',
    category: 'Supplements',
    stock: 150,
    rating: 4.7,
    reviews: 89,
    brand: 'VitaWell'
  },
  {
    id: 'med002',
    name: 'Infrared Thermometer',
    description: 'Non-contact thermometer for quick and hygienic temperature checks',
    price: 999,
    image: 'https://via.placeholder.com/300x300/ff9800/ffffff?text=Thermometer',
    category: 'Medical Devices',
    stock: 80,
    rating: 4.3,
    reviews: 156,
    brand: 'ThermoPro'
  },
  {
    id: 'pro001',
    name: 'N95 Face Masks (Pack of 10)',
    description: 'Certified N95 masks for superior protection against airborne particles',
    price: 299,
    image: 'https://via.placeholder.com/300x300/607d8b/ffffff?text=N95+Masks',
    category: 'Personal Protection',
    stock: 200,
    rating: 4.6,
    reviews: 245,
    brand: 'SafeMed'
  }
];

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

app.listen(PORT, () => {
  console.log(`🚀 MediVolt API Server is running on port ${PORT}`);
  console.log(`📊 Loaded ${products.length} products`);
  console.log(`🔗 Frontend URL: http://localhost:5173`);
});
