const express = require("express");
const router = express.Router();

const {
    handleBookCateringService,
    handleUpdateStatus,
    handleAllCatering,
} = require("./../controllers/CateringController");

router.get("/", handleAllCatering);

router.post("/", handleBookCateringService);

router.put("/:cateringID", handleUpdateStatus);

module.exports = router;
