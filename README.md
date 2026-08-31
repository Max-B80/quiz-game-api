## 🎮 Quiz Game API: How It Works & Our Plan

Hey! Here is a complete breakdown of the Quiz Game API project we're building together, how it works behind the scenes, and our step-by-step roadmap from start to finish. 🚀

## 🧠 What is a Quiz API?

An API (Application Programming Interface) acts as the bridge between the backend (server & database) and the frontend (the user interface).

Instead of showing visual buttons directly, our API receives requests (like "Give me 5 questions" or "Check if this answer is right"), processes the data, and sends back a response (usually in JSON format) 📦.

## 🛠️ Our Tech Stack

Node.js & Express 🟢: To build the server and route the requests.

MongoDB & Mongoose 🍃: To store our questions, options, correct answers, and player scores.

Postman 🟠: To test our API endpoints and make sure everything works before building any frontend.

## 📋 How the Quiz Game Flows (Beginning to End)

[ Player ] ➡️ Sends Request ➡️ [ Express Server ] ➡️ Queries ➡️ [ MongoDB ]
│
[ Player ] ⬅️ Receives JSON Response ⬅️ ┘

#### 🗺️ Our Step-by-Step Building Plan

\*\* Step 1: Setup & Database Connection ⚙️

Set up the Express server and connect it to MongoDB using Mongoose.

\*\* Step 2: Create the Question Model 🗂️

Define what a "Question" looks like (question text, options array, correct answer index, category/difficulty).

\*\* Step 3: Build CRUD Routes 🛣️

GET /api/questions: Fetch questions for the quiz.

POST /api/questions: Add new quiz questions to the database.

POST /api/quiz/answer: Submit player answers and calculate the score.

\*\* Step 4: Error Handling & Validation 🛡️

Make sure missing fields or bad requests get clear error messages.

\*\* Step 5: Testing with Postman 🧪

Test every route together in Postman to confirm data flows correctly!

Would you like to adjust any part of this plan or add specific features (like a timer ⏱️ or user authentication 🔐) before sending it over to her?

===================================================

# 🧠 Quiz Game API

A RESTful backend API built with **Node.js**, **Express**, and **MongoDB Atlas** for managing a quiz game application.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Environment Variables](#-environment-variables)
- [Installation & Setup](#-installation--setup)
- [API Endpoints](#-api-endpoints)
- [Error Handling](#-error-handling)

---

## ✨ Features

- ⚡ **Express Server**: Handles HTTP requests efficiently.
- 🍃 **MongoDB Atlas Integration**: Connects securely to a cloud database using Mongoose.
- 🔒 **Environment Security**: Sensitive keys and database URIs are kept safe using environment variables (`.env`).
- 🛣️ **Modular Routing**: Clean separation between server configuration, database connections, and routes.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js (v20+) 🟢
- **Framework**: Express.js 🚂
- **Database**: MongoDB Atlas 🍃
- **ORM/ODM**: Mongoose 📦

---

## 📁 Project Structure

````text
quiz-game-api/
├── src/
│   ├── config/
│   │   └── db.js            # MongoDB connection logic
│   ├── models/
│   │   └── Question.js      # Mongoose schema for quiz questions
│   ├── routes/
│   │   └── questionRoutes.js# Route definitions for question endpoints
│   └── server.js            # Main application entry point
├── .env                     # Environment variables (not pushed to Git)
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation


## 🔑 Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=3000
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.sxeiqxa.mongodb.net/quiz-game?retryWrites=true&w=majority

## 🚀 Installation & Setup
git clone <repository-url>
cd quiz-game-api

## Install dependencies 📦
npm install

## Start the server ⚡
node --env-file=.env src/server.js

# 🛣️ API Endpoints

### Questions Base URL: `/api/questions` ❓

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/questions` | Fetch all quiz questions from the database 📥 |
| **POST** | `/api/questions` | Create and save a new quiz question ➕ |

---

## 🛡️ Error Handling

- **404 Route Not Found**: Returns a clean JSON response if an invalid URL path is requested.
- **Database Connection Error**: Prevents the Express server from starting up if MongoDB Atlas fails to authenticate or connect.
````
