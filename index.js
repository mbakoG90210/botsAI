import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from 'path';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

 app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DreamsAI Server! Welcome to the future 🚀',
  });
}); 

const startServer = async () => {
    try {
      connectDB(process.env.MONGODB_URL);
      app.listen(port, () => console.log('Server started on port 8080 🚀'));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();
