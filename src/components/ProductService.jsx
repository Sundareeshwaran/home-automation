import React from "react";
import { imageList } from "../assets/assets";
import ImageSlider from "../utils/ImageSlider";

const ProductService = () => {
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16" id="product&service">
      {/* Title, Quotes, Passages */}
      <div className="flex flex-col items-center text-3xl md:text-4xl lg:text-5xl">
        <h1>Product & Service</h1>
        <p className="text-sm md:text-base font-abyssinica my-4 md:my-8 text-sherpa-blue-800/75 w-full md:w-3/4 lg:w-1/2 text-center">
          We offer our best service and quality products to our customer.
        </p>
        <h3 className="font-abyssinica text-lg md:text-2xl lg:text-3xl w-full md:w-[800px] text-center">
          Customer{" "}
          <span className="text-sherpa-blue-800 underline">service</span>{" "}
          shouldn't just be a department, it should be the entire company.
        </h3>
      </div>

      {/* Product Information */}

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start mx-auto mt-12 max-w-6xl w-full bg-leather-100 p-6 rounded-3xl space-y-6 md:space-y-0 md:space-x-6">
        <div className="font-abyssinica text-leather-600 p-2 text-center md:text-left flex-1">
          <h1 className="mb-6 text-2xl sm:text-3xl md:text-4xl">Product</h1>
          <p className="text-base sm:text-lg md:text-xl text-sherpa-blue-900/75 max-w-2xl mx-auto md:mx-0">
            V-Smart provides diverse, quality smart home products: lighting,
            cameras, thermostats. Designed for integration and
            user-friendliness, our rigorously tested devices ensure durability
            and value. We enhance comfort and minimize environmental impact.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            className="w-72 sm:w-96 md:w-full max-w-xl rounded-2xl"
            src={imageList.productInfo}
            alt="Smart Home Product"
          />
        </div>
      </div>

      {/* Service Information */}

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start mx-auto mt-12 max-w-6xl w-full bg-leather-100 p-6 rounded-3xl space-y-6 md:space-y-0 md:space-x-6">
        <div className="font-abyssinica text-leather-600 p-2 text-center md:text-left flex-1">
          <h1 className="mb-6 text-2xl sm:text-3xl md:text-4xl">Service</h1>
          <p className="text-base sm:text-lg md:text-xl text-sherpa-blue-900/75 max-w-2xl mx-auto md:mx-0">
            V-Smart delivers exceptional smart home service. We provide
            personalized consultations, expert installation, and seamless setup.
            Ongoing support, troubleshooting, and updates ensure customer
            satisfaction and a smooth, enhanced smart home experience.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            className="w-72 sm:w-96 md:w-full max-w-xl rounded-2xl"
            src={imageList.serviceInfo}
            alt="Smart Home Service"
          />
        </div>
      </div>

      {/* Before and After slider image */}

      <div className="md:w-[550px] w-96 mx-auto mt-12 rounded-2xl">
        <ImageSlider />
      </div>
    </div>
  );
};

export default ProductService;
