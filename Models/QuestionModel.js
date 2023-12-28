const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  email: {
    type: String,
    required: [true, "The email is required"],
  },
  question: {
    type: String,
    required: [true, "The question is required"],
  },
  answer: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("question", questionSchema);
