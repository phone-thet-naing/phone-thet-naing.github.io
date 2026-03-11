
import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12 inline-flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-zinc-900 dark:text-white">Let's build something <span className="text-indigo-500">exceptional</span>.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl mx-auto">
            Currently open to new opportunities as a Software Developer or QA Lead. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="p-10 rounded-3xl bg-indigo-600 flex flex-col items-center text-white shadow-xl shadow-indigo-500/20">
            <h3 className="text-2xl font-bold mb-4">Direct Contact</h3>
            <p className="mb-8 opacity-80">Feel free to call or email me directly.</p>
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="block text-xl md:text-2xl font-bold hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <p className="text-lg font-medium opacity-90">{PERSONAL_INFO.phone}</p>
            </div>
          </div>

          <div className="p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center shadow-xl shadow-zinc-900/5">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Social Links</h3>
            <p className="mb-8 text-zinc-600 dark:text-zinc-400 text-center">You can find me on these platforms too.</p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all duration-300"
                  title={link.label}
                >
                  {/* Fixed TypeScript error by adding <{ size?: number }> to React.ReactElement to allow passing 'size' prop */}
                  {React.cloneElement(link.icon as React.ReactElement<{ size?: number }>, { size: 24 })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
