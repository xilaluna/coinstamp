const mongoose = require("mongoose")

const UserShema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 255,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", UserShema)
