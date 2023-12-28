const {
  GetPhotographers,
  GetPhotographerById,
  CreatePhotographer,
  UpdatePhotographerById,
} = require("../Controllers/PhotographerController");
const { checkToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getPhotographers", GetPhotographers);
router.get("/getPhotographerById/:id", GetPhotographerById);
router.post("/createPhotographer", checkToken, CreatePhotographer);
router.put(
  "/updatePhotographerById/:id",
  checkToken,
  UpdatePhotographerById,
);

module.exports = router;
