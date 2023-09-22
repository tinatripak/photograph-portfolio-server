const {
    GetTypesOfPhotoshoot,
    CreateTypesOfPhotoshoot,
    UpdateTypesOfPhotoshoot
  } = require("../Controllers/TypeOfPhotosessionController");
  
  const router = require("express").Router();
  
  router.get("/getTypesOfPhotoshoot", GetTypesOfPhotoshoot);
  router.post("/createTypeOfPhotoshoot", CreateTypesOfPhotoshoot);
  router.put("/updateTypeOfPhotoshoot/:id", UpdateTypesOfPhotoshoot);
  
  module.exports = router;
  