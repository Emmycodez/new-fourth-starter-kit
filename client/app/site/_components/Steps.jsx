import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { ThreeDCardDemo } from "./StepCards";
import { atg, gsgs, heroImage, sgp } from "@/images";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const steps = [
  {
    id: 1,
    image: atg,
    title: " Add GroupShepherd to your Telegram Group",
    description:
      "With the click of a button, you can add GroupShepherd to your Telegram group.",
  },
  {
    id: 2,
    image: sgp,
    title: " Set Group Payment settings",
    description:
      " You can easily set payment settings for your group with our easy  to use interface. Either one-time or recurring (monthly & yearly payments)",
  },
  {
    id: 3,
    image: gsgs,
    title: " Start Receiving Payments",
    description:
      "Group shepherd automatically starts protecting your groups and handles billing",
  },
];

const Steps = () => {
  return (
    <section className=" pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto py-12 sm:py-16 lg:py-20 xl:py-32 ">
      {/* The heading */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-center flex-col md:flex-row text-center lg:max-w-3xl mb-[70px]">
        <div className="font-display font-bold tracking-tight text-3xl text-center">
          You&apos;re <span className="text-muted-foreground">three easy steps</span>{" "}
          away monetizing your telegram groups
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 max-w-screen-xl mx-auto">
        {steps.map((step) => (
          <CardContainer key={step.id} className="bg-background flex-1 min-w-0">
            <CardBody className="bg-background relative group/card dark:hover:shadow-2xl rounded-xl py-4 px-6 flex flex-col h-full border-2  border-primary hover:py-6 hover:px-8">
              <CardItem
                translateZ="50"
                className="text-xl font-bold flex items-start justify-between mb-2"
              >
                <div className="py-1 px-2 rounded-md font-semibold bg-primary text-background mr-2 shrink-0">
                  {step.id}
                </div>
                <div className="break-words overflow-wrap-anywhere flex-1">{step.title}</div>
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-md dark:text-neutral-300 flex-grow mb-2"
              >
                {step.description}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-auto"
              >
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      {/* {steps.map((step) => (
          <div className="inline-block">
            <ThreeDCardDemo
              key={step.id}
              image={step.image}
              title={step.title}
              description={step.description}
              id={step.id}
            />
          </div>
        
      ))} */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="overflow-hidden  flex flex-col">
          <div className="relative aspect-[3/4] w-full">
            <Image className="transition-transform duration-300 hover:scale-105 h-[300px] w-[300px]" />
            <Badge className="absolute top-4 right-4 bg-teal-500 text-white p-3 text-md">
              1
            </Badge>
          </div>
          <CardContent className="flex-grow p-4">
            <h3 className="text-xl font-semibold">
              Add GroupShepherd to your Telegram Group
            </h3>
            <p>
              With the click of a button, you can add GroupShepherd to your
              Telegram group.
            </p>
          </CardContent>
        </Card>
      </div> */}

      {/* <div className="flex flex-col md:flex-row items-center justify-evenly mx-auto gap-6">
        <div>
          <Card className="border-8 rounded-xl py-4 px-6 w-full max-w-[500px]">
            <Image />
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Add GroupShepherd to your Telegram Group
              </h3>
              <p>
                With the click of a button, you can add GroupShepherd to your
                Telegram group.
              </p>
            </div>
          </Card>
        </div>
        <div>
          <Card className="border-8 rounded-xl py-4 px-6 w-full  max-w-[500px]">
            <Image />
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Set Group Payment settings
              </h3>
              <p>
                You can easily set payment settings for your group with our easy
                to use interface. Either one-time or recurring (monthly & yearly
                payments)
              </p>
            </div>
          </Card>
        </div>
        <div>
          <Card className="border-8 rounded-xl py-4 px-6 w-full  max-w-[500px]">
            <Image />
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Start Receiving Payments
              </h3>
              <p>
                It's that easy.Group shepherd automatically starts protecting
                your groups. Handles billig, prevents unauthorized access, and
                helps you stay on top of your payments.
              </p>
            </div>
          </Card>
        </div>
      </div> */}
    </section>
  );
};

export default Steps;
