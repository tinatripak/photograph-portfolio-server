const mongoose = require("mongoose");

const photoshootSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    unique: true,
  },
  photoTypeId: {
    type: String,
    required: [true, "The type of the photography is required"],
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
  },
});

module.exports = mongoose.model("photoshoot", photoshootSchema);
