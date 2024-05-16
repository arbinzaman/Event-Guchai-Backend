const express = require("express");
const router = express.Router();

const {
  handleGetALlUsers,
  handleCheckAdminByEmail,
  handleRegisterUser,
  handleDeleteUser,
  handleGetUserById,
  handleMakeVendor,
  handleMakeAdmin,
} = require("./../controllers/UserControllers");

router
.get("/", handleGetALlUsers);
router
.post("/", (req, res) => {
  handleRegisterUser;
});

router
  .route("/admin/:email")
  .get(handleCheckAdminByEmail)
  .delete(handleDeleteUser);
router
.route("/:id")
.get(handleGetUserById)
.delete(handleDeleteUser);

// router.route("/admin/:id").put(handleMakeAdmin);

router.put("/:id", (req, res) => {
  handleMakeVendor;
});
router.put("/admin/:id", (req, res) => {
  handleMakeAdmin;
});
module.exports = router;
