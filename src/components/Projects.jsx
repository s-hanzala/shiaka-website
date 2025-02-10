import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

const projectArray = [
  {
    id: 1,
    title: "Jazzy Elite Construction Shopping",
    image: "/01.jpg",
    location: "100 Sunrise Ct Hamel, Minnesota",
  },
  {
    id: 2,
    title: "Fresh Concept Construction Renovation",
    image: "/02.jpg",
    location: "Rocky Highway Port Juana",
  },
  {
    id: 3,
    title: "Installation a Supply System",
    image: "/03.jpg",
    location: "Wuckert Junctions Hermannberg",
  },
  {
    id: 4,
    title: "Reconstruction of Old Factory Building",
    image: "/04.jpg",
    location: "Stoltenberg Underpass Blockbury",
  },
];

const Projects = () => {
  return (
    <div>
      <div className="container mx-auto pt-4">
        <div>
          <Typography className="uppercase">What we do</Typography>
        </div>
        <div>
          <Typography className="font-bold w-[400px]" variant="h2">
            Our <span className="text-[#ab7511]">Projects</span>
          </Typography>
        </div>
        <div className="py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projectArray.map((item) => (
              <div key={item.id} className="relative">
                <div className=" rounded-lg">
                  <Image
                    src={item.image}
                    width={1200}
                    height={1200}
                    alt={item.title}
                    className="!w-[550px] md:w-[200px] rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div>
                  <Typography className="text-3xl font-bold pt-4">
                    {item.title}
                  </Typography>
                </div>
                <div className="border-t-2 border-[#ab7511] my-4 md:w-[550px]"></div>
                <div className="flex justify-between md:w-[550px]">
                  <div className="flex">
                    <div>
                      <MdOutlineLocationOn className="text-2xl text-[#ab7511]" />
                    </div>
                    <div>
                      <Typography>{item.location}</Typography>
                    </div>
                  </div>
                  <div>
                    <Typography className="text-lg uppercase text-[#ab7511]">
                      Details
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
