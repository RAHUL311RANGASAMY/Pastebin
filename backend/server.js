// const app = require("./app");

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());              // ✅ ALLOW ALL ORIGINS
app.use(express.json());

// Routes
app.use("/api/paste", require("./routes/pasteRoutes"));

module.exports = app;
