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
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true, data: user });
    next();
  } catch (error) {
    res.status(404).send({ success: false, msg: error });

  }
};

const Logout = async (req, res) => {
  try {
    const [removeCookie] = useCookies([]);
    Object.keys(req.cookies).forEach(cookieName => {
      console.log(cookieName)
      if (cookieName === "token") {
        removeCookie(cookieName);
      }
    });
    
    res
      .status(201)
      .json({ message: "User logouted in successfully", success: true});
  } catch (error) {
  }
};


module.exports = { Login, Logout };
