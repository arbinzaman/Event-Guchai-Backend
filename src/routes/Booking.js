const express = require("express");
const router = express.Router();

const {
  handleAllBookings,
  handleBookEvent,
} = require("./../controllers/BookingController");

router
.get("/", handleAllBookings);

router
.post("/",
  handleBookEvent
);
module.exports = router;
