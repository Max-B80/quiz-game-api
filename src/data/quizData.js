// Hardcoded quiz questions — stays as a plain array, not stored in MongoDB.
const quizData = [
  {
    id: 1,
    question: "What is Node.js?",
    options: [
      "A front-end CSS framework",
      "A JavaScript runtime environment that lets you run JavaScript on the server",
      "A database management system",
      "A web browser built for developers",
    ],
    correctAnswer:
      "A JavaScript runtime environment that lets you run JavaScript on the server",
  },
  {
    id: 2,
    question: "What is Express.js?",
    options: [
      "A fast, unopinionated web framework for Node.js",
      "A tool used only for database queries",
      "A replacement for HTML and CSS",
      "A compiler that translates JavaScript to C++",
    ],
    correctAnswer: "A fast, unopinionated web framework for Node.js",
  },
  {
    id: 3,
    question:
      "Which command initializes a new Node.js project and creates a package.json file?",
    options: ["npm start", "node init", "npm init -y", "express create"],
    correctAnswer: "npm init -y",
  },
  {
    id: 4,
    question:
      "Which HTTP method is typically used to retrieve data from a server?",
    options: ["POST", "GET", "DELETE", "PUT"],
    correctAnswer: "GET",
  },
  {
    id: 5,
    question:
      "In Express route handlers, what does the 'req' object represent?",
    options: [
      "The incoming HTTP request from the client",
      "The outgoing response sent to the client",
      "The database connection status",
      "The server configuration settings",
    ],
    correctAnswer: "The incoming HTTP request from the client",
  },
  {
    id: 6,
    question:
      "Which package manager comes built-in with Node.js to install packages like Express?",
    options: ["Pip", "NPM", "Composer", "Gem"],
    correctAnswer: "NPM",
  },
  {
    id: 7,
    question: "How do you start an Express server listening on port 3000?",
    options: [
      "app.listen(3000, () => {...})",
      "app.startServer(3000)",
      "server.run(3000)",
      "express.openPort(3000)",
    ],
    correctAnswer: "app.listen(3000, () => {...})",
  },
  {
    id: 8,
    question:
      "Which method on the response object sends a JSON response back to the client in Express?",
    options: ["res.output()", "res.json()", "res.writeJSON()", "res.print()"],
    correctAnswer: "res.json()",
  },
  {
    id: 9,
    question: "What is the purpose of middleware in Express?",
    options: [
      "To styling user interface elements",
      "Functions that execute during the request-response cycle before reaching the route handler",
      "To connect your physical server to your Wi-Fi router",
      "To write raw SQL queries automatically",
    ],
    correctAnswer:
      "Functions that execute during the request-response cycle before reaching the route handler",
  },
  {
    id: 10,
    question:
      "Which HTTP method is most commonly used to send new data to the server (like submitting a form)?",
    options: ["GET", "POST", "HEAD", "OPTIONS"],
    correctAnswer: "POST",
  },
];

export default quizData;
