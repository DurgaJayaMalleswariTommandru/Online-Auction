import express from 'express';
import { registerCustomer } from '../controllers/customerController.js';

const router = express.Router();
router.post('/register', registerCustomer);

export default router;
