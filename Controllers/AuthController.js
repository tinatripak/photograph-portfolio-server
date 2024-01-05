const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }

    for (const cookieName in req.cookies) {
      if (req.cookies[cookieName] === undefined) {
        res.clearCookie(cookieName);
      }
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 72000,
      sameSite: "None",
      secure: true,
      path: '/',
    });

    // // domain: process.env.NODE_ENV === 'development' ? '.localhost' : '.vercel.app',

    const customCookieValue = `token=${token}; HttpOnly; Max-Age=7200000; Secure; SameSite=None`;
    res.setHeader("set-cookie", customCookieValue);
    console.log("this token",token)
    res.send({
      message: "User logged in successfully",
      success: true,
      data: user,
    });
    next();
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
    next();
  }
};

const Logout = async (req, res) => {
  try {
    res.cookie("token", "none", {
      expires: new Date(0),
      httpOnly: true,
      sameSite: "none",
      // domain: process.env.NODE_ENV === 'development' ? '.localhost' : '.vercel.app',
      path: "/",
    });

    res.status(204).json({ message: "User logged out successfully", success: true });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
};

module.exports = { Login, Logout };
