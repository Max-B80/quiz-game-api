import express from "express";
import connectDB from "./config/db.js";
import questionRoutes from "./routes/questionRoutes.js";

const app = express();
const PORT = Number(process.env.PORT);

// Parse incoming JSON requests
app.use(express.json());

// Mount Question Routes
app.use("/api/questions", questionRoutes);

// 🔍 404 Catch-All Handler (for invalid URLs)
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// 🚀 Start server ONLY after MongoDB connects successfully
const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    console.log("Connected to MongoDB Atlas! 🍃");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT} 🚀`);
    });
  } catch (error) {
    console.error("Database connection error ❌:", error.message);
  }
};

startServer();

export default app;