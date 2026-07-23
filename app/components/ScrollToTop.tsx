"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Повернутися догори"
      className={`fixed bottom-24 left-1/2 z-50 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-orange-400 bg-orange-500 text-4xl text-white shadow-xl shadow-orange-500/40 transition-all duration-300 hover:scale-110 hover:bg-orange-600 active:scale-95 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}