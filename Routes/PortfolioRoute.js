const {
  GetPhotoshootById,
  GetPhotoshoots,
  CreatePhotoshoot,
  UpdatePhotoshoot,
} = require("../Controllers/PortfolioController");

const router = require("express").Router();

router.get("/getPhotoshoots", GetPhotoshoots);
router.get("/getPhotoshootById", GetPhotoshootById);
router.post("/createPhotoshoot", CreatePhotoshoot);
router.put("/updatePhotoshoot/:id", UpdatePhotoshoot);

module.exports = router;
