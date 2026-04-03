import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
    

const Navbar=()=> {
    const[showMobileMenu,setshowMobileMenu] = useState(false)
    const [showNavbar,setShowNavbar] = useState(true)
    const [lastScrollY,setLastScrollY] = useState(0)
    const [scrolled, setScrolled] = useState(false)
    const [showAuthModal, setShowAuthModal] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false);
    const timerRef = useRef(null);
    
    const navigate = useNavigate();
    const { user } = useAuth();

    const { setUser } = useAuth();

    const location = useLocation();
    const isHome = location.pathname === "/";

    const handleLogout = () => {
      setUser(null);
      navigate("/");
    };

    const handleVerifyEmail = () => {
      navigate("/verify-email");
    };

    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow='hidden'
        }
        else{
            document.body.style.overflow='auto'
        }
        return()=>{
            document.body.style.overflow='auto'
        }
    },[showMobileMenu])
    console.log("NAV USER:", user);

 useEffect(() => {

  const showNavbarTemporarily = () => {
    setShowNavbar(true);

    // clear old timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // set new timer
    timerRef.current = setTimeout(() => {
      setShowNavbar(false);
    }, 5000);
  };

  // events that should trigger navbar
  window.addEventListener("scroll", showNavbarTemporarily);
  window.addEventListener("mousemove", showNavbarTemporarily);

  // initial show
  showNavbarTemporarily();

  return () => {
    window.removeEventListener("scroll", showNavbarTemporarily);
    window.removeEventListener("mousemove", showNavbarTemporarily);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };
}, []);

  return (
    <div
 className={`fixed top-0 left-0 w-full z-50 bg-gray-300/50 backdrop-blur-md
      transition-all duration-1000 ease-in-out
      ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      ${isHome && !scrolled 
        ? "bg-transparent" 
        : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
        >
        <div className='container mx-auto flex justify-between 
        items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul
                className={`hidden md:flex items-center gap-7 transition-colors duration-500
               ${isHome && !scrolled ? "text-white drop-shadow-md" : "text-gray-800"}`}
              >
            
              <li>
                <a href="#Header" className="cursor-pointer hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#About" className="cursor-pointer hover:text-blue-400 transition">
                  Our Story
                </a>
              </li>

              {/* PROJECT DROPDOWN */}
              <li className="relative group">
                <a
                  href="#Projects"
                  className="cursor-pointer hover:text-blue-400 transition"
                >
                  Projects
                </a>

                {/* Invisible hover bridge (VERY IMPORTANT) */}
                <div className="absolute left-0 top-full h-4 w-full"></div>

                {/* Dropdown */}
                <div
                  className="absolute left-0 top-full w-56 bg-white text-black rounded-xl shadow-xl 
                            opacity-0 invisible 
                            group-hover:opacity-100 group-hover:visible
                            transition-all duration-200 z-50"
                >
                  <a
                    href="/residential-project"
                    className="block px-4 py-2 text-red-600 hover:bg-gray-100 rounded-t-xl"
                  >
                    Residential Projects
                  </a>

                  <a
                    href="/commercial-project"
                    className="block px-4 py-2 text-green-600 hover:bg-gray-100 rounded-b-xl"
                  >
                    Commercial Projects
                  </a>
                </div>
              </li>
              <li>
                <a
                  href="#Testimonials"
                  className="cursor-pointer hover:text-blue-400 transition"
                >
                  Testimonials
                </a>
              </li>
            </ul>
            {user ? (
              // ✅ Logged in → show avatar + dropdown
              <div className="relative group">

              {/* Avatar */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold cursor-pointer hover:scale-110 transition">
                {user.name?.charAt(0).toUpperCase()}
              </div>

              {/* Dropdown */}
              <div className="absolute right-0  w-40 bg-white rounded-lg shadow-lg py-2 text-sm hidden group-hover:block">

                {!user.isVerified && (
                  <p
                    onClick={handleVerifyEmail}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-600"
                  >
                    Verify Email
                  </p>
                )}

                <p
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                >
                  Logout
                </p>

              </div>
            </div>
            ) : (
              // ❌ Not logged in → show signup button
            <button
              onClick={() => navigate("/register")}
              className="hidden md:block bg-white px-8 py-2 rounded-full"
            >
              Sign up
            </button>
            )}
            <img onClick={()=>setshowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/*-----------mobile-menu--------*/}
        <div className={`md:hidden ${showMobileMenu ?'fixed w-full':'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transtion-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=>setshowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
            </div>
            
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={()=>setshowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>
                Home</a>
            <a onClick={()=>setshowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>
                About</a>
            <a onClick={()=>setshowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>
                Projects</a>
            <a onClick={()=>setshowMobileMenu(false)} href="Testimonials" className='px-4 py-2 rounded-full inline-block'>
                Testimonials</a>
            <a onClick={()=>setshowMobileMenu(false)} href="" className='px-4 py-2 rounded-full inline-block'>
                Sign up</a>
            </ul>
        </div>

    </div>
  )
}

export default Navbar