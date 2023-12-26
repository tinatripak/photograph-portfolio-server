const {
  GetAllQuestions,
  GetQuestionById,
  CreateQuestion,
  DeleteQuestion,
  AnswerToQuestion,
} = require("../Controllers/QuestionController");
const { authenticateUser } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.get("/getAllQuestions", authenticateUser, GetAllQuestions);
router.get("/getQuestionById/:id", authenticateUser, GetQuestionById);
router.post("/createQuestion", CreateQuestion);
router.delete("/deleteQuestionById/:id", authenticateUser, DeleteQuestion);
router.post("/answerToQuestion", authenticateUser, AnswerToQuestion);

module.exports = router;
