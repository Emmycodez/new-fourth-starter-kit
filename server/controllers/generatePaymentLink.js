import axios from "axios";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import { bot } from "../routes/telegramRoutes.js";

dotenv.config();
const lemonSqueezyApiKey = process.env.LEMON_SQUEEZY_API_KEY;

export const generatePaymentLink = async (yanshId) => {
  try {
    console.log(yanshId);
  } catch (error) {}
};

const generatePermanentInviteLink = async (groupId) => {
  try {
    // Call the Telegram API to export a permanent invite link
    const inviteLink = await bot.telegram.exportChatInviteLink(groupId);

    return inviteLink;
  } catch (error) {
    console.error("Error generating invite link: ", error);
    throw error;
  }
};

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

export const generateCustomCheckoutLink = async (
  paymentType,
  paymentFrequency,
  price,
  userData
) => {
  if (!paymentType || !["recurring", "one-time"].includes(paymentType)) {
    throw new Error("Invalid payment type. Must be 'recurring' or 'one-time'.");
  }

  if (
    paymentType === "recurring" &&
    !["monthly", "yearly"].includes(paymentFrequency)
  ) {
    throw new Error(
      "Invalid payment frequency. Must be 'monthly' or 'yearly'."
    );
  }

  if (!price || typeof price !== "number" || price <= 0) {
    throw new Error("Invalid price. Must be a positive number.");
  }

  let variantId;

  // Determine the variant ID based on payment type and frequency
  if (paymentType === "recurring") {
    variantId = paymentFrequency === "monthly" ? "638631" : "638633";
  } else if (paymentType === "one-time") {
    variantId = "638634";
  }

  const payload = {
    variant_id: variantId,
    custom_price: price * 100, // Convert price to cents if required by the API
    customer: userData, // Include customer data (name, email, etc.)
  };

  try {
    const response = await axios.post(
      "https://api.lemonsqueezy.com/v1/checkout_links",
      payload,
      {
        headers: {
          Authorization: `Bearer ${lemonSqueezyApiKey}`, // Ensure lemonSqueezyApiKey is defined
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.data) {
      return response.data.data.attributes.url; // Adjusted to match API response structure
    } else {
      throw new Error("Unexpected response structure from Lemon Squeezy API.");
    }
  } catch (error) {
    console.error(
      "Error generating checkout link:",
      error.response?.data || error.message
    );
    throw new Error("Failed to generate checkout link. Please try again.");
  }
};

export const generateCheckoutUrls = async (
  variantId,
  customPrice,
  userData,
  group
) => {
  const storeId = "135761";
  const telegramInviteLink = await generatePermanentInviteLink(group.groupId);

  if (!storeId || !variantId) {
    console.log("Invalid store or variant id");
    return;
  }
  try {
    const payload = {
      data: {
        type: "checkouts",
        attributes: {
          product_options: {
            name: `${group.groupName} subscription page`,
            redirect_url: telegramInviteLink,
            receipt_button_text: "Go to your Telegram Community",
            receipt_link_url: telegramInviteLink,
          },
          custom_price: customPrice, // Move inside `attributes`
          checkout_data: {
            custom: {
              group_id: userData.group_id,
              name: userData.name,
              email: userData.email,
              memberId: userData.memberId,
            },
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: storeId,
            },
          },
          variant: {
            data: {
              type: "variants",
              id: variantId,
            },
          },
        },
      },
    };

    const response = await axios.post(
      "https://api.lemonsqueezy.com/v1/checkouts",
      payload,
      {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
        },
      }
    );

    return response.data.data.attributes.url;
  } catch (error) {
    console.error(
      "Error creating checkout: ",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Example usage
// const paymentType = "recurring"; // 'one-time' or 'recurring'
// const paymentFrequency = "monthly"; // 'monthly' or 'yearly'
// const price = 5000; // Dynamic price from user input
// const userData = {
//   email: "user@example.com",
//   name: "John Doe",
//   // Add any other metadata you want to send
// };

// generateCustomCheckoutLink(paymentType, paymentFrequency, price, userData)
//   .then((checkoutUrl) => {
//     console.log("Checkout URL:", checkoutUrl);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
