const {
  CreateHomePhoto,
  GetAllHomePhotos,
  GetHomePhotoById,
  UpdateHomePhotoById,
} = require("../Controllers/HomeController");
const { authenticateUser } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/createHomePhoto", authenticateUser, CreateHomePhoto);
router.get("/getAllHomePhotos", GetAllHomePhotos);
router.get("/getHomePhotoById/:id", GetHomePhotoById);
router.put("/updateHomePhotoById/:id",authenticateUser,  UpdateHomePhotoById);

module.exports = router;
