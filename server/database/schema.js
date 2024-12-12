import mongoose, { Schema } from "mongoose";

// User Schema
const userSchema = new Schema(
  {
    // Personal Info
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    image: { type: String },
    uid: { type: String, unique: true, required: true },

    // Telegram Integration
    telegramId: { type: String, unique: true }, // User's Telegram ID
    telegramUsername: { type: String }, // Telegram Username (optional)
    telegramConnected: { type: Boolean, default: false }, // Whether the user has connected their Telegram account

    // Analytics (Earnings/Withdrawals)
    revenue: { type: Schema.Types.ObjectId, ref: "Revenue" }, // Reference to Revenue model
    numMembers: { type: Number, default: 0 }, // Number of members the user has added to the group

    // Group Management
    groups: [{ type: Schema.Types.ObjectId, ref: "Group" }], // Reference to groups the user manages
    members: [{ type: Schema.Types.ObjectId, ref: "Member" }], // Reference to members under this user

    // Subscription Plan
    subPlan: { type: Schema.Types.ObjectId, ref: "SubscriptionPlan" }, // Reference to SubscriptionPlan model
    subscriptionStartDate: { type: Date }, // Start date of their subscription
    subscriptionExpiryDate: { type: Date }, // Expiry date of the subscription

    // Role and Permissions
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user",
    }, // User's role in the app

    // Additional Data
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// Member Schema
const memberSchema = new Schema(
  {
    firstName: { type: String, required: true }, // Member's first name
    lastName: { type: String, required: true }, // Member's last name
    telegramId: { type: String, required: true, unique: true }, // Member's unique Telegram ID
    subscriptionStatus: {
      type: String,
      enum: ["active", "inactive", "expired"],
      default: "inactive",
    }, // Current status of the subscription
    group: { type: Schema.Types.ObjectId, ref: "Group" }, // Reference to the group the member belongs to
    joinedDate: { type: Date, default: Date.now }, // When the member joined the group
    subscriptionStart: { type: Date }, // Start date of their subscription
    subscriptionExpiry: { type: Date }, // Expiry date of the subscription
    paid: { type: Boolean, default: false }, // Has the member paid?
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);

// Group Schema
const groupSchema = new Schema(
  {
    groupName: { type: String, required: true }, // Name of the group (from the form input)
    groupId: { type: String, unique: true, required: true }, // Telegram Group ID (generated after creating the group)
    groupDescription: { type: String }, // Description of the group (from the form input)
    admin: { type: Schema.Types.ObjectId, ref: "User" }, // Reference to the admin (User model)
    participants: [{ type: Schema.Types.ObjectId, ref: "Member" }], // Members in the group
    membersCount: { type: Number, default: 0 }, // Number of members in the group
    inviteLink: { type: String }, // Invite link to the group (optional, could be generated after creating the group)
    createdAt: { type: Date, default: Date.now }, // When the group was created
    updatedAt: { type: Date, default: Date.now }, // Last updated time
    paymentType: { type: String, enum: ["one-time", "recurring"] }, // Payment type selected by the user (from the form input)
    paymentFrequency: {
      type: String,
      enum: ["weekly", "monthly", "quarterly", "bi-annually", "yearly"],
    }, // Frequency of payment (for recurring)
    oneTimePrice: { type: Number }, // One-time price for the group (if it's a one-time payment)
    monthlyPrice: { type: Number }, // Monthly price for recurring payment
    yearlyPrice: { type: Number },
    currency: {
      type: String,
      enum: ["NGN", "USD", "EUR", "GBP", "JPY", "CAD", "AUD"],
    }, // Currency type (from the form input)
    isPrivate: { type: Boolean, default: true }, // Whether the group is private or not (from the form input)
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

// Revenue Schema
const revenueSchema = new Schema(
  {
    totalEarned: { type: Number, default: 0 }, // Total earnings
    totalWithdrawn: { type: Number, default: 0 }, // Total amount withdrawn
    remainingBalance: { type: Number, default: 0 }, // Remaining balance to withdraw
    payments: [
      {
        amount: { type: Number, required: true }, // Payment amount
        date: { type: Date, default: Date.now }, // Payment date
        method: {
          type: String,
          enum: ["card", "bank", "crypto"],
          default: "card",
        }, // Payment method
        transactionId: { type: String, required: true }, // Unique transaction ID
      },
    ],
    lastDatePaid: { type: Date, default: Date.now }, // Last date the user was paid
    currency: { type: String, default: "NGN" }, // Currency type
  },
  { timestamps: true }
);

const Revenue = mongoose.model("Revenue", revenueSchema);

// Subscription Plan Schema
const subscriptionPlanSchema = new Schema(
  {
    planName: { type: String, required: true }, // Name of the subscription plan
    price: { type: Number, required: true }, // Price of the plan
    features: [{ type: String }], // Features associated with the plan (array of strings)
    duration: {
      type: String,
      enum: ["monthly", "yearly", "bi-annually", "quarterly"],
      default: "monthly",
    }, // Plan duration
    active: { type: Boolean, default: true }, // Whether the plan is active or not
  },
  { timestamps: true }
);

const SubscriptionPlan = mongoose.model(
  "SubscriptionPlan",
  subscriptionPlanSchema
);

// Transaction History Schema
const transactionSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // The user involved in the transaction
    amount: { type: Number, required: true }, // Amount involved in the transaction
    type: {
      type: String,
      enum: ["payment", "withdrawal", "refund"],
      required: true,
    }, // Transaction type
    date: { type: Date, default: Date.now }, // Date of the transaction
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    }, // Transaction status
    method: { type: String, enum: ["card", "bank", "crypto"], default: "card" }, // Payment method
    transactionId: { type: String, required: true }, // Unique transaction ID
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export { User, Group, Member, Revenue, SubscriptionPlan, Transaction };
