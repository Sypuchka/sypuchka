"use client";

import { FaTelegramPlane, FaViber, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800 bg-black/90 backdrop-blur-xl shadow-xl"
          : "bg-black/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">

        {/* Логотип */}
        <a href="#hero">
          <Image
            src="/images/logo.png"
            alt="Логотип"
            width={180}
            height={70}
            priority
            className="h-12 w-auto md:h-16"
          />
        </a>

        {/* Контакти */}
        <div className="flex items-center gap-2 md:gap-4">

          <a
            href="https://t.me/samo_svall"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500 transition hover:scale-110"
          >
            <FaTelegramPlane size={20} color="white" />
          </a>

          <a
            href="viber://chat?number=%2B380737577790"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 transition hover:scale-110"
          >
            <FaViber size={20} color="white" />
          </a>

          <a
            href="tel:+380737577790"
            className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-3 text-sm font-black text-white transition hover:scale-105 hover:bg-orange-600 md:px-6 md:text-xl"
          >
            <FaPhoneAlt />
            <span>073 757 77 90</span>
          </a>

        </div>
      </div>
    </header>
  );
}