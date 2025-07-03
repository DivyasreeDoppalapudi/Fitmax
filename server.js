const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

// Connect to DB
mongoose
  .connect(
    "mongodb+srv://divyasreedoppalapudi:Divya%402003@fitmax.t5jauju.mongodb.net/?retryWrites=true&w=majority&appName=fitmax",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("🔥 MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
