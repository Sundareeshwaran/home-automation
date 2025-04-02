import React from "react";
import { imageList } from "../assets/assets";
import ReactCompareImage from "react-compare-image";

const ImageSlider = () => {
  const leftImage = {
    src: imageList.normalSwitch,
    alt: "Normal Switch",
  };

  const rightImage = {
    src: imageList.smartSwitch,
    alt: "Smart Switch",
  };

  return (
    <div className="p-4">
      {" "}
      {/* Add padding to the container */}
      <ReactCompareImage
        leftImage={leftImage.src}
        leftImageCss={{ borderRadius: "20px" }}
        leftImageAlt={leftImage.alt}
        rightImage={rightImage.src}
        rightImageCss={{ borderRadius: "20px" }}
        rightImageAlt={rightImage.alt}
      />
    </div>
  );
};

export default ImageSlider;
