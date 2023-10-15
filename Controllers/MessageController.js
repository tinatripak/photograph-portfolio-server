const Message = require("../Models/MessageModel");

const GetAllMessages = async (req, res) => {
  try {
    const response = await Message.find({});

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No messages found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const GetTheMessageById = async (req, res) => {
  try {
    const response = await Message.findById(req.params.id);

    if (response) {
      res.status(200).send({ success: true, data: response });
    } else {
      res.status(200).send({ success: true, msg: "No message found by ID" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const CreateAMessage = async (req, res) => {
  try {
    const { name, email, question } = req.body;
    const message = await Message.create({
      name,
      email,
      question,
      createdAt: new Date(),
    });
    res.status(201).json({
      message: "The message successfully created",
      success: true,
      data: message,
    });
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

const DeleteTheMessage = async (req, res) => {
  try {
    const deletedRes = await Message.deleteOne({
      _id: req.params.id,
    });
    if (deletedRes.deletedCount === 1) {
      res
        .status(200)
        .send({ success: true, msg: "The message has been removed" });
    } else {
      res.status(200).send({ success: false, msg: "No message found" });
    }
  } catch (error) {
    res.status(404).send({ success: false, msg: error });
  }
};

module.exports = {
  GetAllMessages,
  GetTheMessageById,
  CreateAMessage,
  DeleteTheMessage,
};
