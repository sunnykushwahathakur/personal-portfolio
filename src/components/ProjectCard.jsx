import React, { useState } from "react";
import "../App.css"

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700 ${
        isHovered ? "shadow-2xl shadow-blue-500/20" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.2}s`,
        animation: "fadeInUp 0.8s ease-out forwards",
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-2">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg transition-all duration-300 text-center hover:from-blue-600 hover:to-purple-700 transform ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-90"
            }`}
          >
            View Live
          </a>
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2 px-4 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-gray-700 hover:border-gray-500 transform ${
                isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-90"
              }`}
            >
              Code
            </a>
          )}
        </div>
      </div>

      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
