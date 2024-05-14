const express = require("express");
const router = express.Router();

const {
  handleGetALlUsers,
  handleGetUserById,
  handleCheckAdminByEmail,
} = require("./../controllers/UserControllers");

router.get("/", handleGetALlUsers);
router.post("/", handleMakeAdmin);
router.delete("/", handleDeleteUser);
router.route("/admin/:email").get(handleCheckAdminByEmail).delete(handleDeleteUser);

module.exports = router;
