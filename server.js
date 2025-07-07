// server.js
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';

import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import auctionRoutes from './routes/auctionRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import sellerRoutes from './routes/sellerRoutes.js';
import customerRoutes from './routes/customerRoutes.js'; // ✅ New Customer Route

// ✅ Load environment variables from .env file
dotenv.config();

// ✅ Connect to MongoDB using MONGO_URI from .env
connectDB();

// ✅ Initialize Express
const app = express();

// ✅ Middlewares
app.use(express.json()); // Parses JSON payload
app.use(cors());         // Enables CORS

// ✅ API Routes
app.use('/api/users', userRoutes);
app.use('/api/auctions', auctionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/sellers', sellerRoutes);
app.use('/api/customers', customerRoutes);

// ✅ Serve static files from /public (e.g. frontend HTML/CSS/JS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Catch-all route to serve main frontend file for SPA (Single Page App)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// ✅ Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
