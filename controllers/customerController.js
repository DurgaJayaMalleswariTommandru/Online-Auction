import Customer from '../models/Customer.js';
import bcrypt from 'bcryptjs';

export const registerCustomer = async (req, res) => {
  console.log("🟢 Hit registerCustomer route");

  const { name, mobile, email, password, city, state, pincode, address } = req.body;
  if (!name || !email || !password || !mobile || !city || !state || !pincode || !address) {
    console.log("🔴 Missing fields");
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      console.log("🔴 Customer exists");
      return res.status(400).json({ message: "Customer already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({
      name,
      mobile,
      email,
      password: hashedPassword,
      city,
      state,
      pincode,
      address
    });

    await newCustomer.save();
    console.log("✅ Customer saved to MongoDB");

    res.status(201).json({ message: "Customer registered successfully" });
  } catch (error) {
    console.error("❌ Registration Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
