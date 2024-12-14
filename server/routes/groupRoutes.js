import { Router } from "express";
import dotenv from "dotenv";
import { Group } from "../database/schema.js";

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

    const groupDetails = await Group.findById(groupId);

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

export default router;
