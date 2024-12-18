import Router from "express";
import dotenv from "dotenv";
import { Group, Member, User } from "../database/schema.js";
import { generateRandomLetterSequence } from "../controllers/generateRandomStrings.js";
import { createPaymentLink } from "../controllers/groupController.js";

dotenv.config();

const router = Router();

router.post("/api/createMember", async (req, res) => {
  try {
    const { groupId, firstname, lastName, email, countryCode, phone } =
      req.body;

    // Step 1: Find the group using the provided groupId
    const group = await Group.findById(groupId).populate("admin");

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    // Step 2: Get the admin (user) from the group
    const userId = group.admin;

    if (!userId) {
      return res
        .status(404)
        .json({ message: "Admin (user) for the group not found" });
    }

    const tid = generateRandomLetterSequence(20);

    // Step 3: Create a new member
    const newMember = await Member.create({
      firstName: firstname,
      lastName,
      email,
      countryCode,
      phoneNumber: phone,
      group: group._id, // Link to the group
      user: userId, // Link to the user
      telegramId: tid,
    });

    // Step 4: Update the group's participants and the user's members
    await Group.findByIdAndUpdate(group._id, {
      $push: { participants: newMember._id },
    });
    await User.findByIdAndUpdate(userId, { $push: { members: newMember._id } });

  

    res.status(201).json({ message: "Member created successfully", newMember });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create member" });
  }
});

export default router;
