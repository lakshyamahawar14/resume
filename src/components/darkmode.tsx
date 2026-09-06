"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full flex justify-center items-center mt-0 lg:mt-2">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="h-7 w-12 lg:h-8 lg:w-16 shrink-0 flex justify-center items-center rounded-full dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 bg-slate-100 dark:bg-[#21262d] shadow-sm cursor-pointer"
      >
        <Sun className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0 hidden dark:block" />
        <Moon className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0 block dark:hidden" />
      </button>
    </div>
  );
};

export default DarkMode;