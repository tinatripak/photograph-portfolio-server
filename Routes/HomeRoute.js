const {
  CreateHomePhoto,
  GetAllHomePhotos,
  GetHomePhotoById,
  UpdateHomePhotoById,
} = require("../Controllers/HomeController");
const { checkToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllHomePhotos", GetAllHomePhotos);
router.get("/getHomePhotoById/:id", GetHomePhotoById);
router.post("/createHomePhoto", checkToken, CreateHomePhoto);
router.put("/updateHomePhotoById/:id", checkToken, UpdateHomePhotoById);

module.exports = router;
