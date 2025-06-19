import React, { useRef } from "react";
import meter1Img from "../assets/meter1.svg";
import meter2Img from "../assets/meter2.svg";
import meter3Img from "../assets/meter3.svg";


const Skills = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    const scrollAmount = window.innerWidth < 768 ? -250 : -400;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const scrollAmount = window.innerWidth < 768 ? 250 : 400;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skillsData = [
    { label: "HTML", img: meter1Img },
    { label: "CSS", img: meter1Img },
    { label: "JAVASCRIPT", img: meter3Img },
    { label: "TAILWIND CSS", img: meter1Img  },
    { label: "REACT JS", img: meter1Img  },
    { label: "NODE JS", img: meter1Img  },
    { label: "EXPRESS JS", img: meter2Img  },
    { label: "MONGODB", img: meter1Img },
  ];

  return (
    <div
      id="skills"
      className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] text-white min-h-[20rem] md:min-h-[25rem] shadow-lg rounded-[1rem] md:rounded-[2rem] absolute z-10 top-[40%] md:top-[40%] bg-[#141414] left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Header */}
      <div className="pt-4 md:pt-8 pb-4 md:pb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
          Skills
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg text-center leading-relaxed">
          I'm a MERN Stack Developer with experience in building responsive web
          apps using React, Node.js, Express, and MongoDB. I also use Git, GitHub,
          and Postman in my workflow.
        </p>
      </div>

      {/* Skills Scroll Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="w-full h-[12rem] sm:h-[14rem] md:h-[16rem] flex items-center overflow-x-auto scroll-smooth scrollbar-hide gap-4 md:gap-6 lg:gap-8 px-2 md:px-4"
        >
          {skillsData.map((skill, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <div className="rounded-full  h-[6rem] w-[6rem] sm:h-[7rem] sm:w-[7rem] md:h-[8rem] md:w-[8rem] lg:h-[10rem] lg:w-[10rem]  overflow-hidden mx-auto flex items-center justify-center">
                <img
                  src={skill.img}
                  alt={skill.label}
                  className="h-[80%] w-[80%] object-contain"
                />
              </div>
              <p className="text-center mt-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                {skill.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Buttons for Desktop */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex ri-arrow-left-wide-fill text-white absolute z-20 w-[3rem] h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-full items-center justify-center text-3xl lg:text-4xl bg-[#44424263] hover:bg-[#544d4d63] transition-colors left-[-1.5rem] lg:left-[-1.75rem] top-1/2 -translate-y-1/2 cursor-pointer"
        ></button>

        <button
          onClick={scrollRight}
          className="hidden md:flex ri-arrow-right-wide-fill text-white absolute z-20 w-[3rem] h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-full items-center justify-center text-3xl lg:text-4xl bg-[#44424263] hover:bg-[#544d4d63] transition-colors right-[-1.5rem] lg:right-[-1.75rem] top-1/2 -translate-y-1/2 cursor-pointer"
        ></button>

        {/* Mobile Scroll Buttons */}
        <div className="md:hidden flex justify-center mt-4 gap-2">
          <button
            onClick={scrollLeft}
            className="ri-arrow-left-s-line text-white bg-[#44424263] hover:bg-[#544d4d63] transition-colors rounded-full w-8 h-8 flex items-center justify-center text-lg"
          ></button>
          <button
            onClick={scrollRight}
            className="ri-arrow-right-s-line text-white bg-[#44424263] hover:bg-[#544d4d63] transition-colors rounded-full w-8 h-8 flex items-center justify-center text-lg"
          ></button>
        </div>
      </div>

      {/* Swipe Hint */}
      <div className="md:hidden text-center text-xs text-gray-400 mt-2 pb-4">
        Swipe to see more skills
      </div>
    </div>
  );
};

export default Skills;