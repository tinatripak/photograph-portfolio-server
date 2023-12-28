const {
  GetPhotographers,
  GetPhotographerById,
  CreatePhotographer,
  UpdatePhotographerById
} = require("../Controllers/PhotographerController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getPhotographers", GetPhotographers);
router.get("/getPhotographerById/:id", GetPhotographerById);
router.post("/createPhotographer", userVerification, CreatePhotographer);
router.put("/updatePhotographerById/:id", userVerification, UpdatePhotographerById);

module.exports = router;
