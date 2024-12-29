"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { InfoIcon as InfoCircle } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function MembershipCalculator() {
  const [members, setMembers] = useState(500);
  const [membershipFee, setMembershipFee] = useState(5000);
  const [courseFee, setCourseFee] = useState(30000);
  const [investment, setInvestment] = useState("with-you");
  const [annualRevenue, setAnnualRevenue] = useState(0);

  useEffect(() => {
    const monthlyMembershipRevenue = members * membershipFee * 12;
    const courseRevenue = members * courseFee * 0.1;
    const totalRevenue = monthlyMembershipRevenue + courseRevenue;
    console.log("total revenue: ", totalRevenue, "course Revenue: ", courseRevenue, "monthly revenue: ", monthlyMembershipRevenue, "members: ", members, "membership fee: ", membershipFee, "course fee: ", courseFee);
    setAnnualRevenue(totalRevenue);
  }, [members, membershipFee, courseFee]);

  

  return (
    <Card className="w-full max-w-xl py-6 px-8">
      <div className="space-y-8">
        {/* Members Slider */}
        <div className="space-y-4">
          <div className="text-sm font-medium">NUMBER OF MEMBERS</div>
          <Slider
            value={[members]}
            onValueChange={(value) => setMembers(value[0])}
            max={1000}
            step={10}
            className="[&>[role=slider]]:bg-white [&>.relative]:bg-emerald-700"
          />
          <div className="text-4xl font-bold">{members}</div>
        </div>

        {/* Paid Membership */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium">PAID MEMBERSHIP</div>
            <InfoCircle className="w-4 h-4 opacity-80" />
          </div>
          <div className="flex items-center gap-2 p-4 rounded-full bg-background border-2">
            <div className="text-2xl font-bold">
              <span className="mr-3">₦</span>
              <Input
                type="number"
                value={membershipFee}
                onChange={(e) => setMembershipFee(Number(e.target.value))}
                className="w-24 inline-block bg-transparent border-2 text-lg lg:text-2xl font-bold p-0 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none border-dashed px-2"
              />
            </div>
            <div className="text-sm opacity-80">PER MONTH</div>
          </div>
        </div>

        {/* Course or Event */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium">COURSE OR EVENT</div>
            <InfoCircle className="w-4 h-4 opacity-80" />
          </div>
          <div className="flex items-center gap-2 p-4 rounded-full bg-background border-2">
            <div className="text-2xl font-bold w-full">
              <span className="mr-3">₦</span>
              <Input
                type="number"
                value={courseFee}
                onChange={(e) => setCourseFee(Number(e.target.value))}
                className="w-24 inline-block bg-transparent border-2 text-lg lg:text-2xl font-bold p-0 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none border-dashed px-2"
              />
             
            </div>
            <div className="text-sm opacity-80">ONE-TIME FEE</div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Assuming only 10-percent of members by your course or event</p>
        </div>

        {/* Mighty Pro Investment */}
        {/* <div className="space-y-4">
          <div className="text-sm font-medium">MIGHTY PRO INVESTMENT</div>
          <ToggleGroup
            type="single"
            value={investment}
            onValueChange={(value) => value && setInvestment(value)}
            className="grid grid-cols-2 gap-4"
          >
            <ToggleGroupItem
              value="for-you"
              className="bg-[#00695C] data-[state=on]:bg-emerald-600 rounded-full px-6 py-3"
            >
              <div className="flex items-center gap-2">
                Do It For You <InfoCircle className="w-4 h-4 opacity-80" />
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="with-you"
              className="bg-[#00695C] data-[state=on]:bg-emerald-600 rounded-full px-6 py-3"
            >
              <div className="flex items-center gap-2">
                Do It With You <InfoCircle className="w-4 h-4 opacity-80" />
              </div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div> */}

        {/* Annual Revenue */}
        <div className="pt-8 border-t border-emerald-700">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">ANNUAL REVENUE</div>
            <div className="text-4xl font-bold">
              ₦{annualRevenue.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
