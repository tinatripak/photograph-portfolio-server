const Booking = require("../Models/BookingModel");

const GetAllBookings = async (req, res) => {
  try {
    const response = await Booking.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No bookings found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const GetTheBookingById = async (req, res) => {
  try {
    const response = await Booking.findById(req.params.id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No booking found by ID" });
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
      photoTypeId,
      date,
      startTime,
      endTime
    } = req.body;
    console.log(name,
      email,
      message,
      photoTypeId,
      date,
      startTime,
      endTime)
    const existingUser = await Booking.findOne({ email:email, date:date });
    if (existingUser) {
      return res.json({
        message: "User already booked a photoshoot for this date",
      });
    }
    const reservation = await Booking.create({
      name,
      email,
      message,
      photoTypeId,
      date,
      startTime,
      endTime
    });
    reservation.save();
    
    res
      .status(201)
      .json({
        message: "User successfully booked a photoshoot",
        success: true,
        data: reservation,
      });
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const AcceptTheBookingById = async (req, res) => {
  try {
    const id = req.params.id;
    const existingReservation = await Booking.findById(id);
    if (existingReservation) {
      const reservation = await Booking.findOneAndUpdate(
        { _id: id },
        {
          status: "accepted",
        },
        {
          upsert: true,
          new: true,
        }
      );
      res
        .status(201)
        .json({
          message: "Booking for the photo shoot is accepted",
          success: true,
          data: reservation,
        });
        
    } else {
      console.error("Booking doesnt exist");
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const DeclineTheBookingById = async (req, res) => {
  try {
    const id = req.params.id;
    const existingReservation = await Booking.findById(id);
    if (existingReservation) {
      const reservation = await Booking.updateOne(
        { _id: id },
        {
          status: "declined",
        },
        {
          upsert: true,
          new: true,
        }
      );
      res
        .status(201)
        .json({
          message: "Booking for the photo shoot is declined",
          success: true,
          data: reservation,
        });
        
    } else {
      console.error("Booking doesnt exist");
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

const DeleteTheDeclinedBookingById = async (req, res) => {
  try {
    const deletedRes = await Booking.deleteOne({
      _id: req.params.id,
    });
    if (deletedRes.deletedCount === 1) {
      res.status(200).send({ success: true, msg: "The booking has been removed" });
    } else {
      res.status(200).send({ success: false, msg: "No booking found" });
    }
  } catch (error) {
    res.status(500).send({ success: false, msg: error });
  }
};

module.exports = {
  GetAllBookings,
  GetTheBookingById,
  CreateABooking,
  AcceptTheBookingById,
  DeclineTheBookingById,
  DeleteTheDeclinedBookingById,
};
