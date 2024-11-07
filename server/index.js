import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import qrcode from "qrcode-terminal";
const { Client } = require("whatsapp-web.js");
dotenv.config();
import userRoutes from "./routes/userRoutes.js";

const dbUrl = process.env.DB_URL;

connectDB(dbUrl);
const app = express();
const port = process.env.PORT || 4000;

app.use(userRoutes);


app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
