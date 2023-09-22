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

    // const savedPhotographer = await photographer.save();

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
    const updatingInfo = await Photographer.updateMany(
      {},
      { $set: { bio: bio, phoneNumber: phoneNumber, photo: photo } }
    );
    res
      .status(201)
      .json({
        message: "Phone number is updated",
        success: true,
        data: updatingInfo,
      });
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const getPhotographerInfo = async (req, res) => {
  try {
    const response = await Photographer.find({
    });

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
};
