// routes/sellerRouter.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Seller from "../models/seller.js";

const router = express.Router();

// ✅ Seller Registration
router.post("/register", async (req, res) => {
  const { email, password, name, contact, city, state, country, address } = req.body;

  try {
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return res.status(400).json({ message: "Seller already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSeller = new Seller({
      email,
      password: hashedPassword,
      name,
      contact,
      city,
      state,
      country,
      address,
    });

    await newSeller.save();

    res.status(201).json({
      message: "Seller registered successfully!",
      sellerId: newSeller._id,
    });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Seller Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const seller = await Seller.findOne({ email });
    if (!seller) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, seller.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Optional: JWT token generation
    // const token = jwt.sign({ sellerId: seller._id }, "your_secret_key", { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful!",
      sellerId: seller._id,
      // token
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
