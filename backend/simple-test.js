const http = require('http');
const url = require('url');

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

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  res.writeHead(200, {'Content-Type': 'application/json'});
  
  if (parsedUrl.pathname === '/api/products') {
    res.end(JSON.stringify(products));
  } else if (parsedUrl.pathname === '/api/health') {
    res.end(JSON.stringify({status: 'OK', message: 'MediVolt API is running'}));
  } else {
    res.end(JSON.stringify({message: 'Server working!'}));
  }
});

server.listen(3003, () => {
  console.log('Simple server running on port 3003');
});

// Keep the process alive
process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  server.close();
  process.exit(0);
});

console.log('Starting simple HTTP server...');
