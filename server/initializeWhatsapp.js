import setupWhatsAppClient from './whatsappClient.js';
import { createUser } from './controllers/userController.js';
import { createGroup } from './controllers/groupController.js';

const initWhatsApp = async () => {
  const client = await setupWhatsAppClient();

  client.on('authenticated', async (session) => {
    // After authentication, create the user if not already present
    const whatsappId = session.user.id._serialized;
    const whatsappNumber = session.user.id.user; // Adjust this based on actual user data
    await createUser(client, whatsappId, whatsappNumber, firstName, lastName);
  });

  client.on('ready', async () => {
    console.log('WhatsApp client is ready for creating groups');

    // Example of creating a group
    // Replace `adminId` with the actual admin user's ID
    const groupName = 'My New Group';
    const adminId = 'YOUR_ADMIN_USER_ID';
    const group = await createGroup(client, groupName, adminId);
    console.log('Created group:', group);
  });
};

initWhatsApp();
