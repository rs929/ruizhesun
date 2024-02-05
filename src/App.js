import './App.css';
import NavBar from './components/navbar/NavBar';
import ExperienceSection from './components/experiences/experiences';
import Hero from './components/hero/hero';
import SkillsSection from './components/skills/skillsSection';
import TextSection from './components/about/textSection';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectsSection from './components/projects/projects';
import ConnectSection from './components/connect/connect';

function App() {

  const preloadImages = () => {
    console.log("preloading");
    const images = {};
    var r = require.context("./assets/", false, /\.(png|jpe?g|svg)$/)
    r.keys().forEach(item => {
      images[item.replace("./", "")] = r(item);
    });

    Object.values(images).forEach(image => {
      const img = new Image();
      img.src = typeof image == "string" ? image : image.default
    });
  };

  useEffect(() => {
    preloadImages();
  });
  return (
    <div className="App">
      <NavBar />

      <section id='home'>
        <Hero />
      </section>

      <section id='about'>
        <TextSection />
        <SkillsSection />
      </section>

      <section id='experience'>
        <br></br>
        <ExperienceSection />
      </section>

      <section id='projects'>
        <ProjectsSection />
      </section>

      <section id='connect'>
        <ConnectSection />
      </section>


    </div>
  );
}

export default App;
