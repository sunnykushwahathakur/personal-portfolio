import React, { useState } from "react";
import "../App.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="h-[5rem] flex items-center px-4 md:px-8 w-full  z-50 bg-transparent backdrop-blur-sm">
      {/* Logo Section */}
      <div className="w-full md:w-[30%]">
        <a href="#home" className="text-white text-xl font-bold">
          @upender.codes
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex w-[70%] items-center justify-evenly">
        <div className="flex gap-x-10 text-[20px]">
          <a href="#home" className="text-white hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#skills" className="text-white hover:text-gray-300 transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-white hover:text-gray-300 transition-colors">
            Projects
          </a>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="https://github.com/upender-kumar657" className="text-white hover:text-gray-300 transition-colors">
            <i className="ri-github-fill text-[18px]"></i>
          </a>
          <a href="" className="text-white hover:text-gray-300 transition-colors">
            <i className="ri-mail-line text-[18px]"></i>
          </a>
          <a href="https://www.linkedin.com/in/upender-kumar-a5a725344" className="text-white hover:text-gray-300 transition-colors">
            <i className="ri-linkedin-line text-[18px]"></i>
          </a>
        </div>

        <div className="border-white border-2 w-[8.2rem] h-[2.8rem] flex justify-center items-center cursor-pointer hover:border-[#644364] hover:bg-gradient-to-r hover:from-[#57224b] hover:to-[#311e61] transition-all duration-300">
          <a href="#contactus" className="text-white">
            Let's connect
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-auto">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line`}></i>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-[5rem] left-0 w-full bg-black/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col px-8 py-6 space-y-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-white text-lg hover:text-gray-300 transition-colors"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="#skills" 
              className="text-white text-lg hover:text-gray-300 transition-colors"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-white text-lg hover:text-gray-300 transition-colors"
              onClick={closeMenu}
            >
              Projects
            </a>
          </div>

          {/* Mobile Social Links */}
          <div className="flex justify-center gap-x-6 py-4 border-t border-gray-700">
            <a href="https://github.com/upender-kumar657" className="text-white hover:text-gray-300 transition-colors">
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a href="" className="text-white hover:text-gray-300 transition-colors">
              <i className="ri-mail-line text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/upender-kumar-a5a725344" className="text-white hover:text-gray-300 transition-colors">
              <i className="ri-linkedin-line text-xl"></i>
            </a>
          </div>

          {/* Mobile Connect Button */}
          <div className="flex justify-center">
            <div className="border-white border-2 w-[10rem] h-[3rem] flex justify-center items-center cursor-pointer hover:border-[#644364] hover:bg-gradient-to-r hover:from-[#57224b] hover:to-[#311e61] transition-all duration-300">
              <a 
                href="#contactus" 
                className="text-white"
                onClick={closeMenu}
              >
                Let's connect
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[-1] md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};