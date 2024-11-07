import { Group } from "../database/schema.js";

export const createGroup = async (client, groupName, adminId) => {
  try {
    const adminUser = await User.findById(adminId);
    if (!adminUser) {
      throw new Error('Admin user not found');
    }

    // Create a WhatsApp group with the admin as the initial participant
    const chat = await client.createGroup(groupName, [adminUser.whatsappId]);
    const inviteLink = await chat.getInviteCode();

    // Save group details to MongoDB
    const newGroup = new Group({
      groupName,
      groupId: chat.id._serialized,
      admin: adminUser._id,
      inviteLink: `https://chat.whatsapp.com/${inviteLink}`,
    });

    await newGroup.save();
    console.log('Group created successfully:', newGroup);

    return newGroup;
  } catch (error) {
    console.error('Failed to create group:', error);
    throw error;
  }
};
