const {
    CreateHomePhotos, 
    GetAllHomePhotos, 
    GetHomePhotoById,
    UpdateHomePhoto
  } = require("../Controllers/HomeController");
  
  const router = require("express").Router();
  
  router.post("/createHomePhotos", CreateHomePhotos);
  router.get("/getHomePhotos", GetAllHomePhotos);
  router.get("/getPhotoById/:id", GetHomePhotoById);
  router.put("/updateHomePhoto/:id", UpdateHomePhoto);
  
  module.exports = router;
  