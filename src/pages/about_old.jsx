import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <div className="bg-[#001f3f]">
        <div className="container mx-auto px-4 py-20">
          <div>
            <Typography
              variant="h2"
              className="text-white flex justify-center pb-5"
            >
              About Us
            </Typography>
          </div>
          <div>
            <Typography className="text-white justify-center text-justify leading-8">
              Since 2025, our construction company has been providing
              exceptional services to clients throughout KSA, with a base in
              Makkah. Our team offers comprehensive solutions for construction,
              renovation, cladding, and water tank services. We utilize
              top-quality materials and innovative techniques to ensure timely
              completion and client satisfaction. We understand the importance
              of delivering projects within budget, which is why we work closely
              with our clients to provide transparent and reliable cost
              estimates. Our commitment to excellence and customer satisfaction
              has earned us a reputation as a trusted construction company in
              the region.{" "}
              <span className="hover:text-[#5ba1b5]">
                <Link href="/contact">Contact us</Link>
              </span>{" "}
              today to discuss your construction needs.
            </Typography>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-20">
        <div className="flex justify-between">
          <div>
            <div className="">
              <div>
                <Typography variant="h2" className="text-black uppercase">
                  Nawaf Sheikh
                </Typography>
                <Typography className="text-[#51a1b5]">
                  General Manager
                </Typography>
              </div>
              <div className="border-t-2 border-[#51a1b5] w-full my-4"></div>
              <div className="flex items-center gap-2">
                <FiPhoneCall className="text-[#51a1b5] text-lg" />
                <Typography className="" href="tel:+9660592700914">+966 0592700914</Typography>-
                <Typography className="" href="tel:+9660540492054">+966 0540492054</Typography>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineMailOutline className="text-[#51a1b5] text-lg" />
                <Typography className="" href="mailto:nawaf.sheikh@shiaka-alarobah.com">
                  nawaf.sheikh@shiaka-alarobah.com
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationOutline className="text-[#51a1b5] text-lg" />
                <Typography className="">
                  Makkah, Wali Al-Ahad Scheme No. (1), (32) Street
                </Typography>
              </div>
            </div>
            <div className="py-10">
              <div>
                <Typography variant="h2" className="text-black uppercase">
                  Mohammad Yousuf Sheikh
                </Typography>
                <Typography className="text-[#51a1b5]">
                  Management Manager
                </Typography>
              </div>
              <div className="border-t-2 border-[#51a1b5] w-full my-4"></div>
              <div className="flex items-center gap-2">
                <FiPhoneCall className="text-[#51a1b5] text-lg" />
                <Typography className="" href="tel:+9660592700914">
                    <a href="tel:+9660592700914">+966 0592700914</a>
                </Typography>-
                <Typography className="" href="tel:+9660540492054">
                    <a href="tel:+9660540492054">+966 0540492054</a>
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineMailOutline className="text-[#51a1b5] text-lg" />
                <Typography className="hover:text-[#5ba1b5]" href="mailto:yousuf.sheikh@shiaka-alarobah.com">
                    <a href="mailto:yousuf.sheikh@shiaka-alarobah.com">yousuf.sheikh@shiaka-alarobah.com</a>
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationOutline className="text-[#51a1b5] text-lg" />
                <Typography className="">
                  Makkah, Wali Al-Ahad Scheme No. (1), (32) Street
                </Typography>
              </div>
            </div>
          </div>
          <Image
            src="/building.png"
            alt="about"
            width={1000}
            height={1000}
            className="w-[55%] opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
