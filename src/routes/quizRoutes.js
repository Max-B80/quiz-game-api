import express from "express";
import {
  getAllQuestions,
  getRandomQuestionHandler,
  startGame,
  submitAnswer,
} from "../controllers/quizController.js";
import { validateStartGame, validateSubmitAnswer } from "../middleware/validateQuiz.js";

const router = express.Router();

// GET /api/quiz/questions -> all questions (no answers)
router.get("/questions", getAllQuestions);

// GET /api/quiz/questions/random -> one random question
router.get("/questions/random", getRandomQuestionHandler);

// POST /api/quiz/start -> validates body, then creates a Player + returns first question
router.post("/start", validateStartGame, startGame);

// POST /api/quiz/answer -> validates body, then checks answer + returns next question
router.post("/answer", validateSubmitAnswer, submitAnswer);

export default router;
