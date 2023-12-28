const {
  CreateHomePhoto,
  GetAllHomePhotos,
  GetHomePhotoById,
  UpdateHomePhotoById,
} = require("../Controllers/HomeController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllHomePhotos", GetAllHomePhotos);
router.get("/getHomePhotoById/:id", GetHomePhotoById);
router.post("/createHomePhoto", CreateHomePhoto);
router.use(userVerification);
router.put("/updateHomePhotoById/:id", UpdateHomePhotoById);

module.exports = router;
