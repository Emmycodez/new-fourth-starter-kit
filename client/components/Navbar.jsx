"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import { logo } from "@/images";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.includes("/site/dashboard")) return null;

  const NavLinks = () => (
    <div className="flex gap-8 text-lg">
      <Link href="" className="hover:underline">Pricing</Link>
      <Link href="" className="hover:underline">Demo</Link>
      <Link href="" className="hover:underline">FAQ</Link>
    </div>
  );

  return (
    <div className="flex  min-w-full fixed justify-between  items-center py-2 px-4 border-b z-10 border-secondary">
      {/* Logo Section */}
      <div className="font-bold text-xl flex items-center justify-center">
        <Image src={logo} alt="GroupGuard" className="w-[40px] h-[40px]" />
        GroupGuard
      </div>

      <div>
        <NavLinks />
      </div>

      {/* Avatar and Mode Toggle Section */}
      <div className="flex items-center space-x-4">
        <Avatar className="hidden md:block">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ModeToggle />

        {/* Hamburger Menu for Mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-4">
              <NavLinks />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
