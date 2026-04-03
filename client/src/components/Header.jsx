import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

function Header() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      id="Header"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* 🧾 CENTER CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold max-w-2xl leading-tight text-white">
            Explore homes that fit your dreams
          </h2>

          <div className="flex gap-4 mt-8">
            <a
              href="#Projects"
              className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
            >
              Projects
            </a>

            <a
              href="#Contact"
              className="px-6 py-3 border border-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* 🔝 NAVBAR (TOP LAYER) */}
      <div className="relative z-50 w-full">
        <Navbar />
      </div>
    </div>
  )
}

export default Header;