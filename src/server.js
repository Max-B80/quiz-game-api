console.log("Server is starting...");


// 1. Importing the Express module
import express from 'express';

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
    category: "Tech"
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets",
    category: "Tech"
  }
];

//4. Define a basic route (Endpoint) - Home route
// app.get("/", (req, res) => {
//     res.send("Welcome to the Quiz Game API! 🎯");
// });


   //4.1 ===> NEW ROUT: Fetch questions <===//
app.get("/api/questions", (req, res) => {
  res.json(sampleQuestions);
});

  //4.2 ===> POST route: Fetch all questions
  app.post("/api/questions", (req, res) => {
    const newQuestion = {
        id: sampleQuestions.length + 1,
        question: req.body.question,
        options: req.body.options,
        correctAnswer: req.body.correctAnswer,
        category: req.body.category
    };
    
    sampleQuestions.push(newQuestion);
    res.status(201).json(newQuestion);

  });

  app.get("/api/questions/:id", (req, res) => {
    const questionId = parseInt(req.params.id);
    const foundQuestion = sampleQuestions.find(q => q.id === questionId);

    if(!foundQuestion) {
        return res.status(404).json({ message: "Question not found" });
    }
    res.json(foundQuestion);
  })


//5. Start listening for incomung request
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}🚀`);
});

