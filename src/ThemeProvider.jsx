import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';

export const THEME_STORAGE_KEY = 'cyberghost-theme';
const ThemeContext = createContext(null);
const isTheme = value => value === 'dark' || value === 'light';

function readTheme() {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(saved) ? saved : 'dark';
  } catch {
    return 'dark';
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readTheme);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { window.localStorage.setItem(THEME_STORAGE_KEY, theme); } catch { /* The theme still works when storage is unavailable. */ }
  }, [theme]);

  useEffect(() => {
    const sync = event => {
      if (event.key === THEME_STORAGE_KEY) setTheme(isTheme(event.newValue) ? event.newValue : 'dark');
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(current => current === 'dark' ? 'light' : 'dark') }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}
