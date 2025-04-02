import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function AutoImageSlider({ autoSlideList }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === autoSlideList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [autoSlideList.length]);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [currentImageIndex]);

  return (
    <div className="relative w-full max-w-[757px] h-auto md:h-[496px] flex items-center justify-center">
      <div ref={sliderRef} className="w-full h-full">
        {autoSlideList.length > 0 && (
          <img
            className="w-full h-auto md:h-full object-cover rounded-2xl shadow-[2px_2px_16px_#000000aa]"
            src={autoSlideList[currentImageIndex].image}
            alt="Consult Image"
          />
        )}
      </div>
    </div>
  );
}

export default AutoImageSlider;
