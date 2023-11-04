"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [themeInfo, setThemeInfo] = useState({
    theme: "",
  });

  useEffect(() => {
    setThemeInfo({
      theme: theme === "light" ? "dark" : "light",
    });
  }, [theme]);

  function changeTheme() {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <div onClick={changeTheme} className="f-hover">
      {theme === "light" ? <BsMoonFill size={23} /> : <BsSun size={25} />}
    </div>
  );
}
