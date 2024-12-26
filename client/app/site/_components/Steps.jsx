import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <section className=" pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto sm:pb-20 lg:pb-22 py-12 sm:py-16 lg:py-20 xl:py-32">
      {/* The heading */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center lg:max-w-3xl mb-[70px]">
        <div className="font-display font-bold tracking-tight text-3xl text-center">
          You're <span className="text-muted-foreground">three easy steps</span>{" "}
          away monetizing your telegram groups
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto">
        <div>
          <Card className="border-4 rounded-xl">
            <Image />
            <div>
              <h3>Add GroupShepherd to your Telegram Group</h3>
              <p></p>
            </div>
          </Card>
        </div>
        <div>
          <Card className="border-4 rounded-xl">
            <Image/>
            <div>
              <h3>Set </h3>
            </div>
          </Card>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Steps;
