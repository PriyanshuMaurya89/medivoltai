# 🚀 Vercel Deployment Guide for MediVolt AI

## 📋 **Step-by-Step Deployment**

### **Method 1: Vercel Dashboard (Recommended)**

1. **Visit Vercel Dashboard:**
   ```
   https://vercel.com/dashboard
   ```

2. **Import Project:**
   - Click "New Project"
   - Select "Import Git Repository" 
   - Choose: `PriyanshuMaurya89/medivoltai`

3. **Configure Settings:**
   ```
   Framework Preset: Vite
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   Node.js Version: 18.x
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Get your live URL!

### **Method 2: Vercel CLI**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to Frontend:**
   ```bash
   cd frontend
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow Prompts:**
   - Link to existing project? No
   - Project name: medivolt-ai
   - Directory: ./
   - Override settings? No

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **Build Fails:**
   - Check Node.js version (18+)
   - Verify package.json scripts
   - Check for missing dependencies

2. **Routing Issues:**
   - Ensure vercel.json has SPA rewrites
   - Check React Router configuration

3. **Environment Variables:**
   - Add in Vercel dashboard under Settings > Environment Variables
   - Prefix with VITE_ for client-side variables

### **Build Commands:**
```bash
# Local test
npm run build
npm run preview

# Check for errors
npm run lint
```

## ✅ **Verification Steps**

After deployment:
1. ✅ Homepage loads correctly
2. ✅ Navigation works (no 404s)
3. ✅ Dashboards are accessible
4. ✅ Registration system works
5. ✅ Mobile responsive design

## 🌐 **Expected URL Format**
```
https://medivolt-ai-[random].vercel.app
```

## 📞 **Support**
If deployment fails, check:
- GitHub repository is public
- All files are committed and pushed
- Vercel.json configuration is correct
- Build succeeds locally
