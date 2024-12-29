"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

// Define the tiers
const tiers = [
  { members: 50, price: 3000 },
  { members: 100, price: 5000 },
  { members: 250, price: 10000 },
  { members: 500, price: 15000 },
  { members: 1000, price: 25000 },
];

export default function PricingCalculator() {
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const [isYearly, setIsYearly] = useState(false);

  const handleSliderChange = (value) => {
    const index = tiers.findIndex((tier, i) => {
      const nextTier = tiers[i + 1];
      return !nextTier || value[0] <= tier.members;
    });
    setSelectedTierIndex(index);
  };

  const selectedTier = tiers[selectedTierIndex];
  const price = isYearly ? selectedTier.price * 10 : selectedTier.price; // 2 months free on yearly

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className=" pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto sm:pb-20 lg:pb-22 py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center lg:max-w-3xl mb-[70px]">
        <h2 className="font-display font-bold tracking-tight text-4xl text-center">
          PRICING
        </h2>

        <div className="mt-10">
          <p className="text-center leading-relaxed  text-md lg:text-xl font-semibold mb-8 lg:text-left text-wrap max-w-[600px]">
            Pricing plans to match your growth
          </p>
        </div>
      </div>
      <div className="w-full max-w-2xl mx-auto p-4 space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span>1</span>
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">
              Up to {formatNumber(selectedTier.members)} members
            </span>
            <span>{formatNumber(tiers[tiers.length - 1].members)}+</span>
          </div>
          <Slider
            value={[selectedTier.members]}
            onValueChange={handleSliderChange}
            min={1}
            max={tiers[tiers.length - 1].members}
            step={1}
            className="w-full"
          />
        </div>

        <Card className="border-4">
          <CardContent className="p-6">
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full ${
                  !isYearly ? "bg-gray-200 dark:bg-gray-800" : ""
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full flex items-center gap-2 ${
                  isYearly ? "bg-gray-200 dark:bg-gray-800" : ""
                }`}
              >
                Yearly
                {isYearly && (
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                    2 months free
                  </span>
                )}
              </button>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl font-bold">
                  ₦{formatNumber(price)}
                </span>
                <span className="text-gray-500">
                  {isYearly ? "/year" : "/month"}
                </span>
              </div>
              {/* <div className="text-sm text-gray-500 mt-2">
                {selectedTier.percentage}% of income for up to{" "}
                {formatNumber(selectedTier.members)} members
              </div> */}
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Up to {formatNumber(selectedTier.members)} members</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Unlimited courses</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Analytics & reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Payment integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>24/7 support</span>
              </li>
            </ul>

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              <p className="inline-block text-lg">Get Started Now</p>
              <ArrowRight className="inline-block h-6 w-6 ml-2" />
            </Button>
            <p className=" text-sm text-center text-muted-foreground mt-5 ">
              Free until 10 paying members
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
