import mongoose from "mongoose";

// 1. Defne the Schema (Blueprint)
const questionSchema = new mongoose.Schema({
    question: { type:String, required: true},
    options: [{ type: String, required: true}],
    correctAnswar: { type: String, required: true},
    category: { type: String, required: true}
});

// 2. Creat and Export the Model
const Question = mongoose.model("Question", questionSchema);

export default Question;