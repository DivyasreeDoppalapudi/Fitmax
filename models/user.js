const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  gender: String,
  dob: Date,
  phone: String,
  joined: { type: Date, default: Date.now },
  progress: { type: String, default: "No progress yet" },
});

module.exports = mongoose.model("User", userSchema);
