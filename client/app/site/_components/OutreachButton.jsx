"use client";

import { sendEmail } from "@/actions/serverActions";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRightToLine } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DemoFormPage({ text, classname }) {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);

    try {
      // Invoke the Server Action
      await sendEmail(formData);
      setEmailSent(true); // Update state on success
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className={classname} asChild>
          <div>
            {text}
            <ArrowRightToLine className="ml-2 h-5 w-5" />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Custom Demo</DialogTitle>
          <DialogDescription>
            Send me a message and I'll get back to you so we can book a call
          </DialogDescription>
        </DialogHeader>
        <div>
          {!emailSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" name="name" placeholder="Your Name" required />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <Textarea
                name="message"
                placeholder="I would like to request a telegram bot for my ............."
                required
              ></Textarea>
              <Button type="submit">Request Custom Demo</Button>
            </form>
          ) : (
            <Button onClick={() => window.open("https://wa.link/mepocf")}>
              Connect with me on WhatsApp
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
