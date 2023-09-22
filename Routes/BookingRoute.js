const {
  GetAllBookings,
  CreateABooking,
  AcceptABooking,
  DeclineABooking,
  DeleteADeclinedBooking
} = require("../Controllers/BookingController");

const router = require("express").Router();

router.get("/getAllBookings", GetAllBookings);
router.post("/createABookingForAPhotoshoot", CreateABooking);
router.put("/acceptABookingForAPhotoshoot/:id", AcceptABooking);
router.put("/declineABookingForAPhotoshoot/:id", DeclineABooking);
router.delete("/deleteADeclinedBooking/:id", DeleteADeclinedBooking);

module.exports = router;
