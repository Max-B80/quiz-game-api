# Quiz Game API
 
A backend REST API for a trivia quiz game, built with Node.js, Express, and MongoDB. Questions are hardcoded in the source code, while player sessions (name, score, current question) are persisted in MongoDB.
 
## Tech Stack
 
- **Node.js** + **Express** — server and routing
- **MongoDB Atlas** + **Mongoose** — player data persistence
- **dotenv** (via `--env-file`) — environment configuration
## Project Structure
 
```
quiz-game-api/
├── node_modules/
├── src/
│   ├── config/
│   │   └── db.js               # MongoDB connection setup
│   ├── controllers/
│   │   └── quizController.js   # Quiz game logic (questions, sessions, scoring)
│   ├── data/
│   │   └── quizData.js         # Hardcoded quiz questions
│   ├── models/
│   │   └── Player.js           # Mongoose schema for a player/session
│   ├── routes/
│   │   └── quizRoutes.js       # API route definitions
│   └── server.js               # App entry point
├── .env                        # Environment variables (not committed)
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```
 
## Setup
 
1. Clone the repository and install dependencies:
```bash
   npm install
```
 
2. Create a `.env` file in the project root with:
```
   PORT=3000
   MONGODB_URL=<your MongoDB Atlas connection string>
```
 
3. Start the server:
```bash
   npm start
```
 
   You should see:
```
   Connected to MongoDB Atlas! 🍃
   Server is running on http://localhost:3000 🚀
```
 
## How the Game Works
 
1. A player starts a game and gets a random question, plus a unique `playerId`.
2. The player submits an answer for their current question using that `playerId`.
3. The server checks the answer, updates the player's score in MongoDB, and returns a new random question.
4. Steps 2–3 repeat, reusing the same `playerId`, for as many rounds as the player wants to play.
## API Endpoints
 
### `GET /api/quiz/questions`
Returns all quiz questions, with correct answers omitted.
 
**Response:**
```json
[
  {
    "id": 1,
    "question": "What is Node.js?",
    "options": ["...", "...", "...", "..."]
  }
]
```
 
### `GET /api/quiz/questions/random`
Returns a single random question, with the correct answer omitted.
 
### `POST /api/quiz/start`
Starts a new game session for a player. Creates a `Player` document in MongoDB.
 
**Request body:**
```json
{
  "name": "Alice"
}
```
 
**Response:**
```json
{
  "playerId": "66f1a2b3c4d5e6f7a8b9c0d1",
  "question": {
    "id": 4,
    "question": "Which HTTP method is typically used to retrieve data from a server?",
    "options": ["POST", "GET", "DELETE", "PUT"]
  }
}
```
 
### `POST /api/quiz/answer`
Submits an answer for the player's current question. Updates the player's score in MongoDB and returns the next question.
 
**Request body:**
```json
{
  "playerId": "66f1a2b3c4d5e6f7a8b9c0d1",
  "submittedAnswer": "GET"
}
```
 
**Response:**
```json
{
  "correct": true,
  "score": 1,
  "nextQuestion": {
    "id": 7,
    "question": "How do you start an Express server listening on port 3000?",
    "options": ["app.listen(3000, () => {...})", "app.startServer(3000)", "server.run(3000)", "express.openPort(3000)"]
  }
}
```
 
## Notes
 
- `quizData.js` is a hardcoded array and is never read from or written to the database — only player sessions are stored in MongoDB.
- `submittedAnswer` must exactly match one of the strings in the current question's `options` array (copy it exactly; don't retype it by hand).
- The same `playerId` should be reused across all `/api/quiz/answer` calls for a single game session.
 