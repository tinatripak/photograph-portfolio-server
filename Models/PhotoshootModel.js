const mongoose = require("mongoose");

const photoshootSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    unique: true,
  },
  typeOfPhotosession: {
    type: String,
    required: [true, "The type of the photosession is required"],
  },
  mainPhoto: {
    type: String,
    required: [true, "The main photo is required"],
  },
  arrayOfPhotos: {
    type: Array,
    required: [true, "All photos are required"],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Photoshoot", photoshootSchema);
