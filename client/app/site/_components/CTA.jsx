import { CardBody } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowRightToLine } from "lucide-react";
import React from "react";
import DemoFormPage from "./OutreachButton";

const CTA = () => {
  return (
    <section className=" pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto sm:pb-20 lg:pb-22 py-12 sm:py-16 lg:py-20 xl:py-32 max-w-6xl">
      <div className="border-4 rounded-xl py-8 px-6">
        <h1 className="text-4xl font-bold text-center">
          Easily Monetize Your Telegram Groups
        </h1>

        <p className="text-center mt-[20px] text-muted-foreground">
          You can set monthly or yearly subscription fees for your groups. Group
          Shepherd will automatically charge your users for the use of your
          groups.
        </p>
        <div className="flex items-center justify-center mt-8">
          <DemoFormPage
            text={"I want My Bot"}
            classname={"text-lg w-full sm:w-auto"}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
{
  /* <Card className="pt-6">
<CardHeader className="flex items-center justify-between">
  <CardTitle className="text-4xl font-bold text-center">
    Easily Monetize Your Telegram Groups
  </CardTitle>{" "}
</CardHeader>
<CardBody>
  <div className="flex flex-col items-center justify-center space-y-4">

  <p className="text-center mt-[20px] text-muted-foreground">
    You can set monthly or yearly subscription fees for your groups.
    Group Shepherd will automatically charge your users for the use of
    your groups.
  </p>
  <Button size="lg" className="text-lg w-full sm:w-auto" asChild>
    <RegisterLink className="flex items-center justify-center">
      Get Started
      <ArrowRightToLine className="ml-2 h-5 w-5" />
    </RegisterLink>
  </Button>
  </div>
 
</CardBody>
</Card> */
}
