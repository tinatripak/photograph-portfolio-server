const {
  GetAllBookings,
  GetBookingById,
  CreateBooking,
  AcceptBookingById,
  DeclineBookingById,
  DeleteBookingById,
  VerifyBooking,
} = require("../Controllers/BookingController");
const { checkToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllBookings", GetAllBookings);
router.get("/getBookingById/:id", GetBookingById);
router.post("/createBooking", CreateBooking);
router.put("/verifyBooking/:uniqueString", VerifyBooking);
router.put("/declineBookingById/:id", checkToken, DeclineBookingById);
router.put("/acceptBookingById/:id", checkToken, AcceptBookingById);
router.delete("/deleteBookingById/:id", checkToken, DeleteBookingById);

module.exports = router;
