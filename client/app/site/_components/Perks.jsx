import React from "react";
import { X } from "lucide-react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problemText = [
  { heading: "Telegram Groups Without Group Shepherd" },
  { text: "😔 Manually handle member onboarding." },
  { text: "😔 Struggle to keep track of payments and subscriptions." },
  { text: "😔 No way to monetize your group effectively" },
  { text: "😔 Spend hours moderating and removing inactive users" },
  { text: "😔 Miss out on opportunities to grow your community" },
];

const solutionText = [
  { heading: "Telegram Groups + Group Shepherd" },
  { text: "😎 Automated onboarding with customizable welcome flows." },
  { text: "😎 Hassle-free payment tracking and subscription management." },
  { text: "😎 Built-in tools to sell products and monetize effortlessly." },
  { text: "😎 Automatically remove inactive or unpaid members." },
  { text: "😎 Focus on growing your group while we handle the rest." },
];

const Perks = () => {
  return (
    <section className=" pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto sm:pb-20 lg:pb-22 py-12 sm:py-16 lg:py-20 xl:py-32">
      {/* The heading starts here */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center lg:max-w-3xl mb-[70px]">
        <h2 className="font-display font-bold tracking-tight text-3xl text-center">
          Looking for an easy way to manage subscriptions for your telegram
          group?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-24 md:items-start">
        {/* The problem card starts here */}
        <Card className="bg-foreground text-background">
          <CardHeader>
            <CardTitle className="font-semibold">
              {problemText[0].heading}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {problemText.slice(1).map((item, index) => (
              <div className="flex items-center gap-2">
                <X className="text-red-500 " />
                <p key={index} className="py-2">
                  {item.text}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
        {/* The benefits card starts here */}
        <Card>
          <CardHeader>
            <CardTitle>{solutionText[0].heading} </CardTitle>
          </CardHeader>
          <CardContent>
            {solutionText.slice(1).map((item, index) => (
              <div className="flex items-center gap-2">
                <Check className="text-green-500" />
                <p key={index} className="py-2">
                  {item.text}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Perks;
