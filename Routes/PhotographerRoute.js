const {
  GetPhotographers,
  GetPhotographerById,
  CreatePhotographer,
  UpdatePhotographerById
} = require("../Controllers/PhotographerController");
const { authenticateUser } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getPhotographers", GetPhotographers);
router.get("/getPhotographerById/:id", GetPhotographerById);
router.post("/createPhotographer", authenticateUser, CreatePhotographer);
router.put("/updatePhotographerById/:id", authenticateUser, UpdatePhotographerById);

module.exports = router;
