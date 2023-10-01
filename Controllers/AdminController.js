const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");

const GetAllAdmins = async (req, res) => {
  try {
    const response = await User.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No Data Found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const CreateAnAdmin = async (req, res, next) => {
  try {
    const { email, password, username, photo } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "Admin already exists" });
    }

    const user = new User({ email, password, username, photo, createdAt: new Date() });
    await user.save();

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "Admin signed in successfully", success: true, data: user });
    next();
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const UpdateAdminById = async (req, res) => {
  try {
    const { email, password, username, photo } = req.body;
    const result = await User.findOneAndUpdate(
      { _id: req.params.id },
      { 
        email: email, 
        password: password, 
        username: username,
        photo: photo
      },
      {
        upsert: true,
        new: true,
      }
    );
    res.status(200).json({ message: "Admin updated in successfully", success: true, data: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
};

const DeleteAnAdminById = async (req, res) => {
  try {
    const deletedRes = await User.findByIdAndDelete(req.params.id);
    if (deletedRes.deletedCount === 1) {
      res.status(200).send({ success: true, msg: "Data Deleted" });
    } else {
      res.status(200).send({ success: false, msg: "Data Not Found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const GetAdminById = async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await User.findById(_id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No Data Found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};


module.exports = {
  GetAdminById,
  GetAllAdmins,
  CreateAnAdmin,
  UpdateAdminById,
  DeleteAnAdminById,
};
