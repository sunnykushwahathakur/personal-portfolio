import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { Navbar } from '../components/Navbar';


const projects = [
  {
  title: "CSPM Executive Dashboard",
  desc: "A responsive and interactive dashboard built with React and Redux Toolkit, featuring dynamic widget control, real-time updates, and smooth user experience.",
  link: "https://dashboardupender.netlify.app/",
  code: "https://github.com/upender-kumar657/Dashboard.git",
  tech: ["React", "Redux Toolkit", "JavaScript"],
  image: "src/assets/dashboared.webp",
},
   {
  title: "Aleph Beauty",
  desc: "A beautifully designed responsive website for a beauty brand, featuring smooth animations, elegant layouts, and a focus on user experience. ",
  link: "https://aleph-beauty-web.netlify.app/",
  code: "https://github.com/upender-kumar657/aleph-beauty.git",
  tech: ["HTTML", "CSS3","GSAP","JAVASCRIPT"],
  image:
    "src/assets/aleph-beauty.webp",
},
  {
    title: "Apple Website UI",
    desc: "Animated Apple website using GSAP & Tailwind.",
    link: "https://phonesitemobile.netlify.app/",
    code: "https://github.com/upender-kumar657/apple-web.git",
    tech: ["GSAP", "Tailwind CSS", "React"],
    image:
      "src/assets/trade-in-img.png",
  },
  {
  title: "Movie App",
  desc: "A responsive movie search app built with React and TMDB API. Users can search movies and view details like title, poster, rating, and release date in a clean UI.",
  link: "https://movie-app-f11m.vercel.app/",
  code: "https://github.com/upender-kumar657/movie-app.git",
  tech: ["React", "TMDB API", "CSS3"],
  image: "https://i.pinimg.com/736x/10/cb/3d/10cb3d903ca9224ee354322772546f67.jpg",
}

   ,
  {
  title: "Calculator App",
  desc: "A responsive calculator to perform basic arithmetic operations like addition, subtraction, multiplication, and division with a clean UI.",
  link: "https://arithmaticmachine.netlify.app/",
  code: "https://github.com/upender-kumar657/level2-task1",
  tech: ["HTML", "CSS", "JavaScript"],
  image:
    "https://i.pinimg.com/736x/9d/c1/49/9dc149f712a66e15418ad21e02a3cde0.jpg",
},
{
  title: "To-Do App",
  desc: "A responsive and interactive to-do list application that lets users add, edit, delete, and mark tasks as completed. Built with a clean UI and smooth animations for a better user experience.",
  link: "https://todo-app-2025-web.netlify.app/", 
  code: "https://github.com/upender-kumar657/level2-task3.git", 
  tech: ["HTML", "CSS", "JavaScript","react"],
  image:
    "src/assets/todoImg.png",
},
  {
  title: "Legion Webpage",
  desc: "A modern and responsive landing page designed to showcase brand presence with a sleek layout, engaging visuals, and smooth user interactions. Built using HTML, CSS, and JavaScript.",
  link: "https://legion-webpage.netlify.app/",
  code: "https://github.com/upender-kumar657/legion.git",
  tech: ["HTML", "CSS", "JavaScript"],
  image:
    "src/assets/dino.webp",
},
{
  title: "Horizon Webpage",
  desc: "A visually appealing and fully responsive landing page crafted to highlight digital presence with clean design, smooth scrolling effects, and interactive elements. Developed using HTML, CSS, and JavaScript.",
  link: "https://horizon-web.netlify.app/",
  code: "https://github.com/upender-kumar657/horizon.git",
  tech: ["HTML", "CSS", "JavaScript","gsap"],
  image:
    "src/assets/featured-image-c.webp",
},
{
  title: "Lazarev Webpage",
  desc: "An interactive and fully responsive landing page inspired by modern design trends, enhanced with GSAP-powered animations for dynamic user engagement. Built using HTML, CSS, JavaScript, and GSAP.",
  link: "https://lazarev-webpage.netlify.app/",
  code: "https://github.com/upender-kumar657/lazarev.git",
  tech: ["HTML", "CSS", "JavaScript", "GSAP"],
  image:
    "src/assets/rem.webp",
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