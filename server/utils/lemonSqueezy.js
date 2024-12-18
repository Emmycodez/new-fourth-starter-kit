import axios from 'axios';
import dotenv from "dotenv"

dotenv.config();

const createProductInLemonSqueezy = async (group) => {
  const { groupName, paymentType, paymentFrequency, oneTimePrice, monthlyPrice, yearlyPrice, currency } = group;

  let price = 0;
  let recurring = false;
  let interval = null;

  if (paymentType === 'one-time') {
    price = oneTimePrice;
    recurring = false;
  } else if (paymentType === 'recurring') {
    recurring = true;
    price = paymentFrequency === 'monthly' ? monthlyPrice : yearlyPrice;
    interval = paymentFrequency;
  }

  try {
    const response = await axios.post(
      'https://api.lemonsqueezy.com/v1/products',
      {
        data: {
          type: 'products',
          attributes: {
            name: groupName,
            description: `Payment for group: ${groupName}`,
            price,
            currency,
            recurring,
            interval,
            store_id: '135761',  // Replace with your store ID
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`, // Replace with your API key
        },
      }
    );

    const checkoutUrl = `https://app.lemonsqueezy.com/checkout/${response.data.data.id}`;
    return { checkoutUrl };
  } catch (error) {
    console.error('Error creating product on Lemon Squeezy:', error);
    throw new Error('Failed to create product');
  }
};

export { createProductInLemonSqueezy };
