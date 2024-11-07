// whatsappClient.js
import { Client, RemoteAuth } from 'whatsapp-web.js';
import mongoose from 'mongoose';
import { MongoStore } from 'wwebjs-mongo';
import connectDB from './database/connectDB.js';
import dotenv from 'dotenv';
dotenv.config();

// Initialize MongoDB connection
const dbUrl = process.env.DB_URL
const setupWhatsAppClient = async () => {
  if (mongoose.connection.readyState === 0) {
   await connectDB(dbUrl);
  }

  const store = new MongoStore({ mongoose });

  // Set up WhatsApp client with MongoStore for session persistence
  const client = new Client({
    authStrategy: new RemoteAuth({
      store,
      backupSyncIntervalMs: 300000,
    }),
    puppeteer: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  });

  // Generate and log QR code for the user to scan
  client.on('qr', (qr) => {
    console.log('QR CODE:', qr);
    // Here, you could also return this QR code to the front-end or save it for displaying to the user
  });

  client.on('ready', () => {
    console.log('WhatsApp client is ready');
  });

  client.on('remote_session_saved', () => {
    console.log('Session data persisted to MongoDB');
  });

  client.initialize();

  return client;
};

export default setupWhatsAppClient;
