
import React from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-zinc-900 dark:text-white">Experience</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full" />
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
            My professional journey across software development and quality assurance.
          </p>
        </div>

        <div className="grid gap-12">
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="group relative grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
              <div className="flex flex-col gap-1">
                <span className="mono text-indigo-600 dark:text-indigo-500 font-medium text-sm">{item.period}</span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.company}</h3>
                <span className="text-zinc-500 dark:text-zinc-500 text-sm">{item.location}</span>
              </div>
              
              <div className="relative pl-6 md:pl-12 border-l border-zinc-200 dark:border-zinc-800 pb-8 group-last:pb-0">
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-full group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:scale-150 transition-all duration-300" />
                <h4 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">{item.role}</h4>
                <ul className="space-y-3">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-3">
                      <span className="text-indigo-600 dark:text-indigo-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education Highlight */}
        <div className="mt-24 pt-16 border-t border-zinc-200 dark:border-zinc-900">
           <h3 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">Education</h3>
           <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{PERSONAL_INFO.education.degree}</h4>
                <p className="text-zinc-700 dark:text-zinc-300">{PERSONAL_INFO.education.school}</p>
                <p className="text-zinc-500 dark:text-zinc-500 text-sm">{PERSONAL_INFO.education.location}</p>
              </div>
              <div className="mono text-zinc-500 dark:text-zinc-500 font-medium">
                {PERSONAL_INFO.education.years}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
