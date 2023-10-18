const {
  GetAllBookings,
  GetBookingById,
  CreateBooking,
  AcceptBookingById,
  DeclineBookingById,
  DeleteDeclinedBookingById,
  VerifyBooking
} = require("../Controllers/BookingController");

const router = require("express").Router();

router.get("/getAllBookings", GetAllBookings);
router.get("/getBookingById/:id", GetBookingById);
router.post("/createBooking", CreateBooking);
router.put("/acceptBookingById/:id", AcceptBookingById);
router.put("/declineBookingById/:id", DeclineBookingById);
router.delete("/deleteDeclinedBookingById/:id", DeleteDeclinedBookingById);
router.put("/verifyBooking/:uniqueString", VerifyBooking);


module.exports = router;
