const express = require('express');
const router = express.Router();

// In-memory cart storage (in production, use database)
let carts = {};

// Get cart items
router.get('/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const cart = carts[userId] || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    res.json({
      items: cart,
      totalItems,
      totalPrice,
      message: 'Cart retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add item to cart
router.post('/add', (req, res) => {
  try {
    const { userId, productId, quantity = 1 } = req.body;
    
    const product = global.products.find(p => p.id === productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    if (!carts[userId]) {
      carts[userId] = [];
    }
    
    const existingItem = carts[userId].find(item => item.productId === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      carts[userId].push({
        productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
      });
    }
    
    res.json({
      message: 'Item added to cart successfully',
      cart: carts[userId]
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update item quantity
router.put('/update', (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    
    if (!carts[userId]) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    const item = carts[userId].find(item => item.productId === productId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
    
    if (quantity <= 0) {
      carts[userId] = carts[userId].filter(item => item.productId !== productId);
    } else {
      item.quantity = quantity;
    }
    
    res.json({
      message: 'Cart updated successfully',
      cart: carts[userId]
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove item from cart
router.delete('/remove/:userId/:productId', (req, res) => {
  try {
    const { userId, productId } = req.params;
    
    if (!carts[userId]) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    carts[userId] = carts[userId].filter(item => item.productId !== productId);
    
    res.json({
      message: 'Item removed from cart successfully',
      cart: carts[userId]
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Clear cart
router.delete('/clear/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    carts[userId] = [];
    
    res.json({
      message: 'Cart cleared successfully',
      cart: []
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
