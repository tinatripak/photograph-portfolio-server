const {
  GetAllAdmins,
  GetAdminById,
  CreateAdmin,
  UpdateAdminById,
  DeleteAdminById
} = require("../Controllers/AdminController");
const { authenticateUser } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllAdmins", authenticateUser, GetAllAdmins);
router.get("/getAdminById/:id", authenticateUser, GetAdminById);
router.post("/createAdmin", authenticateUser, CreateAdmin);
router.put("/updateAdminById/:id", authenticateUser, UpdateAdminById);
router.delete("/deleteAdminById/:id", authenticateUser, DeleteAdminById);

module.exports = router;
