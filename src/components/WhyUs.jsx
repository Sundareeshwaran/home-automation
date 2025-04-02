import React from "react";
import { autoSlideList } from "../assets/assets";
import AutoImageSlider from "../hooks/AutoImageSlider";

const WhyUs = () => {
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16" id="whyus">
      {/* Title, Quotes, Passages */}
      <div className="flex flex-col items-center text-3xl md:text-4xl lg:text-5xl">
        <h1>Why Us?</h1>
        <p className="text-sm md:text-base font-abyssinica my-4 md:my-8 text-sherpa-blue-800/75 w-full md:w-3/4 lg:w-1/2 text-center">
          We offer the best value and the highest quality smart home solutions.
        </p>
        <h3 className="font-abyssinica text-lg md:text-2xl lg:text-3xl w-full md:w-[800px] text-center">
          Get the most for your{" "}
          <span className="text-sherpa-blue-800 underline">investment</span>{" "}
          with our high-quality, budget-friendly smart home systems.
        </h3>
      </div>

      {/* Auto Slider */}
      <div className="flex justify-center my-12 md:my-20">
        <div className="w-full max-w-[90%] md:max-w-[800px] flex flex-col items-center">
          <AutoImageSlider autoSlideList={autoSlideList} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
