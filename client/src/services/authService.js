import axiosInstance from "../utils/axiosInstance";

export const registerUser = (data) =>
  axiosInstance.post("/auth/register", data);

export const loginUser = (data) =>
  axiosInstance.post("/auth/login", data);

export const sendResetOtp = (data) =>
  axiosInstance.post("/auth/send-reset-otp", data);

export const resetPassword = (data) =>
  axiosInstance.post("/auth/reset-password", data);

export const verifyEmail = (data) =>
  axiosInstance.post("/auth/verify-email", data);