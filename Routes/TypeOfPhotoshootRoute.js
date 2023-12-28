const {
  GetTypesOfPhotography,
  GetTypeOfPhotographyById,
  GetTypeOfPhotographyByTypeName,
  CreateTypeOfPhotography,
  UpdateTypeOfPhotographyById,
  DeleteTypeOfPhotographyById,
} = require("../Controllers/TypeOfPhotosessionController");
const { checkToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllTypesOfPhotography", GetTypesOfPhotography);
router.get("/getTypeOfPhotographyById/:id", GetTypeOfPhotographyById);
router.get(
  "/getTypeOfPhotographyByTypeName/:name",
  GetTypeOfPhotographyByTypeName,
);
router.post(
  "/createTypeOfPhotography",
  checkToken,
  CreateTypeOfPhotography,
);
router.put(
  "/updateTypeOfPhotographyById/:id",
  checkToken,
  UpdateTypeOfPhotographyById,
);
router.delete(
  "/deleteTypeOfPhotographyById/:id",
  checkToken,
  DeleteTypeOfPhotographyById,
);

module.exports = router;
