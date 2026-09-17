"use client";

import { memo } from "react";
import { useTheme } from "./theme-provider";
import { SunIcon, MoonIcon } from "./icons";

const DarkMode = () => {
  console.log('darkmode.tsx rendered!');
  const { toggleTheme } = useTheme();

  return (
    <div className="w-auto flex justify-center items-center">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="h-9 w-14 lg:h-10 lg:w-18 shrink-0 flex justify-center items-center rounded-full text-slate-600 dark:text-slate-300 hover:text-accent-primary dark:hover:text-accent-primary bg-slate-100 dark:bg-bg-card shadow-sm cursor-pointer"
      >
        <SunIcon className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 hidden dark:block" />
        <MoonIcon className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 block dark:hidden" />
      </button>
    </div>
  );
};

export default memo(DarkMode);