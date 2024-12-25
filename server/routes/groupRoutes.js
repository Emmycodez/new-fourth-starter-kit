import { Router } from "express";
import dotenv from "dotenv";
import { Group } from "../database/schema.js";
import { createPaymentLink } from "../controllers/groupController.js";

dotenv.config();

const router = Router();

router.post("/api/deleteGroup", async (req, res) => {
  try {
    const { groupId } = req.body;

    // Validate groupId
    if (!groupId) {
      return res
        .status(400)
        .json({ success: false, message: "Group ID is required" });
    }

    // Find and delete the group
    const group = await Group.findByIdAndDelete(groupId);

    // If no group was found, return a 404
    if (!group) {
      return res
        .status(404)
        .json({ success: false, message: "Group not found" });
    }

    // Return success response if the group is deleted
    return res
      .status(200)
      .json({ success: true, message: "Group deleted successfully" });
  } catch (error) {
    // Log the error and return a 500 status with the error message
    console.error("Error deleting group: ", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

router.get("/api/getGroupDetails", async (req, res) => {
  try {
    const groupId = req.query.groupId;

    if (!groupId) {
      return res
        .status(400)
        .json({ success: false, message: "Group ID is required" });
    }

    const groupDetails = await Group.findById(groupId)
      .populate('admin') // Populate admin details
      .populate('participants'); // Populate participant details

    if (!groupDetails) {
      return res
        .status(404)
        .json({ success: false, message: "Group not found" });
    }

    console.log("These are the group details: ", groupDetails);
    return res.status(200).json({ success: true, groupDetails });
  } catch (error) {
    console.error("Error getting group details: ", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});


router.post("/api/setPaymentLink", async (req, res) => {
  const { groupId, link } = req.body;

  try {
    // Find the group by ID
    const focusGroup = await Group.findById(groupId);

    if (!focusGroup) {
      return res
        .status(404)
        .json({ success: false, message: "Group not found" });
    }

    // Update the group's payment link
    const updatedGroup = await Group.findByIdAndUpdate(
      groupId,
      { inviteLink: link }, // Assuming "paymentLink" is the field name in your Group schema
      { new: true } // Return the updated document
    );

    // Respond with the updated group
    return res.status(200).json({
      success: true,
      message: "Payment link updated successfully",
      group: updatedGroup,
    });
  } catch (error) {
    console.error("Error updating payment link:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the payment link",
      error: error.message,
    });
  }
});

router.get("/api/getPaymentLink", async (req, res) => {
  try {
    const groupId = req.query.groupId;
    const group = await Group.findById(groupId);

    if (!group) {
      return res.status(404).json({ success: false, message: "Group not found" });
    }

    const groupLink = group.inviteLink;

    if (!groupLink) {
      return res
        .status(404)
        .json({ success: false, message: "Payment link not found" });
    }

    return res.status(200).json({ success: true, link: groupLink });
  } catch (error) {
    console.error("Error getting payment link: ", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});


router.post("/api/create-payment-link", createPaymentLink);

export default router;
