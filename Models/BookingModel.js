const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  email: {
    type: String,
    required: [true, "The email is required"],
  },
  message: {
    type: String,
  },
  photoTypeId: {
    type: String,
    required: [true, "The type of photography is required"],
  },
  date: {
    type: String,
    required: [true, "The date is required"],
  },
  startTime: {
    type: String,
    required: [true, "The time is required"],
  },
  endTime: {
    type: String,
  },
  status: {
    type: String,
    default: "accepted",
    required: [true, "The status is required"],
  },
  isValid: {
    type: Boolean,
  },
  uniqueString: {
    type: String,
    required: [true, "The unique string is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("booking", bookingSchema);
