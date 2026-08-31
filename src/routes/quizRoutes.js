import express from "express";
import {
  getAllQuestions,
  getRandomQuestionHandler,
  startGame,
  submitAnswer,
} from "../controllers/quizController.js";

const router = express.Router();

// GET /api/quiz/questions -> all questions (no answers)
router.get("/questions", getAllQuestions);

// GET /api/quiz/questions/random -> one random question
router.get("/questions/random", getRandomQuestionHandler);

// POST /api/quiz/start -> creates a Player in MongoDB, returns playerId + first question
router.post("/start", startGame);

// POST /api/quiz/answer -> checks answer, updates score, returns next question
router.post("/answer", submitAnswer);

export default router;
