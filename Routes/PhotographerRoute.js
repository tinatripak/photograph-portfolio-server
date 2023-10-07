const {
  getPhotographerBio,
  getPhotographerBioById, 
  createPhotographerBio,
  updatePhotographerBioById
} = require("../Controllers/PhotographerController");

const router = require("express").Router();

router.get("/getPhotographerBio", getPhotographerBio);
router.get("/getPhotographerBioById/:id", getPhotographerBioById);
router.post("/createPhotographerBio", createPhotographerBio);
router.put("/updatePhotographerBioById/:id", updatePhotographerBioById);

module.exports = router;
