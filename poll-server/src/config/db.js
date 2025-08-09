const mongoose = require("mongoose");
require("dotenv").config();

const DB =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URL
    : "mongodb://localhost:27017/intevuePoll";

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Failed to connect to MongoDB:", e);
    process.exit(1);
  }
};

module.exports = connectDB;