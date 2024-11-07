import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { QrCode, DollarSign, Users, Wallet, Flame } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BarChartView } from "./_components/BarChart";
import RecentSales from "./_components/RecentSales";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUser } from "@/actions/queries";


const page = async () => {
  
const { isAuthenticated, getUser } = getKindeServerSession();
const usee = await getUser();
  await createUser(usee);
  const user = {
    connectedWhatsapp: true,
  };

  const monthSales = 1234;

  return (
    <main className="relative h-full">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Separator className="my-6" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Total Revenue</CardTitle>
            <DollarSign />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$40,000</div>
            <p className="text-sx text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Subscriptions</CardTitle>
            <Users />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-sx text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Sales</CardTitle>
            <Wallet />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.234</div>
            <p className="text-sx text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Active Now</CardTitle>
            <Flame />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-sx text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex gap-4 xl:!flex-row flex-col mt-7">
        <BarChartView />

        <Card className="p-4 flex-1 basis-2/5">
          <CardHeader>
            <CardTitle className="text-md font-medium">
              Recent Subscriptions
            </CardTitle>
            <CardDescription>You made {monthSales} this month</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <RecentSales limit={5} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default page;
