const express = require("express");
const router = express.Router();

const controllers = require("./../controllers/UserControllers");

router.get("/", controllers.get);

module.exports = router;