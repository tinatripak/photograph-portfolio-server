const Photoshoot = require("../Models/PhotoshootModel");

const GetPhotoshoots = async (req, res) => {
  try {
    const response = await Photoshoot.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No Data Found" });
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
      res.status(200).send({ success: true, msg: "No Data Found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const CreatePhotoshoot = async (req, res) => {
  try {
    const { name, typeOfPhotosession, mainPhoto, arrayOfPhotos } = req.body;
    const photoshoot = await Photoshoot.create({ name, typeOfPhotosession, mainPhoto, arrayOfPhotos, createdAt: new Date() });
    res
      .status(201)
      .json({ message: "Home photos created in successfully", success: true, data: photoshoot });
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const UpdatePhotoshoot = async (req, res) => {
  try {
    const { name, typeOfPhotosession, mainPhoto, arrayOfPhotos } = req.body;
    const result = await Photoshoot.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: name,
        typeOfPhotosession : typeOfPhotosession, 
        mainPhoto : mainPhoto, 
        arrayOfPhotos : arrayOfPhotos
      },
      {
        upsert: true,
        new: true,
      }
    );
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
};
module.exports = { GetPhotoshoots, GetPhotoshootById, CreatePhotoshoot,  UpdatePhotoshoot};
