import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { whatsapp } from "@/images";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Launchpad</h1>
      <div className="w-full h-full max-w-[800px] space-y-4">
        <Card clasName="border-none">
          <CardHeader>
            <CardTitle>Lets get started!</CardTitle>
            <CardDescription>
              Follow the steps below to get your account set up properly
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex justify-between items-center w-full h-20 border p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <Image
                  src={whatsapp}
                  alt="whatsapp"
                  width={60}
                  height={60}
                  className="rounded-md object-contain"
                />
                <p>
                  Connect your whatsapp account with us so we can manage this
                  your paid grounds
                </p>
              </div>
            </div>
          </CardContent>

          <Card className="mx-auto w-full max-w-[500px]">
            <CardHeader>
              <CardTitle className="font-md text-center">
                Scan this QR code!
              </CardTitle>
              <CardDescription className="text-center">
                Scanning this QR code enables us enforce the paywall in your
                paid Groups
              </CardDescription>
              <CardContent className=" flex items-center justify-center w-full">Qr Code</CardContent>
            </CardHeader>
          </Card>
        </Card>
        <Card clasName="border-none">
          <CardHeader>
            <CardTitle>Input Your Bank Details</CardTitle>
            <CardDescription>
              Please input the bank account we should send your payments to
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input type="text" placeholder="Account Number" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
