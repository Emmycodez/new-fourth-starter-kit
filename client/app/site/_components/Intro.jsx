import { YouTubeVideo } from "@/components/YoutubeVideo";
import { makerpic } from "@/images";
import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className=" pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto py-12 sm:py-16 lg:py-20 xl:py-32 ">
      <div className="flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center max-w-3xl space-y-6 sm:space-y-0 sm:space-x-8">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <Image
              src={makerpic}
              alt="Oamen Emmanuel's picture"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-4 text-center sm:text-left">
            <p className="text-lg font-medium">
              Hey there, I&apos;m Oamen Emmanuel. I am the creator of the Group
              Shepherd software and bot to help manage payment in Telegram
              communities.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              I observed that many online educators, as well as crypto and forex
              traders, were creating large communities on Telegram but had no
              way to manage their payments.
            </p>
          </div>
        </div>

        {/* Additional Paragraphs */}
        <div className="mt-8 space-y-4 text-sm sm:text-base  leading-relaxed max-w-3xl">
          <p>
            They couldn&apos;t enforce payment rules and charge subscription payments
            from members of their communities.
          </p>
          <p>
            Especially forex and crypto traders who give out free signals in
            their communities, signals which they could easily charge monthly
            subscriptions for.
          </p>
          <p>And so I set out to build a solution to solve this problem.</p>
          <p>
            Group Shepherd isn&apos;t yet available for mass distribution, but we are
            currently building custom solutions and bots for individuals to
            manage their communities.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center lg:max-w-3xl mb-[70px] mt-8">
        <h2 className="font-display font-bold tracking-tight text-4xl text-center">
          Would you want to see how our custom demo works? Check it out below
        </h2>
        <div className="mt-8">
          <YouTubeVideo
            videoId="OLXFVDAdEjI"
            title="How To Setup Recurring Payment Subscriptions in your Telegram Community"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
