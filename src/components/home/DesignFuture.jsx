import { Typography } from "@material-tailwind/react";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";

const designFuture = [
  {
    sr: "01",
    icon: <HiOutlineSquare3Stack3D />,
    title: "We Develop Unique Projects",
    desc: "Our expertise and passion for creating innovative solutions",
  },
  {
    sr: "02",
    icon: <HiOutlineSquare3Stack3D />,
    title: "We Value Convenience and Functionality",
    desc: "Our solutions are designed with the user in mind, ensuring ease of use and practicality.",
  },
  {
    sr: "03",
    icon: <HiOutlineSquare3Stack3D />,
    title: "Experience Allows Us to Implement Ideas",
    desc: "With years of experience, we transform concepts into successful, tangible projects.",
  },
  {
    sr: "04",
    icon: <HiOutlineSquare3Stack3D />,
    title: "We Offer Innovative Technologies",
    desc: "We integrate cutting-edge technology to create forward-thinking solutions that drive progress.",
  },
  {
    sr: "05",
    icon: <HiOutlineSquare3Stack3D />,
    title: "We Focus on Long-term Relationships",
    desc: "Building lasting partnerships with our clients is at the heart of our business philosophy.",
  },
];

const DesignFuture = () => {
  return (
    <div>
      <div>
        <Typography className="uppercase">What we do</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:w-full">
          <Typography className="font-bold w-[400px]" variant="h2">
            <span className="text-[#5ba1b5]">Design Future</span> with
            Excellence
          </Typography>
          <div>
            <ul>
              <div className="flex items-center">
                <GoDotFill className="flex items-center text-[#5ba1b5]" />
                <li className="flex items-center text-lg">
                  Building the future with ideas
                </li>
              </div>
              <div className="flex items-center">
                <GoDotFill className="flex items-center text-[#5ba1b5]" />
                <li className="text-lg">Designing future with excellence</li>
              </div>
              <div className="flex items-center">
                <GoDotFill className="flex items-center text-[#5ba1b5]" />
                <li className="text-lg">Discovering possibility concrete</li>
              </div>
            </ul>
          </div>
        </div>

        {designFuture.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-500 hover:border-[#5ba1b5] p-4 rounded-lg md:w-[320px]"
          >
            <div className="text-[50px] py-2">{item.icon}</div>
            <div className="py-2">
              <Typography variant="h4">{item.title}</Typography>
            </div>
            <div className="py-2">
              <Typography>{item.desc}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignFuture;
