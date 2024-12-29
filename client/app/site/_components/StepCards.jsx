"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { heroImage } from "@/images";

export function ThreeDCardDemo({ title, description, image, id }) {
  return (
    <CardContainer className="bg-background">
      <CardBody className="bg-background relative group/card dark:hover:shadow-2xl rounded-xl border py-4 px-6 flex flex-col">
        <CardItem
          translateZ="50"
          className="text-xl font-bold flex items-center justify-between mb-2"
        >
          <div className="py-1 px-2 rounded-md font-semibold bg-primary text-background mr-2">
            {id}
          </div>
          <div className="break-words flex-1">{title}</div>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-md dark:text-neutral-300 flex-grow mb-2"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-auto"
        >
          <div className="relative w-[300px] h-[200px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="300px"
              className="object-fit rounded-lg"
            />
          </div>
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
