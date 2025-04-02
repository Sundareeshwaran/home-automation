import React from "react";
import { imageList } from "../assets/assets";

const About = () => {
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16" id="about">
      {/* Title, Quotes, Passages */}
      <div className="flex flex-col items-center text-3xl md:text-4xl lg:text-5xl text-leather-900">
        <h1>About</h1>
        <p className="text-sm md:text-base font-abyssinica my-4 md:my-8 text-sherpa-blue-800/75 w-full md:w-3/4 lg:w-1/2 text-center">
          We are committed to quality, innovation, and customer satisfaction.
        </p>
        <h3 className="font-abyssinica text-lg md:text-2xl lg:text-3xl w-full md:w-[800px] text-center text-leather-900">
          Our <span className="text-sherpa-blue-800 underline">passion</span> is
          to bring cutting-edge smart home technology to your doorstep, today.
        </h3>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mx-auto mt-12 bg-leather-100 text-sherpa-blue-900/75 px-6 md:px-16 py-6 rounded-3xl shadow-md">
        <div className="flex flex-col items-center gap-8">
          <img
            className="w-40 md:w-64 rounded-full object-cover"
            src={imageList.profilePic}
            alt="Profile"
          />
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl">Parthiban B</h1>
            <h3 className="font-abyssinica text-base md:text-lg">
              CEO & Chairman
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-8 w-full md:w-3/4">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl">5+</h3>
              <p className="font-abyssinica text-sm md:text-base">
                Years of Excellence
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl">20+</h3>
              <p className="font-abyssinica text-sm md:text-base">
                Projects Completed
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl">35+</h3>
              <p className="font-abyssinica text-sm md:text-base">
                Happy Customers
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl">10+</h3>
              <p className="font-abyssinica text-sm md:text-base">
                Ongoing Projects
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base font-abyssinica leading-relaxed text-center md:text-left">
            With over 5 years of dedicated experience, V-Smart Company has
            successfully completed more than 20 smart home projects, creating
            20+ happy customers. We are passionate about bringing cutting-edge
            automation to homes in Coimbatore and beyond. Currently, we are
            managing 10+ ongoing projects, demonstrating our commitment to
            expanding the reach of smart living. At V-Smart, we believe in
            accessible and reliable smart home solutions, ensuring every
            customer enjoys a truly connected and convenient lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
