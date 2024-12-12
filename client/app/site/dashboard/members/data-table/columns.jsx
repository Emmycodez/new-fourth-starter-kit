"use client"

import {ColumnDef} from '@tanstack/react-table'


export const columns = [
  {
    accessorKey: "name", // Refers to 'name' field in your data
    header: "Name",
  },
  {
    accessorKey: "email", // Refers to 'email' field in your data
    header: "Email",
  },
  {
    accessorKey: "subscriptionStartDate", // Refers to 'subscriptionStartDate' field in your data
    header: "Start Date",
  },
  {
    accessorKey: "subscriptionEndDate", // Refers to 'subscriptionEndDate' field in your data
    header: "End Date",
  },
  {
    accessorKey: "subscriptionDuration", // Refers to 'subscriptionDuration' field in your data
    header: "Duration",
  },
  {
    accessorKey: "paymentPlan", // Refers to 'paymentPlan' field in your data
    header: "Payment Plan",
  },
  {
    accessorKey: "paymentStatus", // Refers to 'paymentStatus' field in your data
    header: "Payment Status",
  },
  {
    accessorKey: "paymentMethod", // Refers to 'paymentMethod' field in your data
    header: "Payment Method",
  },
  {
    accessorKey: "lastPaymentDate", // Refers to 'lastPaymentDate' field in your data
    header: "Last Payment Date",
  },
  {
    accessorKey: "nextPaymentDueDate", // Refers to 'nextPaymentDueDate' field in your data
    header: "Next Payment Due Date",
  },
  {
    accessorKey: "totalPaid", // Refers to 'totalPaid' field in your data
    header: "Total Paid",
  },
  {
    accessorKey: "groupMembership", // Refers to 'groupMembership' field in your data
    header: "Group Membership",
  },
  {
    accessorKey: "daysOnSubscription", // Refers to 'daysOnSubscription' field in your data
    header: "Days on Subscription",
  },
  {
    accessorKey: "isRenewalUpcoming", // Refers to 'isRenewalUpcoming' field in your data
    header: "Renewal Upcoming",
    // Optional: You might want to display this as a Yes/No or a boolean value
  },
];