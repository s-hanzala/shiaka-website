import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const textElem = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About Us" },
  { link: "/services", name: "Services" },
  { link: "/gallery", name: "Gallery" },
  { link: "/contact", name: "Contact Us" },
];


function NavList() {
  return (
    <ul className="my-1 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6 border-none">
      {textElem.map((item, index) => (
        <Typography
          as="li"
          color="blue-gray"
          className="p-1 font-bold text-lg text-[#001f3f]"
          key={index}
        >
          <Link
            href={item.link}
            className="flex items-center hover:text-white transition-colors"
          >
            {item.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="container mx-auto px-4 md:px-32 py-2 w-full rounded-none shadow-none max-w-none !bg-[#388fa8] border-none border-transparent sticky top-0 z-[99999]">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div>
          <Link href={"/"}>
            <img src="/nav-logo.png" width={60} alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
