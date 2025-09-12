# MediVolt - Medical E-commerce Platform (JavaScript Version)

A full-stack medical e-commerce platform built with **React** (frontend) and **Node.js** (backend) - **NO TypeScript**.

## 🚀 Features

- 🏥 Medical products catalog
- 🛒 Shopping cart functionality  
- 🔐 User authentication (JWT)
- 📱 Responsive design with Tailwind CSS
- 🧠 AI X-ray analysis (placeholder)
- 📋 Prescription upload (placeholder)
- 💊 Featured products and new arrivals
- 👤 User profiles and roles

## 🔧 Tech Stack

### Frontend
- **React 18** with **JavaScript** (no TypeScript!)
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **Lucide React** for icons

### Backend
- **Node.js** with **Express.js** (JavaScript)
- **MongoDB** with Mongoose
- **JWT** authentication
- **bcrypt** for password hashing
- **Express validation**
- **CORS, Helmet** for security

## ⚡ Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or cloud)

### 1. Clone & Setup
```bash
# Navigate to the project
cd medivolt-js
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Start the backend server
npm run dev
```
Backend runs on `http://localhost:3001`

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies 
npm install

# Start the frontend
npm run dev
```
Frontend runs on `http://localhost:5173`

## 🎯 How to Use

1. **Start MongoDB** service on your machine
2. **Run Backend**: `cd backend && npm run dev`
3. **Run Frontend**: `cd frontend && npm run dev`
4. **Open Browser**: Go to `http://localhost:5173`

## ✨ What's Included

### 📂 Frontend Features:
- **HomePage** with hero section, featured products, new arrivals
- **Authentication** - Login/Register pages
- **Shopping Cart** - Add, remove, update items
- **Product Display** - Cards with images and details
- **Responsive Navbar** with cart counter
- **Context Management** - Auth and Cart contexts

### 🛠 Backend Features:
- **REST API** endpoints
- **User Authentication** with JWT tokens
- **Product Management** 
- **Sample Data** seeding
- **Password Hashing** with bcrypt
- **Input Validation**

### 🗄 API Endpoints:
```
POST /api/auth/register  - Register user
POST /api/auth/login     - User login  
GET  /api/auth/profile   - Get profile (protected)
GET  /api/products       - Get all products
GET  /api/products/featured - Get featured products
GET  /api/products/new-arrivals - Get new arrivals
GET  /api/health         - Health check
```

## 📁 Project Structure

```
medivolt-js/
├── frontend/               # React Frontend (JavaScript)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── contexts/       # React contexts  
│   │   ├── pages/          # Route components
│   │   ├── services/       # API calls
│   │   ├── utils/          # Utilities
│   │   └── App.jsx         # Main app
│   └── package.json
│
├── backend/                # Node.js Backend (JavaScript)
│   ├── routes/             # API routes
│   ├── models/             # MongoDB models
│   ├── middleware/         # Auth middleware
│   ├── index.js            # Server entry
│   ├── seedData.js         # Sample data
│   └── package.json
│
└── README.md
```

## 🔑 Environment Setup

Create `.env` file in backend folder:
```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/medivolt
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

## 🛡️ No TypeScript!

This version is built with pure **JavaScript** - no TypeScript compilation needed:
- ✅ Faster setup
- ✅ No type checking overhead  
- ✅ Simple `.js` and `.jsx` files
- ✅ No build complexity

## 🚀 Ready to Go!

The app automatically:
- Seeds sample medical products
- Sets up authentication
- Configures cart functionality
- Handles routing

Just start both servers and you're ready to shop for medical supplies!

## 📝 Notes

- Cart data is stored in localStorage
- Sample products are automatically loaded
- JWT tokens expire in 7 days
- All routes are properly configured
- Responsive design works on mobile

Enjoy your medical e-commerce platform! 🏥✨
