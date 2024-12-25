"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import React, { useState } from "react";

const CopyInviteLink = ({ groupId }) => {
  const inviteLink = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/site/invite/${groupId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    toast({
      title: "Copied!",
      description: "Invite link copied to clipboard.",
    });
  };
  return groupId && <Button onClick={copyToClipboard}>Copy Invite Link</Button>;
};

export default CopyInviteLink;
