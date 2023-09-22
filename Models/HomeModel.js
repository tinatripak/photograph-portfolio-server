const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  mainPhoto: {
    type: String,
    required: [true, "The photo is required"],
  },
  firstGridPhoto: {
    type: String,
    required: [true, "The photo is required"],
  },
  secondGridPhoto: {
    type: String,
    required: [true, "The photo is required"],
  },
  thirdGridPhoto: {
    type: String,
    required: [true, "The photo is required"],
  },
  fourthGridPhoto: {
    type: String,
    required: [true, "The photo is required"],
  },
  fifthGridPhoto: {
    type: String,
    required: [true, "The photo is required"],
  },
  sixthGridPhoto: {
    type: String,
    required: [true, "The photo is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Home", homeSchema);
