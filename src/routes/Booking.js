const express = require("express");
const router = express.Router();

const {
  handleAllBookings,
  handleBookEvent,
  handleDeleteSoundSystemDataFromDb,
  handleDeleteDecoratorDataFromDb,
  handleDeleteCateringDataFromDb,
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

router.delete("/sound-system/:bookingID", handleDeleteSoundSystemDataFromDb);
router.delete("/decorator/:bookingID", handleDeleteDecoratorDataFromDb);
router.delete("/catering/:bookingID", handleDeleteCateringDataFromDb);
module.exports = router;
