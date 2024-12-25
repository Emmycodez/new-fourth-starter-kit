import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getGroupDetails } from "@/actions/queries";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircleWarning } from "lucide-react";

const ConfirmationPage = async ({ params }) => {
  const { metadata } = params;

  // Decode and parse the metadata
  let metaData;
  try {
    metaData = JSON.parse(decodeURIComponent(metadata));
  } catch (error) {
    console.error("Failed to parse metadata:", error);
    return <div>Error: Invalid metadata</div>;
  }

  const groupDetails = await getGroupDetails(metaData.groupId);

  return (
    <div className="flex min-h-screen overflow-y-auto items-center justify-center bg-background px-4 pt-16 pb-8">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-foreground">
          Confirmation Page
        </h1>
        <p className="mb-4 text-muted-foreground">
          You are about to be redirected to the payment page for the
          <span className="font-semibold text-primary p-2">
            {groupDetails.groupDetails?.groupName}{" "}
          </span>
          community. Fill in your details and make your payment.
        </p>
        <div className="space-y-4">
          {metaData.monthlyUrl && (
            <div>
              <p>
                You can choose the monthly plan of{" "}
                <span className="font-semibold italic">
                  {groupDetails.groupDetails.currency}{" "}
                  {groupDetails.groupDetails.monthlyPrice?.toLocaleString()}
                </span>{" "}
              </p>
              <Button asChild className="w-full">
                <Link href={metaData.monthlyUrl}>Monthly Plan</Link>
              </Button>
            </div>
          )}
          {metaData.yearlyUrl && (
            <div>
              <p>
                You can choose the yearly plan of{" "}
                <span className="font-semibold italic">
                  {" "}
                  {groupDetails?.groupDetails?.currency}{" "}
                  {groupDetails?.groupDetails?.yearlyPrice?.toLocaleString()}
                </span>
              </p>

              <Button asChild className="w-full">
                <Link href={metaData.yearlyUrl}>Yearly Plan</Link>
              </Button>
            </div>
          )}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircleWarning className="mr-2" />
                Warning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Do not change the payment amount you see on the payment page.
                Ignore other payment options.
              </p>
            </CardContent>
            <CardFooter className="border-2 border-yellow-400 border-dashed">
              <p className="py-4 font-semibold">
                Simply enter your card details and make your payment.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
