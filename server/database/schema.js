import mongoose, { Schema } from "mongoose";

// Member Schema
const memberSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    whatsappNumber: { type: String, required: true },
    whatsappId: { type: String, unique: true, required: true },
    subscriptionStatus: { type: String, enum: ["active", "inactive", "expired"], default: "inactive" },
    joinedDate: { type: Date, default: Date.now },
    paid: { type: Boolean, default: false },
    subscriptionStart: { type: Date },
    subscriptionExpiry: { type: Date },
    group: { type: Schema.Types.ObjectId, ref: "Group" }, 

  },
  { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);

// Group Schema
const groupSchema = new Schema(
  {
    groupName: { type: String, required: true },
    groupId: { type: String, unique: true, required: true },
    admin: { type: Schema.Types.ObjectId, ref: "User" },
    participants: [{ type: Schema.Types.ObjectId, ref: "Member" }], // Reference to Member collection
    createdAt: { type: Date, default: Date.now },
    inviteLink: { type: String },
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

// Revenue Schema
const revenueSchema = new Schema(
  {
    totalEarned: { type: Number, default: 0 },
    totalPaidOut: { type: Number, default: 0 },
    balanceRemaining: { type: Number, default: 0 },
    payments: [{
      amount: { type: Number },
      date: { type: Date, default: Date.now },
      method: { type: String, enum: ["card", "bank", "crypto"], default: "card" },
      transactionId: { type: String },
    }],
   lastDatePaid: { type: Date, default: Date.now },
    currency: { type: String, default: "NGN" },
  },
  { timestamps: true }
);

const Revenue = mongoose.model("Revenue", revenueSchema);

// User Schema
const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    uid:{type: String, unique: true, required: true},
    email: { type: String, unique: true, required: true },
    image: { type: String },
    whatsappId: { type: String, unique: true },
    whatsappNumber: { type: String, required: true },
    groups: [{ type: Schema.Types.ObjectId, ref: "Group" }], // Reference to Group collection
    members: [{ type: Schema.Types.ObjectId, ref: "Member" }], // Reference to Member collection
    isPaid: { type: Boolean, default: false },
    subPlan: { type: String, enum: ["free","basic", "premium"], default: "free" },
    role: { type: String, enum: ["user", "admin", "superadmin"], default: "user" },
    revenue: { type: Schema.Types.ObjectId, ref: "Revenue" }, // Reference to Revenue collection
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt

const User = mongoose.model("User", userSchema);

export { User, Group, Member, Revenue };
