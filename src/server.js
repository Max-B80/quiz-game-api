console.log("Server is starting...");

// 1. Importing the Express module
import express from "express";

import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/quiz-game")
  .then(() => console.log("Connected to MongoDB! 🍃"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

  // 1. Define the Schema (Blueprint)
const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  category: { type: String, required: true }
});

// 2. Create the Model (Tool to interact with the DB)
const Question = mongoose.model("Question", questionSchema);

// 2. initialize the Express application
const app = express();
app.use(express.json());

//3. Define the port number where our server will listen
const PORT = 3000;

// Sample data to test my route
const sampleQuestions = [
  {
    id: 1,
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript",
    category: "Tech",
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
    category: "Tech",
  },
];

//4. Define a basic route (Endpoint) - Home route
// app.get("/", (req, res) => {
//     res.send("Welcome to the Quiz Game API! 🎯");
// });

//4.1 ===> NEW ROUT: Fetch questions <===//

// OLD APPROACH: Returned static hardcoded data from the sampleQuestions array in memory.
// | app.get("/api/questions", (req, res) => {
// | res.json(sampleQuestions);
// | });

// NEW APPROACH: Uses async/await and Mongoose (Question.find()) to fetch real dynamic data from the MongoDB database.

app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.find(); // fetch all documents from MongoDB
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message});
  }
});


//4.2 ===> POST route: Fetch all questions
app.post("/api/questions", (req, res) => {
  const newQuestion = {
    id: sampleQuestions.length + 1,
    question: req.body.question,
    options: req.body.options,
    correctAnswer: req.body.correctAnswer,
    category: req.body.category,
  };

  sampleQuestions.push(newQuestion);
  res.status(201).json(newQuestion);
});

app.get("/api/questions/:id", (req, res) => {
  const questionId = parseInt(req.params.id);
  const foundQuestion = sampleQuestions.find((q) => q.id === questionId);

  if (!foundQuestion) {
    return res.status(404).json({ message: "Question not found" });
  }
  res.json(foundQuestion);
});

// PUT rpute: Update an existing question by ID
app.put("/api/questions/:id", (req, res) => {
  const questionId = parseInt(req.params.id);
  const questionIndex = sampleQuestions.findIndex((q) => q.id === questionId);

  // Return 404 if the question doe not exist
  if (questionIndex === -1) {
    return res.status(404).json({ memmage: "Question not found" });
  }

  // Update the question fields with data from req.body
  sampleQuestions[questionIndex] = {
    id: questionId,
    question: req.body.question || sampleQuestions[questionIndex].question,
    options: req.body.options || sampleQuestions[questionIndex].options,
    correctAnswer:
      req.body.correctAnswer || sampleQuestions[questionIndex].correctAnswer,
    category: req.body.category || sampleQuestions[questionIndex].category,
  };

  res.json(sampleQuestions[questionIndex]);
});

// DELETE route: Remve a question by ID
app.delete("/api/questions/:id", (req, res) => {
  const questionId = parseInt(req.params.id);
  const questionIndex = sampleQuestions.findIndex((q) => q.id === questionId);

  // Return 404 if the question does not exist
  if (questionIndex === -1) {
    return res.status(404).json({ massage: "Question not found" });
  }

  // Remve 1 item at questionIndex
  sampleQuestions.splice(questionIndex, 1);

  // Send back a success message
  res.json({ message: `Question ${questionId} delete successfully!` });
});

// POST /api/questions/:id/answer - Verify a player's answer
app.post("/api/questions/:id/answer", (req, res) => {

  // 1. Convert the ID from URL parameters to an integer
  const questionId = parseInt(req.params.id);

  // 2. Find the question in our sampleQuestions array
  const foundQuestion = sampleQuestions.find((q) => q.id === questionId);

  // 3. If the question does not exist, return 404 Not found
  if (!foundQuestion) {
    return res.status(404).json({ message: " Question not found" });
  }

  // 4. Extract the user's answer from req.body
  const { userAnswer } = req.body;

  // 5. Compare the user's answer with the stored correctAnswer
  const isCorrect = userAnswer === foundQuestion.correctAnswer;

  // 6. Send back the evaluation esult
  if (isCorrect) {
    return res.json({
      correct: true,
      message: "Correct answe!",
    });
  } else {
    return res.json({
      correct: false,
      message: `Wrong answer! The correct answer was : ${foundQuestion.correctAnswer}`,
    });
  }
});

//5. Start listening for incomung request
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}🚀`);
});
