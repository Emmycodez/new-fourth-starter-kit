import { Card } from "@/components/ui/card";
import {
  BookOpenText,
  Briefcase,
  Calendar,
  ShoppingCart,
  Signal,
  Users,
} from "lucide-react";
import React from "react";

const useCases = [
  {
    title: "Seamless Group Management for Educators",
    description:
      "Automate onboarding for students, distribute course materials, and track attendance in private Telegram groups effortlessly.",
    icon: <BookOpenText />,
  },
  {
    title: "Signals & Mentorship Forex Traders and Coaches",
    description:
      "Easily collect monthly payments from members of your telegram group for signals and mentorship.",
    icon: <Signal />,
  },
  {
    title: "Community Building for Influencers",
    description:
      "Monetize your audience by creating premium Telegram communities with paid access and automated subscription management.",
    icon: <Users />,
  },

  {
    title: "Streamlined Product Sales for Entrepreneurs",
    description:
      "Sell digital products, courses, or services by integrating onboarding questions and access management directly into your group.",
    icon: <ShoppingCart />,
  },
  {
    title: "Effortless Networking for Professionals",
    description:
      "Organize private groups for professional networking or mentoring, ensuring only active members remain engaged.",
    icon: <Briefcase />,
  },
  {
    title: "Event Planning for Organizers",
    description:
      "Create temporary groups for events and automatically remove users after the event ends to keep things tidy.",
    icon: <Calendar />,
  },
];

const UseCases = () => {
  return (
    <section
      id="use-cases"
      className="px-4 sm:px-6 lg:px-8 mx-auto sm:pb-20 lg:pb-22 flex items-center justify-center"
    >
      {/* The heading */}
      <div className=" flex flex-col text-center">
        <div className="font-display font-bold tracking-tight text-xl md:text-3xl leading-tight text-center mx-auto max-w-[800px]">
          Use Cases
          <h3 className="mt-[50px] text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
            Here&apos;s how GroupShepherd can help you
          </h3>
        </div>
        <div className="flex w-full max-w-[1000px] flex-col items-center justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="rounded-lg p-3">
                <div className="mb-1 text-lg font-bold flex gap-2 items-start">
                 {useCase.icon} 
                  <h1 className="text-left">{useCase.title}</h1>
                </div>
                <p className="text-md font-[400] text-muted-foreground text-left pt-4">
                  {useCase.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
