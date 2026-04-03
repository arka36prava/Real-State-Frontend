import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-6 py-16 lg:px-32 w-full"
      id="Testimonials"
    >
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Customer{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Testimonials
          </span>
        </h1>

        <p className="text-gray-500 max-w-md mx-auto">
          Real stories from people who found their dream home.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-2xl p-6 text-center shadow-md 
                       hover:shadow-xl transition-all duration-300"
          >
            {/* IMAGE */}
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border"
              src={testimonial.image}
              alt={testimonial.alt}
            />

            {/* NAME */}
            <h2 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h2>

            {/* TITLE */}
            <p className="text-gray-500 text-sm mb-3">
              {testimonial.title}
            </p>

            {/* STARS */}
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <img key={i} src={assets.star_icon} alt="star" className="w-4 h-4" />
              ))}
            </div>

            {/* TEXT */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;