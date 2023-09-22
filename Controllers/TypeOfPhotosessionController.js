const TypesOfPhotoshoot = require("../Models/TypesOfPhotoshootModel");

const GetTypesOfPhotoshoot = async (req, res) => {
  try {
    const response = await TypesOfPhotoshoot.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No Data Found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const CreateTypesOfPhotoshoot = async (req, res) => {
  try {
    const { typeOfPhotosession, mainPhoto, text } = req.body;
    const types = await TypesOfPhotoshoot.create({ typeOfPhotosession, mainPhoto, text, createdAt: new Date() });
    res
      .status(201)
      .json({ message: "Home photos created in successfully", success: true, data:types });
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const UpdateTypesOfPhotoshoot = async (req, res) => {
  try {
    const { typeOfPhotosession, mainPhoto, text } = req.body;
    const result = await TypesOfPhotoshoot.findOneAndUpdate(
      { _id: req.params.id },
      {
        typeOfPhotosession : typeOfPhotosession, 
        mainPhoto : mainPhoto, 
        text : text
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
module.exports = { CreateTypesOfPhotoshoot,  UpdateTypesOfPhotoshoot, GetTypesOfPhotoshoot};

