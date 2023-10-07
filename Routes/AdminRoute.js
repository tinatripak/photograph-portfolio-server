const {
  GetAllAdmins,
  GetAdminById,
  CreateAnAdmin,
  UpdateTheAdminById,
  DeleteTheAdminById,
} = require("../Controllers/AdminController");
const router = require("express").Router();

router.get("/getAllAdmins", GetAllAdmins);
router.get("/getAdminById/:id", GetAdminById);
router.post("/createAnAdmin", CreateAnAdmin);
router.put("/updateTheAdmin/:id", UpdateTheAdminById);
router.delete("/deleteTheAdmin/:id", DeleteTheAdminById);

module.exports = router;
