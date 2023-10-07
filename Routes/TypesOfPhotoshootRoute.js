const {
  GetTypesOfPhotography,
  GetTypeOfPhotographyById,
  CreateTypeOfPhotography,
  UpdateTypeOfPhotographyById,
  DeleteTypeOfPhotographyById,
  GetTypeOfPhotographyByTypeName
} = require("../Controllers/TypeOfPhotosessionController");

const router = require("express").Router();

router.get("/getAllTypesOfPhotography", GetTypesOfPhotography);
router.get("/getTypeOfPhotographyById/:id", GetTypeOfPhotographyById);
router.get("/getTypeOfPhotographyByTypeName/:name", GetTypeOfPhotographyByTypeName);
router.post("/createTypeOfPhotography", CreateTypeOfPhotography);
router.put("/updateTypeOfPhotographyById/:id", UpdateTypeOfPhotographyById);
router.delete("/deleteTypeOfPhotographyById/:id", DeleteTypeOfPhotographyById);

module.exports = router;
