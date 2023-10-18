const {
  GetPhotoshootById,
  GetPhotoshoots,
  GetPhotoshootByName,
  CreatePhotoshoot,
  UpdatePhotoshootById,
  DeletePhotoshootById
} = require("../Controllers/PhotoshootController");

const router = require("express").Router();

router.get("/getPhotoshoots", GetPhotoshoots);
router.get("/getPhotoshootById/:id", GetPhotoshootById);
router.get("/getPhotoshootByName/:name", GetPhotoshootByName);
router.post("/createPhotoshoot", CreatePhotoshoot);
router.put("/updatePhotoshootById/:id", UpdatePhotoshootById);
router.delete("/deletePhotoshootById/:id", DeletePhotoshootById);

module.exports = router;
