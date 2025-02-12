import { Typography } from "@material-tailwind/react";
import React from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { BsGearFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa6";

const coreValuesData = [
  {
    icon: (
      <div className="bg-[#154241] hover:bg-[#5ba1b5] hover:scale-95 duration-75 rounded-full p-4 icon-hover-pulse">
        <FaHouseChimney className="text-[#dfdfdf] text-[50px] w-full h-full" />
      </div>
    ),
    title: "Great Services",
    description:
      "Our services' section highlights the range of services we offer, from project planning to construction and beyond. We are dedicated to delivering exceptional service to each and every client, working closely with you to understand your needs and deliver solutions that exceed your expectations.",
  },
  {
    icon: (
      <div className="bg-[#2f4d74] hover:bg-[#5ba1b5] hover:scale-95 duration-75 rounded-full p-4 icon-hover-pulse">
        <BsGearFill className="text-[#dfdfdf] text-[50px] w-full h-full" />
      </div>
    ),
    title: "Highest Standards",
    description:
      "We showcase our commitment to excellence in everything we do. From using high-quality materials to employing skilled professionals, we strive to meet the highest standards of safety, quality, and efficiency. We are always pushing ourselves to exceed expectations and deliver outstanding results.",
  },
  {
    icon: (
      <div className="bg-[#ac3511] hover:bg-[#5ba1b5] hover:scale-95 duration-75 rounded-full p-4 icon-hover-pulse">
        <HiUserGroup className="text-[#dfdfdf] text-[50px] w-full h-full" />
      </div>
    ),
    title: "Professional Team",
    description:
      "we highlight the expertise and experience of our team of professionals. From project managers to construction workers, each member of our team is dedicated to delivering exceptional service and results. We prioritize ongoing training and professional development to ensure that our team remains at the forefront of the industry.",
  },
  {
    icon: (
      <div className="bg-[#374607] hover:bg-[#5ba1b5] hover:scale-95 duration-75 rounded-full p-4 icon-hover-pulse">
        <FaLightbulb className="text-[#dfdfdf] text-[50px] w-full h-full" />
      </div>
    ),
    title: "Creative Solutions",
    description:
      "We showcase our ability to think outside the box and deliver innovative solutions to even the most complex construction challenges. Our team of experts is always seeking new ways to improve efficiency, reduce costs, and enhance the overall quality of our work. We pride ourselves on being a partner that you can trust to bring your vision to life.",
  },
];

const CoreValues = () => {
  return (
    <div>
      <div>
        <Typography className="font-bold md:w-[400px]" variant="h2">
          Our <span className="text-[#5ba1b5]">Core Values</span>
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {coreValuesData.map((value, index) => (
          <div key={index} className="p-4">
            <div className="flex justify-center items-center pb-4">
              {value.icon}
            </div>
            <div className="pb-4">
              <Typography
                variant="h6"
                className="font-medium text-center text-lg"
              >
                <span>{value.title}</span>
              </Typography>
            </div>
            <div>
              <Typography className="text-center leading-7">
                {value.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
