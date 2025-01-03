import cron from "node-cron";
import { bot } from "../routes/telegramRoutes.js";
import { Member } from "../database/schema.js";

export const scheduleCronJobs = () => {
  cron.schedule("0 * * * *", async () => {
    console.log("Checking for expired subscriptions...");

    try {
      const expiredMembers = await Member.find({
        subscriptionStatus: "active",
        subscriptionExpiry: { $lt: new Date() },
      });

      for (const member of expiredMembers) {
        try {
          // Kick the member from the group
          await bot.telegram.banChatMember("4654773062", member.telegramId);
          console.log(`Kicked ${member.telegramId} from the group`);

          // Update their status in the database
          await Member.updateOne(
            { _id: member._id },
            { subscriptionStatus: "expired", groupAccessGranted: false }
          );
        } catch (error) {
          console.error(`Failed to kick ${member.telegramId}:`, error);
        }
      }
    } catch (error) {
      console.error("Error fetching expired members:", error);
    }
  });
};
