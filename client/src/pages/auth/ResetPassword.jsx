import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";

const ResetPassword = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { email, otp } = location.state || {};

  const [newPassword, setNewPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/api/auth/reset-password", {
        email,
        otp,
        newPassword
      });

      if (res.data.success) {
        toast.success("Password reset successful");
        navigate("/login");
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
          Reset Password
        </h2>

        <form onSubmit={handleReset} className="flex flex-col gap-4">

          <input
            type="password"
            placeholder="New Password"
            className="border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button className="bg-blue-500 text-white py-3 rounded-lg">
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );
};

export default ResetPassword;