import { Telegraf } from "telegraf";
import dotenv from "dotenv";

const bot = new Telegraf(process.env.BOT_TOKEN);

export const sendBotMessage = async (telegramId, message) => {
  try {
    await bot.telegram.sendMessage(telegramId, message);
  } catch (error) {
    console.error(`Error sending message to user ${telegramId}:`, error);
  }
};
