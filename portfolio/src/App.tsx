import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Expertise from './components/Expertise.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="tech-bg"></div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Hero />
        <Expertise />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
