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
.post("/",
  handleRegisterUser
);

router
  .route("/admin/:email")
  .get(handleCheckAdminByEmail)
  .delete(handleDeleteUser);


router
.route("/:id")
.get(handleGetUserById)
.delete(handleDeleteUser)
.put(handleMakeVendor);

router
.route("/email/:email")
.get(handleGetUserByEmail);

router
.route("/role/:email")
.get(handleGetUserRolesByEmail);

// router.put("/:id", handleMakeVendor);



router.put("/admin/:id", handleMakeAdmin);
module.exports = router;
