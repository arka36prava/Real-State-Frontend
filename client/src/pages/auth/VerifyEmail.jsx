import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const VerifyEmail = () => {

  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [otp, setOtp] = useState("");
 

  // 🔥 Send OTP
  const handleSendOtp = async () => {
    try {
      const res = await axiosInstance.post("/api/auth/send-verify-otp");

      if (res.data.success) {
        toast.success("OTP sent to your email");
      } else {
        toast.error(res.data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  // 🔥 Verify OTP
  const handleVerify = async (e) => {
  e.preventDefault();

  try {
    const res = await axiosInstance.post("/api/auth/verify-account", { otp });

    if (res.data.success) {

      // 🔥 VERY IMPORTANT: fetch updated user
      const userRes = await axiosInstance.get("/api/user/data");

      console.log("UPDATED USER:", userRes.data);

      setUser(userRes.data.user); // ✅ update context

      toast.success("Email verified successfully!");
      navigate("/");

    } else {
      toast.error(res.data.message);
    }

  } catch (error) {
    toast.error(error.message);
  }
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
          Verify Email
        </h2>

        <form onSubmit={handleVerify} className="flex flex-col gap-4">

          {/* OTP */}
          <input
            type="text"
            placeholder="Enter OTP"
            className="border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setOtp(e.target.value)}
          />

          {/* 🔥 Send OTP Button */}
          <button
            type="button"
            onClick={handleSendOtp}
            className="bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Send OTP
          </button>

          {/* 🔥 Verify Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Verify Email
          </button>

        </form>

      </div>
    </div>
  );
};

export default VerifyEmail;