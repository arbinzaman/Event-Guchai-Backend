const express = require("express");
const router = express.Router();

const {
  handleAllBookings,
  handleBookEvent,
  handleDeleteDataFromDb,
  handleGetUserByEmail,
} = require("./../controllers/BookingController");

router
.get("/", handleAllBookings);

router
.post("/",
  handleBookEvent
);

router
.get("/:email", 
handleGetUserByEmail
);

router.delete("/:bookingID", handleDeleteDataFromDb);
module.exports = router;
