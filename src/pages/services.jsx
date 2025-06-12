import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { MMR } from "react-icons/md";
import { o5M } from "react-icons/gi";
// import { CMH } from "react-icons/fa6";

const PageHeader = ({ title }) => {
  const displayTitle = title?.split("-")[1]?.trim() || title;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-[#001f3f]">
        <div className="py-20 flex justify-center">
          <Typography
            variant="h2"
            className="text-white flex justify-center pb-5"
          >
            {displayTitle}
          </Typography>
        </div>
      </div>
    </div>
  );
};

function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("cladding");
  const [orientation, setOrientation] = useState("vertical");
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerWidth >= 1140 ? "vertical" : "horizontal");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const { tab } = router.query;
    if (tab) {
      setActiveTab(tab);
    }
  }, [router.query]);

  const serviceData = [
    {
      // icon: <MMR className="text-[28px] text-black" />,
      label: "Cladding Work",
      value: "cladding",
      heading: "Cladding Work",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      desc_2:
        "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made herself on the way.",
      points: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
      img: "/folder1/claddingservice1.jpg",
      contact: {
        title: "Do you need cladding service?",
        name: "Nawaf Sheikh",
        designation: "General Manager",
        phone: "+966 0592700914",
      },
    },
    {
      icon: (
        <Image
          src="/ac.png"
          alt="Tank"
          className="filter brightness-0 w-[28px]"
          width={40}
          height={40}
        />
      ),
      label: "A/C Duck Cleaning",
      value: "acduck",
      heading: "A/C Duck Cleaning",
      desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
      points: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
      img: "/folder1/acduck1.jpg",
      contact: {
        title: "Do you need A/C Duck Cleaning?",
        name: "Mohammad Yousuf",
        designation: "Operation Manager",
        phone: "+966 546664130",
      },
    },
    {
      icon: (
        <Image
          src="/kitchenhood.png"
          alt="Tank"
          className="filter bg-transparent w-[28px]"
          width={40}
          height={40}
        />
      ),
      label: "Kitchen Duck Cleaning",
      value: "kitchenduck",
      heading: "Kitchen Duck Cleaning",
      desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
      points: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
      img: "/folder1/kitchenduck1.png",
      contact: {
        title: "Do you need Kitchen Duck Cleaning?",
        name: "Mohammad Yousuf",
        designation: "Operation Manager",
        phone: "+966 546664130",
      },
    },
    {
      icon: (
        <Image
          src="/tank.png"
          alt="Tank"
          className="filter brightness-0 w-[28px]"
          width={40}
          height={40}
        />
      ),
      label: "Water Tank Cleaning",
      value: "water",
      heading: "Water Tank Cleaning",
      desc: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.",
      points: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
      img: "/folder1/watertank1.jpg",
      contact: {
        title: "Do you need Water Tank Cleaning?",
        name: "Mohammad Yousuf",
        designation: "Operation Manager",
        phone: "+966 546664130",
      },
    },
    {
      icon: (
        <Image
          src="/tank.png"
          alt="Tank"
          className="filter brightness-0 w-[28px]"
          width={40}
          height={40}
        />
      ),
      label: "Sewage Tank Cleaning",
      value: "sewage",
      heading: "Sewage Tank Cleaning",
      desc: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.",
      points: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
      img: "/folder1/sewagetank1.jpg",
      contact: {
        title: "Do you need Sewage Tank Cleaning?",
        name: "Mohammad Yousuf",
        designation: "Operation Manager",
        phone: "+966 546664130",
      },
    },
    {
      icon: <o5M className="text-[28px] text-black" />,
      label: "Construction & Renovation",
      value: "construction",
      heading: "Construction & Renovation",
      desc: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.",
      points: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
      img: "/folder1/construction1.jpg",
      contact: {
        title: "Do you need Construction & Renovation?",
        name: "Nawaf Sheikh",
        designation: "General Manager",
        phone: "+966 0592700914",
      },
    },
  ];

  return (
    <div className="container mx-auto px">
      <div className="">
        <Tabs
          value={activeTab}
          orientation={orientation}
          onChange={(value) => setActiveTab(value)}
        >
          <TabsHeader
            className="bg-transparent"
            indicatorProps={{
              className: "text-[#5ba1b5] !bg-transparent shadow-none",
            }}
          >
            {serviceData.map((service, index) => {
              const { label, icon, value } = service;
              const isLast = index === serviceData.length - 1;

              return (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={`flex justify-start border border-l-0 ${
                    isLast ? "border-b" : "border-b-0"
                  } border-gray-400 xl:w-[250px] py-6 ${
                    activeTab === value ? "text-[#5ba1b5]" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div>{icon}</div>
                    <div>{label}</div>
                  </div>
                </Tab>
              );
            })}
          </TabsHeader>

          <TabsBody>
            {serviceData.map((service) => {
              const { value, heading, desc, desc_2, points, img, contact } =
                service;

              return (
                <TabPanel
                  key={value}
                  value={value}
                  className="lg:ml-2 px1 transition-all duration-300"
                >
                  <Typography variant="h4" className="text-[#5ba1b5]">
                    {heading}
                  </Typography>

                  <Typography className="my-2 text-justify">{desc}</Typography>

                  <Typography className="my-2 text-justify">
                    {desc_2}
                  </Typography>

                  <ul>
                    {points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 border border-gray-400 my-2 px-2"
                      >
                        {/* <CMH className="text-[#5ba1b5] text-lg" /> */}
                        <Typography className="leading-8">{point}</Typography>
                      </li>
                    ))}
                  </ul>

                  <div className="my-4">
                    <Image
                      src={img}
                      alt="Service Image"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-white bg-[#001f3f] py-4 px-4">
                    <div className="px-6 py-8">
                      <div>
                        <Typography variant="" className="text-2xl py-4">
                          {contact.title}
                        </Typography>
                      </div>
                      <div>
                        <Typography className="leading-10 py-4 text-xl">
                          Please contact to:
                        </Typography>
                      </div>
                      <div>
                        <Typography className="leading-10">
                          Name: {contact.name}
                        </Typography>
                        <Typography className="leading-10">
                          Designation: {contact.designation}
                        </Typography>
                        <Typography className="leading-10">
                          Phone No: {contact.phone}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              );
            })}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

function QuoteForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9+\-\s]+$/, "Invalid phone number")
      .required("Phone number is required"),
    message: Yup.string()
      .required("Message is required")
      .min(2, "Message must be at least 2 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await fetch("/api/send-mail.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setSuccess(true);
          resetForm();
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="py-6">
      <div className="container mx-auto px-2 w-full">
        <div className="flex justify-center flex-col items-center w-full">
          <Typography
            variant="h2"
            className="text-[#5ba1b5] md:text-center w-full"
          >
            Get a Quote
          </Typography>
        </div>
        <div className="w-full mt-4 container mx-auto px-4">
          {success && (
            <div className="text-green-500 text-center my-2">
              Message sent successfully!
            </div>
          )}
          {error && (
            <div className="text-red-500 text-center py-2">
              Failed to send message. Please try again.
            </div>
          )}
          <div className="contact-wrap pt-4 pb-3 px-4 bg-gray-100 rounded-lg shadow-md">
            <form onSubmit={formik.handleSubmit} className="contactForm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-input w-full py-2 px-3 rounded-md border ${
                        formik.touched.name && formik.errors.name
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none hover:border-[#5ba1b5] focus:border-[#5ba1b5]`}
                      name="name"
                      placeholder="Name"
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="form-group">
                    <input
                      type="email"
                      className={`form-input w-full py-2 px-3 rounded-md border ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none hover:border-[#5ba1b5] focus:border-[#5ba1b5]`}
                      name="email"
                      placeholder="Email"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-input w-full py-2 px-3 rounded-md border ${
                        formik.touched.phone && formik.errors.phone
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none hover:border-[#5ba1b5] focus:border-[#5ba1b5]`}
                      name="phone"
                      placeholder="Phone No"
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.phone}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-input w-full py-2 px-3 rounded-md border 
                        focus:outline-none hover:border-[#5ba1b5] focus:border-[#5ba1b5]"
                      name="subject"
                      placeholder="Subject"
                      {...formik.getFieldProps("subject")}
                    />
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="form-group">
                    <textarea
                      className={`form-input w-full py-2 px-3 rounded-md border ${
                        formik.touched.message && formik.errors.message
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none hover:border-[#5ba1b5] focus:border-[#5ba1b5]`}
                      name="message"
                      placeholder="Leave a message"
                      rows="4"
                      {...formik.getFieldProps("message")}
                    />
                    {formik.touched.message && formik.errors.message && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-4 flex justify-center mt-4">
                  <div className="form-group w-[200px]">
                    <Button
                      type="submit"
                      disabled={formik.isSubmitting}
                      variant="text"
                      className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:duration-300 after:z-0 after:rounded-lg after:bg-[#5ba1b5] hover:after:text-[#292929] hover:after:h-full flex items-center gap-2 hover:bg-[#001f3f] bg-[#001f3f] hover:bg-none text-white py-3 w-full justify-center rounded-lg hover:text-[#292929] hover:border-[#001f3f] border disabled:opacity-50"
                    >
                      <span className="z-10 relative flex justify-center items-center gap-1">
                        {formik.isSubmitting ? "Sending..." : "Submit"}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div>
      <PageHeader title="Shiaka Alarobah - Services" />
      <div className="container mx-auto px-4 py-8">
        <div>
          <Typography
            variant="h3"
            className="font-bold tracking-wide text-center mb-6 text-[#5ba1b5]"
          >
            Our Best Services
          </Typography>
        </div>
        <div>
          <ServiceTabs />
        </div>
        <QuoteForm />
      </div>
    </div>
  );
}

export default ServicesPage;
