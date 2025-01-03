import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import crypto from "crypto";
import telegramRoutes, { bot } from "./routes/telegramRoutes.js";
import { scheduleCronJobs } from "./controllers/subscriptionCron.js";
import { Member } from "./database/schema.js";

dotenv.config();

const dbUrl = process.env.DB_URL;

connectDB(dbUrl);
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.use(telegramRoutes);
scheduleCronJobs();

app.post("/webhook", async (req, res) => {
  try {
    const event = req.body;
    const eventName = event.meta.event_name;
    const eventData = event.data;
    const customData = eventData.attributes.custom_data
      ? JSON.parse(decodeURIComponent(eventData.attributes.custom_data))
      : null;

    if (!customData) {
      console.error("Missing custom data in webhook event");
      return res.status(400).send({ error: "Invalid webhook event" });
    }

    const userId = customData.user_id;

    switch (eventName) {
      case "subscription_created":
        await Member.updateOne(
          { telegramId: userId },
          {
            subscriptionStatus: "active",
            subscriptionStart: new Date(eventData.attributes.created_at),
            subscriptionExpiry: new Date(eventData.attributes.ends_at),
            paid: true,
            groupAccessGranted: true,
          }
        );

        // Add user to the group
        await bot.telegram.unbanChatMember(4654773062, userId);
        await bot.telegram.sendMessage(
          userId,
          `You have been added to the group! Join here: https://t.me/+-K9FpB-5RUczMWFk`
        );
        console.log(`Added ${userId} to the group`);
        break;

      case "subscription_cancelled":
        await Member.updateOne(
          { telegramId: userId },
          { subscriptionStatus: "cancelled" }
        );
        await bot.telegram.sendMessage(
          userId,
          `You have cancelled your subscription, Click this link to subscribe again: `
        );
        console.log(`Subscription cancelled for ${userId}`);
        break;

      case "subscription_expired":
        await Member.updateOne(
          { telegramId: userId },
          { subscriptionStatus: "expired", groupAccessGranted: false }
        );

        // Kick user from the group
        await bot.telegram.banChatMember(4654773062, userId);
        await bot.telegram.sendMessage(
          userId,
          `You have been removed from the group because your subscription has expired. Just run the start command to subscribe again.`
        );

        console.log(`Removed ${userId} from the group`);
        break;

      case "subscription_resumed":
        await Member.updateOne(
          { telegramId: userId },
          {
            subscriptionStatus: "active",
            subscriptionExpiry: new Date(eventData.attributes.ends_at),
          }
        );

        // Add user back to the group
        await bot.telegram.unbanChatMember(4654773062, userId);
        await bot.telegram.sendMessage(
          userId,
          `You have resumed your subscription! Join here: https://t.me/+-K9FpB-5RUczMWFk`
        );

        console.log(`Resumed subscription for ${userId}`);
        break;

      case "subscription_payment_failed":
        console.log(`Payment failed for ${userId}`);
        await bot.telegram.sendMessage(
          userId,
          `You subscription payment failed. Please contact the admin for assistance.`
        );
        break;

      case "subscription_payment_success":
        await Member.updateOne(
          { telegramId: userId },
          { subscriptionStatus: "active", paid: true }
        );
        await bot.telegram.unbanChatMember(4654773062, userId);
        await bot.telegram.sendMessage(
          userId,
          `Your subscription payment was successful. You have been added to the group! Join here: https://t.me/+-K9FpB-5RUczMWFk`
        );
        console.log(`Payment successful for ${userId}`);
        break;

      default:
        console.log("Unhandled event:", eventName);
    }

    res.status(200).send({ success: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.status(500).send({ error: "Webhook processing failed" });
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
