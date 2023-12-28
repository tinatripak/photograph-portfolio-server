const {
  GetPhotoshootById,
  GetPhotoshoots,
  GetPhotoshootByName,
  CreatePhotoshoot,
  UpdatePhotoshootById,
  DeletePhotoshootById,
} = require("../Controllers/PhotoshootController");
const { checkToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getPhotoshoots", GetPhotoshoots);
router.get("/getPhotoshootById/:id", GetPhotoshootById);
router.get("/getPhotoshootByName/:name", GetPhotoshootByName);
router.post("/createPhotoshoot", checkToken, CreatePhotoshoot);
router.put("/updatePhotoshootById/:id", checkToken, UpdatePhotoshootById);
router.delete(
  "/deletePhotoshootById/:id",
  checkToken,
  DeletePhotoshootById,
);

module.exports = router;
