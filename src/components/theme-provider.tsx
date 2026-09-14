"use client";

import React, { createContext, useContext, useState, useMemo, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  resolvedTheme: "dark",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: Theme;
}) {
  console.log('theme-provider.tsx rendered!');
  const [theme, setThemeState] = useState<Theme>(initialTheme);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }, []);

  const value = useMemo(
    () => ({
      resolvedTheme: theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}