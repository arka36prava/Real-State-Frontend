import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
   

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axiosInstance.post("/api/auth/login", form);

    if (res.data.success) {

      // 🔥 STEP 1: fetch user data
      const userRes = await axiosInstance.get("/api/user/data");

      console.log("USER DATA:", userRes.data); // debug

      // 🔥 STEP 2: set user in context
      setUser(userRes.data.user);

      toast.success("Login successful!");

      // 🔥 STEP 3: redirect
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
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          {/* 🔥 Forgot Password */}
          <p
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-blue-500 cursor-pointer text-right hover:underline"
          >
            Forgot Password?
          </p>

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        {/* 🔥 Switch to Register */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;