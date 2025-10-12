# MediVolt Deployment Guide

## Vercel Deployment

### Prerequisites
- Node.js 18+ installed
- Vercel account

### Quick Deploy
1. **Connect to Vercel:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Or deploy via GitHub:**
   - Push code to GitHub repository
   - Connect repository to Vercel dashboard
   - Vercel will auto-deploy on every push

### Build Configuration
- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Environment Variables (Optional)
Set these in Vercel dashboard if needed:
- `VITE_API_URL` - Backend API URL
- `VITE_APP_NAME` - Application name
- `VITE_ENABLE_ANALYTICS` - Enable analytics

### Performance Optimizations
✅ Code splitting enabled
✅ Image optimization
✅ Gzip compression
✅ CDN caching
✅ Bundle size optimization

### Troubleshooting
- **Build fails:** Check Node.js version (18+)
- **Routing issues:** Vercel.json handles SPA routing
- **Large bundle:** Code splitting reduces initial load

### Live URL
After deployment, your app will be available at:
`https://your-project-name.vercel.app`
