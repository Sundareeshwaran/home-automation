import React, { useState, useEffect } from "react";
import { imageList } from "../assets/assets.js";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScroll ? "bg-transparent backdrop-blur-lg" : "bg-leather-100/20"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="md:w-28 sm:w-20 w-16">
          <a href="/">
            <img src={imageList.logo} alt="logo" />
          </a>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex gap-10 text-leather-900 md:text-[16px] text-[8px]">
          <li>
            <a href="#howitswork">How it works</a>
          </li>
          <li>
            <a href="#whyus">Why Us?</a>
          </li>
          <li>
            <a href="#product&service">P&S</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:block font-abyssinica text-lg bg-leather-700 text-white px-4 py-2 rounded-lg"
        >
          Contact Us
        </a>

        {/* Hamburger Icon for mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-leather-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col items-center py-4`}
      >
        <button className="self-end px-4" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>
        <ul className="flex flex-col gap-4 text-lg text-leather-900 mt-6 h-screen">
          <li>
            <a onClick={() => setIsOpen(false)} href="#howitswork">
              How it works
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#whyus">
              Why Us?
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#product&service">
              P&S
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#about">
              About
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="relative bottom-10 mt-4 font-abyssinica text-lg bg-leather-700 text-white px-4 py-2 rounded-lg"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
