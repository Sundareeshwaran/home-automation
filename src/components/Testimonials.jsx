import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { imageList, testimonials } from "../assets/assets";

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    gsap.to(slider, {
      xPercent: -50,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16" id="testimonials">
      {/* Title & Description */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-leather-900">
          Testimonials
        </h1>
        <p className="text-sm md:text-base font-abyssinica my-4 md:my-6 text-sherpa-blue-800/75 max-w-xl">
          Here is what our customers say about our services.
        </p>
        <h3 className="font-abyssinica text-lg md:text-2xl lg:text-3xl max-w-3xl text-leather-900">
          Building <span className="text-sherpa-blue-800 underline">trust</span>{" "}
          should be the foundation of every customer interaction.
        </h3>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative w-full overflow-hidden mt-8 md:mt-12 font-abyssinica">
        <div ref={sliderRef} className="flex w-max gap-4 md:gap-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:w-96 sm:w-72 w-64 bg-leather-100 px-4 md:px-6 py-4 rounded-3xl shadow-md"
            >
              <img
                className="w-12 md:w-16"
                src={imageList.userIcon}
                alt="User Icon"
              />
              <div className="text-xl md:text-2xl text-leather-950 mt-2">
                {testimonial.name}
              </div>
              <hr className="w-full h-1 my-2 bg-sherpa-blue-700 border-0 rounded" />
              <p className="text-sherpa-blue-900/75 text-center text-sm md:text-base leading-5">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
