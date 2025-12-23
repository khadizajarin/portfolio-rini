'use client';

import React from 'react';

type Experience = {
  role: string;
  organization: string;
  duration: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    role: 'Reporter',
    organization: 'Somoy Television',
    duration: 'May 2024 – Present',
    points: [
      'Reporting on campus affairs, social issues, and human-interest stories.',
      'Producing field-based video and multimedia content for digital platforms.',
    ],
  },
  {
    role: 'Multimedia Contributor',
    organization: 'The Business Standard',
    duration: 'Feb 2023 – Apr 2024',
    points: [
      'Contributed multimedia reports as part of academic and professional assignments.',
      'Worked on visual storytelling and digital-first news formats.',
    ],
  },
  {
    role: 'Secretary',
    organization: 'Chittagong University Content Creators Club',
    duration: 'Mar 2024 – Present',
    points: [
      'Coordinating content initiatives and training sessions for student journalists.',
      'Supporting workshops focused on multimedia reporting and storytelling.',
    ],
  },
  {
    role: 'Typist',
    organization: 'Halda Publication',
    duration: 'Sep 2022 – Sep 2023',
    points: [
      'Handled manuscript typing and formatting for publication.',
      'Maintained accuracy and consistency across editorial materials.',
    ],
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full py-24 px-6 bg-[#F9F5EF] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-700 dark:text-neutral-100 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A concise timeline highlighting my professional journey in journalism,
            multimedia reporting, and media leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-neutral-300 dark:border-neutral-700 pl-10 space-y-14">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#9A3F3F] dark:bg-[#F5A9A9]" />

              {/* Card */}
              <div className="bg-white dark:bg-gray-950 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                    {exp.role} — {exp.organization}
                  </h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {exp.duration}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
