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

```text
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