import React from 'react';
import { useTheme } from './ThemeContext';
import { MessageSquare, Layout, Sparkles, RefreshCw, Globe, ShieldAlert } from 'lucide-react';

export default function HowIWork() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const steps = [
    {
      num: '01',
      title: 'Discuss Requirements',
      desc: 'We start with a detailed chat or voice call to scope out your specific objectives, brand guidelines, core functionality, and timeline boundaries.',
      icon: MessageSquare,
    },
    {
      num: '02',
      title: 'Plan Structure',
      desc: 'I draft a clean wireframe map, content hierarchy, and precise milestone sheet. This aligns our expectations before writing any production code.',
      icon: Layout,
    },
    {
      num: '03',
      title: 'Build First Version',
      desc: 'Using React and Tailwind CSS, I develop a clean, high-performance interactive draft, fully responsive and accessible across all modern browsers.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Review and Revise',
      desc: 'We inspect the live staging link together. I implement your feedback on copy, visual spacing, color tones, and micro-animations.',
      icon: RefreshCw,
    },
    {
      num: '05',
      title: 'Deploy',
      desc: 'I connect your custom domain name, optimize meta tags for SEO searchability, and push the site to standard lightning-fast web hosts (Vercel/Netlify/Cloud Run).',
      icon: Globe,
    },
    {
      num: '06',
      title: 'Support Small Fixes',
      desc: 'Even after launch, I stand by my work. I provide 30 days of active support for minor updates, alignment adjustments, and performance checkups.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section className={`py-24 border-b relative transition-colors duration-300 ${
      isDark ? 'bg-black border-zinc-900/60' : 'bg-zinc-50 border-zinc-200'
    }`}>
      <div className={`absolute inset-0 pointer-events-none ${
        isDark 
          ? 'bg-gradient-to-b from-transparent via-red-950/2 to-transparent' 
          : 'bg-gradient-to-b from-transparent via-red-100/5 to-transparent'
      }`} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${
            isDark ? 'bg-red-950/30 border-red-900/30' : 'bg-red-55/30 border-red-100'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className={`text-xs font-mono uppercase tracking-wider ${
              isDark ? 'text-red-400' : 'text-red-600'
            }`}>Methodology</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold font-sans tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            A Transparent, Goal-Driven Workflow
          </h2>
          <p className={`font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            No guessing games. You will have direct access to a private live staging URL to monitor the progress of your build at every major development milestone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className={`group p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isDark 
                    ? 'bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-950' 
                    : 'bg-white border border-zinc-200 hover:border-red-200 hover:bg-red-55/5 shadow-sm'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono px-2.5 py-1 border rounded ${
                      isDark 
                        ? 'text-red-400 bg-red-500/5 border-red-500/10' 
                        : 'text-red-600 bg-red-50 border-red-100 font-semibold'
                    }`}>
                      STEP {step.num}
                    </span>
                    <IconComponent className="w-5 h-5 text-zinc-500 group-hover:text-red-500 transition-colors" />
                  </div>
                  
                  {/* Step Title */}
                  <h3 className={`text-lg font-bold font-sans mb-3 group-hover:text-red-600 transition-colors ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className={`text-sm font-light leading-relaxed ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {step.desc}
                  </p>
                </div>

                <div className={`h-0.5 w-full transition-colors mt-6 ${
                  isDark ? 'bg-zinc-900 group-hover:bg-red-950/50' : 'bg-zinc-100 group-hover:bg-red-200/50'
                }`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
