"use client";



import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate login state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For profile dropdown
  const router = useRouter();

  const handleSignOut = () => {
    setIsLoggedIn(false); // Update login state
    setIsDropdownOpen(false); // Close dropdown
    router.push("/login"); // Redirect to login page
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 shadow-md bg-hospitalBlue text-white z-50">
      {/* Logo */}
      <div className="bg-white px-4 py-2 rounded-full shadow text-hospitalBlue font-bold text-2xl">
        LOGO
      </div>

      {/* Search Box (Always Visible on Desktop) */}
      <div className="hidden lg:flex items-center border-2 border-white px-4 py-2 rounded-full shadow">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white placeholder-gray-300 focus:outline-none text-lg w-full"
        />
        <div className="ml-2 w-6 h-6 bg-white rounded-full flex justify-center items-center">
          <span className="text-hospitalBlue">🔍</span>
        </div>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <button
        className="lg:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row lg:items-center lg:space-x-8 absolute lg:static top-[64px] left-0 w-full lg:w-auto bg-hospitalBlue lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
      >
        <Link href="/about" className="hover:text-gray-300 py-2 lg:py-0 text-center">
          About Us
        </Link>
        <Link href="/categories" className="hover:text-gray-300 py-2 lg:py-0 text-center">
          Categories
        </Link>
        <Link href="/blog" className="hover:text-gray-300 py-2 lg:py-0 text-center">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-gray-300 py-2 lg:py-0 text-center">
          Contact
        </Link>

        {/* Login/Sign-Up or Profile Dropdown */}
        {!isLoggedIn ? (
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 justify-center mt-4 lg:mt-0">
            <button
              onClick={() => router.push("/login")}
              className="bg-white text-hospitalBlue px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="border-2 border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-300"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <>
            {/* For Desktop */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-white w-10 h-10 rounded-full flex justify-center items-center shadow-lg"
              >
                <span className="text-hospitalBlue font-bold">👤</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-hospitalBlue hover:text-white"
                  >
                    Your Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            {/* For Mobile */}
            {isOpen && (
              <Link
                href="/dashboard"
                className="hover:text-gray-300 py-2 lg:py-0 text-center mt-4 lg:mt-0"
              >Dashboard
              </Link>
              
            )}
          </>
        )}
      </div>
    </header>
  );
}
