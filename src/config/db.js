import mongoose from "mongoose";

// Connects to MongoDB using a URL passed as an argument
const connectDB = (url) => {
    return mongoose.connect(url);
};

// Export the function so server.js can use it 
export default connectDB;
