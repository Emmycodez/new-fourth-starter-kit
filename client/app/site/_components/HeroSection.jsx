import React from "react";
import { Button } from "@/components/ui/button";
import { heroHeadline, heroQuote, heroSubHeadline } from "@/utils/constants";
import {
  ArrowRightIcon,
  ArrowRightToLine,
  CircleArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import { telegram } from "@/images";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/10  py-20 sm:py-32">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            The easiest way to manage and monetize your telegram{" "}
            <span className="underline">group</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-muted-foreground">
            {heroSubHeadline}{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              On Autopilot
            </span>
            🚀
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 items-center">
            <Button size="lg" className="text-lg w-full sm:w-auto" asChild>
              <RegisterLink className="flex items-center justify-center">
                Get Started
                <ArrowRightToLine className="ml-2 h-5 w-5" />
              </RegisterLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg w-full sm:w-auto"
              asChild
            >
              <LoginLink className="flex items-center justify-center">
                Sign In
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </LoginLink>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[50px]">
        <Badge className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white border-0  py-2 px-4 rounded-full w-auto text-md md:text-xl sm:text-sm text-center">
          Free until you reach your first 10 paying members ✨
        </Badge>
      </div>
    </section>
  );
};

export default HeroSection;

// utomated Member Approvals: Allow admins to set criteria for member approvals (e.g., answering questions, providing emails, etc.) before joining a group.
// Anti-Spam & Auto-Moderation: Detect and block spam messages, links, or specific keywords to keep group chats clean.
// Scheduled Messages: Enable scheduling announcements or reminders to be sent at specific times.
// Member Analytics: Track member engagement, message frequency, and participation levels.
// Automated Greetings: Send welcome messages to new members and farewell messages to those who leave.
// Customizable Rules Enforcement: Automatically warn or remove members who break group rules.
// Polls & Surveys: Create polls directly in the group chat for feedback or quick decisions.
// Keyword Alerts: Notify admins when specific keywords are mentioned in the group.
// Broadcast Messaging: Send announcements to multiple groups at once without the need to copy-paste.
// Content Backup & Export: Save chat histories or export messages for record-keeping.
// Would
