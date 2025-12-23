'use client';

import React from 'react';

const attendedWorkshops = [
  {
    title: 'Basic Journalism',
    organization: 'Press Institute Bangladesh (PIB)',
    year: '2024',
  },
  {
    title: 'Constructive Journalism Workshop',
    organization: 'DW Akademie',
    year: '2022',
  },
  {
    title: 'AGILE – Women Media Leaders of Tomorrow',
    organization: 'AGILE Program',
    year: '2025',
  },
  {
    title: 'Fact Checking Knowledge Sharing Session',
    organization: 'Independent Session',
    year: '2023',
  },
];

const conductedWorkshops = [
  {
    title: 'Mobile Journalism Workshop',
    organization: 'Future Media Institute, Kolkata',
    year: '2025',
  },
  {
    title: 'Script Writing Session',
    organization: 'SZHM Trust',
    year: '2025',
  },
  {
    title: 'Multimedia Reporting Workshop',
    organization: 'Chittagong University Content Creators Club',
    year: '2025',
  },
  {
    title: 'Media Relations & News Handling',
    organization: 'The Aura Platform',
    year: '2025',
  },
];

const WorkshopsLeadership: React.FC = () => {
  return (
    <section
      id="workshops"
      className="w-full py-24 px-6 bg-[#F9F5EF] dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-700 dark:text-neutral-100 mb-4">
            Workshops & Leadership
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Professional development through both learning and leading—actively
            engaging in journalism education, media training, and knowledge sharing.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Attended */}
          <div>
            <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">
              Workshops Attended
            </h3>

            <ul className="space-y-5">
              {attendedWorkshops.map((item, index) => (
                <li
                  key={index}
                  className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-gray-950 shadow-sm"
                >
                  <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.organization} · {item.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Conducted */}
          <div>
            <h3 className="text-2xl font-semibold text-[#9A3F3F] dark:text-[#F5A9A9] mb-6">
              Workshops Conducted
            </h3>

            <ul className="space-y-5">
              {conductedWorkshops.map((item, index) => (
                <li
                  key={index}
                  className="p-5 rounded-xl border border-[#9A3F3F]/30 dark:border-[#F5A9A9]/40 bg-[#FDF7F4] dark:bg-gray-950 shadow-md"
                >
                  <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.organization} · {item.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsLeadership;
