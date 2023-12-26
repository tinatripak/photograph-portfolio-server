const {
  GetTypesOfPhotography,
  GetTypeOfPhotographyById,
  GetTypeOfPhotographyByTypeName,
  CreateTypeOfPhotography,
  UpdateTypeOfPhotographyById,
  DeleteTypeOfPhotographyById
} = require("../Controllers/TypeOfPhotosessionController");
const { authenticateUser } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllTypesOfPhotography", GetTypesOfPhotography);
router.get("/getTypeOfPhotographyById/:id", GetTypeOfPhotographyById);
router.get("/getTypeOfPhotographyByTypeName/:name", GetTypeOfPhotographyByTypeName);
router.post("/createTypeOfPhotography", authenticateUser, CreateTypeOfPhotography);
router.put("/updateTypeOfPhotographyById/:id", authenticateUser, UpdateTypeOfPhotographyById);
router.delete("/deleteTypeOfPhotographyById/:id", authenticateUser, DeleteTypeOfPhotographyById);

module.exports = router;
