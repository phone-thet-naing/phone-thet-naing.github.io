
import React from 'react';
import { PERSONAL_INFO, ICONS } from '../constants';

const Hero: React.FC = () => {
  const handleDownload = () => {
    const fileId = '1k8MmTbaqr9ZwgMNKkW7_Gj4kcseFjBME';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            Available for New Projects
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-zinc-900 dark:text-white">
            Bridging the gap between <span className="text-indigo-500">Code</span> & <span className="text-blue-500 dark:text-blue-400">Quality</span>.
          </h1>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            I'm <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{PERSONAL_INFO.name}</span>, a Software Developer and QA Engineer specializing in high-performance web applications and end-to-end automation strategies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleDownload}
              className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-xl shadow-zinc-900/10 dark:shadow-white/5 active:scale-95"
            >
              <ICONS.Download size={20} />
              Download Resume
            </button>
            <a 
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-12 bg-gradient-to-b from-zinc-900 dark:from-white to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
