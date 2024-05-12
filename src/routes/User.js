const express = require("express");
const router = express.Router();


const {
  handleGetALlUsers,
  handleGetUserById,
} = require("./../controllers/UserControllers");

router
.get("/", handleGetALlUsers);

router
.router("/user/id")
.get(handleGetUserById);

module.exports = router;
