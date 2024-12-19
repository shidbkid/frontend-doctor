"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 shadow-md bg-white z-50">
      {/* Logo */}
      <div className="bg-green-200 px-4 py-2 rounded-full shadow text-gray-800 font-bold text-2xl">
        LOGO
      </div>

      {/* Search Box (Always Visible) */}
      <div className="flex items-center border-4 border-green-200 px-4 py-2 rounded-full shadow bg-white">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-gray-400 focus:outline-none text-lg w-full"
        />
        <div className="ml-2 w-6 h-6 bg-green-200 rounded-full flex justify-center items-center">
          <span className="text-gray-700">🔍</span>
        </div>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <button
        className="lg:hidden text-gray-800 text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row lg:items-center lg:space-x-8 text-gray-700 font-semibold absolute lg:static top-[64px] left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
      >
        <a href="#" className="hover:text-green-500 py-2 lg:py-0 text-center">
          About Us
        </a>
        <a href="#" className="hover:text-green-500 py-2 lg:py-0 text-center">
          Courses
        </a>
        <a href="#" className="hover:text-green-500 py-2 lg:py-0 text-center">
          Categories
        </a>
        <a href="#" className="hover:text-green-500 py-2 lg:py-0 text-center">
          Blog
        </a>
        <a href="#" className="hover:text-green-500 py-2 lg:py-0 text-center">
          Contact
        </a>

        {/* Login and Sign-Up Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 justify-center mt-4 lg:mt-0">
          <button className="bg-green-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-500">
            Login
          </button>
          <button className="bg-white border-4 border-green-400 text-green-400 px-4 py-2 rounded-full font-semibold hover:bg-green-500 hover:text-white">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
