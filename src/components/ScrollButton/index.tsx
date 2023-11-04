"use client";

import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

export function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      className="bg-zinc-500 hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 items-center justify-center transition-all duration-300 fixed w-12 h-12 left-3 bottom-16 text-5xl z-10 cursor-pointer leading-10 rounded-[3px] shadow-[0_0_0_4px_rgba(0,0,0,0.3)]"
      style={{ display: visible ? "flex" : "none" }}
      onClick={scrollToTop}
    >
      <RiArrowUpSLine className="ri-arrow-up-s-line text-4xl text-white dark:text-black" />
    </button>
  );
}

export default ScrollButton;
