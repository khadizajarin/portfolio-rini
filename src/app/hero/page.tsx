
'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Inter, Vollkorn } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400','600','700'] })
const vollkorn = Vollkorn({ subsets: ['latin'], weight: ['400','600','700'] })

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
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-[#F3E9DC] dark:bg-gray-900 relative">
      
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-6 right-6 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center relative">

        {/* LEFT TEXT */}
        <div
          className="space-y-4 md:relative md:z-10"
          style={{
            transform: 'translateX(6rem) translateY(-7rem)',
          }}
        >
          <h1 className={`${vollkorn.className} text-6xl sm:text-5xl md:text-7xl tracking-tight font-extrabold text-neutral-600 dark:text-neutral-100`}>
            Nigar Meherin Rini
          </h1>
          <p className="text-3xl sm:text-2xl md:text-4xl text-[#9A3F3F] font-semibold dark:text-[#F5A9A9]">
            Journalist
          </p>

          {/* BUTTONS */}
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-[#9A3F3F] text-white font-semibold rounded-lg shadow hover:bg-[#7a2f2f] dark:bg-[#F5A9A9] dark:text-gray-900 dark:hover:bg-[#d0a3a3] transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 border-2 border-[#9A3F3F] text-[#9A3F3F] font-semibold rounded-lg shadow hover:bg-[#9A3F3F] hover:text-white dark:border-[#F5A9A9] dark:text-[#F5A9A9] dark:hover:bg-[#F5A9A9] dark:hover:text-gray-900 transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="flex justify-center md:justify-end md:relative md:z-0"
          style={{
            transform: 'translateX(-6.25rem)',
          }}
        >
          <Image
            src="/images/image.png"
            alt="Portrait"
            width={1000}
            height={1000}
            className="w-full sm:w-[95%] md:w-[90%] h-[60vh] sm:h-[50vh] md:h-[80vh] object-cover shadow-md"
          />
        </div>

        {/* Bottom text */}
        <div
          className="space-y-4 md:absolute md:z-10"
          style={{
            transform: 'translate(45rem, 13rem)', // Adjusted for smaller screens
          }}
        >
          <p className="text-2xl sm:text-xl md:text-3xl font-semibold text-[#9A3F3F] dark:text-[#F5A9A9]">
            @journalist
          </p>
        </div>

      </div>
    </section>
  );
}
