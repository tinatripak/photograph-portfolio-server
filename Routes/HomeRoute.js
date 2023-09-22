const {
    CreateHomePhotos, 
    GetAllHomePhotos, 
    UpdateHomePhotos
  } = require("../Controllers/HomeController");
  
  const router = require("express").Router();
  
  router.post("/createHomePhotos", CreateHomePhotos);
  router.put("/getHomePhotos", GetAllHomePhotos);
  router.put("/updateHomePhotos", UpdateHomePhotos);
  
  module.exports = router;
  