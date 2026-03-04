import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage
    const savedTheme = localStorage.getItem('chopper-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to light mode if no preference
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('chopper-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('chopper-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
}
