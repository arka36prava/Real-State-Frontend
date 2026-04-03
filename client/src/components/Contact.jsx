import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"


const Contact=()=> {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "057e887e-cd8f-4b4c-bd18-a2a0da3b18fb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent Successfully to the Developer")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult(data.message);
    }
  };

  return (
    <motion.div 
  initial={{ opacity: 0, y: 100 }}
  transition={{ duration: 1.2 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center px-6 py-16 lg:px-32 w-full"
  id="Contact"
>
  {/* HEADER */}
  <h1 className="text-3xl sm:text-4xl font-bold mb-3">
    Contact{" "}
    <span className="underline underline-offset-4 decoration-1 font-light">
      With Us
    </span>
  </h1>

  <p className="text-gray-500 mb-6 max-w-md mx-auto">
    Ready to move? Let's build your dream into reality.
  </p>

  <p className="font-medium text-gray-700 mb-8">
    Just drop a message — our executive will contact you soon.
  </p>

  {/* FORM CARD */}
  <form
    onSubmit={onSubmit}
    className="max-w-2xl mx-auto text-gray-600 space-y-5 bg-white p-6 rounded-xl shadow-md"
  >
    {/* NAME + PHONE */}
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full text-left">
        <label className="text-sm">Your Name</label>
        <input
          className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>

      <div className="w-full text-left">
        <label className="text-sm">Your Phone No</label>
        <input
          className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          name="phone"
          placeholder="Your Phone No"
          required
        />
      </div>
    </div>

    {/* MESSAGE */}
    <div className="text-left">
      <label className="text-sm">Message</label>
      <textarea
        name="message"
        className="w-full border border-gray-300 rounded-lg py-3 px-4 mt-1 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Your Message"
        required
      ></textarea>
    </div>

    {/* BUTTON */}
    <button className="w-full bg-blue-600 py-2 text-white rounded-lg hover:bg-blue-700 transition shadow">
      {result ? result : "Send Message"}
    </button>
  </form>

  {/* GOOGLE FORM SECTION */}
  <div className="mt-10 flex flex-col items-center space-y-4">
    <div className="w-40 h-[1px] bg-gray-300"></div>

    <p className="text-gray-600 max-w-md">
      For more details about our projects, pricing, and availability,
      please fill out our detailed form.
    </p>

    <a
      href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-blue-500 to-indigo-600 
                 text-white px-6 py-3 rounded-xl shadow-md 
                 hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      Fill Detailed Google Form →
    </a>
  </div>
</motion.div>
  )
}

export default Contact

