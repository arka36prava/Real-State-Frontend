import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Register from './pages/auth/Register'
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Residential_Project from "./pages/Residential_project";
import Commertial_project from './pages/Commertial_project';



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 👉 Home Page Layout
const Home = () => (
  <>
    <Header/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </>
);

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>

      <Router>
        <Routes>

          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Register Page */}
          <Route path="/register" element={<Register />} />
           
          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Forgot-Password Page */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Reset Password Page */}
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Verify-Email Page */}
          <Route path="/verify-email" element={<VerifyEmail />} />

          {/* Residential View Page */}
          <Route path="/residential-project" element={<Residential_Project />} />

          {/* Commertial View Page */}
          <Route path="/commercial-project" element={<Commertial_project />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App