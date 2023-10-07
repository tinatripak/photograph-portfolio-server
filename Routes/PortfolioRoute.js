const {
  GetPhotoshootById,
  GetPhotoshoots,
  CreatePhotoshoot,
  UpdatePhotoshootById,
  DeletePhotoshootById,
  GetPhotoshootByName
} = require("../Controllers/PortfolioController");

const router = require("express").Router();

router.get("/getPhotoshoots", GetPhotoshoots);
router.get("/getPhotoshootById/:id", GetPhotoshootById);
router.get("/getPhotoshootByName/:name", GetPhotoshootByName);
router.post("/createPhotoshoot", CreatePhotoshoot);
router.put("/updatePhotoshootById/:id", UpdatePhotoshootById);
router.delete("/deletePhotoshootById/:id", DeletePhotoshootById);

module.exports = router;
