require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// test route FIRST
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// auth routes
app.use("/api/auth", authRoutes);

// 404 handler MUST be LAST
app.use((req, res) => {
  console.log("Route hit:", req.method, req.originalUrl);
  res.status(404).json({ message: "Route Not Found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
