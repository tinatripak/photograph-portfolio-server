const Photographer = require("../Models/PhotographerModel");

const GetPhotographers = async (req, res) => {
  try {
    const response = await Photographer.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No bio found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetPhotographerById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Photographer.findById(id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No bio found by ID" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const CreatePhotographer = async (req, res) => {
  try {
    const { bio, phoneNumber, photo } = req.body;
    const photographer = new Photographer({
      bio: bio,
      phoneNumber: phoneNumber,
      photo: photo,
      createdAt: new Date(),
    });
    photographer.save();

    res.json({
      message: "Bio successfully created",
      success: true,
      data: photographer,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const UpdatePhotographerById = async (req, res) => {
  try {
    const { bio, phoneNumber, photo } = req.body;
    const result = await Photographer.findOneAndUpdate(
      { _id: req.params.id },
      {
        bio: bio,
        phoneNumber: phoneNumber,
        photo: photo,
      },
      {
        upsert: true,
        new: true,
      },
    );
    res.json({
      message: "Bio successfully updated",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

module.exports = {
  GetPhotographers,
  GetPhotographerById,
  CreatePhotographer,
  UpdatePhotographerById,
};
