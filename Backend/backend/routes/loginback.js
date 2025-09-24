// loginback.js
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Schema
const loginSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Model
const Login = mongoose.model("Login", loginSchema);

// Sample users (for testing only)
const logins = [
  { email: "sivabadeti@123", password: "siva1234" },
  { email: "shashank@123", password: "shashnak1234" },
  { email: "satish@123", password: "satish1234" },
];

// Insert sample users only if DB is empty
async function insertData() {
  const count = await Login.countDocuments();
  if (count === 0) {
    await Login.insertMany(logins);
    console.log("✅ Sample users inserted successfully");
  }
}
insertData();

// POST /login
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await Login.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }

    // Success
    res.json({ success: true, message: "Login successful", user });
  } catch (err) {
    console.error("❌ Error in /login:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
