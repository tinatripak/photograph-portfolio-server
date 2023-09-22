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

const CreateHomePhotos = async (req, res) => {
  try {
    const {
      mainPhoto,
      firstGridPhoto,
      secondGridPhoto,
      thirdGridPhoto,
      fourthGridPhoto,
      fifthGridPhoto,
      sixthGridPhoto
    } = req.body;
    
    const home = await Home.create({
      mainPhoto,
      firstGridPhoto,
      secondGridPhoto,
      thirdGridPhoto,
      fourthGridPhoto,
      fifthGridPhoto,
      sixthGridPhoto,
      createdAt: new Date(),
    });
    res
      .status(201)
      .json({
        message: "Home photos created in successfully",
        success: true,
        data: home,
      });
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const UpdateHomePhotos = async (req, res) => {
  try {
    const {
      mainPhoto,
      firstGridPhoto,
      secondGridPhoto,
      thirdGridPhoto,
      fourthGridPhoto,
      fifthGridPhoto,
      sixthGridPhoto,
    } = req.body;
    const result = await Home.findOneAndUpdate(
      { _id: req.params.id },
      {
        mainPhoto: mainPhoto,
        firstGridPhoto: firstGridPhoto,
        secondGridPhoto: secondGridPhoto,
        thirdGridPhoto: thirdGridPhoto,
        fourthGridPhoto: fourthGridPhoto,
        fifthGridPhoto: fifthGridPhoto,
        sixthGridPhoto: sixthGridPhoto,
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
module.exports = { CreateHomePhotos, GetAllHomePhotos, UpdateHomePhotos };
