"use client";

import React, { createContext, useContext, useState, useMemo, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  resolvedTheme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  resolvedTheme: "dark",
  toggleTheme: () => {},
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

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.cookie = `theme=${next}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      resolvedTheme: theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}