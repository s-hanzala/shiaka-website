import React, { useState } from "react";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
// import { dBV } from "react-icons/fa6";
// import { dRU } from "react-icons/io5";
// import { XR5 } from "react-icons/bs";

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

function ContactForm() {
  const [status, setStatus] = useState("");

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
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setStatus("sending");
      try {
        const response = await fetch("/send_mail.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setStatus("success");
          resetForm();
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <div>
        <div className="container mx-auto w-full">
          <div className="flex justify-center flex-col items-center w-full">
            <Typography
              variant="h2"
              className="text-[#292929] md:text-center w-full"
            >
              Get In Touch
            </Typography>
          </div>
        </div>

        <div className="w-full mt-4 container mx-auto">
          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="col-span-12 w-full">
                {status === "success" && (
                  <div className="text-green-500 mt-2 text-center">
                    Message sent successfully!
                  </div>
                )}

                {status === "error" && (
                  <div className="text-red-500 mt-2 text-center">
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

                      <div className="col-span-2 md:col-span-1 w-full">
                        <div className="form-group w-full">
                          <Button
                            type="submit"
                            variant="text"
                            disabled={status === "sending"}
                            className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:duration-300 after:z-0 after:rounded-lg after:bg-[#5ba1b5] hover:after:text-[#292929] hover:after:h-full flex items-center gap-2 hover:bg-[#001f3f] bg-[#001f3f] hover:bg-none text-white py-3 w-full justify-center rounded-lg hover:text-[#292929] hover:border-[#001f3f] border disabled:opacity-50"
                          >
                            <span className="z-10 relative flex justify-center items-center gap-1">
                              {status === "sending"
                                ? "Sending..."
                                : "Send Message"}
                            </span>
                          </Button>
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
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to handle newlines in text
const formatText = (text) => {
  if (!text) return null;
  return text.split("\n").map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < text.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));
};

function ContactPage() {
  const contactInfo = [
    {
      id: 1,
      icon: <dBV className="text-[40px]" />,
      desc: "Makkah, Wali Al-Ahad Scheme No. (1), (32) Street, Saudi Arabia",
    },
    {
      id: 2,
      // icon: <dRU className="text-[30px]" />,
      name: "Nawaf Sheikh",
      desc: "(Renovation, Construction)",
      phone: "Phone: +966 0592700914",
    },
    {
      id: 3,
      // icon: <dRU className="text-[30px]" />,
      name: "Mohammad Yousuf",
      desc: "(Tank Cleaning)",
      phone: "Phone: +966 54 666 4130",
    },
    {
      id: 4,
      // icon: <XR5 className="text-[40px]" />,
      name: "Mail Us:",
      desc: "shiakaalarobah@gmail.com",
    },
  ];

  return (
    <div>
      <PageHeader title="Shiaka Alarobah - Contact Us" />

      <div className="container mx-auto px-6 py-10">
        <div>
          <div className="flex justify-center">
            <Typography variant="h2" className="">
              Talk To Us
            </Typography>
          </div>

          <div className="flex flex-wrap xl:flex-nowrap justify-center items-center gap-10 pb-6">
            {contactInfo.map((item) => (
              <Card
                key={item.id}
                className="mt-6 w-[300px] h-[300px] flex flex-col hover:shadow-lg transition-shadow duration-500 hover:bg-[#5ba1b5] group hover:text-white"
              >
                <CardBody className="flex-grow flex flex-col h-[50px]">
                  <div className="h-[100px] flex justify-center items-center mt-7">
                    <div className="text-[#5ba1b5] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                </CardBody>

                <CardFooter className="flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    {item.name && (
                      <Typography className="text-center">
                        {item.name}
                      </Typography>
                    )}

                    {item.desc && (
                      <Typography className="text-center">
                        {formatText(item.desc)}
                      </Typography>
                    )}

                    {item.phone && (
                      <Typography className="text-center">
                        {item.phone}
                      </Typography>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* <div>
          <ContactForm />
        </div> */}
      </div>
    </div>
  );
}

export default ContactPage;
