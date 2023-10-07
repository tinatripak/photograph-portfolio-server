const Photoshoot = require("../Models/PhotoshootModel");

const GetPhotoshoots = async (req, res) => {
  try {
    const response = await Photoshoot.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No photo sessions found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const GetPhotoshootById = async (req, res) => {
  try {
    const response = await Photoshoot.findOne({ _id: req.params.id });

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "No photo session found by ID" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const GetPhotoshootByName = async (req, res) => {
  try {
    const response = await Photoshoot.findOne({'name':req.params.name});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "No photo session found by ID" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const CreatePhotoshoot = async (req, res) => {
  try {
    const { name, photoTypeId, mainPhoto, arrayOfPhotos } = req.body;
    const photoshoot = await Photoshoot.create({
      name,
      photoTypeId,
      mainPhoto,
      arrayOfPhotos,
      createdAt: new Date(),
    });
    res.status(201).json({
      message: "Photo session successfully created",
      success: true,
      data: photoshoot,
    });
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const UpdatePhotoshootById = async (req, res) => {
  try {
    const { name, photoTypeId, mainPhoto, arrayOfPhotos } = req.body;
    const result = await Photoshoot.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: name,
        photoTypeId: photoTypeId,
        mainPhoto: mainPhoto,
        arrayOfPhotos: arrayOfPhotos,
      },
      {
        upsert: true,
        new: true,
      }
    );
    res
      .status(200)
      .send({
        message: "Photo session successfully updated",
        success: true,
        data: result,
      });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
};

const DeletePhotoshootById = async (req, res) => {
  try {
    const deletedRes = await Photoshoot.findByIdAndDelete(req.params.id);
    if (deletedRes.deletedCount === 1) {
      res
        .status(200)
        .send({ success: true, msg: "The photo session has been removed" });
    } else {
      res.status(200).send({ success: false, msg: "No photo session found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};
module.exports = {
  GetPhotoshootById,
  GetPhotoshoots,
  GetPhotoshootByName,
  CreatePhotoshoot,
  UpdatePhotoshootById,
  DeletePhotoshootById,
};
