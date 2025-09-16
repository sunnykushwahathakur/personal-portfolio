import React from "react";
import "../App.css";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import projimg1 from "../assets/projimg1.png"
import projimg2 from "../assets/projimg2.png"
import projimg3 from "../assets/projimg3.png"

const projects = [
{
  title: "Sicdcup Family Golf Club",
  desc: "A fully responsive website for Sidcup Family Golf Club built using HTML, CSS, and JavaScript, showcasing club facilities, pricing and contact information.",
  link: "https://sunnykushwahathakur.github.io/golfclub/",
  code: "https://github.com/sunnykushwahathakur/golfclub",
  tech: ["HTML", "CSS", "JavaScript"],
  image: projimg1,
},
  {
  title: "Obys-Agency",
  desc: "A visually striking, fully responsive website for a Ukraine-based creative agency, built with HTML, CSS and JavaScript, featuring smooth animations.",
  link: "https://sunnykushwahathakur.github.io/obys-agency/",
  code: "https://github.com/sunnykushwahathakur/obys-agency",
  tech: ["HTML", "CSS", "JavaScript", "Smooth Animation"],
  image: projimg2,
},
  {
  title: "Dribbble Clone",
  desc: "A pixel-perfect Dribbble clone built with HTML and CSS, featuring user profiles, shot uploads, likes and comments to showcase creative work",
  link: "https://sunnykushwahathakur.github.io/Dribbble-Clone/",
  code: "https://github.com/sunnykushwahathakur/Dribbble-Clone",
  tech: ["HTML", "CSS3"],
  image: projimg3,
}


];

const Project = () => {
  return (
    <div id="projects" className="min-h-screen bg-black px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-white">
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