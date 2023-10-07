const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  photo: {
    type: String,
    required: [true, "Your photo is required"],
  },
  createdAt: {
    type: Date,
  },
});

userSchema.pre("save", async function () {
  this.password = bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("users", userSchema);
