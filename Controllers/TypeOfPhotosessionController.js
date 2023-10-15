const TypesOfPhotoshoot = require("../Models/TypesOfPhotoshootModel");

const GetTypesOfPhotography = async (req, res) => {
  try {
    const response = await TypesOfPhotoshoot.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No photo session types found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetTypeOfPhotographyById = async (req, res) => {
  try {
    const {id} = req.params;

    const response = await TypesOfPhotoshoot.findById(id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No photo session found by ID" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetTypeOfPhotographyByTypeName = async (req, res) => {
  try {
    const {name} = req.params;

    const response = await TypesOfPhotoshoot.findOne({'typeOfPhotography':name});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No photo session found by name" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const CreateTypeOfPhotography = async (req, res) => {
  try {
    const { typeOfPhotography, shootingDuration, mainPhoto, text } = req.body;

    const existingType = await TypesOfPhotoshoot.findOne({ typeOfPhotography });

    if (existingType) {
      return res.status(404).json({ message: "Type already exists", success: false });
    }

    const typeOfPhotoshoot = new TypesOfPhotoshoot({
      typeOfPhotography,
      shootingDuration,
      mainPhoto,
      text,
    });

    await typeOfPhotoshoot.save();

    return res.status(201).json({
      message: "Type successfully created",
      success: true,
      data: typeOfPhotoshoot,
    });
  } catch (error) {
    return res.status(404).send({ success: false, msg: error });
  }
};

const UpdateTypeOfPhotographyById = async (req, res) => {
  try {
    const { typeOfPhotography, shootingDuration, mainPhoto, text } = req.body;
    const result = await TypesOfPhotoshoot.findOneAndUpdate(
      { _id: req.params.id },
      {
        typeOfPhotography : typeOfPhotography, 
        shootingDuration : shootingDuration,
        mainPhoto : mainPhoto, 
        text : text
      },
      {
        upsert: true,
        new: true,
      }
    );
    res.json({
      message: "Type successfully updated",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const DeleteTypeOfPhotographyById = async (req, res) => {
  try {
    const deletedRes = await TypesOfPhotoshoot.findByIdAndDelete(req.params.id);
    if (deletedRes.deletedCount === 1) {
      res.status(200).send({ success: true, msg: "The type of photo session has been removed" });
    } else {
      res.status(200).send({ success: false, msg: "No type of photo session found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};
module.exports = { 
  GetTypesOfPhotography,
  GetTypeOfPhotographyById,
  GetTypeOfPhotographyByTypeName,
  CreateTypeOfPhotography,
  UpdateTypeOfPhotographyById,
  DeleteTypeOfPhotographyById
};
