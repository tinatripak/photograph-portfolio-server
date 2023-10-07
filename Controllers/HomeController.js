const Home = require("../Models/HomeModel");

const GetAllHomePhotos = async (req, res) => {
  try {
    const response = await Home.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No photos found for homepage" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const GetHomePhotoById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Home.findById(id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No homepage photo found for id" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const CreateHomePhoto = async (req, res) => {
  try {
    const { titleOfPhoto, photo } = req.body;

    const home = new Home({
      titleOfPhoto: titleOfPhoto,
      photo: photo,
      createdAt: new Date(),
    });
    home.save();

    res.json({
      message: "Homepage photo successfully created",
      success: true,
      data: home,
    });
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const UpdateHomePhotoById = async (req, res) => {
  try {
    const { photo } = req.body;
    const result = await Home.findOneAndUpdate(
      { _id: req.params.id },
      {
        photo: photo,
      },
      {
        upsert: true,
        new: true,
      }
    );
    res.status(200).send({ message: "Homepage photo successfully updated",
    success: true,
    data: result, });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
};
module.exports = {
  CreateHomePhoto,
  GetAllHomePhotos,
  GetHomePhotoById,
  UpdateHomePhotoById,
};
