
import { Group } from '../database/schema.js';
import { createProductInLemonSqueezy } from '../utils/lemonSqueezy.js';

const createPaymentLink = async (req, res) => {
  try {
    const { groupId } = req.body;

    // Fetch group details from MongoDB
    const group = await Group.findById(groupId).populate('admin').populate('participants');

    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    // Now pass the group data to create the product in Lemon Squeezy
    const productData = await createProductInLemonSqueezy(group);

    // Return the payment link
    return res.json({ paymentUrl: productData.checkoutUrl });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while creating the payment link' });
  }
};

export { createPaymentLink };
