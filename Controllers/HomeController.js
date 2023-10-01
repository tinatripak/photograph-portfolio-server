const Home = require("../Models/HomeModel");


const GetAllHomePhotos = async (req, res) => {
  try {
    const response = await Home.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No Data Found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const GetHomePhotoById = async (req, res) => {
  try {

    const {id} = req.params;
    const response = await Home.findById(id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No Data Found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const CreateHomePhotos = async (req, res) => {
  try {
    const {
      titleOfPhoto,
      photo
    } = req.body;
    
    const home = new Home({
      titleOfPhoto : titleOfPhoto,
      photo : photo,
      createdAt : new Date(),
    });
    home.save()

    res
      .json({
        message: "Home photos created in successfully",
        success: true,
        data: home,
      });
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const UpdateHomePhoto = async (req, res) => {
  try {
    const {
      photo,
    } = req.body;
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
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
};
module.exports = { CreateHomePhotos, GetAllHomePhotos, GetHomePhotoById, UpdateHomePhoto };
