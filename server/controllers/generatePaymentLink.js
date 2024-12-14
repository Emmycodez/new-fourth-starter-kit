import axios from "axios";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import {bot} from "../routes/telegramRoutes.js";
 
dotenv.config();

// const bot = new Telegraf(process.env.BOT_TOKEN);

// Function to generate the Telegram invite link
export const generateTelegramInviteLink = async (chatId) => {
  try {
    const inviteLink = await bot.telegram.exportChatInviteLink(chatId);
    return inviteLink; // Return the generated invite link
  } catch (error) {
    console.error("Error generating Telegram invite link:", error);
    return null; // Return null if there was an error
  }
};

// Function to generate the payment link with the Telegram invite link as the redirect URL
export const generatePaymentLink = async (amount, productId, currency, chatId) => {
  try {
    // First, generate the Telegram invite link
    const inviteLink = await generateTelegramInviteLink(chatId);

    // If there was an error generating the invite link, return null
    if (!inviteLink) {
      return null;
    }

    // Make the API request to LemonSqueezy to generate the payment link
    const response = await axios.post(
      "https://api.lemonsqueezy.com/v1/checkout-links",
      {
        data: {
          type: "checkout-links",
          attributes: {
            product_id: productId, // The product ID associated with this group
            price: amount, // The price for the user to pay
            currency: currency, // The currency for the payment (e.g., 'USD', 'NGN')
            customer_email: "", // Optional: If you want to pre-fill the email address
            redirect_url: inviteLink, // Use the Telegram invite link as the redirect URL
            cancel_url: "http://yourwebsite.com/cancel", // Redirect if payment is canceled
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
          "Content-Type": "application/vnd.api+json",
        },
      }
    );

    // Extract the payment link from the API response
    return response.data.data.attributes.url; // This is the payment link URL returned by LemonSqueezy
  } catch (error) {
    console.error("Error generating payment link:", error);
    return null; // Return null if there was an error
  }
};
