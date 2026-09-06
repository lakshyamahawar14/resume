"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full flex justify-center items-center mt-4">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="border h-8 w-16 shrink-0 flex justify-center items-center rounded-full dark:text-slate-400 text-slate-600 dark:hover:text-slate-200 hover:text-slate-800 bg-white dark:bg-[#161B22] hover:bg-slate-200 dark:hover:bg-[#0D1117] cursor-pointer"
      >
        <Sun className="w-4 h-4 shrink-0 hidden dark:block" />
        <Moon className="w-4 h-4 shrink-0 block dark:hidden" />
      </button>
    </div>
  );
};

export default DarkMode;