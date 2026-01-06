const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const pasteRoutes = require("./routes/pasteRoutes");

connectDB();

const app = express();

// Enable CORS for frontend
app.use(cors({
  origin:"https://pastebin-526b.vercel.app", // frontend origin
  methods: ["GET", "POST"]
}));

app.use(express.json());

// Routes
app.use("/api/paste", pasteRoutes);

module.exports = app;

