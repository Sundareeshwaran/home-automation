import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Work from "./components/Work";
import WhyUs from "./components/WhyUs";
import ProductService from "./components/ProductService";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="font-aboreto bg-linear-to-b from-leather-100 to-white h-screen transition-all">
      <div className="sm:px-12 md:px-20 lg:px-32">
        <Navbar />
        <ToastContainer />
        <Hero />
        <Project />
        <Work />
        <WhyUs />
        <ProductService />
        <Testimonials />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
