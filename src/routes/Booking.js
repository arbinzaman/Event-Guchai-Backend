const express = require("express");
const router = express.Router();

const {
  handleAllBookings,
  handleBookEvent,
  handleDeleteSoundSystemDataFromDb,
  handleDeleteDecoratorDataFromDb,
  handleDeleteCateringDataFromDb,
  handleDeleteMediaDataFromDb,
  handleGetUserByEmail,
  handleDeleteBookingByID,
} = require("./../controllers/BookingController");

router.get("/", handleAllBookings);

router.post("/", handleBookEvent);

router
  .route("/:email")
  .get(handleGetUserByEmail)

  router
  .route("/:id")
  .delete(handleDeleteBookingByID);

router.delete("/sound-system/:bookingID", handleDeleteSoundSystemDataFromDb);
router.delete("/decorator/:bookingID", handleDeleteDecoratorDataFromDb);
router.delete("/catering/:bookingID", handleDeleteCateringDataFromDb);
router.delete("/media/:bookingID", handleDeleteMediaDataFromDb);
module.exports = router;
