const express = require("express");
const router = express.Router();

const {
  handleAllBookings,
  handleBookEvent,
  handleDeleteDataFromDb,
} = require("./../controllers/BookingController");

router
.get("/", handleAllBookings);

router
.post("/",
  handleBookEvent
);

router.delete("/:bookingID", handleDeleteDataFromDb);
module.exports = router;
