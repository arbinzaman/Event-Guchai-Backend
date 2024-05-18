const express = require("express");
const router = express.Router();

const {
  handleAllCustomPackage,
  handleBookCustomPackage,
} = require("./../controllers/CustomPackageController");

router.get("/", handleAllCustomPackage);

router.post("/", handleBookCustomPackage);


module.exports = router;
