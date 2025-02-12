import { Typography } from "@material-tailwind/react";
import React from "react";
import Projects from "./Projects";
import DesignFuture from "./DesignFuture";
import Image from "next/image";
import WorkCard from "./WorkCard";
import CoreValues from "./CoreValues";

const Main = () => {
  return (
    <div className="">
      <div className="relative w-full h-[640px]">
        <div className="absolute inset-0 building-bg bg-[#001f3f]">
          <div className=" text-white text-4xl font-bold z-10 px-4 md:px-32 flex flex-col h-full justify-center">
            <div className="relative">
              <Image
                src={"/logo.png"}
                width={1200}
                height={1200}
                alt={"logo"}
                className="w-[550px] md:w-[450px] relative md:-right-[25px] bottom-[0.5rem] "
              />
            </div>
            <div className="relative bottom-40">
              <Typography className="text-[#1b3734] font-bold text-4xl"></Typography>
              <Typography className="text-[#ab7511] text-xl"></Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        {/* <div>
          <Typography className="uppercase">What we do</Typography>
        </div>
        <div>
          <Typography className="font-bold md:w-[400px]" variant="h2">
            Multi-Disciplined{" "}
            <span className="text-[#ab7511]">Engineering Solutions</span>
          </Typography>
        </div>
        <div className="pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {solutionCards.map((item, index) => (
              <div
                className="border border-gray-500 hover:border-[#ab7511] p-4 rounded-xl md:w-[380px]"
                key={index}
              >
                <Typography className="text-4xl py-2 text-gray-400">
                  {item.sr}
                </Typography>
                <div className="text-4xl py-2 text-gray-400 flex justify-center">
                  {item.sr}
                </div>
                <Typography className="text-2xl font-bold py-2 text-center">
                  {item.title}
                </Typography>
                <Typography className="text-center">{item.desc}</Typography>
              </div>
            ))}
          </div>
        </div> */}
        <WorkCard />
      </div>
      <div className="bg-[#001f3f]">
        <div className="container mx-auto px-4 text-white">
          <Projects />
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <DesignFuture />
      </div>
      <div className="container mx-auto px-4 py-10">
        <CoreValues />
      </div>
    </div>
  );
};

export default Main;
