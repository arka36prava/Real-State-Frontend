import React, { useState } from "react";
import ImageReveal from "../components/ImageReveal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Residential_Project = () => {
  const [city, setCity] = useState("Mumbai");

  return (
    <div className="min-h-screen 
                    bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 
                    flex items-center justify-center p-6">

      {/* 🔷 MAIN FLOATING CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 
                      w-full max-w-7xl p-4 
                      rounded-3xl 
                      bg-white/60 backdrop-blur-xl 
                      shadow-[0_20px_60px_rgba(0,0,0,0.15)] 
                      border border-white/40">

        {/* 🔶 LEFT PANEL */}
        <div className="rounded-2xl p-6 flex flex-col justify-between 
                        bg-yellow-100/70 backdrop-blur-lg 
                        shadow-inner">

          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              Residential Projects
            </h1>

            <p className="text-gray-700 mb-4">
              Discover premium homes designed with elegance and comfort.
            </p>

            <p className="text-sm text-gray-500 mb-2">locate our project at</p>

            {/* CITY LIST */}
            <div className="flex flex-col gap-2">
              {["Mumbai", "Kolkata", "Delhi", "Lucknow", "Assam"].map((c, i) => (
                <motion.div
                  key={i}
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
              ))}
            </div>
          </div>

          {/* MAP + BUTTON */}
          <div className="mt-6">
            <div className="rounded-xl overflow-hidden shadow-md border">
              <iframe
                src={`https://www.google.com/maps?q=${city}&output=embed`}
                className="w-full h-[160px]"
                loading="lazy"
              ></iframe>
            </div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                to="/commercial-project"
                className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg 
                           hover:bg-blue-700 transition shadow-md"
              >
                Explore Commercial Projects →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 🖼️ MIDDLE IMAGE CARD */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          <ImageReveal
            src="/residential1.jpg"
            alt="Residential 1"
            delay={0.4}
            height="h-[300px] md:h-full"
          />
        </motion.div>

        {/* 🖼️ RIGHT IMAGE CARD */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          <ImageReveal
            src="/residential2.jpg"
            alt="Residential 2"
            delay={0.6}
            height="h-[300px] md:h-full"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Residential_Project;