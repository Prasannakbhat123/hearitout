// src/App.js
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import TVShowsAccordion from './components/TvShowsAccordion';
import SliderComponent from './components/SliderComponent';

function App() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <TVShowsAccordion query="cars" />
      <SliderComponent />
      <Footer />
    </div>
  );
}

export default App;
