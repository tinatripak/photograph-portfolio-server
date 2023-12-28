const {
  GetPhotoshootById,
  GetPhotoshoots,
  GetPhotoshootByName,
  CreatePhotoshoot,
  UpdatePhotoshootById,
  DeletePhotoshootById,
} = require("../Controllers/PhotoshootController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getPhotoshoots", GetPhotoshoots);
router.get("/getPhotoshootById/:id", GetPhotoshootById);
router.get("/getPhotoshootByName/:name", GetPhotoshootByName);
router.post("/createPhotoshoot", userVerification, CreatePhotoshoot);
router.put("/updatePhotoshootById/:id", userVerification, UpdatePhotoshootById);
router.delete(
  "/deletePhotoshootById/:id",
  userVerification,
  DeletePhotoshootById,
);

module.exports = router;
