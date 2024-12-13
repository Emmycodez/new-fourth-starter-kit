import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import groupRoutes from './routes/groupRoutes.js'

import telegramRoutes, {bot} from "./routes/telegramRoutes.js";

const dbUrl = process.env.DB_URL;

connectDB(dbUrl);
const app = express();

app.use(
  cors({
    origin: "https://groupshepherd.vercel.app", // Specify your frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);


const port = process.env.PORT || 4000;

app.use(express.json());

app.use(userRoutes);
// app.use(venomRoutes);
app.use(telegramRoutes);
app.use(groupRoutes);


process.once('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully...');
  bot.stop('SIGINT');
});

process.once('SIGTERM', () => {
  console.log('Received SIGTERM. Shutting down gracefully...');
  bot.stop('SIGTERM');
});


app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
