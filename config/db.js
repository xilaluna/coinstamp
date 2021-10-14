const mongoose = require("mongoose")

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    console.log("MongoDB connected")
  } catch (err) {
    console.log("Failed to connect to MongoDB", err)
  }
}

module.exports = connectDatabase
