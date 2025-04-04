import React, { useEffect, useState } from "react";
import { imageList, slideList } from "../assets/assets.js";
import { motion } from "motion/react";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideList.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16">
      {/* Title, Quotes, Passages */}
      <div className="flex flex-col items-center text-3xl md:text-4xl lg:text-5xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Project List
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm md:text-base font-abyssinica my-4 md:my-8 text-sherpa-blue-800/75 text-center"
        >
          We're committed to exceeding customer expectations and providing
          exceptional service.
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-abyssinica text-xl md:text-2xl lg:text-3xl w-full md:w-[600px] text-center"
        >
          Automate your home your way, without the{" "}
          <span className="text-sherpa-blue-800 underline">premium</span> price
          tag
        </motion.h3>
      </div>

      {/* Project Slider */}
      <div className="overflow-hidden relative">
        <div
          className="flex gap-6 p-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {slideList.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
            >
              <img
                loading="lazy"
                className="w-full h-auto my-4 rounded"
                src={item.image}
                alt={item.name}
              />

              {/* Name and Budget Section */}
              <div className="absolute left-0 right-0 bottom-0 flex justify-center">
                <div className="inline-block bg-sherpa-blue-50 text-center w-fit px-4 py-2 rounded shadow-lg">
                  <h2 className="text-sm md:text-base font-semibold text-leather-600">
                    {item.name}
                  </h2>
                  <p className="text-leather-800/50 text-xs md:text-sm">
                    {item.budget}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left and Right Arrows */}
      <div className="flex justify-center md:justify-end gap-5 my-4">
        <button onClick={prevProject} className="cursor-pointer">
          <img className="w-3 md:w-4" src={imageList.left_arrow} alt="" />
        </button>
        <button onClick={nextProject} className="cursor-pointer">
          <img className="w-3 md:w-4" src={imageList.right_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Project;
