const mongoose = require("mongoose");

const photographerSchema = new mongoose.Schema({
  bio: {
    type: String,
    required: [true, "The bio is required"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: [true, "The phone number is required"],
  },
  photo: {
    type: String,
    required: [true, "The photo is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Photographer", photographerSchema);
