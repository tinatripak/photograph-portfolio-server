const {
  getPhotographerInfo,
  createPhotographerInfo, 
  updatePhotographerInfo,
  getPhotographerInfoById
} = require("../Controllers/PhotographerController");

const router = require("express").Router();

router.get("/getPhotographerInfo", getPhotographerInfo);
router.get("/getPhotographerInfoById/:id", getPhotographerInfoById);
router.post("/createPhotographerInfo", createPhotographerInfo);
router.put("/updatePhotographerInfo/:id", updatePhotographerInfo);

module.exports = router;
