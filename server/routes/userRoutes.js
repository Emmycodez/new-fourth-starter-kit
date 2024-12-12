import { Router } from "express";
import dotenv from "dotenv";
import { Revenue, User } from "../database/schema.js";

dotenv.config();
const router = Router();

// Route to fetch user data
router.post("/api/getUser", async (request, response) => {
  try {
    // Extract 'uid' from request body
    const { uid } = request.body;

    // Validate if 'uid' is provided
    if (!uid) {
      return response
        .status(400)
        .json({ success: false, message: "UID is required" });
    }

    // Fetch the user from the database and populate the 'revenue' field
    const user = await User.findOne({ uid })

    // If user is not found, return a 404 response
    if (!user) {
      return response
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // If user is found, return the user data
    return response.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return response
      .status(500)
      .json({ success: false, message: error.message });
  }
});


router.post("/api/createUser", async (request, response) => {
  try {
    const { uid, firstName, lastName, email, image } = request.body;
   

    // Check if the user already exists
    let user = await User.findOne({ uid });

    if (!user) {
      // Create a new revenue entry
      const newRevenue = await Revenue.create({});

      // Create a new user with the associated revenue
      user = await User.create({
        uid,
        firstName,
        lastName,
        email,
        image,
        revenue: newRevenue._id,
      });

      // Populate the revenue data before returning
      user = await User.findById(user._id)

   
      return response
        .status(201)
        .json({ message: "User created successfully", user });
    }

    // If user already exists, populate revenue and return existing user data
    user = await User.findById(user._id)
    return response.status(200).json({ message: "User already exists", user });
  } catch (error) {
    console.error("Error creating/updating user:", error.message);
    return response
      .status(500)
      .json({ success: false, message: error.message });
  }
});


export default router;
