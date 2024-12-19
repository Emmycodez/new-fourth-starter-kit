import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import { bot } from "../routes/telegramRoutes.js";


export const sendBotMessage = async (telegramId, message) => {
  try {
    await bot.telegram.sendMessage(telegramId, message);
  } catch (error) {
    console.error(`Error sending message to user ${telegramId}:`, error);
  }
};
