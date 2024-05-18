const express = require("express");
const router = express.Router();

const {
  handleAllBookings,
  handleUpdateEvent,
  handleDeleteEvent,
} = require("../controllers/EventsController");

router.get("/", handleAllBookings);
router.post("/", handleUpdateEvent);

router
.route("/:id")
.delete(handleDeleteEvent)
module.exports = router;
