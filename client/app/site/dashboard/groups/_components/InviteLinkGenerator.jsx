"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RefreshCw, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function InviteLinkGenerator({ group }) {
  const [inviteLink, setInviteLink] = useState("");

  const generateInviteLink = () => {
    const newLink = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/site/invite/${group._id}`;
    setInviteLink(newLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    toast({
      title: "Copied!",
      description: "Invite link copied to clipboard.",
    });
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Invite Link</CardTitle>
        <CardDescription>
          Generate and share the invite link for this paid group
        </CardDescription>
      </CardHeader>
      <CardContent>
        {inviteLink ? (
          <div className="p-4 bg-muted rounded-md flex items-center justify-between">
            <span className="text-sm font-mono truncate">{inviteLink}</span>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" onClick={generateInviteLink}>
                <RefreshCw className="h-4 w-4 mr-2" />
                New Link
              </Button>
              <Button size="sm" variant="outline" onClick={copyToClipboard}>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={generateInviteLink}>Generate Invite Link</Button>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          This link will direct users to an optin form where they can input
          their details and then guide them to make payment for your group.
        </p>
      </CardFooter>
    </Card>
  );
}
