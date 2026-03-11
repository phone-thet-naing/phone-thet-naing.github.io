
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './constants';
import { ThemeProvider } from './ThemeContext';


const Footer: React.FC = () => (
  <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 text-center transition-colors duration-300">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-zinc-500 dark:text-zinc-500 text-sm">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
      </div>
      <div className="flex items-center gap-6">
        <a href="#home" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-sm transition-colors">Home</a>
        <a href="#experience" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-sm transition-colors">Experience</a>
        <a href="#skills" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-sm transition-colors">Skills</a>
      </div>
      <div className="text-zinc-500 dark:text-zinc-500 text-sm italic">
        Made with Passion.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
