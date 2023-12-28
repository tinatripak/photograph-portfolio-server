const {
  GetTypesOfPhotography,
  GetTypeOfPhotographyById,
  GetTypeOfPhotographyByTypeName,
  CreateTypeOfPhotography,
  UpdateTypeOfPhotographyById,
  DeleteTypeOfPhotographyById
} = require("../Controllers/TypeOfPhotosessionController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllTypesOfPhotography", GetTypesOfPhotography);
router.get("/getTypeOfPhotographyById/:id", GetTypeOfPhotographyById);
router.get("/getTypeOfPhotographyByTypeName/:name", GetTypeOfPhotographyByTypeName);
router.post("/createTypeOfPhotography", userVerification, CreateTypeOfPhotography);
router.put("/updateTypeOfPhotographyById/:id", userVerification, UpdateTypeOfPhotographyById);
router.delete("/deleteTypeOfPhotographyById/:id", userVerification, DeleteTypeOfPhotographyById);

module.exports = router;
