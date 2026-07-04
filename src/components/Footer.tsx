import { useRouter } from './Router';
import { useTheme } from './ThemeContext';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { navigate } = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId?: string) => {
    if (sectionId) {
      window.location.hash = '#/';
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate('home');
    }
  };

  return (
    <footer className={`transition-colors duration-300 py-12 border-t ${
      isDark ? 'bg-black border-zinc-900' : 'bg-zinc-100 border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick();
            }}
            className={`font-sans font-bold text-lg flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span>Arpan Charola</span>
          </a>
          <p className={`text-xs font-light mt-1 max-w-sm ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
            Premium websites, full-stack applications & AI integrations for startups and small businesses.
          </p>
        </div>

        {/* Center: Quick links */}
        <div className={`flex flex-wrap justify-center gap-6 text-xs font-medium ${
          isDark ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick();
            }}
            className={`transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}
          >
            Home
          </a>
          <button
            onClick={() => navigate('work')}
            className={`transition-colors cursor-pointer ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}
          >
            Work
          </button>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
            className={`transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className={`transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className={`transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}
          >
            Contact
          </a>
        </div>

        {/* Right: Scroll to top & copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={handleScrollToTop}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              isDark 
                ? 'bg-zinc-950 border-zinc-900 hover:border-zinc-850 text-zinc-400 hover:text-white' 
                : 'bg-white border-zinc-200 hover:border-zinc-300 text-zinc-600 hover:text-zinc-950 shadow-sm'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <p className={`text-[10px] font-mono ${isDark ? 'text-zinc-600' : 'text-zinc-500'}`}>
            © {new Date().getFullYear()} Arpan Charola. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
