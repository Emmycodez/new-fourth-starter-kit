import { heroImage } from "@/images";
import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16">
      <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl border-2 sm:border-4 lg:border-8 border-primary shadow-xl">
        <Image src={heroImage} alt="hero" />
      </div>
    </div>
  );
};

export default HeroImage;
