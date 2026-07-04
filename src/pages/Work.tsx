import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext';
import { projectsData } from '../data/projects';
import { useRouter } from '../components/Router';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';

type FilterCategory = 'Featured' | 'Frontend' | 'Full-Stack' | 'AI' | 'ML';

export default function Work() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<FilterCategory>('Featured');

  const categories: FilterCategory[] = ['Featured', 'Frontend', 'Full-Stack', 'AI', 'ML'];

  // Filter projects based on the active tab
  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'Featured') {
      return project.featured;
    }
    return project.category === activeTab;
  });

  return (
    <section className={`min-h-screen pt-32 pb-24 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Decorative background glow */}
      <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none ${
        isDark ? 'bg-blue-950/5' : 'bg-blue-100/10'
      }`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${
            isDark ? 'bg-blue-950/30 border-blue-900/30' : 'bg-blue-50 border-blue-100'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span className={`text-xs font-mono uppercase tracking-wider ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>The Code Archive</span>
          </div>
          <h1 className={`text-4xl sm:text-5xl font-bold font-sans tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            Proven Commercial & AI Builds
          </h1>
          <p className={`font-light text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Filter through my portfolio of landing pages, multi-page websites, custom database backends, and server-side machine learning integrations.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex flex-wrap items-center justify-center gap-1.5 p-1 border rounded-xl max-w-full overflow-x-auto ${
            isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-200 shadow-sm'
          }`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-lg text-xs font-mono tracking-wide uppercase transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20 font-bold'
                    : isDark
                      ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className={`group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isDark 
                    ? 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-950 hover:shadow-2xl hover:shadow-blue-900/5' 
                    : 'bg-white border-zinc-200 hover:border-blue-200 hover:bg-blue-50/5 hover:shadow-xl hover:shadow-blue-100/20 shadow-sm'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80" />
                  <span className={`absolute top-3 left-3 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border uppercase tracking-wider ${
                    isDark 
                      ? 'bg-black/90 text-blue-400 border-zinc-800/85' 
                      : 'bg-white/95 text-blue-600 border-zinc-200'
                  }`}>
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className={`text-lg font-bold font-sans mb-2 transition-colors ${
                    isDark 
                      ? 'text-white group-hover:text-blue-400' 
                      : 'text-zinc-900 group-hover:text-blue-600'
                  }`}>
                    {project.name}
                  </h3>
                  <p className={`text-xs font-light leading-relaxed mb-5 flex-grow ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                          isDark 
                            ? 'bg-zinc-900 text-zinc-300 border-zinc-900/50' 
                            : 'bg-zinc-100 text-zinc-600 border-zinc-200/60'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className={`flex flex-wrap items-center gap-2 pt-4 border-t mt-auto ${
                    isDark ? 'border-zinc-900/60' : 'border-zinc-100'
                  }`}>
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3.5 py-2 text-[11px] font-semibold rounded bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.gitHubUrl && (
                      <a
                        href={project.gitHubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 px-3.5 py-2 text-[11px] font-medium rounded border transition-colors ${
                          isDark 
                            ? 'bg-zinc-900 hover:bg-zinc-850 active:bg-zinc-950 text-white border-zinc-850' 
                            : 'bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-150 text-zinc-800 border-zinc-200'
                        }`}
                      >
                        <Github className="w-3 h-3 text-zinc-400" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.showDetail && (
                      <button
                        onClick={() => navigate('project-detail', project.slug)}
                        className={`inline-flex items-center gap-1 px-3.5 py-2 text-[11px] font-medium rounded border transition-colors cursor-pointer ml-auto ${
                          isDark 
                            ? 'bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border-zinc-900 hover:border-zinc-800' 
                            : 'bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-300 shadow-sm'
                        }`}
                      >
                        <Eye className="w-3 h-3 text-blue-500" />
                        <span>Details</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-16 border border-dashed rounded-2xl ${
            isDark ? 'border-zinc-900 bg-zinc-950/20 text-zinc-500' : 'border-zinc-200 bg-zinc-100/50 text-zinc-400'
          }`}>
            <p className="font-mono text-sm">No projects matching this filter category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
