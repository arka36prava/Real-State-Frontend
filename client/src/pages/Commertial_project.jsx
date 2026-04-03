import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageReveal from "../components/ImageReveal";

const Commertial_project = () => {
  const [city, setCity] = useState("Mumbai");

  return (
    <div className="min-h-screen 
                    bg-gradient-to-br from-slate-100 via-purple-50 to-slate-200 
                    flex items-center justify-center p-6">

      {/* 🔷 FLOATING MAIN CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 
                      w-full max-w-7xl p-4 
                      rounded-3xl 
                      bg-white/60 backdrop-blur-xl 
                      shadow-[0_20px_60px_rgba(0,0,0,0.15)] 
                      border border-white/40">

        {/* 🔶 LEFT PANEL */}
        <div className="rounded-2xl p-6 flex flex-col justify-between 
                        bg-pink-100/70 backdrop-blur-lg shadow-inner">

          {/* TOP CONTENT */}
          <div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-3">
                Commercial Projects
              </h1>

              <p className="text-gray-700 text-sm md:text-base mb-4">
                Premium commercial spaces designed for productivity,
                growth, and modern business needs.
              </p>
            </motion.div>

            <p className="text-sm text-gray-500 mb-2">Now we are at</p>

            {/* CITY LIST */}
            <div className="flex flex-col gap-2">
              {["Mumbai", "Delhi", "Hyderabad", "Chennai", "Ahmedabad", "Pune"].map(
                (c, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => setCity(c)}
                    className={`px-3 py-2 rounded-lg cursor-pointer transition
                      ${city === c
                        ? "bg-white shadow text-blue-600 font-semibold"
                        : "hover:bg-white/60 text-gray-800"
                      }`}
                  >
                    📍 {c}
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-6">

            {/* 🗺️ MAP */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden shadow-md border"
            >
              <iframe
                src={`https://www.google.com/maps?q=${city}&output=embed`}
                className="w-full h-[160px]"
                loading="lazy"
              ></iframe>
            </motion.div>

            {/* 🔘 BUTTONS */}
            <div className="flex gap-3 flex-wrap mt-4">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  to="/residential-project"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg 
                             hover:bg-gray-900 transition shadow"
                >
                  ← Residential
                </Link>
              </motion.div>

              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  to="/"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg 
                             hover:bg-blue-700 transition shadow"
                >
                  Home →
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 🖼️ MIDDLE IMAGE */}
        <motion.div
          whileHover={{ scale: 1.03, rotateY: 5 }}
          className="rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          <ImageReveal
            src="/commertial1.jpg"
            alt="Commercial 1"
            delay={0.4}
            height="h-[300px] md:h-full"
          />
        </motion.div>

        {/* 🖼️ RIGHT IMAGE */}
        <motion.div
          whileHover={{ scale: 1.03, rotateY: -5 }}
          className="rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          <ImageReveal
            src="/commertial2.jpg"
            alt="Commercial 2"
            delay={0.6}
            height="h-[300px] md:h-full"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Commertial_project;