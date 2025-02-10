import { Typography } from "@material-tailwind/react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

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
    <div className="px-4 pt-16 mx-auto md:px-24 lg:px-32 border-t-2 border-[#ab7511]">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-1">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className=" text-xl font-bold tracking-wide text-gray-800 uppercase">
              About Us
            </span>
          </a>
          {/* <div className="mt-6 lg:max-w-sm">
            <Typography className="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </Typography>
            <Typography className="mt-4 text-sm text-gray-800">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </Typography>
          </div> */}
        </div>
        <div className="space-y-2 text-sm">
          <Typography className="text-base font-bold tracking-wide text-gray-900 mb-6">
            Contacts
          </Typography>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#ab7511]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-[#ab7511] flex items-center"
            >
              123 456 7890
            </a>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#ab7511]"
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
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-[#ab7511] flex items-center"
            >
              mail@gmail.com
            </a>
          </div>
          {/* <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#ab7511]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-[#ab7511] flex items-center"
            >
              Makkah
            </a>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#ab7511]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-[#ab7511] flex items-center"
            >
              Saturday - Thursday: 9:00 AM - 6:00 PM
            </a>
          </div> */}
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-6 space-x-3">
            <div className="text-2xl cursor-pointer hover:text-[#ab7511]">
              <CiFacebook />
            </div>
            <div className="text-2xl cursor-pointer hover:text-[#ab7511]">
              <FaInstagram />
            </div>
            <div className="text-2xl cursor-pointer hover:text-[#ab7511]">
              <FaXTwitter />
            </div>
            <div className="text-2xl cursor-pointer hover:text-[#ab7511]">
              <AiOutlineYoutube />
            </div>
          </div>
          {/* <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3716.6337078349866!2d39.69599151611328!3d21.325485229492188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21663412cad7d%3A0x2a1ef57d3c74d786!2sWalyal%20Ahd%20Dist.%2024567%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1677782062188!5m2!1sen!2sbd"
              frameborder="0"
              className="border border-[#ab7511] rounded-lg"
            ></iframe>
          </div> */}
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
