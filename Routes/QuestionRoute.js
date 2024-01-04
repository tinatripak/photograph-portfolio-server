const {
  GetAllQuestions,
  GetQuestionById,
  CreateQuestion,
  DeleteQuestion,
  AnswerToQuestion,
} = require("../Controllers/QuestionController");
const { checkToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllQuestions", GetAllQuestions);
router.get("/getQuestionById/:id", GetQuestionById);
router.post("/createQuestion", CreateQuestion);
router.delete("/deleteQuestionById/:id", checkToken, DeleteQuestion);
router.post("/answerToQuestion", checkToken, AnswerToQuestion);

module.exports = router;
