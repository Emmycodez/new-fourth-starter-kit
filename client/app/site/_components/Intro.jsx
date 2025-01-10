import { YouTubeVideo } from "@/components/YoutubeVideo";
import { makerpic } from "@/images";
import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className=" pt-12 sm:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 lg:px-8 mx-auto py-12 sm:py-16 lg:py-20 xl:py-32 ">
      <div className="flex items-center justify-center mx-auto">
        <div className="flex items-start justify-center max-w-[700px]">
          <div className="w-full">
            <Image
              src={makerpic}
              alt="Oamen emmanuels picture"
              className="w-[200px] h-[200px] rounded-lg object-contain"
            />
          </div>
          <div className="space-y-4">
            <p>
              Hey there, i'm Oamen Emmanuel. I am the creator of the group
              shepherd software and bot to help manage payment in telegram
              communities
            </p>
            <p>
              I observed that many onine educators as well as crypto and forex
              traders were creating large communities on Telegram but had no way
              to manage their payments.
            </p>
            <p>
              They couldn't enforce payment rules and charge subscription
              payments from members of their communitie
            </p>
            <p>
              Especially forex and crypto traders who give out free signals in
              their communities, signals which they could easily charge monthly
              subscriptions for
            </p>
            <p>And so i set out to build a solution to solve this problem.</p>
            <p>
              Group shepherd isn't yet available for mass distribution but we
              are currently building custom solutioins and bots for individuals
              to manage their communities
            </p>
          </div>
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
