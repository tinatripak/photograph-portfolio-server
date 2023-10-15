const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date
  },
});

module.exports = mongoose.model("message", messageSchema);
