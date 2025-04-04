import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16" id="contact">
      {/* Title */}
      <div className="flex flex-col items-center text-3xl md:text-4xl lg:text-5xl text-leather-900">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h1>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-4 font-abyssinica w-full md:w-3/4 lg:w-1/2 mx-auto mt-8"
      >
        {/* Input Fields */}
        <motion.input
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full bg-leather-100 text-base md:text-xl placeholder:text-sherpa-blue-900/75 text-sherpa-blue-900 px-4 py-3 md:px-6 md:py-4 rounded-xl outline-none capitalize"
          type="text"
          name="Name"
          placeholder="Name"
          required
        />
        <motion.input
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full bg-leather-100 text-base md:text-xl placeholder:text-sherpa-blue-900/75 text-sherpa-blue-900 px-4 py-3 md:px-6 md:py-4 rounded-xl outline-none"
          type="tel"
          name="Phone"
          placeholder="Phone"
          required
        />
        <motion.input
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full bg-leather-100 text-base md:text-xl placeholder:text-sherpa-blue-900/75 text-sherpa-blue-900 px-4 py-3 md:px-6 md:py-4 rounded-xl outline-none"
          type="email"
          name="Email"
          placeholder="Email"
          required
        />

        {/* City & Zipcode */}
        <div className="flex flex-row w-full gap-4">
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full bg-leather-100 text-base md:text-xl placeholder:text-sherpa-blue-900/75 text-sherpa-blue-900 px-4 py-3 md:px-6 md:py-4 rounded-xl outline-none capitalize"
            type="text"
            name="City"
            placeholder="City"
            required
          />
          <motion.input
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full bg-leather-100 text-base md:text-xl placeholder:text-sherpa-blue-900/75 text-sherpa-blue-900 px-4 py-3 md:px-6 md:py-4 rounded-xl outline-none"
            type="text"
            name="Zipcode"
            placeholder="Zipcode"
            required
          />
        </div>

        {/* Building & Automation Type */}
        <div className="flex flex-row w-full gap-4">
          <motion.select
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full bg-leather-100 text-base md:text-xl text-sherpa-blue-900 px-4 py-3 md:px-6 md:py-4 rounded-xl outline-none"
            name="Building Type"
            required
          >
            <option value="New Building">New Building</option>
            <option value="Existing Building">Existing Building</option>
            <option value="Renovation Building">Renovation Building</option>
          </motion.select>
          <motion.select
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full bg-leather-100 text-base md:text-xl text-sherpa-blue-900 px-4 py-3 md:px-6 md:py-4 rounded-xl outline-none"
            name="Automation Type"
            required
          >
            <option value="House">House</option>
            <option value="Office">Office</option>
            <option value="Hotel">Hotel</option>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="Others">Others</option>
          </motion.select>
        </div>

        {/* Message Textarea */}
        <motion.textarea
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          name="Comments"
          cols="15"
          rows="5"
          placeholder="What is your requirement?"
          className="w-full bg-leather-100 text-base md:text-xl placeholder:text-sherpa-blue-900/75 text-sherpa-blue-900 px-4 py-3 md:px-6 md:py-4 rounded-xl outline-none resize-none"
        ></motion.textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-48 md:w-56 font-abyssinica text-lg md:text-xl bg-leather-600 text-white shadow-md px-4 py-3 md:px-6 md:py-4 rounded-lg cursor-pointer mt-5"
        >
          {result || "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
