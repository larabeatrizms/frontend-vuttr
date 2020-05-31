import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import { DefaultTheme } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const storageValue = localStorage.getItem('theme');

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return light;
  });

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const value = React.useMemo(() => ({ toggleTheme, theme }), [
    toggleTheme,
    theme,
  ]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used whithin a ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
