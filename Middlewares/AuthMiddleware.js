const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userVerification = async (req, res) => {
  const token = req.cookies;
  console.log("token:", token);
  if (!token) {
    return res.json({ status: false, message: "No token provided" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    
  console.log("token env:", process.env.TOKEN_KEY);
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

const checkToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization;

  console.log("Token:", token);
  if (!token) {
    console.log("try again", token);
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: 'Token verification failed' });
    }

    try {
      const user = await User.findById(data.id);

      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ status: false, message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, message: 'Internal server error' });
    }
  });
};

module.exports = { userVerification, checkToken };
