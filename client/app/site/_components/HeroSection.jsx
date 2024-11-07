import React from "react";
import { Button } from "@/components/ui/button";
import { heroHeadline, heroQuote, heroSubHeadline } from "@/utils/constants";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-24 sm:py-32"
      aria-label="Group Guard hero section"
    >
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-6xl text-center relative inline-block">
            {heroHeadline.split("Group").map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index === 0 && (
                  <span className="ml-2 relative inline-block">
                    Groups
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
                  </span>
                )}
              </React.Fragment>
            ))}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-muted-foreground">
            {heroSubHeadline}{" "}
            <span className="font-normal">On Autopilot 🚀</span>
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button size="lg" className="text-lg animate-pulse" asChild>
              <RegisterLink>Get Started</RegisterLink>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <div>
                <LoginLink>Go To Dashboard</LoginLink>
                <CircleArrowRight />
              </div>
            </Button>
          </div>
          <div className="mt-12 relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
