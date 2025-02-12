import { Typography } from "@material-tailwind/react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="px-4 pt-16 mx-auto md:px-24 lg:px-32 border-t-2 border-[#5ba1b5] bg-[#001f3f] text-white">
      {/* <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3"> */}
      <div className="grid row-gap-6 mb-8 sm:grid-cols-2 lg:grid gap-[6px] grid-cols-1 lg:grid-cols-[300px_1fr_300px]  xl:grid-cols-[500px_300px_300px_150px]">
        <div className="sm:col-span-1">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className=" text-xl font-bold tracking-wide uppercase mb-3">
              About Us
            </span>
          </a>
          <div className="lg:max-w-sm">
            <Typography className="text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </Typography>
            <Typography className="mt-4 text-sm">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </Typography>
          </div>
        </div>
        <div>
          <Typography className="text-base font-bold tracking-wide mb-3">
            Company
          </Typography>
          <ul>
            <li>
              <Link href="/">
                <Typography>Home</Typography>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Typography>About</Typography>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <Typography>Services</Typography>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <Typography>Gallery</Typography>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <Typography>Contact</Typography>
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <Typography className="text-base font-bold tracking-wide mb-3">
            Contact
          </Typography>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#5ba1b5]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <a
              aria-label="Our phone"
              className="transition-colors cursor-pointer duration-300 text-deep-purple-accent-400 hover:text-[#5ba1b5] flex items-center"
            >
              Makkah, Wali Al-Ahad Scheme No. (1), (32) Street
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#5ba1b5]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <div className="">
              <a
                href="tel:+966540492054"
                aria-label="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-[#5ba1b5] flex items-center"
              >
                +96 654 049 2054
              </a>
              <a
                href="tel:+966555592740"
                aria-label="Our phone"
                className="transition-colors cursor-pointer duration-300 text-deep-purple-accent-400 hover:text-[#5ba1b5] flex items-center"
              >
                +96 655 559 2740
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#5ba1b5]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-[#5ba1b5] flex items-center"
            >
              shiakaalarobah@gmail.com
            </a>
          </div>
        </div>
        <div>
          <Typography className="text-base font-bold tracking-wide mb-3">
            Follow Us
          </Typography>
          <div className="flex items-center mt-6 space-x-3">
            <div className="text-3xl cursor-pointer hover:text-[#5ba1b5]">
              <CiFacebook />
            </div>
            <div className="text-2xl cursor-pointer hover:text-[#5ba1b5]">
              <FaInstagram />
            </div>
            <div className="text-2xl cursor-pointer hover:text-[#5ba1b5]">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <Typography className="text-sm text-gray-600">
          © Copyright {currentYear}. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}
