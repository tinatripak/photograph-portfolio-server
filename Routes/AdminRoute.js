const {
  GetAllAdmins,
  GetAdminById,
  CreateAdmin,
  UpdateAdminById,
  DeleteAdminById
} = require("../Controllers/AdminController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.use(userVerification);
router.get("/getAllAdmins", GetAllAdmins);
router.get("/getAdminById/:id", GetAdminById);
router.post("/createAdmin", CreateAdmin);
router.put("/updateAdminById/:id", UpdateAdminById);
router.delete("/deleteAdminById/:id", DeleteAdminById);

module.exports = router;
