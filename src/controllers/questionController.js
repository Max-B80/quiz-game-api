import Question from "../models/Questions.js";

//Get all question
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Create a new question
export const createQuestion = async (req, res) => {
  try {
    const newQuestion = await Question.create(req.body);
    res.status(201).json(newQuestion);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create question", error: error.message });
  }
};
