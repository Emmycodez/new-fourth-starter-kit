"use client";

import { ThemesProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/providers/UserProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can add any other weights needed
  display: "swap",
});

const SiteLayout = ({ children }) => {
  return (
    <ThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <UserProvider>
          <div className={`${poppins.className} `}>
            <Navbar />
            {children}
          </div>
        </UserProvider>
      </AuthProvider>
    </ThemesProvider>
  );
};

export default SiteLayout;
