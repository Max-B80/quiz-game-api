import mongoose from "mongoose";

// A "Player" represents one quiz session/user.
// Mongo generates a unique _id for us automatically, so we don't
// need crypto.randomUUID() like in app.js anymore.
const playerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    score: { type: Number, default: 0 },
    currentQuestionId: { type: Number, required: true },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", playerSchema);

export default Player;
