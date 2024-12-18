import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

const apiKey = process.env.LEMON_SQUEEZY_API_KEY ; // Replace with your API key
const storeSlug = 'groupguard'; // Your store slug (from the URL)

const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Accept': 'application/json'
};

export async function getStoreId() {
  try {
    const response = await axios.get(`https://api.lemonsqueezy.com/v1/stores/${storeSlug}`, { headers });
    console.log('Store ID:', response.data.data.id);  // This is your store ID
  } catch (error) {
    console.error('Error fetching store data:', error);
  }
}


