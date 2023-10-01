const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  titleOfPhoto: {
    type: String,
    required: [true, "The title is required"],
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

module.exports = mongoose.model("Home", homeSchema);
