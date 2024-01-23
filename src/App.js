import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import TextSection from './components/textSection';
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Hero />
      <TextSection />
    </div>
  );
}

export default App;
