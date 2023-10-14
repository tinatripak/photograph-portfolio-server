const {
    GetAllMessages,
    GetTheMessageById,
    CreateAMessage,
    DeleteTheMessage
  } = require("../Controllers/MessageController");
  
  const router = require("express").Router();
  
  router.get("/getAllMessages", GetAllMessages);
  router.get("/getTheMessageById/:id", GetTheMessageById);
  router.post("/createAMessage", CreateAMessage);
  router.delete("/deleteTheMessage/:id", DeleteTheMessage);
  
  module.exports = router;
  