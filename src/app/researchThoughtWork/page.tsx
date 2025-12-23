'use client';

import React from 'react';

const ResearchThoughtWork: React.FC = () => {
  return (
    <section
      id="research"
      className="w-full py-24 px-6 bg-[#F9F5EF] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-700 dark:text-neutral-100 mb-4">
            Research & Thought Work
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Academic research and analytical work that inform my approach to
            audience behavior, media influence, and responsible journalism.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Research Card */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Academic Monograph
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              <span className="font-semibold">
                Impact of Facebook Influencers’ Product Promotion on Viewers
              </span>
              — a research-based study conducted among students of the University
              of Chittagong, examining how influencer-driven content shapes
              perception, trust, and consumer behavior.
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              Year: 2024 · Department of Communication and Journalism
            </p>
          </div>

          {/* Festival / Engagement Card */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Research Engagement
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              Participated in the <span className="font-semibold">
              Chattogram Research Festival 2023</span>, presenting academic
              insights and engaging in interdisciplinary discussions on media,
              society, and communication research.
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              University of Chittagong
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-300 mb-6">
            Interested in media research, audience behavior, and evidence-based
            storytelling.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg bg-[#9A3F3F] text-white font-semibold hover:bg-[#7a2f2f] dark:bg-[#F5A9A9] dark:text-gray-900 dark:hover:bg-[#d0a3a3] transition-colors"
          >
            Let’s Talk Research
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchThoughtWork;
