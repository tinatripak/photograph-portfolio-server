const Photographer = require("../Models/PhotographerModel");

const createPhotographerInfo = async (req, res) => {
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
      message: "Photographer info created",
      success: true,
      data: photographer,
    });
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const updatePhotographerInfo = async (req, res) => {
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
      }
    );
    res.json({
      message: "Phone number is updated",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
};

const getPhotographerInfo = async (req, res) => {
  try {
    const response = await Photographer.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No Data Found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const getPhotographerInfoById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Photographer.findById(id);

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
  getPhotographerInfo,
  createPhotographerInfo,
  updatePhotographerInfo,
  getPhotographerInfoById,
};
