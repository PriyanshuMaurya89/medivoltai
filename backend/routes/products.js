const express = require('express');

const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  try {
    const products = global.products || [];
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get featured products
router.get('/featured', (req, res) => {
  try {
    const products = global.products || [];
    const featured = products.filter(p => p.isFeatured).slice(0, 8);
    res.json(featured);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get new arrivals
router.get('/new-arrivals', (req, res) => {
  try {
    const products = global.products || [];
    const newArrivals = products.filter(p => p.isNewArrival).slice(0, 8);
    res.json(newArrivals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get product by ID
router.get('/:id', (req, res) => {
  try {
    const products = global.products || [];
    const product = products.find(p => p.id === req.params.id || p._id === req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
