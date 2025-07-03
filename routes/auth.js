const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Signup
router.post("/signup", async (req, res) => {
  const { username, email, password, gender, dob, phone, joined } = req.body;
  try {
    const newUser = new User({
      username,
      email,
      password,
      gender,
      dob,
      phone,
      joined: new Date(),
    });
    await newUser.save();
    res.status(201).json({ message: "User created!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Password check
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Send full user data (minus password)
    res.status(200).json({
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email,
        gender: user.gender,
        dob: user.dob,
        phone: user.phone,
        joined: user.joined, // for backward compatibility
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
