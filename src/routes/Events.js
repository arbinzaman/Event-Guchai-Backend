const express = require("express");
const router = express.Router();

const { handleAllBookings } = require("../controllers/EventsController");

router.get("/", handleAllBookings);
module.exports = router;
