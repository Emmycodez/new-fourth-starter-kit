"use client";

import { setPaymentLink } from "@/actions/queries";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import React, { useEffect } from "react";
import { useState } from "react";

const PaymentLinkInput = ({ groupId, group }) => {
  const [link, setLink] = useState("");

  useEffect(() => {
    group.inviteLink && setLink(group?.inviteLink);
  }, [group?.inviteLink]);

  const handleSubmit = async () => {
    try {
      const response = await setPaymentLink(groupId, link);
      if (response.error) {
        console.error("Failed to set payment link: ", response.error);
        toast({
          title: "Payment Link Submission Failed",
          description:
            "There was an error submitting your payment link. Please try again later.",
        });
      } else {
        toast({
          title: "Payment Link Submitted",
          description: `Your payment link has been submitted successfully!`,
        });
      }
    } catch (error) {
      console.error("Failed to set payment link: ", error);
      toast({
        title: "Payment Link Submission Failed",
        description:
          "There was an error submitting your payment link. Please try again later.",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter your Unique Payment Link</CardTitle>
        <CardDescription>
          Please enter the payment link that users will be directed to make
          payments for your community
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input
          type="url"
          placeholder="Payment Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button className="w-[100px]" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
};

export default PaymentLinkInput;
