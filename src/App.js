import './App.css';
import NavBar from './components/NavBar';
import ExperienceSection from './components/experiences';
import Hero from './components/hero';
import LanugageSection from './components/languages';
import LanguageGallery from './components/languages2';
import SkillsSection from './components/skillsSection';
import TextSection from './components/textSection';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectsSection from './components/projects';

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
      </section>


    </div>
  );
}

export default App;
