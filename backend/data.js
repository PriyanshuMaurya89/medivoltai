// Professional medical e-commerce data
const initializeData = () => {
  // High-quality medical products with professional images
  global.products = [
    {
      id: 'med001',
      name: 'Digital Blood Pressure Monitor',
      description: 'Clinically validated digital blood pressure monitor with large display, memory storage, and irregular heartbeat detection. Perfect for home monitoring.',
      price: 2499,
      image: 'https://via.placeholder.com/300x300/2196f3/ffffff?text=BP+Monitor',
      category: 'Medical Devices',
      stock: 45,
      isFeatured: true,
      isNewArrival: false,
      rating: 4.5,
      reviews: 128,
      brand: 'OmronHealth'
    },
    {
      id: 'sup001', 
      name: 'Vitamin D3 + K2 Supplements (90 caps)',
      description: 'Premium quality Vitamin D3 5000 IU with Vitamin K2 for optimal bone health, immune support, and calcium absorption.',
      price: 899,
      image: 'https://via.placeholder.com/300x300/4caf50/ffffff?text=Vitamin+D3',
      category: 'Supplements',
      stock: 150,
      isFeatured: true,
      isNewArrival: false,
      rating: 4.7,
      reviews: 89,
      brand: 'VitaWell'
    },
    {
      id: 'med002',
      name: 'Infrared Non-Contact Thermometer',
      description: 'Professional grade infrared thermometer with 1-second reading, fever alarm, and memory recall. CE & FDA certified.',
      price: 1799,
      image: 'https://via.placeholder.com/300x300/ff9800/ffffff?text=Thermometer',
      category: 'Medical Devices',
      stock: 80,
      isFeatured: true,
      isNewArrival: false,
      rating: 4.3,
      reviews: 156,
      brand: 'ThermoPro'
    },
    {
      id: 'pro001',
      name: 'N95 Respirator Masks (20 Pack)',
      description: 'NIOSH approved N95 respirator masks offering 95% filtration efficiency against airborne particles. Individual packaging.',
      price: 899,
      image: 'https://via.placeholder.com/300x300/607d8b/ffffff?text=N95+Masks',
      category: 'Personal Protection',
      stock: 200,
      isFeatured: true,
      isNewArrival: false,
      rating: 4.6,
      reviews: 245,
      brand: 'SafeMed'
    },
    {
      id: 'med003',
      name: 'Smart Glucose Monitoring Kit',
      description: 'Complete glucose monitoring system with bluetooth connectivity, smartphone app, and 50 test strips included.',
      price: 3299,
      image: 'https://via.placeholder.com/300x300/e91e63/ffffff?text=Glucose+Monitor',
      category: 'Medical Devices',
      stock: 35,
      isFeatured: false,
      isNewArrival: true,
      rating: 4.8,
      reviews: 67,
      brand: 'GlucoSmart'
    },
    {
      id: 'sup002',
      name: 'Whey Protein Isolate (2kg) - Vanilla',
      description: 'Pure whey protein isolate with 90% protein content. Sugar-free, lactose-free formula for muscle recovery and growth.',
      price: 2999,
      image: 'https://via.placeholder.com/300x300/9c27b0/ffffff?text=Whey+Protein',
      category: 'Supplements',
      stock: 60,
      isFeatured: false,
      isNewArrival: true,
      rating: 4.4,
      reviews: 112,
      brand: 'ProFit'
    },
    {
      id: 'med004',
      name: 'Portable Oxygen Concentrator',
      description: 'Lightweight 5L oxygen concentrator with battery backup. Perfect for home use and travel. Ultra-quiet operation.',
      price: 45999,
      image: 'https://via.placeholder.com/300x300/009688/ffffff?text=Oxygen+Concentrator',
      category: 'Medical Equipment',
      stock: 12,
      isFeatured: false,
      isNewArrival: true,
      rating: 4.9,
      reviews: 34,
      brand: 'OxyLife'
    },
    {
      id: 'eme001',
      name: 'Professional First Aid Kit (150 pieces)',
      description: 'Comprehensive first aid kit with bandages, antiseptics, medications, and medical tools. Perfect for home, office, or travel.',
      price: 1299,
      image: 'https://via.placeholder.com/300x300/f44336/ffffff?text=First+Aid+Kit',
      category: 'Emergency Supplies',
      stock: 85,
      isFeatured: false,
      isNewArrival: true,
      rating: 4.5,
      reviews: 203,
      brand: 'MedReady'
    },
    {
      id: 'med005',
      name: 'Digital Stethoscope with Recording',
      description: 'Advanced digital stethoscope with 50x amplification, noise reduction, and recording capability. Bluetooth connectivity.',
      price: 8999,
      image: 'https://via.placeholder.com/300x300/3f51b5/ffffff?text=Digital+Stethoscope',
      category: 'Medical Devices',
      stock: 25,
      isFeatured: true,
      isNewArrival: false,
      rating: 4.7,
      reviews: 45,
      brand: 'CardioTech'
    },
    {
      id: 'sup003',
      name: 'Omega-3 EPA/DHA Fish Oil (120 capsules)',
      description: 'Triple-strength omega-3 fish oil with 1200mg EPA/DHA per serving. Third-party tested for purity and potency.',
      price: 1599,
      image: 'https://via.placeholder.com/300x300/ffc107/ffffff?text=Fish+Oil',
      category: 'Supplements',
      stock: 95,
      isFeatured: true,
      isNewArrival: false,
      rating: 4.6,
      reviews: 178,
      brand: 'OceanPure'
    },
    {
      id: 'med006',
      name: 'Pulse Oximeter with Perfusion Index',
      description: 'Professional pulse oximeter with perfusion index, plethysmographic waveform, and dual-color OLED display.',
      price: 2199,
      image: 'https://via.placeholder.com/300x300/795548/ffffff?text=Pulse+Oximeter',
      category: 'Medical Devices',
      stock: 70,
      isFeatured: false,
      isNewArrival: true,
      rating: 4.4,
      reviews: 92,
      brand: 'PulseCheck'
    },
    {
      id: 'mob001',
      name: 'Ultra-Light Aluminum Wheelchair',
      description: 'Professional wheelchair with ultra-light aluminum frame, quick-release wheels, and adjustable footrests. Weight: 13kg only.',
      price: 23999,
      image: 'https://via.placeholder.com/300x300/673ab7/ffffff?text=Wheelchair',
      category: 'Mobility Aids',
      stock: 18,
      isFeatured: false,
      isNewArrival: true,
      rating: 4.8,
      reviews: 56,
      brand: 'MobilityPlus'
    },
  ];

  console.log(`✅ Loaded ${global.products.length} premium medical products`);
  console.log('🎯 Categories: Medical Devices, Supplements, Personal Protection, Medical Equipment, Emergency Supplies, Mobility Aids');
};

module.exports = { initializeData };
