import './App.css';
import NavBar from './components/navbar/NavBar';
import ExperienceSection from './components/experiences/experiences';
import Hero from './components/hero/hero';
import LanugageSection from './components/languages/languages';
import LanguageGallery from './components/languages/languages2';
import SkillsSection from './components/skills/skillsSection';
import TextSection from './components/about/textSection';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectsSection from './components/projects/projects';

function App() {
  return (
    <div className="App">
      <NavBar />

      <section id='home'>
        <Hero />
      </section>

      <section id='about'>
        <TextSection />
        <SkillsSection />
        <LanguageGallery />
        <LanugageSection />
      </section>

      <section id='experience'>
        <br></br>
        <ExperienceSection />
      </section>

      <section id='projects'>
        <ProjectsSection />
        <h3>--------------WORK IN PROGRESS--------------</h3>
        <br></br><br></br>
        <br></br><br></br>
      </section>


    </div>
  );
}

export default App;
