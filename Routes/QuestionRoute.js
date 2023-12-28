const {
  GetAllQuestions,
  GetQuestionById,
  CreateQuestion,
  DeleteQuestion,
  AnswerToQuestion,
} = require("../Controllers/QuestionController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllQuestions", GetAllQuestions);
router.get("/getQuestionById/:id", GetQuestionById);
router.post("/createQuestion", CreateQuestion);
router.delete("/deleteQuestionById/:id", userVerification, DeleteQuestion);
router.post("/answerToQuestion", userVerification, AnswerToQuestion);

module.exports = router;
