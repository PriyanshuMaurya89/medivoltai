const express = require('express');
const router = express.Router();

// Create a new order
router.post('/', (req, res) => {
  try {
    const { userId, items, totalAmount, shippingAddress, paymentMethod } = req.body;
    
    const order = {
      id: `ORD${Date.now()}`,
      userId,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      status: 'pending',
      orderDate: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };
    
    global.orders.push(order);
    
    res.status(201).json({
      message: 'Order placed successfully',
      order,
      trackingId: order.id
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user orders
router.get('/user/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const userOrders = global.orders.filter(order => order.userId === userId);
    
    res.json({
      orders: userOrders,
      total: userOrders.length
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get order by ID
router.get('/:orderId', (req, res) => {
  try {
    const { orderId } = req.params;
    const order = global.orders.find(order => order.id === orderId);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update order status
router.put('/:orderId/status', (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    
    const order = global.orders.find(order => order.id === orderId);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    order.status = status;
    order.updatedAt = new Date().toISOString();
    
    res.json({
      message: 'Order status updated successfully',
      order
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
