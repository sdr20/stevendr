import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;