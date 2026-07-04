import React from 'react';
import { useRouter } from '../components/Router';
import { useTheme } from '../components/ThemeContext';
import { projectsData } from '../data/projects';
import { ArrowLeft, ExternalLink, Github, Users, ShieldCheck, Code2, GraduationCap } from 'lucide-react';

export default function ProjectDetail() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { slug, navigate } = useRouter();

  // Find the project based on the active slug
  const project = projectsData.find((p) => p.slug === slug);

  if (!project || !project.showDetail || !project.detailContent) {
    return (
      <section className={`min-h-screen pt-32 pb-24 flex items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'
      }`}>
        <div className="text-center max-w-md px-6">
          <h2 className="text-2xl font-bold font-sans mb-4">Project Not Found</h2>
          <p className={`font-light mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            The project details page you are trying to view does not exist or has no structured detail content.
          </p>
          <button
            onClick={() => navigate('work')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Work Archive</span>
          </button>
        </div>
      </section>
    );
  }

  const { whoItIsFor, whatIBuilt, keyFeatures, whatILearned } = project.detailContent;

  const handleStartSimilarProject = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('home');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <main className={`min-h-screen pt-32 pb-24 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Subtle top background glow */}
      <div className={`absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${
        isDark ? 'bg-blue-950/5' : 'bg-blue-100/10'
      }`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Back navigation line */}
        <button
          onClick={() => navigate('work')}
          className={`inline-flex items-center gap-2 text-xs font-mono transition-colors uppercase tracking-wider mb-8 cursor-pointer ${
            isDark ? 'text-zinc-500 hover:text-blue-400' : 'text-zinc-600 hover:text-blue-600'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work Index</span>
        </button>

        {/* Project Header Block */}
        <div className={`border-b pb-10 mb-12 ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${
            isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-blue-50 border-blue-100'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className={`text-xs font-mono uppercase tracking-widest ${
              isDark ? 'text-zinc-400' : 'text-blue-600'
            }`}>{project.category} Portfolio Piece</span>
          </div>
          
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            {project.name}
          </h1>
          
          <p className={`max-w-4xl text-base sm:text-lg font-light leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            {project.description}
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Visual Screenshot Section */}
            <div className={`aspect-video w-full rounded-2xl overflow-hidden border relative ${
              isDark ? 'border-zinc-900 bg-zinc-950/40' : 'border-zinc-200 bg-white shadow-sm'
            }`}>
              <img
                src={project.image}
                alt={`${project.name} Production Mockup`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute bottom-4 right-4 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider border ${
                isDark ? 'bg-black/85 border-zinc-800 text-zinc-400' : 'bg-white/95 border-zinc-200 text-zinc-600'
              }`}>
                Active Live Deployment
              </div>
            </div>

            {/* Target Audience / Objective */}
            <div className={`border rounded-2xl p-6 sm:p-8 ${
              isDark ? 'bg-zinc-950/40 border-zinc-900' : 'bg-white border-zinc-200 shadow-sm'
            }`}>
              <h3 className={`text-lg font-bold font-sans mb-3 flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                <Users className="w-5 h-5 text-blue-500" />
                Who It Is Useful For
              </h3>
              <p className={`text-sm font-light leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {whoItIsFor}
              </p>
            </div>

            {/* System Breakdown / Core Build */}
            <div className="space-y-4">
              <h3 className={`text-xl font-bold font-sans flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                <Code2 className="w-5 h-5 text-blue-500" />
                What I Built
              </h3>
              <p className={`text-sm font-light leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {whatIBuilt}
              </p>
            </div>

            {/* Core Features */}
            <div className="space-y-4">
              <h3 className={`text-xl font-bold font-sans flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                Key Features Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className={`p-4 border rounded-xl flex items-start gap-3 ${
                      isDark ? 'bg-zinc-950/20 border-zinc-900/60' : 'bg-zinc-100/50 border-zinc-200'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span className={`text-xs leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reflection / Takeaways */}
            <div className={`space-y-4 border-t pt-8 ${isDark ? 'border-zinc-900' : 'border-zinc-250'}`}>
              <h3 className={`text-xl font-bold font-sans flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                <GraduationCap className="w-5 h-5 text-blue-500" />
                What I Learned & Improved
              </h3>
              <p className={`text-sm font-light leading-relaxed p-5 border rounded-xl ${
                isDark 
                  ? 'text-zinc-400 bg-zinc-950/10 border-zinc-900/40' 
                  : 'text-zinc-600 bg-zinc-100/30 border-zinc-200'
              }`}>
                {whatILearned}
              </p>
            </div>

          </div>

          {/* Sidebar / Specifications Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Action Box */}
            <div className={`border rounded-2xl p-6 relative overflow-hidden ${
              isDark ? 'bg-zinc-950/60 border-zinc-900' : 'bg-white border-zinc-200 shadow-sm'
            }`}>
              <h3 className={`text-sm font-mono uppercase tracking-widest mb-4 ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                Deployment Connections
              </h3>
              
              <div className="space-y-3 mb-6">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Demo</span>
                  </a>
                )}

                {project.gitHubUrl && (
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 text-white font-medium text-xs rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-zinc-900 hover:bg-zinc-850 active:bg-zinc-950 border-zinc-800' 
                        : 'bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-150 border-zinc-200 text-zinc-800'
                    }`}
                  >
                    <Github className="w-4 h-4 text-zinc-400" />
                    <span>Inspect GitHub Repo</span>
                  </a>
                )}
              </div>

              {/* Delivery specifications */}
              <div className={`space-y-4 pt-6 border-t ${isDark ? 'border-zinc-900' : 'border-zinc-100'}`}>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${
                    isDark ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    Integrated Stack
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                          isDark 
                            ? 'bg-zinc-900 text-zinc-300 border-zinc-850' 
                            : 'bg-zinc-100 text-zinc-650 border-zinc-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${
                    isDark ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    Deliverable Scope
                  </span>
                  <span className={`text-xs font-medium font-sans ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    Fully Responsive SPA + Source Code handoff
                  </span>
                </div>

                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${
                    isDark ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    Build Class
                  </span>
                  <span className={`text-xs font-medium font-sans ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    Production Grade
                  </span>
                </div>
              </div>
            </div>

            {/* Reassurance CTA */}
            <div className={`border rounded-2xl p-6 text-center ${
              isDark ? 'bg-blue-950/10 border-blue-900/10' : 'bg-blue-50 border-blue-100'
            }`}>
              <h4 className={`text-sm font-bold font-sans mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Need a similar product built?
              </h4>
              <p className={`text-xs font-light mb-4 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                I can custom tailor a website or dashboard to your specific brand assets. Let’s review your milestones.
              </p>
              <a
                href="#contact"
                onClick={handleStartSimilarProject}
                className={`inline-flex items-center justify-center text-xs font-bold transition-colors ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                }`}
              >
                Start a Project &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
