import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => {
      console.error("Failed to connect to MongoDB...");
      console.error(err);
    });
};

export default connectDB;
