const nodemailer = require('nodemailer');
const Booking = require('../Models/BookingModel');

const randString = () => {
  const len = 8;
  let randStr = '';
  for (let i = 0; i < len; i++) {
    const ch = Math.floor(Math.random() * 10 + 1);
    randStr += ch;
  }
  console.log(randStr);
  return randStr;
};

const sendEmailConfirmation = (email, uniqueString) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tinarudenko2002@gmail.com',
      pass: 'unxwarueqdzvrdes',
    },
  });

  send();

  async function send() {
    const result = await transporter.sendMail({
      from: 'tinarudenko2002@gmail.com',
      to: email,
      subject: 'Booking confirmation',
      text: `Press http://localhost:3000/verifyBooking/${uniqueString} to verify your booking by email. Thanks`,
    });

    console.log(JSON.stringify(result, null, 4));
  }
}
  
const sendEmailWithConfirmedBooking = (email, booking) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tinarudenko2002@gmail.com',
      pass: 'unxwarueqdzvrdes',
    },
  });

  send();

  async function send() {
    const result = await transporter.sendMail({
      from: 'tinarudenko2002@gmail.com',
      to: email,
      subject: 'Confirmed booking',
      text: `
        Model's name: ${booking?.name}
        Model's message: ${booking?.message}
        Date: ${booking?.date}
        Time: ${booking?.startTime}
      `,
    });

    console.log(JSON.stringify(result, null, 4));
  }
};

const GetAllBookings = async (req, res) => {
  try {
    const response = await Booking.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: 'No bookings found' });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetBookingById = async (req, res) => {
  try {
    const response = await Booking.findById(req.params.id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: 'No booking found by ID' });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const CreateBooking = async (req, res) => {
  try {
    const { name, email, message, photoTypeId, date, startTime, endTime } =
      req.body;
    const uniqueString = randString();
    const isValid = false;
    const existingUser = await Booking.findOne({ email: email, date: date });
    if (existingUser) {
      return res.json({
        message: 'User already booked a photoshoot for this date',
      });
    }
    const reservation = await Booking.create({
      name: name,
      email: email,
      message: message,
      photoTypeId: photoTypeId,
      date: date,
      startTime: startTime,
      endTime: endTime,
      isValid: isValid,
      uniqueString: uniqueString,
    });
    reservation.save();

    sendEmailConfirmation(email, uniqueString);

    res.status(201).json({
      message: 'User successfully booked a photoshoot',
      success: true,
      data: reservation,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const AcceptBookingById = async (req, res) => {
  try {
    const id = req.params.id;
    const existingReservation = await Booking.findById(id);
    if (existingReservation) {
      const reservation = await Booking.findOneAndUpdate(
        { _id: id },
        {
          status: 'accepted',
        },
        {
          upsert: true,
          new: true,
        }
      );
      res.status(201).json({
        message: 'Booking for the photo shoot is accepted',
        success: true,
        data: reservation,
      });
    } else {
      console.error('Booking doesnt exist');
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const DeclineBookingById = async (req, res) => {
  try {
    const id = req.params.id;
    const existingReservation = await Booking.findById(id);
    if (existingReservation) {
      const reservation = await Booking.updateOne(
        { _id: id },
        {
          status: 'declined',
        },
        {
          upsert: true,
          new: true,
        }
      );
      res.status(201).json({
        message: 'Booking for the photo shoot is declined',
        success: true,
        data: reservation,
      });
    } else {
      console.error('Booking doesnt exist');
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const DeleteDeclinedBookingById = async (req, res) => {
  try {
    const deletedRes = await Booking.deleteOne({
      _id: req.params.id,
    });
    if (deletedRes.deletedCount === 1) {
      res
        .status(200)
        .send({ success: true, msg: 'The booking has been removed' });
    } else {
      res.status(200).send({ success: false, msg: 'No booking found' });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const VerifyBooking = async (req, res) => {
  const { uniqueString } = req.params;
  console.log(uniqueString)
  const booking = await Booking.findOne({ uniqueString: uniqueString });
  if (booking) {

    const result = await Booking.findOneAndUpdate(
      { uniqueString: uniqueString },
      {
        isValid: true,
      },
      {
        upsert: true,
        new: true,
      }
    );
    sendEmailWithConfirmedBooking(booking.email, booking)
    res.status(200).send({ message: "Verified booking",
    success: true,
    data: result, });

  } else {
    res.json('Booking not found');
  }
};

module.exports = {
  GetAllBookings,
  GetBookingById,
  CreateBooking,
  AcceptBookingById,
  DeclineBookingById,
  DeleteDeclinedBookingById,
  VerifyBooking
};
