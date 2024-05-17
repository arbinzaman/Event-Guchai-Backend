const express = require("express");
const router = express.Router();

const {
  handleBookSoundSystem,
  handleGetAllSoundSystemBookings,
  handleUpdateStatus,
} = require("./../controllers/SoundSystemController");

router
.get("/", 
  handleGetAllSoundSystemBookings
);

router
.post("/", 
  handleBookSoundSystem
);

router
.put("/:sound_systemID", 
  handleUpdateStatus
);

module.exports = router;
