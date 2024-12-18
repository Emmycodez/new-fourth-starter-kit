"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createMember, generatePaymentLink } from "@/actions/queries";
import { toast } from "@/hooks/use-toast";

// This is a simplified list of country codes. You may want to expand this.
const countryCodes = [
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "IN" },
  { code: "+234", country: "Nigeria" },
  // Add more country codes as needed
];

export default function PaymentForm({ groupId, groupName, userId }) {
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const data = {
    firstName,
    lastName,
    email,
    countryCode,
    phoneNumber,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const [response, urlResponse] = await Promise.all([
        createMember(data, groupId, userId),
        generatePaymentLink(groupId),
      ]);

      if (response.error) {
        setIsLoading(false);
        toast({
          title: "Failed to create member",
          variant: "destructive",
          description: "Please try again later",
        });
        
      } else {
        toast({
          title: "Member created successfully",
          description: "Your member details have been successfully saved",
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error creating member: ", error.message);
      toast({
        title: "Failed to create member",
        variant: "destructive",
        description: error.message,
      });
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto ">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          Start Your Payment Process
        </CardTitle>
        <CardDescription className="text-center mt-4">
          You&apos;re just one step away from gaining access to the{" "}
          <span className="font-bold">{groupName}</span> community and all its
          benefits.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <div className="flex space-x-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-[110px]">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.code} ({country.country})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder="123456789"
                className="flex-1"
              />
            </div>
          </div>
          <div className="text-sm text-gray-500">
            We value your privacy. Your details are securely stored.
          </div>
          <Button type="submit" className="w-full">
            {isLoading? "Creating member..." : "Proceed to Payment"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500 text-center w-full">
          By clicking &apos;Proceed to Payment&apos;, you agree to our Terms of
          Service and Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  );
}
