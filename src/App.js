import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import TextSection from './components/textSection';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <Hero />
      <TextSection />
    </div>
  );
}

export default App;
