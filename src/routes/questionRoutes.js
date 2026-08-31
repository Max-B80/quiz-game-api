import express from "express";
import {
  getAllQuestions,
  createQuestion,
} from "../controllers/questionController.js";

const router = express.Router();

// GET /api/questions -> calls getAllQuestions
router.get("/", getAllQuestions);

// POST /api/questions -> calls createQuestion
router.post("/", createQuestion);

export default router;
