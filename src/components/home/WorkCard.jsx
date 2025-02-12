import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { LuBuilding } from "react-icons/lu";
import { MdAutorenew } from "react-icons/md";

const solutionCards = [
  {
    sr: <LuBuilding className="text-2xl" />,
    title: "Clading Work",
    desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  },
  {
    sr: (
      <Image
        src="/tank.png"
        alt="Tank"
        className="filter brightness-0 invert"
        width={40}
        height={40}
      />
    ),
    title: "Tank Cleaning",
    desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  },
  {
    sr: <MdAutorenew />,
    title: "Renovation",
    desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  },
  {
    sr: (
      <Image
        src="/kitchenhood.png"
        alt="Tank"
        className="filter brightness-0 invert"
        width={40}
        height={40}
      />
    ),
    title: "Kitchen Hood Cleaning",
    desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  },
  //   {
  //   sr: "05",
  //   title: "Chemistry and Metallurgy",
  //   desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  // },
  // {
  //   sr: "06",
  //   title: "Specialty Services",
  //   desc: "We help buildings achieve their most ambitious goals by designing efficient, sustainable, and resilient infrastructure.",
  // },
];

const WorkCard = () => {
  return (
    <div>
      <div>
        <Typography className="uppercase">What we do</Typography>
      </div>
      <div className="">
        <Typography className="font-bold md:w-[400px]" variant="h2">
          Specialists In <br />
          <span className="text-[#5ba1b5]">Modern Construction</span>
        </Typography>
      </div>

      <div className="grid md:grid-cols-2 2xl:grid-cols-4 place-items-center py-4">
        {solutionCards.map((service, index) => (
          <div
            key={index}
            className="group h-80 w-[305px] [perspective:2000px]"
          >
            <div className="relative h-full w-full rounded-xl shadow-xl bg-card transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Face */}
              <div className="absolute w-full h-full flex flex-col justify-center items-center rounded-xl [backface-visibility:hidden] [transform-style:preserve-3d]">
                {/* <Image
                  className="cursor-pointer object-left flex justify-center items-center rounded-xl w-[100px] transform transition-transform duration-500 group-hover:[transform:translateZ(50px)]"
                  src={service.img}
                  alt={service.title}
                  width={320}
                  height={320}
                /> */}
                <div className="py-2 text-white">{service.sr}</div>

                <Typography className="md:my-6 text-2xl text-white flex justify-center items-center transform transition-transform duration-500 group-hover:[transform:translateZ(200px)] group-hover:scale-125 font-semibold">
                  {service.title}
                </Typography>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 h-full w-full rounded-xl px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-card [transform-style:preserve-3d]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h2 className="text-2xl font-bold mb-4 text-white transform transition-transform duration-500 group-hover:[transform:translateZ(200px)] group-hover:scale-150">
                    {service.title}
                  </h2>
                  <p className="text-lg text-pretty text-center mb-4 text-white transform transition-transform duration-500 group-hover:[transform:translateZ(150px)] group-hover:scale-110">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
