import './App.css';
import NavBar from './components/NavBar';
import ExperienceSection from './components/experiences';
import Hero from './components/hero';
import LanugageSection from './components/languages';
import LanguageGallery from './components/languages2';
import SkillsSection from './components/skillsSection';
import TextSection from './components/textSection';

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
      <br></br>
      <br></br>

      <section id='experience'>
        <ExperienceSection />
      </section>

    </div>
  );
}

export default App;
