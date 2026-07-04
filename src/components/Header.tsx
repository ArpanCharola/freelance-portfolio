import React, { useState, useEffect } from 'react';
import { useRouter } from './Router';
import { useTheme } from './ThemeContext';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Header() {
  const { path, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId?: string) => {
    setMobileMenuOpen(false);
    if (sectionId) {
      if (path !== 'home') {
        // Go home first, then scroll
        window.location.hash = '#/';
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('home');
    }
  };

  const isDark = theme === 'dark';

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800/40 py-4'
            : 'bg-white/80 backdrop-blur-md border-b border-zinc-200/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick();
          }}
          className={`group flex items-center gap-2 font-sans font-bold text-xl tracking-tight transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 group-hover:scale-150 transition-all duration-300 shadow-md shadow-red-500/20" />
          <span>Arpan Charola</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick();
            }}
            className={`text-sm font-medium transition-colors hover:text-red-500 ${
              path === 'home' && window.location.hash !== '#services' && window.location.hash !== '#about' && window.location.hash !== '#contact'
                ? 'text-red-500'
                : isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Home
          </a>
          <button
            onClick={() => navigate('work')}
            className={`text-sm font-medium transition-colors hover:text-red-500 cursor-pointer ${
              path === 'work' 
                ? 'text-red-500' 
                : isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Work
          </button>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
            className={`text-sm font-medium transition-colors hover:text-red-500 ${
              isDark ? 'text-zinc-400 font-normal' : 'text-zinc-600'
            }`}
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className={`text-sm font-medium transition-colors hover:text-red-500 ${
              isDark ? 'text-zinc-400 font-normal' : 'text-zinc-600'
            }`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className={`text-sm font-medium transition-colors hover:text-red-500 ${
              isDark ? 'text-zinc-400 font-normal' : 'text-zinc-600'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          {/* Light/Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-all duration-300 cursor-pointer ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700' 
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-350'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className={`relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg group border overflow-hidden ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-white hover:border-red-600/50 hover:bg-zinc-950' 
                : 'bg-white border-zinc-200 text-zinc-800 hover:border-red-600/50 hover:bg-zinc-50'
            }`}
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Start a Project <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* Mobile Menu & Theme Toggle Combo */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-all duration-300 cursor-pointer ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white' 
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors cursor-pointer ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={`md:hidden fixed inset-0 top-[72px] z-40 backdrop-blur-lg flex flex-col px-6 py-8 animate-fade-in ${
          isDark ? 'bg-black/95 border-t border-zinc-900' : 'bg-white/95 border-t border-zinc-200'
        }`}>
          <nav className="flex flex-col gap-6 text-lg font-medium">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick();
              }}
              className={`pb-2 border-b transition-colors hover:text-red-500 ${
                isDark ? 'border-zinc-900' : 'border-zinc-100'
              } ${
                path === 'home' ? 'text-red-500' : isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Home
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('work');
              }}
              className={`text-left pb-2 border-b transition-colors hover:text-red-500 cursor-pointer ${
                isDark ? 'border-zinc-900' : 'border-zinc-100'
              } ${
                path === 'work' ? 'text-red-500' : isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Work
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('services');
              }}
              className={`pb-2 border-b transition-colors hover:text-red-500 ${
                isDark ? 'border-zinc-900 text-zinc-400' : 'border-zinc-100 text-zinc-600'
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className={`pb-2 border-b transition-colors hover:text-red-500 ${
                isDark ? 'border-zinc-900 text-zinc-400' : 'border-zinc-100 text-zinc-600'
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className={`pb-2 border-b transition-colors hover:text-red-500 ${
                isDark ? 'border-zinc-900 text-zinc-400' : 'border-zinc-100 text-zinc-600'
              }`}
            >
              Contact
            </a>
          </nav>

          <div className="mt-auto">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-red-900/20"
            >
              Start a Project <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

