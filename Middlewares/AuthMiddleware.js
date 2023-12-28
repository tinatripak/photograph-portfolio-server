const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userVerification = async (req, res) => {
  const token = req.cookies;
  console.log("Token:", token);
  if (!token) {
    return res.json({ status: false, message: "No token provided" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false, message: "Token verification failed" });
    } else {
      const user = await User.findById(data.id);
      console.log("User:", user);
      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        return res.json({ status: false, message: "User not found" });
      }
    }
  });
};

module.exports = { userVerification };
