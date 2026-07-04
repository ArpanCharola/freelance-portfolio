import React from 'react';
import { useRouter } from './Router';
import { useTheme } from './ThemeContext';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Code, Cpu, Database, CheckCircle } from 'lucide-react';

export default function Hero() {
  const { navigate } = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleStartProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Decorative gradient radial glows for premium theme */}
      {isDark ? (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-2/3 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-red-950/10 rounded-full blur-[100px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-200/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-2/3 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-red-100/15 rounded-full blur-[100px] pointer-events-none" />
        </>
      )}

      {/* Main Content Container (Grid for desktop split layout) */}
      <div className="relative max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full mb-16">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${
              isDark 
                ? 'bg-zinc-950 border-zinc-800/80 text-zinc-300' 
                : 'bg-white border-zinc-200 text-zinc-700 shadow-sm'
            } mb-8`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wide uppercase">
              Available for freelance websites, frontend builds & AI-ready web projects
            </span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className={`font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1] mb-6 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            I build clean websites, <br />
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              full-stack apps
            </span>{' '}
            and AI web experiences.
          </motion.h1>

          {/* Hero Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10 ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Frontend-focused freelance developer helping small businesses, creators, and startups turn ideas into polished digital products.
          </motion.p>

          {/* Action Buttons (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              onClick={handleStartProjectClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-red-900/10 group cursor-pointer"
            >
              Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={() => navigate('work')}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border rounded-xl transition-all duration-300 cursor-pointer ${
                isDark 
                  ? 'bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-white' 
                  : 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-800 shadow-sm'
              }`}
            >
              View Work
            </button>

            {/* Quick Click WhatsApp access */}
            <a
              href="https://wa.me/918108309883"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 font-medium rounded-xl transition-all duration-300 border ${
                isDark
                  ? 'bg-transparent hover:bg-zinc-900/40 text-green-400 hover:text-green-300 border-green-500/20'
                  : 'bg-white hover:bg-green-50/50 text-green-600 hover:text-green-700 border-green-500/30 shadow-sm'
              }`}
            >
              <MessageSquare className="w-5 h-5 fill-current text-green-500" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Attention-Grabbing Developer Workspace Image */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          <div className="relative w-full max-w-md lg:max-w-none group rounded-2xl p-1 bg-zinc-900/40 border border-zinc-800/80 shadow-2xl overflow-hidden">
            {/* Subtle Neon Backdrop Accent Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl blur opacity-25 group-hover:opacity-35 transition duration-700" />
            
            <div className="relative rounded-xl overflow-hidden bg-zinc-950">
              <img
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1200&q=80"
                alt="Aesthetic Mechanical Keyboard and Red Neon Developer Workstation Setup"
                className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Glass Panel */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md border border-zinc-800/80 p-3.5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none mb-1">Rig Status</p>
                    <p className="text-xs font-semibold text-white leading-none">Full-Stack Development active</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-red-400 border border-red-900/30 bg-red-950/20 px-2 py-0.5 rounded uppercase font-bold">MIL-SPEC</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust Strip */}
      <div className={`w-full border-y relative z-10 transition-colors duration-300 ${
        isDark 
          ? 'border-zinc-900 bg-zinc-950/40' 
          : 'border-zinc-200 bg-white shadow-sm'
      } py-8`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${
              isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
            }`}>
              <CheckCircle className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className={`text-xl font-bold font-sans ${isDark ? 'text-white' : 'text-zinc-900'}`}>10+</p>
              <p className={`text-xs tracking-wide uppercase font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Projects Built</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${
              isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
            }`}>
              <Code className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className={`text-xl font-bold font-sans ${isDark ? 'text-white' : 'text-zinc-900'}`}>Frontend + Stack</p>
              <p className={`text-xs tracking-wide uppercase font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Core Delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${
              isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
            }`}>
              <Cpu className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className={`text-xl font-bold font-sans ${isDark ? 'text-white' : 'text-zinc-900'}`}>AI/ML Capable</p>
              <p className={`text-xs tracking-wide uppercase font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Future Ready</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${
              isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
            }`}>
              <Database className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className={`text-xl font-bold font-sans ${isDark ? 'text-white' : 'text-zinc-900'}`}>Available Now</p>
              <p className={`text-xs tracking-wide uppercase font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>For Freelance Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

