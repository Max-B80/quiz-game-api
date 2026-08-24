# quiz-game-api
Backend REST API for a trivia quiz game

# 🎯 Quiz Game API

A lightweight backend service built with Node.js and Express that powers a trivia/quiz game. It manages quiz questions, checks answers, and tracks game scores through RESTful API endpoints.

---

## 🛠️ Tech Stack

* **Runtime Environment:** Node.js 🟢
* **Framework:** Express.js 🚂 *(We will install this soon!)*
* **Format:** JSON 📦

---

## 📌 Features & Architecture

* ❓ **Fetch Questions:** Retrieve quiz questions dynamically.
* 🎯 **Answer Verification:** Securely check correct answers on the backend.
* 📊 **Score Tracking:** Keep track of user session scores.
* 🛡️ **Error Handling:** Graceful responses for missing resources or invalid inputs.

---

## 📂 Project Structure

```text
quiz-game-api/
├── src/
│   └── server.js      # Main entry point for our API server
├── .gitignore          # Prevents tracking node_modules
├── LICENSE             # Project license
├── package.json        # Project metadata & dependencies
└── README.md           # Documentation