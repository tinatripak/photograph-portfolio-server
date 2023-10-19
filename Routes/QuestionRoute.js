const {
  GetAllQuestions,
  GetQuestionById,
  CreateQuestion,
  DeleteQuestion,
  AnswerToQuestion
  } = require("../Controllers/QuestionController");
  
  const router = require("express").Router();
  
  router.get("/getAllQuestions", GetAllQuestions);
  router.get("/getQuestionById/:id", GetQuestionById);
  router.post("/createQuestion", CreateQuestion);
  router.delete("/deleteQuestionById/:id", DeleteQuestion);
  router.post("/answerToQuestion", AnswerToQuestion);
  
  module.exports = router;
  