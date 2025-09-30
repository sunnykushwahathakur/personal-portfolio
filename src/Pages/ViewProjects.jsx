import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { Navbar } from '../components/Navbar';
import projimg1 from "../assets/projimg1.png"
import projimg2 from "../assets/projimg2.png"
import projimg3 from "../assets/projimg3.png"
import projimg4 from "../assets/projimg4.png"
import projimg5 from "../assets/projimg5.png"
import projimg6 from "../assets/projimg6.png"
import projimg7 from "../assets/projimg7.png"
import projimg8 from "../assets/projimg8.png"
import projimg9 from "../assets/projimg9.png"
import projimg10 from "../assets/projimg10.png"
import projimg11 from "../assets/projimg11.png"
import projimg12 from "../assets/projimg12.png"
import projimg13 from "../assets/projimg13.png"



const projects = [
  {
    title: "BioBank Landing Page",
    desc: "A fully responsive website for BioBank built using HTML, CSS, showcasing its services, features and contact information with modern looks.",
    link: "https://biobank-kappa.vercel.app/",
    code: "https://github.com/sunnykushwahathakur/biobank",
    tech: ["HTML", "CSS"],
    image: projimg13,
  },
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
  },
  {
  title: "GTA-VI Landing Page",
  desc: "A fan-made GTA VI themed web app built with React, showcasing interactive maps, characters and missions in a slick, responsive UI.",
  link: "https://sunnygta-vi.netlify.app/",
  code: "https://github.com/sunnykushwahathakur/GTA-VI",
  tech: ["React", "GSAP", "Tailwind CSS"],
  image: projimg4,
}

   ,
  {
  title: "Premier Fashion",
  desc: "An immersive fashion website designed to highlight premium apparel, seasonal trends, and style inspiration with a luxury feel.",
  link: "https://sunnykushwahathakur.github.io/Premier/",
  code: "https://github.com/sunnykushwahathakur/Premier",
  tech: ["HTML", "CSS"],
  image: projimg5,
},
{
  title: "Digital Designer Portfolio",
  desc: "A modern and responsive portfolio website for a digital designer, showcasing creative projects, case studies, and interactive visuals.",
  link: "https://sunnykushwahathakur.github.io/Bent-Portfolio/", 
  code: "https://github.com/sunnykushwahathakur/Bent-Portfolio", 
  tech: ["HTML", "CSS"],
  image: projimg6,
},
  {
  title: "Zerodha Landing Page",
  desc: "A modern and responsive landing page inspired by Zerodha, built with HTML and CSS to replicate its clean design and user-friendly layout.",
  link: "https://sunnykushwahathakur.github.io/Zerodha-Landing-Page/",
  code: "https://github.com/sunnykushwahathakur/Zerodha-Landing-Page",
  tech: ["HTML", "CSS"],
  image: projimg7,
},
{
  title: "Text-To-Voice Converter",
  desc: "A simple and efficient text-to-voice converter built with JavaScript, enabling users to convert written text into clear, natural-sounding voice.",
  link: "https://sunnykushwahathakur.github.io/Text-To-Voice-Converter/",
  code: "https://github.com/sunnykushwahathakur/Text-To-Voice-Converter",
  tech: ["HTML", "CSS", "JavaScript"],
  image: projimg8,
},
{
  title: "To-Do App",
  desc: "Stay organized and boost your productivity with this sleek To-Do app. Add, edit, and delete tasks effortlessly. Mark tasks as completed and keep track of your daily goals with ease",
  link: "https://sunnykushwahathakur.github.io/To-Do-List/",
  code: "https://github.com/sunnykushwahathakur/To-Do-List",
  tech: ["HTML", "CSS", "JavaScript"],
  image: projimg9,
},
{
  title: "Weather App",
  desc: "Stay informed about the weather with this user-friendly Weather App. Get real-time weather updates, forecasts, and more.",
  link: "https://sunnykushwahathakur.github.io/Weather-App/",
  code: "https://github.com/sunnykushwahathakur/Weather-App",
  tech: ["HTML", "CSS"],
  image: projimg10,
},
{
  title: "Quiz App",
  desc: "Test your knowledge with this interactive Quiz App. Answer questions, track your score, and challenge yourself to beat your best.",
  link: "https://sunnykushwahathakur.github.io/Quiz-App/",
  code: "https://github.com/sunnykushwahathakur/Quiz-App",
  tech: ["HTML", "CSS", "JavaScript"],
  image: projimg11,
},
{
  title: "Random Password Generator",
  desc: "Generate secure and random passwords with this easy-to-use password generator. Customize length and complexity to fit your needs.",
  link: "https://sunnykushwahathakur.github.io/Random-Password-Generator/",
  code: "https://github.com/sunnykushwahathakur/Random-Password-Generator",
  tech: ["HTML", "CSS", "JavaScript"],
  image: projimg12,
}

];






const ViewProjects = ({ project, index }) => {
  return (
     <>
  
      <div id="projects" className="min-h-screen bg-black px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-white">
            Projects
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed">
            Throughout my journey as a web developer, I've consistently worked
            on projects that not only challenged my technical skills but also
            helped me grow as a problem solver...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
    
     </>
    
  )
}

export default ViewProjects