const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    return res.json("Welcome to from user api");
  });

module.exports = router;