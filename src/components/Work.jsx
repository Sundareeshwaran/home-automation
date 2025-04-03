import React from "react";
import { imageList } from "../assets/assets";
import { motion } from "motion/react";

const Work = () => {
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16" id="howitswork">
      {/* Title, Quotes, Passages */}
      <div className="flex flex-col items-center text-3xl md:text-4xl lg:text-5xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          How it Works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm md:text-base font-abyssinica my-4 md:my-8 text-sherpa-blue-800/75 w-full md:w-3/4 lg:w-1/2 text-center"
        >
          Home automation simplifies daily life by remotely controlling devices,
          creating custom routines, and enhancing energy efficiency.
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-abyssinica text-lg md:text-2xl lg:text-3xl w-full md:w-[600px] text-center"
        >
          Smart home technology made easy, so you can{" "}
          <span className="text-sherpa-blue-800 underline">automate</span> your
          life effortlessly.
        </motion.h3>
      </div>

      {/* Working Methods */}
      {[
        {
          title: "1. Consultation",
          image: imageList.consultImage,
          text: "Consultation fosters collaboration and empowers informed decision-making",
        },
        {
          title: "2. Setup & Install",
          image: imageList.setupInstall,
          text: "Get your system up and running quickly with our efficient setup and installation services.",
        },
        {
          title: "3. Enjoy the Smart",
          image: imageList.enjoyImage,
          text: "Enjoy the effortless and personalized comfort of a smart home.",
        },
      ].map((step, index) => (
        <div key={index} className="flex justify-center my-12 md:my-20">
          <div className="flex flex-col items-center gap-4 md:gap-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-leather-50 px-6 md:px-8 py-3 md:py-4 md:w-full max-w-[450px] text-center rounded-lg text-sherpa-blue-950 text-lg md:text-2xl"
            >
              {step.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[90%] md:max-w-[757px]"
            >
              <img
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
                src={step.image}
                alt={step.title}
              />
              <p className="font-abyssinica absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs md:text-base text-center w-3/4 md:w-[400px] p-2 md:p-4 rounded-lg">
                {step.text}
              </p>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
