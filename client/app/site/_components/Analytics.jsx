import { Card } from "@/components/ui/card";
import { barchart } from "@/images";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const point = [
  "The most actionable analytics of any telegram bot",
  "Use to inform and guide you with important metrics",
  "Easily handle your telegram bot and commands",
];
const Analytics = () => {
  return (
    <section className=" pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto sm:pb-20 lg:pb-22 py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center lg:max-w-3xl mb-[70px]">
        <h2 className="font-display font-bold tracking-tight text-4xl text-center">
          Analytics You Won&apos;t Find Anywhere else
        </h2>
      </div>
      <div className="flex items-center justify-center flex-col lg:flex-row lg:items-center">
        <div className="mb-8 flex flex-col items-center justify-center flex-1 gap-4 lg:flex-row lg:items-start lg:justify-evenly">
          <div>
            <div>
              <p className="text-center text-lg lg:text-xl font-semibold mb-8 lg:text-left text-wrap max-w-[600px]">
                The only telegram bot with an intuitive interface to easily see
                your data for your business and manage commands
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
              {point.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start justify-start rounded-full bg-slate-400 dark:bg-gray-800 py-2 px-4"
                >
                  <div className="mb-4 self-center">
                    <Check className="bg-green-600 rounded-full mr-2" />
                  </div>
                  <div className="flex items-start mb-4">
                    {" "}
                    <p className=" text-lg leading-relaxed text-left">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Image
              src={barchart}
              className="rounded-xl border-2 border-slate-400"
              alt="analytics dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
