'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Inter, Vollkorn } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400','600','700'] });
const vollkorn = Vollkorn({ subsets: ['latin'], weight: ['400','600','700'] });

export default function HeroSection() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-[#F3E9DC] dark:bg-gray-900 relative px-4 sm:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">

        {/* LEFT TEXT */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className={`${vollkorn.className} text-5xl sm:text-6xl md:text-7xl font-extrabold text-neutral-600 dark:text-neutral-100`}>
            Nigar Meherin Rini
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-[#9A3F3F] font-semibold dark:text-[#F5A9A9]">
            Journalist
          </p>
          <p className={`${vollkorn.className} text-base sm:text-lg md:text-xl`}>
            Reporter at Somoy TV | Multimedia Journalist | Research-driven storyteller
          </p>

          {/* BUTTONS */}
          <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#9A3F3F] text-white font-semibold rounded-lg shadow hover:bg-[#7a2f2f] dark:bg-[#F5A9A9] dark:text-gray-900 dark:hover:bg-[#d0a3a3] transition-colors"
            >
              View Stories
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 border-2 border-[#9A3F3F] text-[#9A3F3F] font-semibold rounded-lg shadow hover:bg-[#9A3F3F] hover:text-white dark:border-[#F5A9A9] dark:text-[#F5A9A9] dark:hover:bg-[#F5A9A9] dark:hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/image.png"
            alt="Portrait"
            width={1000}
            height={1000}
            className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] h-auto object-cover shadow-md rounded"
          />
        </div>

      </div>
    </section>
  );
}
