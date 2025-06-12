import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { wnV } from "react-icons/io5"; // Phone icon
import { rRo } from "react-icons/md"; // Email icon
import { o9J } from "react-icons/fa"; // Location icon

function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Message from GM Section */}
      <div className="container mx-auto px-4">
        <div>
          <Typography variant="h2" className="text-[#5ba1b5] text-center py-12">
            Message from General Manager
          </Typography>
        </div>

        <div>
          <Typography className="text-justify leading-8">
            Welcome to Shiaka Alarobah, a leading provider of construction
            services for clients across [geographic region/industry]. Our team
            of experts is dedicated to delivering innovative solutions that meet
            the unique needs of each and every project. With years of experience
            in the industry, we have built a reputation for excellence in
            everything we do. From small renovations to large-scale
            developments, we bring the same level of commitment and attention to
            detail to every job we undertake.
          </Typography>

          <Typography className="text-justify leading-8 py-2">
            At Shiaka Alarobah, we believe that our success is built on a
            foundation of strong relationships with our clients, partners, and
            employees. We prioritize communication, collaboration, and
            transparency at every stage of the project, ensuring that everyone
            is on the same page and working towards the same goals.
          </Typography>

          <Typography className="text-justify leading-8">
            As a company, we are committed to making a positive impact on the
            communities where we work. We strive to be good neighbors,
            responsible stewards of the environment, and advocates for
            diversity, equity, and inclusion.
          </Typography>

          <Typography className="text-justify leading-8 py-2">
            Thank you for considering Shiaka Alarobah for your construction
            needs. We look forward to the opportunity to work with you and help
            bring your vision to life.
          </Typography>

          <Typography className="text-justify leading-8">
            Sincerely,
            <br />
            Nawaf Sheikh
          </Typography>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 pt-20">
        <div className="flex justify-between">
          <div>
            {/* First Team Member */}
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
                <wnV className="text-[#51a1b5] text-lg" />
                <Typography className="" href="tel:+9660592700914">
                  +966 0592700914
                </Typography>
                -
                <Typography className="" href="tel:+9660540492054">
                  +966 0540492054
                </Typography>
              </div>

              <div className="flex items-center gap-2">
                <rRo className="text-[#51a1b5] text-lg" />
                <Typography
                  className=""
                  href="mailto:nawaf.sheikh@shiaka-alarobah.com"
                >
                  nawaf.sheikh@shiaka-alarobah.com
                </Typography>
              </div>

              <div className="flex items-center gap-2">
                <o9J className="text-[#51a1b5] text-lg" />
                <Typography className="">
                  Makkah, Wali Al-Ahad Scheme No. (1), (32) Street
                </Typography>
              </div>
            </div>

            {/* Second Team Member */}
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
                <wnV className="text-[#51a1b5] text-lg" />
                <Typography className="" href="tel:+9660592700914">
                  <a href="tel:+9660592700914">+966 0592700914</a>
                </Typography>
                -
                <Typography className="" href="tel:+9660540492054">
                  <a href="tel:+9660540492054">+966 0540492054</a>
                </Typography>
              </div>

              <div className="flex items-center gap-2">
                <rRo className="text-[#51a1b5] text-lg" />
                <Typography
                  className="hover:text-[#5ba1b5]"
                  href="mailto:yousuf.sheikh@shiaka-alarobah.com"
                >
                  <a href="mailto:yousuf.sheikh@shiaka-alarobah.com">
                    yousuf.sheikh@shiaka-alarobah.com
                  </a>
                </Typography>
              </div>

              <div className="flex items-center gap-2">
                <o9J className="text-[#51a1b5] text-lg" />
                <Typography className="">
                  Makkah, Wali Al-Ahad Scheme No. (1), (32) Street
                </Typography>
              </div>
            </div>
          </div>

          {/* Background Image */}
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
}

export default AboutPage;
