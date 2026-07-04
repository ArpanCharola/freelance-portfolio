import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export type RoutePath = 'home' | 'work' | 'project-detail';

interface RouterContextType {
  path: RoutePath;
  slug: string | null;
  hash: string;
  navigate: (path: RoutePath, slug?: string | null) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [hash, setHash] = useState(window.location.hash || '#/');
  const [path, setPath] = useState<RoutePath>('home');
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || '#/';
      setHash(currentHash);

      if (currentHash === '#/' || currentHash === '' || currentHash.startsWith('#services') || currentHash.startsWith('#contact') || currentHash.startsWith('#about')) {
        setPath('home');
        setSlug(null);
      } else if (currentHash === '#/work') {
        setPath('work');
        setSlug(null);
      } else if (currentHash.startsWith('#/projects/')) {
        setPath('project-detail');
        const projectSlug = currentHash.replace('#/projects/', '');
        setSlug(projectSlug || null);
      } else {
        setPath('home');
        setSlug(null);
      }
    };

    // Run once on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newPath: RoutePath, projectSlug: string | null = null) => {
    let targetHash = '#/';
    if (newPath === 'work') {
      targetHash = '#/work';
    } else if (newPath === 'project-detail' && projectSlug) {
      targetHash = `#/projects/${projectSlug}`;
    }
    window.location.hash = targetHash;
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ path, slug, hash, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
