// import { Router } from "express";
// import venom from "venom-bot";

// const router = Router();

// let qrCodeString = '';
// let isClientReady = false;

// // Create a new Venom session
// venom
//   .create(
//     'sessionName',
//     (base64Qrimg, asciiQR, attempts) => {
//       console.log('Number of attempts to read the QR code:', attempts);
//       console.log('ASCII QR Code:', asciiQR);
//       console.log('Base64 QR Code:', base64Qrimg);
//       qrCodeString = base64Qrimg;
//     },
//     (statusSession, session) => {
//       console.log(`Status Session: ${statusSession}`);
//       console.log(`Session Name: ${session}`);

//       if (statusSession === 'isLogged') {
//         isClientReady = true;
//         console.log('WhatsApp is connected.');
//       } else {
//         isClientReady = false;
//         console.log('WhatsApp is disconnected.');
//       }
//     },
//     {
//       headless: 'new',
//       logQR: true,
//       disableSpins: true,
//       autoClose: 0,
//       browserArgs: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-gpu',
//         '--disable-dev-shm-usage',
//         '--disable-accelerated-2d-canvas',
//         '--disable-features=site-per-process',
//         '--no-zygote',
//         '--single-process',
//         '--no-extensions',
//         '--disable-infobars'
//       ]
//     }
//   )
//   .then((client) => start(client))
//   .catch((error) => console.error('Error creating Venom client:', error));

// function start(client) {
//   client.onMessage((message) => {
//     if (message.body === 'Hi' && !message.isGroupMsg) {
//       client
//         .sendText(message.from, 'Hello! Welcome to Venom 🕷')
//         .then((result) => console.log('Message sent:', result))
//         .catch((err) => console.error('Error sending message:', err));
//     }
//   });

//   client.onStateChange((state) => {
//     console.log('State changed:', state);
//     if (state === 'CONFLICT' || state === 'UNPAIRED' || state === 'UNLAUNCHED') {
//       client.useHere();
//     }
//   });

//   client.onStreamChange((state) => {
//     console.log('Stream state:', state);
//     if (state === 'DISCONNECTED' || state === 'SYNCING') {
//       console.log('Stream disconnected, attempting to reconnect...');
//     }
//   });

//   client.onDisconnected(() => {
//     console.log('Client disconnected! Restarting session...');
//     setTimeout(() => venom.create('sessionName'), 5000);
//   });
// }

// // Route to fetch QR code
// router.get('/api/whatsapp-qr', (req, res) => {
//   if (qrCodeString) {
//     return res.status(200).json({ qrCode: qrCodeString });
//   } else {
//     return res.status(500).json({ message: 'QR code not generated' });
//   }
// });

// export default router;


// // import express from 'express';
// // import { create } from 'venom-bot';
// // import { WebSocketServer } from 'ws';

// // const router = express.Router();
// // let venomClient = null;
// // let qrCodeString = '';
// // let isConnected = false;
// // let isInitializing = false;
// // let wss;
// // const clients = new Set();

// // // Initialize WebSocket Server
// // const initializeWebSocket = () => {
// //   if (!wss) {
// //     wss = new WebSocketServer({ port: 8080 });
// //     console.log("WebSocket server running on ws://localhost:8080");

// //     wss.on('connection', (ws) => {
// //       clients.add(ws);
// //       console.log('New WebSocket connection established');

// //       // Immediately send the QR code if available
// //       if (qrCodeString) {
// //         ws.send(JSON.stringify({ status: 'disconnected', qrCode: qrCodeString }));
// //       }

// //       ws.on('close', () => {
// //         console.log('WebSocket client disconnected');
// //         clients.delete(ws);
// //       });
// //     });
// //   }
// // };

// // // Notify all WebSocket clients
// // const notifyAllClients = (message) => {
// //   clients.forEach((client) => {
// //     if (client.readyState === client.OPEN) {
// //       client.send(JSON.stringify(message));
// //     }
// //   });
// // };

// // // Initialize Venom Client - Generate QR Code Only
// // const initializeVenomClient = async () => {
// //   if (isInitializing || isConnected) return;

// //   isInitializing = true;
// //   try {
// //     console.log('Initializing Venom Client...');

// //     // Create a new Venom session without saving tokens
// //     venomClient = await create(
// //       'groupguard-temp-session',
// //       (base64Qr, asciiQR) => {
// //         console.log('QR Code generated');
// //         qrCodeString = base64Qr;

// //         // Notify all clients with the QR code
// //         notifyAllClients({ status: 'disconnected', qrCode: qrCodeString });
// //       },
// //       (statusSession) => {
// //         console.log('Session Status:', statusSession);

// //         if (statusSession === 'isLogged') {
// //           isConnected = true;
// //           qrCodeString = '';
// //           notifyAllClients({ status: 'connected' });
// //         } else {
// //           isConnected = false;
// //         }
// //       },
// //       {
// //         headless: 'new',
// //         autoClose: 0,
// //         logQR: false,
// //         disableSpins: true,
// //         browserArgs: ['--no-sandbox', '--disable-setuid-sandbox']
// //       }
// //     );

// //     console.log('Venom Client initialized for QR code only');
// //   } catch (error) {
// //     console.error('Error initializing Venom Client:', error);
// //   } finally {
// //     isInitializing = false;
// //   }
// // };

// // // Route to initialize WhatsApp and get QR Code
// // router.post('/api/whatsapp-init', async (req, res) => {
// //   const { uid } = req.body;
// //   console.log("This is the uid gotten from the frontend: ", uid)
// //   console.log('Received request to initialize WhatsApp');
// //   await initializeVenomClient();

// //   if (qrCodeString) {
// //     return res.status(200).json({ status: 'disconnected', qrCode: qrCodeString });
// //   } else if (isConnected) {
// //     return res.status(200).json({ status: 'connected' });
// //   } else {
// //     return res.status(500).json({ status: 'error', message: 'Failed to generate QR code' });
// //   }
// // });

// // // Initialize WebSocket Server
// // initializeWebSocket();

// // export default router;
