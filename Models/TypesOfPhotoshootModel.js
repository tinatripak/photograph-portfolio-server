const mongoose = require("mongoose");

const typeOfPhotoshootSchema = new mongoose.Schema({
  typeOfPhotosession: {
    type: String,
    unique: true,
    required: [true, "The type of the photosession is required"],
  },
  mainPhoto: {
    type: String,
    required: [true, "The main photo is required"],
  },
  text: {
    type: String,
    required: [true, "The text is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("TypeOfPhotoshoot", typeOfPhotoshootSchema);
