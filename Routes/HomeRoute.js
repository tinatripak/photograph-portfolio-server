const {
    CreateHomePhoto, 
    GetAllHomePhotos, 
    GetHomePhotoById,
    UpdateHomePhotoById
  } = require("../Controllers/HomeController");
  
  const router = require("express").Router();
  
  router.post("/createHomePhoto", CreateHomePhoto);
  router.get("/getAllHomePhotos", GetAllHomePhotos);
  router.get("/getHomePhotoById/:id", GetHomePhotoById);
  router.put("/updateHomePhotoById/:id", UpdateHomePhotoById);
  
  module.exports = router;
  