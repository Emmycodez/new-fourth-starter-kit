import { columns } from "./columns";
import { DataTable } from "./DataTable";

async function getData() {
  return [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      subscriptionStartDate: "2024-01-15",
      subscriptionEndDate: "2025-01-15",
      subscriptionDuration: "12 months",
      paymentPlan: "Annually",
      paymentStatus: "Active",
      paymentMethod: "Credit Card",
      lastPaymentDate: "2024-01-15",
      nextPaymentDueDate: "2025-01-15",
      totalPaid: "$199.99",
      groupMembership: "Premium Investing Tips",
      daysOnSubscription: 320, // Dynamic value: calculated from current date
      isRenewalUpcoming: true, // Shows if renewal is approaching
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      subscriptionStartDate: "2024-03-01",
      subscriptionEndDate: "2025-03-01",
      subscriptionDuration: "12 months",
      paymentPlan: "Annually",
      paymentStatus: "Active",
      paymentMethod: "PayPal",
      lastPaymentDate: "2024-03-01",
      nextPaymentDueDate: "2025-03-01",
      totalPaid: "$149.99",
      groupMembership: "Exclusive Tech News",
      daysOnSubscription: 267, // Dynamic value: calculated from current date
      isRenewalUpcoming: true, // Shows if renewal is approaching
    },
    {
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      subscriptionStartDate: "2024-07-10",
      subscriptionEndDate: "2025-07-10",
      subscriptionDuration: "12 months",
      paymentPlan: "Monthly",
      paymentStatus: "Active",
      paymentMethod: "Credit Card",
      lastPaymentDate: "2024-10-10",
      nextPaymentDueDate: "2024-11-10",
      totalPaid: "$19.99",
      groupMembership: "Fitness Transformation",
      daysOnSubscription: 120, // Dynamic value: calculated from current date
      isRenewalUpcoming: true, // Shows if renewal is approaching
    },
    {
      name: "Alice Williams",
      email: "alice.williams@example.com",
      subscriptionStartDate: "2024-02-20",
      subscriptionEndDate: "2025-02-20",
      subscriptionDuration: "12 months",
      paymentPlan: "Bi-Annually",
      paymentStatus: "Expired",
      paymentMethod: "Credit Card",
      lastPaymentDate: "2024-02-20",
      nextPaymentDueDate: "2024-08-20",
      totalPaid: "$89.99",
      groupMembership: "Gourmet Recipes Club",
      daysOnSubscription: 290, // Dynamic value: calculated from current date
      isRenewalUpcoming: false, // Renewal is not upcoming, since subscription is expired
    },
  ];
}

export default async function membersPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
