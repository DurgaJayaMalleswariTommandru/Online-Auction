import express from 'express';
import { createAuction, placeBid } from '../controllers/auctionController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createAuction);
router.post('/bid/:id', authMiddleware, placeBid);

export default router;
