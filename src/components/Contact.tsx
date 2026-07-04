import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Mail, MessageSquare, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'landing-page',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setStatus('sending');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormState({
        name: '',
        email: '',
        projectType: 'landing-page',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try emailing directly.');
    }
  };

  return (
    <section id="contact" className={`py-24 border-t transition-colors duration-300 ${
      isDark ? 'bg-black border-zinc-900/60' : 'bg-zinc-100/50 border-zinc-200'
    }`}>
      <div className={`absolute inset-0 pointer-events-none ${
        isDark 
          ? 'bg-gradient-to-t from-red-950/2 via-transparent to-transparent' 
          : 'bg-gradient-to-t from-red-100/5 via-transparent to-transparent'
      }`} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${
              isDark ? 'bg-red-950/30 border-red-900/30' : 'bg-red-55/30 border-red-100'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className={`text-xs font-mono uppercase tracking-wider ${
                isDark ? 'text-red-400' : 'text-red-600'
              }`}>Start Here</span>
            </div>
            
            <h2 className={`text-3xl sm:text-4xl font-bold font-sans tracking-tight mb-6 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Let’s build something <br />
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                remarkable.
              </span>
            </h2>
            
            <p className={`font-light leading-relaxed mb-8 max-w-md text-sm sm:text-base ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Ready to launch a high-performance web interface, deploy an interactive AI prototype, or discuss your digital product wireframe?
            </p>

            {/* Main Contact Action Block (WhatsApp - Primary) */}
            <div className="mb-8">
              <span className={`text-xs font-mono tracking-wider uppercase block mb-3 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`}>Primary Channel</span>
              <a
                href="https://wa.me/918108309883"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 shadow-xl ${
                  isDark 
                    ? 'bg-zinc-950 border-green-500/10 hover:border-green-500/30 shadow-green-950/20' 
                    : 'bg-white border-green-500/20 hover:border-green-500/40 shadow-green-100/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                    <MessageSquare className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold font-sans transition-colors group-hover:text-green-500 ${
                      isDark ? 'text-white' : 'text-zinc-800'
                    }`}>
                      Chat on WhatsApp
                    </h3>
                    <p className={`text-xs font-mono mt-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Average reply time: Under 15 mins</p>
                  </div>
                </div>
                <Send className="w-5 h-5 text-zinc-500 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Direct Channels List */}
            <div className={`space-y-4 border-t pt-8 ${isDark ? 'border-zinc-900' : 'border-zinc-250'}`}>
              <span className={`text-xs font-mono tracking-wider uppercase block mb-1 ${
                isDark ? 'text-zinc-500' : 'text-zinc-400'
              }`}>Direct Channels</span>
              
              <a
                href="mailto:arpancharola11@gmail.com"
                className={`flex items-center gap-3.5 transition-colors ${
                  isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border-zinc-850' : 'bg-zinc-100 border-zinc-200'
                }`}>
                  <Mail className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-sm font-mono">arpancharola11@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/arpancharola"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3.5 transition-colors ${
                  isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border-zinc-850' : 'bg-zinc-100 border-zinc-200'
                }`}>
                  <Linkedin className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-sm font-sans">linkedin.com/in/arpancharola</span>
              </a>

              <a
                href="https://github.com/ArpanCharola"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3.5 transition-colors ${
                  isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border-zinc-850' : 'bg-zinc-100 border-zinc-200'
                }`}>
                  <Github className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-sm font-mono">github.com/ArpanCharola</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative ${
            isDark 
              ? 'bg-zinc-950/40 border-zinc-900' 
              : 'bg-white border-zinc-200 shadow-sm'
          }`}>
            <h3 className={`text-lg font-bold font-sans mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Or send a project brief</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name-input" className={`block text-xs font-mono uppercase tracking-wide mb-2 ${
                    isDark ? 'text-zinc-400' : 'text-zinc-500'
                  }`}>
                    Your Name *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Arpan Charola"
                    className={`w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-colors border ${
                      isDark 
                        ? 'bg-black border-zinc-900 text-white placeholder-zinc-700 focus:border-red-600' 
                        : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-red-600'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className={`block text-xs font-mono uppercase tracking-wide mb-2 ${
                    isDark ? 'text-zinc-400' : 'text-zinc-500'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="client@company.com"
                    className={`w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-colors border ${
                      isDark 
                        ? 'bg-black border-zinc-900 text-white placeholder-zinc-700 focus:border-red-600' 
                        : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-red-600'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project-type-input" className={`block text-xs font-mono uppercase tracking-wide mb-2 ${
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                  Project Type
                </label>
                <select
                  id="project-type-input"
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleChange}
                  className={`w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-colors border ${
                    isDark 
                      ? 'bg-black border-zinc-900 text-white focus:border-red-600' 
                      : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-red-600'
                  }`}
                >
                  <option value="landing-page">Landing Page</option>
                  <option value="business-website">Business Website</option>
                  <option value="design-to-code">Frontend from Design</option>
                  <option value="full-stack-mvp">Full-Stack App MVP</option>
                  <option value="ai-prototype">AI Feature / Chatbot</option>
                  <option value="other">Other / Custom scope</option>
                </select>
              </div>

              <div>
                <label htmlFor="message-input" className={`block text-xs font-mono uppercase tracking-wide mb-2 ${
                  isDark ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                  Project Details *
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your product objectives, brand concept, and desired delivery date..."
                  className={`w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-colors resize-none border ${
                    isDark 
                      ? 'bg-black border-zinc-900 text-white placeholder-zinc-700 focus:border-red-600' 
                      : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-red-600'
                  }`}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Inquiry sent successfully!</span>
                    <span className="text-xs opacity-90">I will review your brief and follow up via email within 4 hours. Let's build!</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Submission Error</span>
                    <span className="text-xs opacity-90">{errorMessage}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors cursor-pointer"
              >
                {status === 'sending' ? (
                  <span>Sending Brief...</span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
