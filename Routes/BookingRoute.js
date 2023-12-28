const {
  GetAllBookings,
  GetBookingById,
  CreateBooking,
  AcceptBookingById,
  DeclineBookingById,
  DeleteDeclinedBookingById,
  VerifyBooking,
} = require("../Controllers/BookingController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllBookings", GetAllBookings);
router.get("/getBookingById/:id", GetBookingById);
router.post("/createBooking", CreateBooking);
router.put("/verifyBooking/:uniqueString", VerifyBooking);
router.use(userVerification);
router.put("/acceptBookingById/:id", AcceptBookingById);
router.put("/declineBookingById/:id", DeclineBookingById);
router.delete("/deleteDeclinedBookingById/:id", DeleteDeclinedBookingById);

module.exports = router;
