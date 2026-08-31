import Player from "../models/Player.js";
import quizData from "../data/quizData.js";

// Strip out the correct answer before sending a question to the client
function toPublicQuestion(q) {
  return {
    id: q.id,
    question: q.question,
    options: q.options,
  };
}

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * quizData.length);
  return quizData[randomIndex];
}

// GET /api/quiz/questions
export const getAllQuestions = (req, res) => {
  const safeQuestions = quizData.map(toPublicQuestion);
  res.json(safeQuestions);
};

// GET /api/quiz/questions/random
export const getRandomQuestionHandler = (req, res) => {
  res.json(toPublicQuestion(getRandomQuestion()));
};

// POST /api/quiz/start
// body: { "name": "Alice" }
export const startGame = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ message: "A player name is required to start" });
    }

    const question = getRandomQuestion();

    // Instead of an in-memory `sessions` object, we create a Player
    // document in MongoDB. Its _id doubles as the playerId.
    const player = await Player.create({
      name,
      score: 0,
      currentQuestionId: question.id,
    });

    res.status(201).json({
      playerId: player._id,
      question: toPublicQuestion(question),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to start game", error: error.message });
  }
};

// POST /api/quiz/answer
// body: { "playerId": "...", "submittedAnswer": "..." }
export const submitAnswer = async (req, res) => {
  try {
    const { playerId, submittedAnswer } = req.body;

    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).json({ message: "Player session not found" });
    }

    const question = quizData.find((q) => q.id === player.currentQuestionId);
    const isCorrect = submittedAnswer === question.correctAnswer;

    if (isCorrect) {
      player.score += 1;
    }

    const nextQuestion = getRandomQuestion();
    player.currentQuestionId = nextQuestion.id;
    await player.save();

    res.json({
      correct: isCorrect,
      score: player.score,
      nextQuestion: toPublicQuestion(nextQuestion),
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to submit answer", error: error.message });
  }
};
