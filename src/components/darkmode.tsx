"use client";

import { memo, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const DarkMode = () => {
  console.log('darkmode.tsx rendered!');
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <div className="w-auto flex justify-center items-center">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="h-7 w-12 lg:h-8 lg:w-16 shrink-0 flex justify-center items-center rounded-full dark:text-slate-300 text-slate-600 dark:hover:text-accent-primary hover:text-accent-primary bg-slate-100 dark:bg-bg-card shadow-sm cursor-pointer"
      >
        <Sun className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0 hidden dark:block" />
        <Moon className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0 block dark:hidden" />
      </button>
    </div>
  );
};

export default memo(DarkMode);