const mongoose = require("mongoose");

const typeOfPhotoshootSchema = new mongoose.Schema({
  typeOfPhotography: {
    type: String,
    required: [true, "The type of the photography is required"],
    unique: true,
  },
  shootingDuration: {
    type: String,
    required: [true, "The duration of shooting is required"],
    default: "2 hours",
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
  },
});

module.exports = mongoose.model("typeofphotoshoots", typeOfPhotoshootSchema);
