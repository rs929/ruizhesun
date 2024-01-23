import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import TextSection from './components/textSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <TextSection />
    </div>
  );
}

export default App;
