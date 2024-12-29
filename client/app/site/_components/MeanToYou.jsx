import React from "react";
import MembershipCalculator from "./RevenueCalculator";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const point = [
  "Increase KLT (Know Like Trust) factor",
  "Minimize expensive ads & funnels",
  "Unlock monthly recurring revenue",
];
const MeanToYou = () => {
  return (
    <section className=" pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto sm:pb-20 lg:pb-22 py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center lg:max-w-3xl mb-[70px]">
        <h2 className="font-display font-bold tracking-tight text-4xl text-center">
          What Does Creating A Paid Community Mean For You?
        </h2>
      </div>
      <div className="flex items-center justify-center flex-col lg:flex-row lg:items-center">
        <div className="mb-8 flex flex-col items-start justify-center flex-1 gap-4">
          <div>
            <p className="text-center text-xl lg:text-4xl font-semibold mb-8 lg:text-left text-wrap max-w-[600px]">
              Use our calculator to see what creating a paid community could
              mean for your business
            </p>
          </div>

          <div className="hidden lg:flex flex-col">
            {point.map((point, index) => (
              <div key={index} className="flex gap-2">
                <div className="mb-4">
                  <Check className="bg-green-600 rounded-full" />
                </div>
                <div className="flex items-start mb-4">
                  {" "}
                  <p className=" text-lg leading-relaxed text-left">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <MembershipCalculator />
        </div>
      </div>
    </section>
  );
};

export default MeanToYou;
