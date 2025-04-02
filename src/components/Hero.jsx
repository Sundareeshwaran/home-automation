import React from "react";
import { imageList } from "../assets/assets.js";
import JSConfetti from "js-confetti";

const Hero = () => {
  const jsConfetti = new JSConfetti();

  const handleClick = () => {
    jsConfetti.addConfetti({
      confettiNumber: 500,
      confettiColors: [
        "#eae1d7",
        "#d6c5b2",
        "#bea086",
        "#bdfaff",
        "#7bf4ff",
        "#31ebff",
      ],
      confettiRadius: 5,
    });
  };
  return (
    <div className="flex items-center justify-center px-4 h-screen">
      <div className="font-abyssinica leading-tight text-center">
        <h1 className="text-sherpa-blue-950 lg:text-7xl md:text-6xl text-5xl">
          Transform your Home with
        </h1>
        <h1 className="text-leather-600 inline-flex flex-col items-end lg:text-7xl md:text-6xl sm:text-5xl text-4xl ">
          Smart Automation.
          <span>
            <img
              className="w-28 sm:w-32 md:w-36 lg:w-44 mt-2"
              src={imageList.vector}
              alt=""
            />
          </span>
        </h1>
        <p className="text-base md:text-lg w-full md:w-[80%] lg:w-[712px] mx-auto text-sherpa-blue-950 my-6">
          We bring together seamless device integration, intuitive controls, and
          personalized automation routines to help you achieve the ultimate
          smart home experience.
        </p>
        <button
          onClick={() => handleClick()}
          className="bg-leather-700 text-white text-xl md:text-2xl lg:text-4xl rounded-lg px-6 py-3 md:px-10 md:py-4 cursor-pointer hover:shadow-[3px_3px_9px] hover:shadow-leather-950 transition-all"
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default Hero;
