"use client"

import { Navbar } from "../components/Navbar"
import "../App.css"
import About from "../components/About"
import Skills from "./Skills"
import Project from "./Project"
import ContactPage from "./ContactPage"
import { motion } from "framer-motion"

// 🖼️ Import image if not using public folder
import profileImg from "../assets/header-img.svg"
import bannerImg from "../assets/banner-bg.png"

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
         <Navbar />
        {/* Main Content Container */}
        <div className="flex justify-center px-4 md:px-6 lg:px-10">
         
          {/* About Section */}
          <div className="text-white w-full lg:w-[50%] mt-[6rem] lg:mt-[7.5rem] order-2 lg:order-1">
            <div className="max-w-full lg:max-w-none text-center lg:text-left">
              <About />
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="hidden lg:flex w-full lg:w-[50%] mt-[2rem] lg:mt-[7.5rem] justify-center items-center order-1 lg:order-2">
            <motion.div
              className="profile-img h-[16rem] w-[18rem] sm:h-[18rem] sm:w-[20rem] md:h-[20rem] md:w-[22rem] lg:h-[22rem] lg:w-[25rem] mt-4 lg:mt-12"
              style={{
                backgroundImage: `url(${profileImg})`,
                backgroundSize: "cover",
                backgroundRepeat:"no-repeat",
              
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="min-h-[20rem] md:min-h-[26rem] relative bg-[linear-gradient(to_right,_#35182e_5%,_#1b1338_20%,_#111111_70%)] px-4 md:px-6 lg:px-0">
        <Skills />
      </div>

      {/* Projects Section */}
      <div className="px-4 md:px-6 lg:px-0">
        <Project />
      </div>

      {/* Contact Section */}
      <div className="px-4 md:px-6 lg:px-0">
        <ContactPage />
      </div>
    </>
  )
}

export default Home
