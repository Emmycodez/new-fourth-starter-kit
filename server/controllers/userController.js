import { User } from "../database/schema.js";

export const createUser = async (
  client,
  whatsappId,
  whatsappNumber,
  firstName,
  lastName,
  isPaid,
  subPlan,
  groups
) => {
  const existingUser = await User.findOne({ whatsappId });
  if (!existingUser) {
    const newUser = new User({
      firstName,
      lastName,
      whatsappId,
      whatsappNumber,
      groups,
      isPaid,
      subPlan,
    });
    await newUser.save();
    console.log("New user created:", newUser);
  } else {
    console.log("User already exists");
  }
};
