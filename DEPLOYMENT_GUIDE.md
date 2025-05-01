# Food Delivery App Deployment Guide

This guide will help you deploy your Food Delivery App to various platforms.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or another MongoDB provider)
- Git

## Local Development

1. **Start the backend server:**
   ```bash
   cd backend
   npm install
   npm start
   ```
   The backend will run on http://localhost:3001

2. **Start the frontend development server:**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The frontend will run on http://localhost:3000

## Deployment Options

### Option 1: Deploying to Heroku

1. **Create a Heroku account** if you don't have one already.

2. **Install the Heroku CLI** and log in:
   ```bash
   heroku login
   ```

3. **Create a new Heroku app:**
   ```bash
   heroku create food-delivery-app-yourname
   ```

4. **Add the MongoDB URI to Heroku config:**
   ```bash
   heroku config:set MONGO_URI="your_mongodb_uri"
   heroku config:set JWT_SECRET="your_jwt_secret"
   ```

5. **Deploy to Heroku:**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push heroku main
   ```

6. **Open your deployed app:**
   ```bash
   heroku open
   ```

### Option 2: Deploying Frontend to Netlify/Vercel and Backend to Render

#### Frontend Deployment (Netlify/Vercel)

1. **Build your frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify:**
   - Sign up for Netlify
   - Drag and drop the `frontend/build` folder to Netlify's upload area
   - Or connect your GitHub repository for continuous deployment

3. **Set environment variables** in Netlify dashboard:
   - REACT_APP_API_URL=https://your-backend-url.render.com/api

#### Backend Deployment (Render)

1. **Sign up for Render** and create a new Web Service.

2. **Connect your GitHub repository** or use the Render CLI.

3. **Configure your Web Service:**
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`

4. **Set environment variables** in Render dashboard:
   - MONGO_URI=your_mongodb_uri
   - JWT_SECRET=your_jwt_secret
   - NODE_ENV=production

5. **Deploy your backend** and note the URL for your frontend configuration.

## Important Notes

- Make sure your frontend is configured to use the correct backend API URL in production.
- Ensure all environment variables are properly set in your deployment platform.
- For security, never commit your .env files to version control.
- Consider setting up CI/CD pipelines for automated deployments.

## Troubleshooting

- If you encounter CORS issues, ensure your backend is properly configured to accept requests from your frontend domain.
- Check your MongoDB connection string if you have database connection issues.
- Verify that all required environment variables are set in your deployment platform.
