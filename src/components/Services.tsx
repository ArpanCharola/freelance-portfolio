import React from 'react';
import { servicePackages } from '../data/projects';
import { useTheme } from './ThemeContext';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Services() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Group packages for the visual hierarchy
  const frontendServices = servicePackages.filter(p => ['landing-page', 'business-website', 'design-to-code'].includes(p.id));
  const advancedServices = servicePackages.filter(p => ['full-stack-mvp', 'ai-prototype'].includes(p.id));

  return (
    <section id="services" className={`py-24 border-b relative transition-colors duration-300 ${
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
            }`}>Service Offerings</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold font-sans tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            Tailored Services. Professional Execution.
          </h2>
          <p className={`font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            No complex agencies. Speak directly to the developer and receive clean, modular, production-ready source code optimized for conversions and performance.
          </p>
        </div>

        {/* Level 1 Hierarchy: Core Frontend & Websites */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-xs font-mono uppercase tracking-widest px-2.5 py-1 border rounded ${
              isDark 
                ? 'bg-zinc-950 text-zinc-500 border-zinc-900' 
                : 'bg-zinc-100 text-zinc-500 border-zinc-200'
            }`}>
              01 / Core Offers
            </span>
            <div className={`h-px flex-1 ${isDark ? 'bg-zinc-900' : 'bg-zinc-200'}`} />
            <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Frontend & High-Converting Websites</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {frontendServices.map((pkg) => (
              <div
                key={pkg.id}
                className={`group flex flex-col rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${
                  isDark 
                    ? 'bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-950' 
                    : 'bg-white border border-zinc-200 hover:border-red-200 hover:bg-red-5/5 shadow-sm'
                }`}
              >
                {pkg.badge && (
                  <span className={`absolute top-4 right-4 text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                    isDark 
                      ? 'bg-red-900/20 text-red-400 border-red-900/30' 
                      : 'bg-red-55/30 text-red-600 border-red-100'
                  }`}>
                    {pkg.badge}
                  </span>
                )}
                
                <h3 className={`text-xl font-bold font-sans mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{pkg.title}</h3>

                <p className={`text-sm font-light leading-relaxed mb-6 flex-grow ${
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}>{pkg.description}</p>
                
                <div className={`space-y-3 mb-8 border-t pt-6 ${isDark ? 'border-zinc-900' : 'border-zinc-100'}`}>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-auto pt-4 border-t flex items-center justify-between text-xs font-mono ${
                  isDark ? 'border-zinc-900/40 text-zinc-500' : 'border-zinc-100 text-zinc-400'
                }`}>
                  <span>Delivery in {pkg.deliveryTime}</span>
                  <a
                    href="#contact"
                    onClick={handleConsultationClick}
                    className={`inline-flex items-center gap-1 transition-colors font-sans font-medium ${
                      isDark ? 'text-zinc-400 hover:text-red-500' : 'text-zinc-600 hover:text-red-600'
                    }`}
                  >
                    Discuss <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Level 2 & 3 Hierarchy: Advanced Applications & AI */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-xs font-mono uppercase tracking-widest px-2.5 py-1 border rounded ${
              isDark 
                ? 'bg-zinc-950 text-zinc-500 border-zinc-900' 
                : 'bg-zinc-100 text-zinc-500 border-zinc-200'
            }`}>
              02 / Premium & Scaling
            </span>
            <div className={`h-px flex-1 ${isDark ? 'bg-zinc-900' : 'bg-zinc-200'}`} />
            <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Full-Stack MVPs & Gemini AI Tools</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advancedServices.map((pkg) => (
              <div
                key={pkg.id}
                className={`group flex flex-col rounded-2xl p-8 transition-all duration-300 relative overflow-hidden ${
                  isDark 
                    ? 'bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800/80 hover:bg-zinc-950 hover:shadow-xl hover:shadow-red-950/5' 
                    : 'bg-white border border-zinc-200 hover:border-red-200 hover:bg-red-5/5 shadow-sm'
                }`}
              >
                {pkg.badge && (
                  <span className={`absolute top-6 right-6 text-[10px] font-mono font-bold px-2.5 py-1 rounded border uppercase tracking-wider ${
                    isDark 
                      ? 'bg-zinc-900 text-zinc-300 border-zinc-800' 
                      : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                  }`}>
                    {pkg.badge}
                  </span>
                )}
                
                <h3 className={`text-2xl font-bold font-sans mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{pkg.title}</h3>

                <p className={`text-sm font-light leading-relaxed mb-6 max-w-xl ${
                  isDark ? 'text-zinc-300' : 'text-zinc-600'
                }`}>{pkg.description}</p>
                
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 border-t pt-6 ${isDark ? 'border-zinc-900' : 'border-zinc-100'}`}>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-auto pt-6 border-t flex items-center justify-between text-xs font-mono ${
                  isDark ? 'border-zinc-900/60 text-zinc-500' : 'border-zinc-100 text-zinc-400'
                }`}>
                  <span>Development timeline: {pkg.deliveryTime}</span>
                  <a
                    href="#contact"
                    onClick={handleConsultationClick}
                    className={`inline-flex items-center gap-1 transition-colors font-sans font-medium text-sm ${
                      isDark ? 'text-zinc-300 hover:text-red-500' : 'text-zinc-600 hover:text-red-600'
                    }`}
                  >
                    Discuss custom scope <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notice footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500 font-light max-w-2xl mx-auto">
            * All projects are structured on specific milestones, clear deliverables, and optimized timelines. Let’s map out your specification sheet.
          </p>
        </div>
      </div>
    </section>
  );
}

