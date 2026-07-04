import { projectsData } from '../data/projects';
import { useRouter } from './Router';
import { useTheme } from './ThemeContext';
import { ArrowRight, ExternalLink, Github, Eye } from 'lucide-react';

export default function FeaturedWork() {
  const { navigate } = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Get only featured projects
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section id="work" className={`py-24 border-b relative transition-colors duration-300 ${
      isDark ? 'bg-zinc-950/40 border-zinc-900/60' : 'bg-white border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${
              isDark ? 'bg-red-950/30 border-red-900/30' : 'bg-red-55/30 border-red-100'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className={`text-xs font-mono uppercase tracking-wider ${
                isDark ? 'text-red-400' : 'text-red-600'
              }`}>Proof of Work</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold font-sans tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Featured Web Products
            </h2>
            <p className={`font-light ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              A curated selection of responsive interfaces, full-stack workspaces, and ML-powered prototypes engineered for high usability, clean speed, and professional delivery.
            </p>
          </div>

          <button
            onClick={() => navigate('work')}
            className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${
              isDark ? 'text-white hover:text-red-500' : 'text-zinc-800 hover:text-red-600'
            }`}
          >
            Explore All Projects{' '}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className={`group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/5 ${
                isDark 
                  ? 'bg-black border border-zinc-900 hover:border-zinc-800' 
                  : 'bg-white border border-zinc-200 hover:border-red-200 shadow-sm'
              }`}
            >
              {/* Thumbnail Wrap */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <span className={`absolute top-4 left-4 text-xs font-mono font-bold px-2.5 py-1 rounded backdrop-blur-md uppercase tracking-wider border ${
                  isDark 
                    ? 'bg-black/80 text-red-400 border-zinc-800/60' 
                    : 'bg-white/95 text-red-600 border-zinc-200'
                }`}>
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className={`text-xl font-bold font-sans mb-2 group-hover:text-red-600 transition-colors ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}>
                  {project.name}
                </h3>
                <p className={`text-sm font-light leading-relaxed mb-6 flex-grow ${
                  isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        isDark 
                          ? 'bg-zinc-950 text-zinc-300 border-zinc-900' 
                          : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className={`flex flex-wrap items-center gap-3 pt-4 border-t mt-auto ${
                  isDark ? 'border-zinc-900/80' : 'border-zinc-100'
                }`}>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded bg-red-600 hover:bg-red-700 active:bg-red-800 text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.gitHubUrl && (
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium border rounded transition-colors ${
                        isDark 
                          ? 'bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950 text-white border-zinc-800' 
                          : 'bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 text-zinc-800 border-zinc-200'
                      }`}
                    >
                      <Github className="w-3.5 h-3.5 text-zinc-400" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.showDetail && (
                    <button
                      onClick={() => navigate('project-detail', project.slug)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded border transition-colors cursor-pointer ml-auto ${
                        isDark 
                          ? 'bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border-zinc-900 hover:border-zinc-800' 
                          : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5 text-red-500" />
                      <span>Project Details</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All CTA block */}
        <div className="text-center">
          <button
            onClick={() => navigate('work')}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
              isDark 
                ? 'border-zinc-800 hover:border-red-600/40 bg-zinc-950 text-zinc-300 hover:text-white' 
                : 'border-zinc-200 hover:border-red-600/40 bg-white text-zinc-600 hover:text-zinc-900 shadow-sm'
            }`}
          >
            Explore Full Project Gallery (All Categories)
            <ArrowRight className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
