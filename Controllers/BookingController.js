const Calendar = require("../Models/Calendar");

const GetAllBookings = async (req, res) => {
  try {
    const response = await Calendar.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No Data Found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const CreateABooking = async (req, res) => {
  try {
    const {
      name,
      email,
      message,
      typeOfPhotosession,
      date,
      status,
    } = req.body;
    const existingUser = await Calendar.findOne({ email }); //findMany
    if (existingUser.date === date) {
      return res.json({
        message: "User already booked a photoshoot for this date",
      });
    }
    const reservation = new Calendar({
      name,
      email,
      message,
      typeOfPhotosession,
      date,
      status,
      createdAt: new Date(),
    });
    
    res
      .status(201)
      .json({
        message: "User booked a photoshoot in successfully",
        success: true,
        data: reservation,
      });
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const AcceptABooking = async (req, res) => {
  try {
    const id = req.params.id;
    const existingReservation = await Calendar.findOne({ _id: id });
    if (existingReservation) {
      const reservation = await Calendar.updateOne(
        { _id: id },
        { $set: { status: "accepted" } },
        { upsert: true }
      );
      res
        .status(201)
        .json({
          message: "Reservation for the photo shoot is accepted",
          success: true,
          data: reservation,
        });
        
    } else {
      console.error("Reservation doesnt exist");
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const DeclineABooking = async (req, res) => {
  try {
    const id = req.params.id;
    const existingReservation = await Calendar.findOne({ _id: id });
    if (existingReservation) {
      const reservation = await Calendar.updateOne(
        { _id: id },
        { $set: { status: "declined" } },
        { upsert: true }
      );
      res
        .status(201)
        .json({
          message: "Reservation for the photo shoot is declined",
          success: true,
          data: reservation,
        });
        
    } else {
      console.error("Reservation doesnt exist");
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const DeleteADeclinedBooking = async (req, res) => {
  try {
    const deletedRes = await Calendar.deleteOne({
      _id: req.params.id,
    });
    if (deletedRes.deletedCount === 1) {
      res.status(200).send({ success: true, msg: "Data Deleted" });
    } else {
      res.status(200).send({ success: false, msg: "Data Not Found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

module.exports = {
  GetAllBookings,
  CreateABooking,
  AcceptABooking,
  DeclineABooking,
  DeleteADeclinedBooking
};
