import { Group } from "../database/schema.js";
import { generateCheckoutUrls } from "./generatePaymentLink.js";

const variants = {
  "recurring-monthly": "638631",
  "one-time": "638634",
  "recurring-yearly": "638633",
};

function convertToCents(price) {
  return price * 100;
}

const createPaymentLink = async (req, res) => {
  try {
    const { groupId, memberId } = req.body;

    // Fetch group details from MongoDB
    const group = await Group.findById(groupId)
      .populate("admin")
      .populate("participants");

    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    const userData = {
      group_id: groupId,
      name: group.admin.name,
      email: group.admin.email,
      memberId: memberId,
    };

    const paymentLinks = {};

    // Generate one-time payment link (if applicable)
    if (group.oneTimePrice && group.paymentType === "one-time") {
      const customPrice = convertToCents(group.oneTimePrice);
      paymentLinks.oneTime = await generateCheckoutUrls(
        variants["one-time"],
        customPrice,
        userData,
        group
      );
    }

    // Generate monthly payment link (if applicable)
    if (group.monthlyPrice && group.paymentType === "recurring") {
      const customPrice = convertToCents(group.monthlyPrice);
      paymentLinks.monthly = await generateCheckoutUrls(
        variants["recurring-monthly"],
        customPrice,
        userData,
        group
      );
    }

    // Generate yearly payment link (if applicable)
    if (group.yearlyPrice && group.paymentType === "recurring") {
      const customPrice = convertToCents(group.yearlyPrice);
      paymentLinks.yearly = await generateCheckoutUrls(
        variants["recurring-yearly"],
        customPrice,
        userData,
        group
      );
    }

    // Return the payment links

    return res.json({ paymentLinks });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating the payment link" });
  }
};

export { createPaymentLink };
