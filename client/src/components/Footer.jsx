import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { toast } from "react-toastify";

const Footer = () => {

  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    toast.success("Your message has been sent to ESATE Group ✅");
    setMessage("");
  };

  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>

      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-8'>

        {/* LEFT */}
        <div className='w-full md:w-1/3'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='text-gray-400 mt-4'>
            Discover spaces where comfort meets elegance, and every home tells your story.
          </p>
        </div>

        {/* MIDDLE */}
        <div className='w-full md:w-1/5'>
          <h3 className='text-white text-lg font-bold mb-3'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About Us</a>
            <a href="#Contact" className='hover:text-white'>Contact Us</a>
            <a href="#" className='hover:text-white'>Privacy Policy</a>
          </ul>
        </div>

        {/* RIGHT */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-2'>
            Please Give Feedback
          </h3>

          <p className='text-gray-400 mb-4 max-w-sm'>
            Your feedback really matters to us as it helps us build better projects.
          </p>

          {/* INPUT + BUTTON */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 text-white 
                         border border-gray-700 w-full 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSend}
              className="px-5 py-2 rounded-lg bg-blue-600 text-white 
                         hover:bg-blue-700 transition shadow-md 
                         hover:shadow-lg active:scale-95"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2025 @ExellStreet. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer;