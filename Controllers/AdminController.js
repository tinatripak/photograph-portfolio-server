const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");

const GetAllAdmins = async (req, res) => {
  try {
    const response = await User.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No admins found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetAdminById = async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await User.findById(_id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "No administrator found by ID" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const CreateAnAdmin = async (req, res, next) => {
  try {
    const { email, password, username, photo } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "Admin already exists" });
    }

    const user = new User({
      email,
      password,
      username,
      photo,
      createdAt: new Date(),
    });
    await user.save();

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({
        message: "Admin successfully created",
        success: true,
        data: user,
      });
    next();
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const UpdateTheAdminById = async (req, res) => {
  try {
    const { email, password, username, photo } = req.body;
    const result = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        email: email,
        password: password,
        username: username,
        photo: photo,
      },
      {
        upsert: true,
        new: true,
      }
    );
    res
      .status(200)
      .json({
        message: "Admin successfully updated",
        success: true,
        data: result,
      });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const DeleteTheAdminById = async (req, res) => {
  try {
    const deletedRes = await User.findByIdAndDelete(req.params.id);
    if (deletedRes.deletedCount === 1) {
      res
        .status(200)
        .send({ success: true, msg: "The administrator has been removed" });
    } else {
      res.status(200).send({ success: false, msg: "No administrator found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

module.exports = {
  GetAllAdmins,
  GetAdminById,
  CreateAnAdmin,
  UpdateTheAdminById,
  DeleteTheAdminById,
};
