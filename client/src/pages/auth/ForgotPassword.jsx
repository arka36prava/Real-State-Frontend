import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  // 🔥 send OTP
  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Enter email first");
      return;
    }

    try {
      const res = await axiosInstance.post("/api/auth/send-reset-otp", { email });

      if (res.data.success) {
        toast.success("OTP sent to your email");
      } else {
        toast.error(res.data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  // 🔥 verify & go to reset page
  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (!email || !otp) {
      toast.error("Enter email and OTP");
      return;
    }

    navigate("/reset-password", { state: { email, otp } });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/header_img.png')" }}
      ></div>

      {/* Blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>

      {/* Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-[90%] max-w-md">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* OTP */}
          <input
            type="text"
            placeholder="Enter OTP"
            className="border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setOtp(e.target.value)}
          />

          {/* Send OTP */}
          <button
            type="button"
            onClick={handleSendOtp}
            className="bg-gray-500 text-white py-2 rounded-lg"
          >
            Send OTP
          </button>

          {/* Verify */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Verify & Continue
          </button>

        </form>

      </div>
    </div>
  );
};

export default ForgotPassword;