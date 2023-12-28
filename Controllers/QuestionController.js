const nodemailer = require("nodemailer");
const Question = require("../Models/QuestionModel");

const GetAllQuestions = async (req, res) => {
  try {
    const response = await Question.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No questions found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetQuestionById = async (req, res) => {
  try {
    const response = await Question.findById(req.params.id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No question found by ID" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const CreateQuestion = async (req, res) => {
  try {
    const { name, email, question } = req.body;
    const message = await Question.create({
      name,
      email,
      question,
      createdAt: new Date(),
    });
    res.status(201).json({
      message: "The question successfully created",
      success: true,
      data: message,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const DeleteQuestion = async (req, res) => {
  try {
    const deletedRes = await Question.deleteOne({
      _id: req.params.id,
    });
    if (deletedRes.deletedCount === 1) {
      res
        .status(200)
        .send({ success: true, msg: "The question has been removed" });
    } else {
      res.status(200).send({ success: false, msg: "No question found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const AnswerToQuestion = async (req, res) => {
  try {
    const { id, email, question, answer } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tinarudenko2002@gmail.com",
        pass: "unxwarueqdzvrdes",
      },
    });

    send();

    async function send() {
      const result = await transporter.sendMail({
        from: "tinarudenko2002@gmail.com",
        to: email,
        subject: `Answer to the question '${question}'`,
        text: `${answer}`,
      });

      console.log(JSON.stringify(result, null, 4));
    }

    const result = await Question.findOneAndUpdate(
      { _id: id },
      {
        answer: answer,
      },
      {
        upsert: true,
        new: true,
      },
    );

    res.status(201).json({
      message: "The question successfully answered",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

module.exports = {
  GetAllQuestions,
  GetQuestionById,
  CreateQuestion,
  DeleteQuestion,
  AnswerToQuestion,
};
