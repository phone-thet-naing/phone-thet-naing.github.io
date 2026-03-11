
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { useTheme } from '../ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tighter group flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white group-hover:bg-indigo-500 transition-colors">
            {PERSONAL_INFO.name.charAt(0)}
          </div>
          <span className="hidden sm:inline text-zinc-900 dark:text-white">{PERSONAL_INFO.name}</span>
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-6">
            {['Experience', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white transition-all border border-zinc-200 dark:border-zinc-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />

            <div className="flex items-center gap-3 md:gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
