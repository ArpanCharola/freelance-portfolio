/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './components/Router';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';

function AppContent() {
  const { path } = useRouter();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${
      theme === 'dark' 
        ? 'bg-black text-white selection:bg-blue-600/35 selection:text-white' 
        : 'bg-zinc-50 text-zinc-900 selection:bg-blue-600/20 selection:text-blue-900'
    } flex flex-col justify-between font-sans transition-colors duration-300`}>
      <div>
        <Header />
        
        {path === 'home' && <Home />}
        {path === 'work' && <Work />}
        {path === 'project-detail' && <ProjectDetail />}
      </div>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}


