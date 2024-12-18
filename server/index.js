import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import groupRoutes from './routes/groupRoutes.js'
import telegramRoutes, {bot} from "./routes/telegramRoutes.js";
import memberRoutes from './routes/memberRoutes.js'
import bodyParser from "body-parser";


dotenv.config();

const dbUrl = process.env.DB_URL;

connectDB(dbUrl);
const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["https://groupshepherd.vercel.app",
      "http://localhost:3000"
    ], // Specify your frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);


app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


const port = process.env.PORT || 4000;

app.use(express.json());

app.use(userRoutes);
// app.use(venomRoutes);
app.use(telegramRoutes);
app.use(memberRoutes);
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
