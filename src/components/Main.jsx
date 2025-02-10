import { Typography } from "@material-tailwind/react";
import React from "react";
import Projects from "./Projects";
import DesignFuture from "./DesignFuture";
import Image from "next/image";

const solutionCards = [
  {
    sr: "01",
    title: "Process Engineering",
    desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  },
  {
    sr: "02",
    title: "Construction Services",
    desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  },
  {
    sr: "03",
    title: "Civil Engineering",
    desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  },
  {
    sr: "04",
    title: "Electrical Engineering",
    desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  },
  {
    sr: "05",
    title: "Chemistry and Metallurgy",
    desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  },
  {
    sr: "06",
    title: "Specialty Services",
    desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  },
];

const Main = () => {
  return (
    <div className="">
      <div className="relative w-full h-[680px]">
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
      <div className="container mx-auto px-4 pt-10">
        <div>
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
                <Typography className="text-2xl font-bold py-2">
                  {item.title}
                </Typography>
                <Typography>{item.desc}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <Projects />
      </div>
      <div className="container mx-auto px-4 py-10">
        <DesignFuture />
      </div>
    </div>
  );
};

export default Main;
