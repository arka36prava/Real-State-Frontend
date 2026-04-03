import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Register = () => {

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axiosInstance.post("/api/auth/register", form);

    if (res.data.success) {

      // 🔥 STEP 1: Fetch user data
      const userRes = await axiosInstance.get("/api/user/data");
      setUser(userRes.data.user);

      // 🔥 STEP 2: Save user in state (IMPORTANT)
      setUser(userRes.data.user);

      toast.success("Account created successfully!");

      // 🔥 STEP 3: Redirect
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
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            className="border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

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

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>

        </form>
        {/* 🔥 Login Redirect */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;