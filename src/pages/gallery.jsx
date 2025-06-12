import React, { useState } from "react";
import Head from "next/head";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Dialog,
} from "@material-tailwind/react";
import Image from "next/image";
import { ed2 as ArrowLeft, FDZ as ArrowRight } from "react-icons/io5";

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

const galleryData = [
  {
    value: "water",
    label: "Water Tank Cleaning",
    data: [
      {
        title1: "Water Tank Cleaning",
        title2: "Water Tank Cleaning",
        title3: "Water Tank Cleaning",
        slider1: ["/folder2/watertank1.jpeg", "/folder2/watertank2.jpeg"],
        slider2: ["/folder2/watertank3.jpeg", "/folder2/watertank4.jpeg"],
        slider3: ["/folder2/watertank5.jpeg", "/folder2/watertank6.jpeg"],
      },
    ],
  },
  {
    value: "swg",
    label: "Sewage Tank Cleaning",
    data: [
      {
        title1: "Sewage Tank Cleaning",
        title2: "Sewage Tank Cleaning",
        title3: "Sewage Tank Cleaning",
        slider1: ["/folder2/swg1.jpeg", "/folder2/swg2.jpeg"],
        slider2: ["/folder2/swg3.jpeg", "/folder2/swg4.jpeg"],
        slider3: ["/folder2/swg5.jpeg", "/folder2/swg6.jpeg"],
      },
    ],
  },
  {
    value: "cladding",
    label: "Cladding Work",
    data: [
      {
        title1: "Cladding Work",
        title2: "Cladding Work",
        title3: "Cladding Work",
        slider1: ["/folder2/cladding1.jpg", "/folder2/cladding2.jpeg"],
        slider2: ["/folder2/cladding3.jpeg", "/folder2/cladding4.jpeg"],
        slider3: ["/folder2/cladding5.jpeg", "/folder2/cladding6.jpeg"],
      },
    ],
  },
  {
    value: "ac",
    label: "A/C Duct Cleaning",
    data: [
      {
        title1: "A/C Duct Cleaning",
        title2: "A/C Duct Cleaning",
        title3: "A/C Duct Cleaning",
        slider1: ["/folder2/ac1.jpeg", "/folder2/ac2.jpeg"],
        slider2: ["/folder2/ac3.jpeg", "/folder2/ac4.jpeg"],
        slider3: ["/folder2/duck5.jpeg", "/folder2/duck6.jpeg"],
      },
    ],
  },
  {
    value: "ktc",
    label: "Kitchen Duct Cleaning",
    data: [
      {
        title1: "Kitchen Duct Cleaning",
        title2: "Kitchen Duct Cleaning",
        title3: "Kitchen Duct Cleaning",
        slider1: ["/folder1/duck1.jpeg", "/folder1/duck2.jpeg"],
        slider2: ["/folder1/duck3.jpeg", "/folder2/ktc1.jpeg"],
        slider3: ["/folder2/ktc2.jpeg", "/folder2/ktc3.jpeg"],
      },
    ],
  },
  {
    value: "construction",
    label: "Construction & Renovation",
    data: [
      {
        title1: "Construction & Renovation",
        title2: "Construction & Renovation",
        title3: "Construction & Renovation",
        slider1: [
          "/folder2/construction1.jpeg",
          "/folder2/construction2.jpeg",
          "/folder2/construction3.jpeg",
          "/folder2/construction4.jpeg",
          "/folder2/construction5.jpeg",
          "/folder2/construction6.jpeg",
          "/folder1/construction.jpeg",
          "/folder1/construction2.jpeg",
          "/folder1/construction3.jpeg",
          "/folder1/construction22.jpeg",
        ],
        slider2: [
          "/folder1/construction4.jpeg",
          "/folder1/construction5.jpeg",
          "/folder1/construction6.jpeg",
          "/folder1/construction7.jpeg",
          "/folder1/construction8.jpeg",
          "/folder1/construction9.jpeg",
          "/folder1/construction10.jpeg",
          "/folder1/construction11.jpeg",
          "/folder1/construction12.jpeg",
          "/folder2 /construction7.jpeg",
        ],
        slider3: [
          "/folder1/construction13.jpeg",
          "/folder1/construction14.jpeg",
          "/folder1/construction15.jpeg",
          "/folder1/construction16.jpeg",
          "/folder1/construction17.jpeg",
          "/folder1/construction18.jpeg",
          "/folder1/construction19.jpeg",
          "/folder1/construction20.jpeg",
          "/folder1/construction21.jpeg",
        ],
      },
    ],
  },
];

function GalleryPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("water");

  const [hoverIndex1, setHoverIndex1] = useState(-1);
  const [hoverIndex2, setHoverIndex2] = useState(-1);
  const [hoverIndex3, setHoverIndex3] = useState(-1);

  // Get all images from all categories for the gallery
  const getAllImages = () => {
    const allImages = [];
    galleryData.forEach((category) => {
      category.data.forEach((item) => {
        allImages.push(...item.slider1);
        allImages.push(...item.slider2);
        allImages.push(...item.slider3);
      });
    });
    return allImages;
  };

  // Get all images with their labels
  const getAllImagesWithLabels = () => {
    const imagesWithLabels = [];
    galleryData.forEach((category) => {
      category.data.forEach((item) => {
        item.slider1.forEach((image) => {
          imagesWithLabels.push({ image, label: category.label });
        });
        item.slider2.forEach((image) => {
          imagesWithLabels.push({ image, label: category.label });
        });
        item.slider3.forEach((image) => {
          imagesWithLabels.push({ image, label: category.label });
        });
      });
    });
    return imagesWithLabels;
  };

  // Get label for an image
  const getLabelForImage = (imagePath) => {
    const foundImage = getAllImagesWithLabels().find(
      (item) => item.image === imagePath
    );
    return foundImage ? foundImage.label : "";
  };

  // Open the dialog with selected image
  const openImageDialog = (imagePath) => {
    setCurrentIndex(getAllImages().indexOf(imagePath));
    setSelectedImage(imagePath);
    setSelectedLabel(getLabelForImage(imagePath));
    setIsDialogOpen(true);
  };

  return (
    <div className="">
      <PageHeader title="Shiaka Alarobah - Gallery" />

      <div className="container mx-auto px-2 py-8">
        <div>
          <Typography
            variant="h3"
            className="font-bold tracking-wide text-center mb-6 text-[#5ba1b5]"
          >
            Our Best Project Site Work
          </Typography>
        </div>

        <div className="">
          <Tabs value={activeTab}>
            <TabsHeader
              className=" flex flex-col gap-2 xl:gap-0 lg:flex-row pb-5"
              indicatorProps={{ className: "text-[#5ba1b5] !bg-[#5ba1b5]" }}
            >
              {galleryData.map((category) => {
                const { label, value } = category;
                return (
                  <Tab
                    key={value}
                    value={value}
                    className={`text-left text-gray-700 transition-colors rounded-md mx-1 ${
                      activeTab === value
                        ? "text-[#001f3f] bg-[#5ba1b5]"
                        : "bg-[#001f3f] text-white"
                    }`}
                    onClick={() => setActiveTab(value)}
                  >
                    {label}
                  </Tab>
                );
              })}
            </TabsHeader>

            <TabsBody>
              {galleryData.map((category) => {
                const { value, data } = category;
                return (
                  <TabPanel key={value} value={value} className="px-3">
                    {data.map((item, index) => (
                      <div key={index} className="mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Column 1 */}
                          <div className="space-y-4">
                            <div className="grid gap-4">
                              {item.slider1.map((image, imgIndex) => (
                                <div
                                  key={imgIndex}
                                  className="relative h-64 hover:scale-105 transition-transform duration-300 cursor-pointer"
                                  onClick={() => openImageDialog(image)}
                                  onMouseEnter={() => setHoverIndex1(imgIndex)}
                                  onMouseLeave={() => setHoverIndex1(-1)}
                                >
                                  <Image
                                    src={image}
                                    alt={`${item.title1} image ${imgIndex + 1}`}
                                    fill
                                    className="object-cover rounded-lg shadow-lg"
                                  />
                                  <div
                                    className={`absolute z-50 ${
                                      hoverIndex1 === imgIndex
                                        ? "left-[0px]"
                                        : "left-[-800px]"
                                    } duration-700 text-center w-full bottom-6 bg-[#5ba1b5] py-4 text-black`}
                                  >
                                    <Typography className="text-xl">
                                      {item.title1}
                                    </Typography>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Column 2 */}
                          <div className="space-y-4">
                            <div className="grid gap-4">
                              {item.slider2.map((image, imgIndex) => (
                                <div
                                  key={imgIndex}
                                  className="relative h-64 hover:scale-105 transition-transform duration-300 cursor-pointer"
                                  onClick={() => openImageDialog(image)}
                                  onMouseEnter={() => setHoverIndex2(imgIndex)}
                                  onMouseLeave={() => setHoverIndex2(-1)}
                                >
                                  <Image
                                    src={image}
                                    alt={`${item.title2} image ${imgIndex + 1}`}
                                    fill
                                    className="object-cover rounded-lg shadow-lg"
                                  />
                                  <div
                                    className={`absolute z-50 ${
                                      hoverIndex2 == imgIndex
                                        ? "left-0"
                                        : "left-[-1300px]"
                                    } duration-700 text-center w-full bottom-6 bg-[#5ba1b5] py-4 text-black`}
                                  >
                                    <Typography className="text-xl">
                                      {item.title2}
                                    </Typography>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Column 3 */}
                          <div className="space-y-4">
                            <div className="grid gap-4">
                              {item.slider3.map((image, imgIndex) => (
                                <div
                                  key={imgIndex}
                                  className="relative h-64 hover:scale-105 transition-transform duration-300 cursor-pointer"
                                  onClick={() => openImageDialog(image)}
                                  onMouseEnter={() => setHoverIndex3(imgIndex)}
                                  onMouseLeave={() => setHoverIndex3(-1)}
                                >
                                  <Image
                                    src={image}
                                    alt={`${item.title3} image ${imgIndex + 1}`}
                                    fill
                                    className="object-cover rounded-lg shadow-lg"
                                  />
                                  <div
                                    className={`absolute z-50 ${
                                      hoverIndex3 === imgIndex
                                        ? "left-[0px]"
                                        : "left-[-1300px]"
                                    } duration-700 text-center w-full bottom-6 bg-[#5ba1b5] py-4 text-black`}
                                  >
                                    <Typography className="text-xl">
                                      {item.title3}
                                    </Typography>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                );
              })}
            </TabsBody>
          </Tabs>
        </div>
      </div>

      {/* Full-size image dialog */}
      <Dialog
        open={isDialogOpen}
        handler={() => {
          setIsDialogOpen(false);
          setSelectedImage(null);
          setSelectedLabel(null);
        }}
        size="lg"
      >
        <div className="relative flex justify-center items-center p-4">
          <button
            onClick={() => {
              const allImages = getAllImages();
              const newIndex =
                (currentIndex - 1 + allImages.length) % allImages.length;
              setCurrentIndex(newIndex);
              setSelectedImage(allImages[newIndex]);
              setSelectedLabel(getLabelForImage(allImages[newIndex]));
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-[999] ml-1"
          >
            <ArrowLeft />
          </button>

          <img
            src={selectedImage}
            alt="Selected Image"
            className="rounded-lg max-h-[80vh] w-auto"
          />

          <button
            onClick={() => {
              const allImages = getAllImages();
              const newIndex = (currentIndex + 1) % allImages.length;
              setCurrentIndex(newIndex);
              setSelectedImage(allImages[newIndex]);
              setSelectedLabel(getLabelForImage(allImages[newIndex]));
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-[999] mr-1"
          >
            <ArrowRight />
          </button>
        </div>
      </Dialog>
    </div>
  );
}

export default GalleryPage;
