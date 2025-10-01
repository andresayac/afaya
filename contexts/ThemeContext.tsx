import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Cargar tema guardado del localStorage o detectar preferencia del sistema
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
    } else {
      // Si no hay tema guardado, usar preferencia del sistema
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    const updateActualTheme = () => {
      setActualTheme(theme);
      
      // Aplicar tema al documento
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
      
      // Actualizar las variables CSS
      if (theme === 'dark') {
        root.style.setProperty('--text', '#fff');
        root.style.setProperty('--text-secondary', '#fff');
        root.style.setProperty('--background', '#000');
        root.style.setProperty('--background-rgb', '13, 13, 13');
        root.style.setProperty('--background-secondary', '#1a1a1a');
      } else {
        root.style.setProperty('--text', '#000');
        root.style.setProperty('--text-secondary', '#000');
        root.style.setProperty('--background', '#fff');
        root.style.setProperty('--background-rgb', '255, 255, 255');
        root.style.setProperty('--background-secondary', '#f5f5f5');
      }
    };

    updateActualTheme();
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};