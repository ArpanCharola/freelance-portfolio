import React from 'react';
import { useTheme } from './ThemeContext';
import { Sparkles, Terminal, Laptop, Network } from 'lucide-react';

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skillCategories = [
    {
      title: 'Frontend Mastery',
      icon: Laptop,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite', 'HTML5/CSS3', 'Figma to Code'],
    },
    {
      title: 'Full-Stack & Backend',
      icon: Network,
      skills: ['Node.js', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'WebSockets', 'Server Proxy Routing'],
    },
    {
      title: 'AI/ML Capabilities',
      icon: Terminal,
      skills: ['Gemini API SDK', 'TensorFlow', 'Python', 'Prompt Engineering', 'AI Feature Mockups', 'CNN Model Deployments'],
    }
  ];

  return (
    <section id="about" className={`py-24 border-b relative transition-colors duration-300 ${
      isDark ? 'bg-zinc-950/40 border-zinc-900/60' : 'bg-zinc-50 border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Bio Column */}
          <div className="lg:col-span-5">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${
              isDark ? 'bg-red-950/30 border-red-900/30' : 'bg-red-55/30 border-red-100'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className={`text-xs font-mono uppercase tracking-wider ${
                isDark ? 'text-red-400' : 'text-red-600'
              }`}>The Developer</span>
            </div>
            
            <h2 className={`text-3xl sm:text-4xl font-bold font-sans tracking-tight mb-6 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Hi, I’m Arpan Charola
            </h2>
            
            <div className={`space-y-4 font-light leading-relaxed text-sm sm:text-base ${
              isDark ? 'text-zinc-300' : 'text-zinc-700 font-normal sm:font-light'
            }`}>
              <p>
                I am an early-career developer and Computer Science student who prioritizes <strong className={isDark ? 'text-white' : 'text-zinc-950 font-semibold'}>delivery over theories</strong>. Instead of stockpiling frameworks, I spend my hours building and shipping real web products that resolve client problems.
              </p>
              <p>
                As a freelance developer, my focus is straightforward: <strong className={isDark ? 'text-white' : 'text-zinc-950 font-semibold'}>reliable communication, high performance, and visual elegance</strong>. I help small businesses, rising creators, and founders build high-converting landing pages, robust full-stack workflows, and integrate smart Gemini AI assistants into their interfaces.
              </p>
              <p className={isDark ? 'text-zinc-400' : 'text-zinc-500'}>
                Based out of Gujarat, India, I partner with clients globally. Let’s collaborate to launch a premium digital storefront or interactive prototype.
              </p>
            </div>

            {/* Quick stats list */}
            <div className={`mt-8 pt-8 border-t grid grid-cols-2 gap-4 ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
              <div>
                <span className={`text-xs font-mono uppercase block mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Response Time</span>
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-zinc-800'}`}>&lt; 4 Hours</span>
              </div>
              <div>
                <span className={`text-xs font-mono uppercase block mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Timezone</span>
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-zinc-800'}`}>GMT+5:30 (India)</span>
              </div>
            </div>
          </div>

          {/* Grouped Skills Column */}
          <div className={`lg:col-span-7 border rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 ${
            isDark 
              ? 'bg-black border-zinc-900' 
              : 'bg-white border-zinc-200 shadow-sm'
          }`}>
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none ${
              isDark ? 'bg-red-950/10' : 'bg-red-100/30'
            }`} />
            
            <h3 className={`text-lg font-bold font-sans mb-6 flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              <Sparkles className="w-5 h-5 text-red-500" />
              Compact Core Capabilities
            </h3>

            <div className="space-y-6">
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className={`border-b last:border-0 pb-6 last:pb-0 ${
                    isDark ? 'border-zinc-900/60' : 'border-zinc-100'
                  }`}>
                    <div className="flex items-center gap-2 mb-3">
                      <IconComponent className="w-4 h-4 text-zinc-500" />
                      <h4 className={`text-sm font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-xs font-mono px-3 py-1 rounded-md transition-colors border ${
                            isDark 
                              ? 'bg-zinc-950/80 hover:bg-zinc-900 text-zinc-400 hover:text-white border-zinc-900 hover:border-zinc-800' 
                              : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 border-zinc-200 hover:border-zinc-300'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
