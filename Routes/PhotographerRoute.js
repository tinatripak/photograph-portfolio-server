const {
  GetPhotographers,
  GetPhotographerById,
  CreatePhotographer,
  UpdatePhotographerById
} = require("../Controllers/PhotographerController");

const router = require("express").Router();

router.get("/getPhotographers", GetPhotographers);
router.get("/getPhotographerById/:id", GetPhotographerById);
router.post("/createPhotographer", CreatePhotographer);
router.put("/updatePhotographerById/:id", UpdatePhotographerById);

module.exports = router;
