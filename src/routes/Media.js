const express = require("express");
const router = express.Router();

const {
    handleBookMediaService,
    handleUpdateStatus,
    handleAllMedia,
} = require("./../controllers/MediaController");

router.get("/", handleAllMedia);

router.post("/", handleBookMediaService);

router.put("/:mediaID", handleUpdateStatus);

module.exports = router;
