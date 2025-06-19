import React from "react";
import "../App.css";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import dashBoardImg from "../assets/dashboared.webp"
import alephImg from "../assets/aleph-beauty.webp"

const projects = [
{
  title: "CSPM Executive Dashboard",
  desc: "A responsive and interactive dashboard built with React and Redux Toolkit, featuring dynamic widget control, real-time updates, and smooth user experience.",
  link: "https://dashboardupender.netlify.app/",
  code: "https://github.com/upender-kumar657/Dashboard.git",
  tech: ["React", "Redux Toolkit", "JavaScript"],
  image: dashBoardImg,
},
  {
  title: "Aleph Beauty",
  desc: "A beautifully designed responsive website for a beauty brand, featuring smooth animations, elegant layouts, and a focus on user experience. ",
  link: "https://aleph-beauty-web.netlify.app/",
  code: "https://github.com/upender-kumar657/aleph-beauty.git",
  tech: ["HTTML", "CSS3","GSAP","JAVASCRIPT"],
  image:alephImg,
},
  {
  title: "Movie App",
  desc: "A responsive movie search app built with React and TMDB API. Users can search movies and view details like title, poster, rating, and release date in a clean UI.",
  link: "https://movie-app-f11m.vercel.app/",
  code: "https://i.pinimg.com/736x/6a/6b/bb/6a6bbbc2ebb32e262d2b0460f1efd44d.jpg",
  tech: ["React", "TMDB API", "CSS3"],
  image: "https://i.pinimg.com/736x/10/cb/3d/10cb3d903ca9224ee354322772546f67.jpg",
}


];

const Project = () => {
  return (
    <div id="projects" className="min-h-screen bg-black px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4">
            Throughout my journey as a web developer, I've consistently worked
            on projects that not only challenged my technical skills but also
            helped me grow as a problem solver and creative thinker in the digital space.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-8 md:mt-12">
          <Link 
            to="/viewProjects" 
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm sm:text-base rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            View All Projects
          </Link>
        </div>

        {/* Mobile-Specific Enhancements */}
        <div className="block sm:hidden mt-8 text-center">
          <p className="text-gray-500 text-xs">
            Tap on any project card to learn more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;