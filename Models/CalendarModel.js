const mongoose = require("mongoose");

const calendarSchema = new mongoose.Schema({
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
    required: [true, "The message is required"],
  },
  typeOfPhotography: {
    type: String,
    required: [true, "The type of photography is required"],
  },
  date: {
    type: String,
    required: [true, "The date is required"],
  },
  status: {
    type: String,
    default: "not defined",
    required: [true, "The status is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("calendars", calendarSchema);
