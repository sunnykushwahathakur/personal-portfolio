
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Project from './Pages/Project';
import ViewProjects from './Pages/ViewProjects';





const App = () => {
  return (
   
     <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/viewProjects" element={<ViewProjects />} />

      </Routes>
     
     </>
    
  );
};

export default App;
