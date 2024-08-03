"use client";

import Heading from "./heading";
import { useDarkModeStore } from "@/providers/dark-mode-store-provider";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore((state) => state);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    const element = document.getElementsByTagName("html")[0];
    if (!isDarkMode) {
      element.classList.remove("dark");
    } else {
      element.classList.add("dark");
    }
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  const changeTheme = () => {
    toggleDarkMode();
  };

  return (
    <div className="flex justify-center items-center cursor-pointer mt-4">
      <button
        onClick={changeTheme}
        className="border h-8 w-16 shrink-0 grid justify-center items-center rounded-full dark:text-slate-400 text-slate-600 dark:hover:text-slate-200 hover:text-slate-800 bg-white dark:bg-[#161B22] hover:bg-slate-200 dark:hover:bg-[#0D1117]"
      >
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          className="w-auto h-[1rem]"
        />
      </button>
    </div>
  );
};

export default DarkMode;
