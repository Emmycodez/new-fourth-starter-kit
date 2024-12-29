import { logo } from "@/images";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-6 flex justify-evenly mx-auto px-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-start mb-4">
              <div>
                <Image alt="logo" src={logo} width={30} height={30} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-center">Group Shepherd</h3>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              The easiest way to manage and monetize paid telegram communities
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">oamenemmanuel22@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Group Shepherd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
