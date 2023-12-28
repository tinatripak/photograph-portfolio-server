const {
  GetAllAdmins,
  GetAdminById,
  CreateAdmin,
  UpdateAdminById,
  DeleteAdminById,
} = require("../Controllers/AdminController");
const { checkToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllAdmins", GetAllAdmins);
router.get("/getAdminById/:id", GetAdminById);
router.post("/createAdmin", checkToken, CreateAdmin);
router.put("/updateAdminById/:id", checkToken, UpdateAdminById);
router.delete("/deleteAdminById/:id", checkToken, DeleteAdminById);

module.exports = router;
