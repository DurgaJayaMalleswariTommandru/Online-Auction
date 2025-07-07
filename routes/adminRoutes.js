import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Admin from '../models/adminModel.js'; // ✅ Make sure you create this model

const router = express.Router();

// ✅ Admin Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        console.log("Received Login Request for:", username);

        // Find admin by username
        const admin = await Admin.findOne({ username });

        if (!admin) {
            console.log("Admin not found in database");
            return res.status(401).json({ message: "Invalid username or password" });
        }

        console.log("Stored Hash in DB:", admin.password);

        // Check password
        const isMatch = await bcrypt.compare(password, admin.password);
        console.log("Password Match Result:", isMatch);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("Login Successful");
        res.json({ token, message: "Login successful" });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
});


export default router;
