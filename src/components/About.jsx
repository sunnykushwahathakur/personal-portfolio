import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./aboutResp.css"

const About = () => {
  const fullText = "  Hi, I'm Upender Kumar   MERN Stack Developer";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span className="text-white portRes border-[1px] border-[#644364] bg-gradient-to-r from-[#57224b] to-[#311e61] text-3xl inline-block px-4 py-2 mt-[2rem] font-bold rounded-lg shadow-md">
        Welcome to my Portfolio
      </span>

      <motion.h1
        className="text-white mt-7 text-6xl font-bold leading-tight min-h-[5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.h1>

      <p className="text-white max-w-xl mt-4 text-lg leading-relaxed skill-content">
        I build scalable, high-performance web apps using MongoDB, Express,
        React, and Node.js. Passionate about clean code, modern UI/UX, and
        growth.
      </p>
      <button className="text-white mt-12 text-2xl font-[600] conRes">
        Let's connect
        <a
          href="#contactus"
          className="ri-arrow-right-line social text-[16px] ml-3"
        ></a>
      </button>
    </div>
  );
};

export default About;
