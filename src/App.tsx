import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ScrollUp from './utils/ScrollUp';

const App: React.FC = () => {
  return (
    <>
      <section id='home'>
        <Navbar />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <ScrollUp />
    </>
  );
};

export default App;
