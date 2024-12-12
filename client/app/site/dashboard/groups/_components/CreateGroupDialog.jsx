"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const currencies = ["NGN", "USD", "EUR", "GBP", "JPY", "CAD", "AUD"];
const frequencies = [
  "weekly",
  "monthly",
  "quarterly",
  "semi-annually",
  "annually",
];

export default function CreateGroupDialog({ open, onOpenChange }) {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [paymentType, setPaymentType] = useState("one-time");
  const [currency, setCurrency] = useState("NGN");
  const [oneTimePrice, setOneTimePrice] = useState("");
  const [recurringPrices, setRecurringPrices] = useState({
    weekly: "",
    monthly: "",
    quarterly: "",
    "semi-annually": "",
    annually: "",
  });
  const [selectedFrequencies, setSelectedFrequencies] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [paymentInstructions, setPaymentInstructions] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleCreateGroup = () => {
    const groupData = {
      name: groupName,
      description: groupDescription,
      isPrivate,
      paymentType,
      currency,
      pricing:
        paymentType === "one-time"
          ? { oneTime: oneTimePrice }
          : recurringPrices,
      selectedFrequencies,
      discountCode,
      discountPercentage,
      paymentInstructions,
      agreeToTerms,
    };
    console.log("Creating paid group:", groupData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Paid Group</DialogTitle>
          <DialogDescription>
            Set up your new paid Telegram group
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="groupName" className="text-right">
              Name
            </Label>
            <Input
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="groupDescription" className="text-right">
              Description
            </Label>
            <Textarea
              id="groupDescription"
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="isPrivate" className="text-right">
              Private
            </Label>
            <Switch
              id="isPrivate"
              checked={isPrivate}
              onCheckedChange={setIsPrivate}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="paymentType" className="text-right">
              Payment Type
            </Label>
            <RadioGroup
              id="paymentType"
              value={paymentType}
              onValueChange={setPaymentType}
              className="col-span-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time">One-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="recurring" id="recurring" />
                <Label htmlFor="recurring">Recurring</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="currency" className="text-right">
              Currency
            </Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((curr) => (
                  <SelectItem key={curr} value={curr}>
                    {curr}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {paymentType === "one-time" ? (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="oneTimePrice" className="text-right">
                Price
              </Label>
              <Input
                id="oneTimePrice"
                value={oneTimePrice}
                onChange={(e) => setOneTimePrice(e.target.value)}
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                className="col-span-3"
              />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Frequencies</Label>
                <div className="col-span-3 space-y-2">
                  {frequencies.map((freq) => (
                    <div key={freq} className="flex items-center space-x-2">
                      <Checkbox
                        id={freq}
                        checked={selectedFrequencies.includes(freq)}
                        onCheckedChange={(checked) => {
                          setSelectedFrequencies(
                            checked
                              ? [...selectedFrequencies, freq]
                              : selectedFrequencies.filter((f) => f !== freq)
                          );
                        }}
                      />
                      <Label htmlFor={freq}>
                        {freq.charAt(0).toUpperCase() + freq.slice(1)}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              {selectedFrequencies.map((freq) => (
                <div key={freq} className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`price-${freq}`} className="text-right">
                    {freq.charAt(0).toUpperCase() + freq.slice(1)} Price
                  </Label>
                  <Input
                    id={`price-${freq}`}
                    value={recurringPrices[freq]}
                    onChange={(e) =>
                      setRecurringPrices({
                        ...recurringPrices,
                        [freq]: e.target.value,
                      })
                    }
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className="col-span-3"
                  />
                </div>
              ))}
            </>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="discountCode" className="text-right">
              Discount
            </Label>
            <div className="col-span-3 flex space-x-2">
              <Input
                id="discountCode"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Code"
                className="flex-1"
              />
              <Input
                id="discountPercentage"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
                type="number"
                min="0"
                max="100"
                placeholder="%"
                className="w-20"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="paymentInstructions" className="text-right">
              Payment Instructions
            </Label>
            <Textarea
              id="paymentInstructions"
              value={paymentInstructions}
              onChange={(e) => setPaymentInstructions(e.target.value)}
              placeholder="Optional: Add any additional payment instructions or notes"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleCreateGroup}>
            Create Paid Group
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
