const {
  GetAllBookings,
  GetTheBookingById,
  CreateABooking,
  AcceptTheBookingById,
  DeclineTheBookingById,
  DeleteTheDeclinedBookingById,
} = require("../Controllers/BookingController");

const router = require("express").Router();

router.get("/getAllBookings", GetAllBookings);
router.get("/getTheBookingById/:id", GetTheBookingById);
router.post("/createABooking", CreateABooking);
router.put("/acceptTheBooking/:id", AcceptTheBookingById);
router.put("/declineTheBooking/:id", DeclineTheBookingById);
router.delete("/deleteTheDeclinedBooking/:id", DeleteTheDeclinedBookingById);

module.exports = router;
