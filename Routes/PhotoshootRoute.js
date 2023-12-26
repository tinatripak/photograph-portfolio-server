const {
  GetPhotoshootById,
  GetPhotoshoots,
  GetPhotoshootByName,
  CreatePhotoshoot,
  UpdatePhotoshootById,
  DeletePhotoshootById
} = require("../Controllers/PhotoshootController");
const { authenticateUser } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getPhotoshoots", GetPhotoshoots);
router.get("/getPhotoshootById/:id", GetPhotoshootById);
router.get("/getPhotoshootByName/:name", GetPhotoshootByName);
router.post("/createPhotoshoot", authenticateUser, CreatePhotoshoot);
router.put("/updatePhotoshootById/:id", authenticateUser, UpdatePhotoshootById);
router.delete("/deletePhotoshootById/:id", authenticateUser, DeletePhotoshootById);

module.exports = router;
