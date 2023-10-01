const { GetAllAdmins, GetAdminById, CreateAnAdmin, UpdateAdminById, DeleteAnAdminById } = require("../Controllers/AdminController");
const router = require("express").Router();

router.get("/getAllAdmins", GetAllAdmins);
router.get("/getAdminById/:id", GetAdminById);
router.post("/createAnAdmin", CreateAnAdmin);
router.put("/updateAdmin/:id", UpdateAdminById);
router.delete("/deleteAdmin/:id", DeleteAnAdminById);

module.exports = router;