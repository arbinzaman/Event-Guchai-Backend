const express = require("express");
const router = express.Router();

const {
  handleAllDecorations,
  handleBookDecoration,
  handleUpdateStatus,
} = require("./../controllers/DecorationController");

router.get("/", handleAllDecorations);

router.post("/", handleBookDecoration);

router.put("/:decorationID", handleUpdateStatus);

module.exports = router;
