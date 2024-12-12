import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { DollarSign, Users, Wallet, Flame } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import BarChartView from "./_components/BarChart";
import RecentSales from "./_components/RecentSales";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUser, getUserGroups } from "@/actions/queries";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import CreateGroupButton from "@/components/CreateGroupButton";
import CreateGroupForm from "./groups/_components/CreateGroupForm";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const userFromKinde = await getUser();
  const uid = userFromKinde?.id;

  const response = await createUser(userFromKinde);
  console.log(response);
  const userGroups = await getUserGroups(uid);
  
  const user = response || {};
  const revenue = user?.revenue || {};
  const members = user?.members || [];
  const recentSales = revenue.payments || [];
  const handleCreateGroup = () => {
    console.log("handling creating group");
  };

  // Total Revenue
  const totalRevenue = revenue.totalEarned || 0;

  // Total Subscriptions
  const totalSubscriptions = members.length;

  // Active Now (Currently Paying Members)
  const activeNow = members.filter((member) => member.isPaid).length;

  // Monthly Earnings and Member Count
  const currentYear = new Date().getFullYear();
  const chartData = Array(12)
    .fill(0)
    .map((_, index) => {
      const month = new Date(currentYear, index).toLocaleString("default", {
        month: "long",
      });

      // Calculate members for each month
      const monthlyMembers = members.filter((member) => {
        const createdAt = new Date(member.createdAt);
        return (
          createdAt.getMonth() === index &&
          createdAt.getFullYear() === currentYear
        );
      }).length;

      // Calculate earnings for each month
      const monthlyEarnings = revenue.payments
        ? revenue.payments
            .filter((payment) => {
              const paymentDate = new Date(payment.date);
              return (
                paymentDate.getMonth() === index &&
                paymentDate.getFullYear() === currentYear
              );
            })
            .reduce((acc, payment) => acc + payment.amount, 0)
        : 0;

      return {
        month,
        members: monthlyMembers,
        earnings: monthlyEarnings,
      };
    });

  return (
    <main className="relative h-full">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <CreateGroupForm Groups={userGroups} user={user}/>
      </div>
      <Separator className="my-6" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Total Revenue</CardTitle>
            <DollarSign />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{totalRevenue}.00</div>
            <p className="text-sx text-muted-foreground">All-time earnings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Subscriptions</CardTitle>
            <Users />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSubscriptions}</div>
            <p className="text-sx text-muted-foreground">All-time members</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              Active Members
            </CardTitle>
            <Flame />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeNow}</div>
            <p className="text-sx text-muted-foreground">
              Currently paying members
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Monthly Sales</CardTitle>
            <Wallet />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₦{chartData[new Date().getMonth()].earnings}.00
            </div>
            <p className="text-sx text-muted-foreground">Earnings this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Pass the dynamically generated chartData to BarChartView */}
      <div className="flex gap-4 xl:!flex-row flex-col mt-7">
        <BarChartView chartData={chartData} />
        <Card className="p-4 flex-1 basis-2/5">
          <RecentSales limit={5} salesData={recentSales} />
        </Card>
      </div>
    </main>
  );
};

export default page;
