const {
  GetAllAdmins,
  GetAdminById,
  CreateAdmin,
  UpdateAdminById,
  DeleteAdminById,
} = require("../Controllers/AdminController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllAdmins", GetAllAdmins);
router.get("/getAdminById/:id", GetAdminById);
router.use(userVerification);
router.post("/createAdmin", CreateAdmin);
router.put("/updateAdminById/:id", UpdateAdminById);
router.delete("/deleteAdminById/:id", DeleteAdminById);

module.exports = router;
