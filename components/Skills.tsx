
import React from 'react';
import { SKILLS, ICONS } from '../constants';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages & Core': return <ICONS.Code className="text-indigo-500" size={24} />;
      case 'Web Development': return <ICONS.Layers className="text-blue-400" size={24} />;
      case 'QA Automation': return <ICONS.ShieldCheck className="text-emerald-500" size={24} />;
      case 'Cloud & Devops': return <ICONS.Terminal className="text-orange-400" size={24} />;
      default: return <ICONS.Code className="text-indigo-500" size={24} />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 text-center text-zinc-900 dark:text-white">Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 hover:border-indigo-500/30 dark:hover:border-zinc-700/80 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  {getIcon(group.category)}
                </div>
                <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">{group.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-xs font-medium mono bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 rounded-lg border border-zinc-200 dark:border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
