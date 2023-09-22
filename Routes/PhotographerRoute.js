const {
  getPhotographerInfo,
  createPhotographerInfo, 
  updatePhotographerInfo
} = require("../Controllers/PhotographerController");

const router = require("express").Router();

router.get("/getPhotographerInfo", getPhotographerInfo);
router.post("/createPhotographerInfo", createPhotographerInfo);
router.put("/updatePhotographerInfo", updatePhotographerInfo);

module.exports = router;
