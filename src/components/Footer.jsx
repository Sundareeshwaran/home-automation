import React from "react";
import { imageList } from "../assets/assets.js";

const Footer = () => {
  return (
    <div className="bg-leather-50 py-10 mt-10 px-4 md:px-10">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-10 mb-5">
          {/* Logo and Description */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
            <img
              src={imageList.logo}
              className="w-28 md:w-36"
              alt="Company Logo"
            />
            <p className="font-abyssinica text-sm md:text-base w-full md:w-[500px] text-leather-900">
              We bring together seamless device integration, intuitive controls,
              and personalized automation routines to help you achieve the
              ultimate smart home experience.
            </p>
          </div>
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Contact By
            </h3>
            <p className="text-sm md:text-base">📞 +1234567890</p>
            <p className="text-sm md:text-base">💬 +1234567890</p>
            <p className="text-sm md:text-base">
              ✉️ v-smartechnologies@gmail.com
            </p>
          </div>
        </div>
        <hr className="w-full max-w-5xl h-0.5 bg-sherpa-blue-900 border-0 rounded" />
        <p className="font-abyssinica text-xs md:text-sm text-sherpa-blue-900 mt-5 text-center">
          © {new Date().getFullYear()} V-Smartechnologies. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
