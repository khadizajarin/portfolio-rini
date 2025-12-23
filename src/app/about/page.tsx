'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 bg-[#F9F5EF] dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-700 dark:text-neutral-100 mb-8">
          About Me
        </h2>

        {/* Content */}
        <div className="space-y-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            I am currently working as a <span className="font-semibold text-[#9A3F3F] dark:text-[#F5A9A9]">
            Reporter at Somoy Television</span>, focusing on human-interest stories,
            campus affairs, and socially relevant issues.
          </p>

          <p>
            I am pursuing a Master’s degree in <span className="font-semibold">
            Communication and Journalism</span> at the University of Chittagong,
            with a strong academic foundation in media studies and research-based storytelling.
          </p>

          <p>
            My work is driven by a deep interest in <span className="font-semibold">
            people-centric narratives</span>, multimedia reporting, audience impact,
            and stories that connect social realities with responsible journalism.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
