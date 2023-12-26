const {
  GetAllBookings,
  GetBookingById,
  CreateBooking,
  AcceptBookingById,
  DeclineBookingById,
  DeleteDeclinedBookingById,
  VerifyBooking
} = require("../Controllers/BookingController");
const { authenticateUser } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllBookings", authenticateUser, GetAllBookings);
router.get("/getBookingById/:id", authenticateUser, GetBookingById);
router.post("/createBooking", CreateBooking);
router.put("/acceptBookingById/:id", authenticateUser, AcceptBookingById);
router.put("/declineBookingById/:id", authenticateUser, DeclineBookingById);
router.delete("/deleteDeclinedBookingById/:id", authenticateUser, DeleteDeclinedBookingById);
router.put("/verifyBooking/:uniqueString", VerifyBooking);


module.exports = router;
