import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import groupRoutes from "./routes/groupRoutes.js";
import telegramRoutes, { bot } from "./routes/telegramRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import bodyParser from "body-parser";
import axios from "axios";
import crypto from "crypto";

dotenv.config();

const dbUrl = process.env.DB_URL;

connectDB(dbUrl);
const app = express();

app.use(bodyParser.json());

const SIGNING_SECRET = "emmywagmi";

app.use(
  cors({
    origin: ["https://groupshepherd.vercel.app", "http://localhost:3000"], // Specify your frontend URL
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

app.post("/webhook", (req, res) => {
  const signature = req.headers["x-signature"];
  const payload = JSON.stringify(req.body);
  const hash = crypto
    .createHmac("sha256", SIGNING_SECRET)
    .update(payload)
    .digest("hex");

  // Verify the signature
  if (hash !== signature) {
    return res.status(400).send("Invalid signature");
  }

  const event = req.body;
  console.log("This is the event sent from lemon squeezy: ", event.meta);

  const groupId = event.meta.custom_data.group_id;
  const memberId = event.meta.custom_data.memberId;

  console.log("This is the group id returned from the webhook: ", groupId, "This is te memberId returned from the webhook: ")


  // Handle the webhook event
  switch (event.meta.event_name) {
    case "order_created":
      console.log("Order created:", event.attributes);
      // Add your logic to handle order creation
      break;
    case "order_refunded":
      console.log("Order refunded:", event.attributes);
      // Add your logic to handle order refunds
      break;
    case "subscription_created":
      console.log("Subscription created:", event.attributes);
      // Add your logic to handle subscription creation
      break;
    case "subscription_updated":
      console.log("Subscription updated:", event.attributes);
      // Add your logic to handle subscription updates
      break;
    case "subscription_cancelled":
      console.log("Subscription cancelled:", event.attributes);
      // Add your logic to handle cancellations
      break;
    case "subscription_resumed":
      console.log("Subscription resumed:", event.attributes);
      // Add your logic to handle subscription resumption
      break;
    case "subscription_expired":
      console.log("Subscription expired:", event.attributes);
      // Add your logic to handle expired subscriptions
      break;
    case "subscription_paused":
      console.log("Subscription paused:", event.attributes);
      // Add your logic to handle paused subscriptions
      break;
    case "subscription_unpaused":
      console.log("Subscription unpaused:", event.attributes);
      // Add your logic to handle unpaused subscriptions
      break;
    case "subscription_payment_failed":
      console.log("Payment failed:", event.attributes);
      // Add your logic to handle failed payments
      break;
    case "subscription_payment_success":
      console.log("Payment successful:", event.attributes);
      // Add your logic for successful payments
      break;
    case "subscription_payment_recovered":
      console.log("Payment recovered:", event.attributes);
      // Add your logic for recovered payments
      break;
    case "subscription_payment_refunded":
      console.log("Payment refunded:", event.attributes);
      // Add your logic for refunded payments
      break;
    case "subscription_plan_changed":
      console.log("Subscription plan changed:", event.attributes);
      // Add your logic for plan changes
      break;
    default:
      console.log("This is the event sent from lemon squeezy: ", event.meta);
      console.log("Unhandled event:", event.meta.event_name);
  }

  res.status(200).send("Webhook received");
});

process.once("SIGINT", () => {
  console.log("Received SIGINT. Shutting down gracefully...");
  bot.stop("SIGINT");
});

process.once("SIGTERM", () => {
  console.log("Received SIGTERM. Shutting down gracefully...");
  bot.stop("SIGTERM");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
