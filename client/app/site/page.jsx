import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
// import { BorderBeam } from "../magicui/border-beam";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import HeroSection from "./_components/HeroSection";
import Perks from "./_components/Perks";
import HeroImage from "./_components/HeroImage";
import Steps from "./_components/Steps";
import UseCases from "./_components/UseCases";
import MeanToYou from "./_components/MeanToYou";
import Analytics from "./_components/Analytics";
import Pricing from "./_components/Pricing";
import PricingCalculator from "./_components/Pricing";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

const SitePage = () => {
  return (
    <div>
      <HeroSection />
      <HeroImage/>
      <Perks />
      <Steps/>
      <UseCases/>
      <MeanToYou/>
      <Analytics/>
      <PricingCalculator/>
      <CTA/>
    <Footer/>

    </div>
    // Effortlessly collect monthly recurring payments from group members
    // Protect your paid groups on auto-pilot
    // Automatically kickout unpaid users
  );
};

export default SitePage;
