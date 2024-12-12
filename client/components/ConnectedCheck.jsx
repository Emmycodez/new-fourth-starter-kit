"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "./ui/button";

const ConnectedCheck = ({ children, userData }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative h-full">
      {children}
      {/* Render the connect overlay if the user is not connected */}
      {!userData?.telegramConnected &&
        pathname !== "/site/dashboard/launchpad" && (
          <div className="absolute inset-0 z-30 flex items-center justify-center backdrop-blur-sm bg-background/50">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-4">
                  <div className="items-center justify-center flex gap-2">
                    Connect your Telegram account <Send />
                  </div>
                </CardTitle>
                <CardDescription className="text-center text-lg mb-5">
                  You need to connect your Telegram account so we can manage
                  your telegram groups for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <Button asChild onClick={() => setLoading(true)}>
                  <Link
                    href="/site/dashboard/launchpad"
                    className="p-2 w-fit bg-secondary text-white rounded-md flex items-center gap-2 self-center text-lg ring-2"
                  >
                    {loading ? "loading..." : "Connect your Telegram account"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
    </div>
  );
};

export default ConnectedCheck;
