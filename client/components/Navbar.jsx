"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import { logo } from "@/images";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hide Navbar on specific routes
  if (pathname.includes("/site/dashboard")) return null;

  const navItems = [
    { href: "/site/pricing", label: "Pricing" },
    { href: "/site/demo", label: "Demo" },
    { href: "/site/faq", label: "FAQ" },
  ];

  return (
    <nav className="bg-background border-b border-secondary z-10 fixed w-full md-[25px]mb-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-evenly h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="GroupGuard" className="w-[40px] h-[40px]" />
              <span className="font-bold text-xl">GroupShepherd</span>
            </Link>
          </div>

          {/* Centered Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex flex-grow items-center justify-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Avatar and Mode Toggle Section */}
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Avatar className="hidden md:block">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Mobile Menu Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5 space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-base font-medium leading-none">Tom Cook</span>
                  <span className="text-sm text-gray-500">tom@example.com</span>
                </div>
                <div className="ml-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
