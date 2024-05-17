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
  handleGetUserByEmail,
  handleGetUserRolesByEmail,
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

router
.route("/email/:email")
.get(handleGetUserByEmail);
// router.route("/admin/:id").put(handleMakeAdmin);

router
.route("/role/:email")
.get(handleGetUserRolesByEmail);

router.put("/:id", (req, res) => {
  handleMakeVendor;
});
router.put("/admin/:id", (req, res) => {
  handleMakeAdmin;
});
module.exports = router;
