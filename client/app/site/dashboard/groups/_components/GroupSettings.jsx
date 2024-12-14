"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const defaultRules = [
  { id: "no-spam", label: "No spam or self-promotion", enabled: true },
  { id: "be-respectful", label: "Be respectful to others", enabled: true },
  { id: "stay-on-topic", label: "Stay on topic", enabled: true },
  { id: "no-nsfw", label: "No NSFW content", enabled: true },
];

export default function GroupSettings({ group }) {
  const [rules, setRules] = useState(defaultRules);

  if (!group) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Group Settings</CardTitle>
          <CardDescription>
            Select a group to view and edit its settings
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const toggleRule = (id) => {
    setRules(
      rules.map((rule) =>
        rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings for {group.groupName}</CardTitle>
        <CardDescription>
          Manage your group&apos;s settings and rules
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="groupName">Group Name</Label>
          <Input id="groupName" defaultValue={group.groupName} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="groupDescription">Description</Label>
          <Textarea id="groupDescription" defaultValue={group.description} />
        </div>
        <div>
          <h3 className="text-lg font-medium">Group Rules</h3>
          <p className="text-sm text-muted-foreground">
            Enable or disable rules for your group
          </p>
          <div className="mt-4 space-y-4">
            {rules.map((rule) => (
              <div key={rule.id} className="flex items-center justify-between">
                <Label
                  htmlFor={rule.id}
                  className="flex items-center cursor-pointer"
                >
                  {rule.label}
                </Label>
                <Switch
                  id={rule.id}
                  checked={rule.enabled}
                  onCheckedChange={() => toggleRule(rule.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
