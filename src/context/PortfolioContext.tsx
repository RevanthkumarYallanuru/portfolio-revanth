import { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData as initialData } from '@/src/constants';

interface PortfolioContextType {
  data: typeof initialData;
  updatePersonal: (personal: Partial<typeof initialData.personal>) => void;
  addProject: (project: any) => void;
  updateProject: (id: number, project: any) => void;
  deleteProject: (id: number) => void;
  addTestimonial: (testimonial: any) => void;
  deleteTestimonial: (author: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(initialData);

  // Load persisted data if it exists and contains the required sections.
  // If the stored data is missing any of the core arrays (skills, experience, services, testimonials),
  // fall back to the initial data to avoid runtime errors when components call .map on undefined.
  useEffect(() => {
    const saved = localStorage.getItem('yrk_portfolio_data');
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      const requiredArrays = ['skills', 'experience', 'services', 'testimonials'];
      const hasAll = requiredArrays.every(key => Array.isArray((parsed as any)[key]));
      if (hasAll) {
        setData(parsed);
      } else {
        // Incomplete data – replace with fresh initial data.
        setData(initialData);
        localStorage.removeItem('yrk_portfolio_data');
      }
    } catch (e) {
      console.error('Failed to parse portfolio data', e);
      setData(initialData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('yrk_portfolio_data', JSON.stringify(data));
  }, [data]);

  const updatePersonal = (personal: Partial<typeof initialData.personal>) => {
    setData(prev => ({
      ...prev,
      personal: { ...prev.personal, ...personal }
    }));
  };

  const addProject = (project: any) => {
    setData(prev => ({
      ...prev,
      projects: [{ ...project, id: Date.now() }, ...prev.projects]
    }));
  };

  const updateProject = (id: number, project: any) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...project } : p)
    }));
  };

  const deleteProject = (id: number) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const addTestimonial = (testimonial: any) => {
    setData(prev => ({
      ...prev,
      testimonials: [testimonial, ...prev.testimonials]
    }));
  };

  const deleteTestimonial = (author: string) => {
    setData(prev => ({
      ...prev,
      testimonials: prev.testimonials.filter(t => t.author !== author)
    }));
  };

  return (
    <PortfolioContext.Provider value={{ 
      data, 
      updatePersonal, 
      addProject, 
      updateProject, 
      deleteProject,
      addTestimonial,
      deleteTestimonial 
    }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within PortfolioProvider');
  return context;
};
