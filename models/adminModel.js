import mongoose from 'mongoose';

// ✅ Define the Admin Schema
const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

// ✅ Export the Admin Model
const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
