'use client';

import React from 'react';

type Story = {
  title: string;
  description: string;
  platform: 'Facebook' | 'YouTube' | 'Somoy TV';
  link: string;
};

const stories: Story[] = [
  {
    title: 'Students Becoming Entrepreneurs on CU Campus',
    description:
      'A human-interest story on students leaving tuition jobs to build small businesses inside the university.',
    platform: 'Facebook',
    link: 'https://www.facebook.com/share/v/1Fowr2tDFR/?mibextid=wwXIfr',
  },
  {
    title: 'A Spine-Chilling Mysterious Cave',
    description:
      'An exploratory visual report uncovering local myths and natural mystery.',
    platform: 'Facebook',
    link: 'https://www.facebook.com/share/v/1AxcRKYNxY/?mibextid=wwXIfr',
  },
  {
    title: 'Khagrachari: A Mystical Union of Sky and Hills',
    description:
      'A scenic feature highlighting the cultural and natural beauty of Khagrachari.',
    platform: 'Facebook',
    link: 'https://www.facebook.com/share/v/17MRTxj8nN/?mibextid=wwXIfr',
  },
  {
    title: 'Small Huts on CU Campus Healing Students’ Minds',
    description:
      'A mental health–focused campus story showing how informal spaces offer psychological relief.',
    platform: 'Facebook',
    link: 'https://www.facebook.com/share/v/1Fgm3jDRgh/?mibextid=wwXIfr',
  },
];

const platformColor = (platform: Story['platform']) => {
  switch (platform) {
    case 'YouTube':
      return 'text-red-600';
    case 'Somoy TV':
      return 'text-blue-600';
    default:
      return 'text-[#9A3F3F]';
  }
};

const FeaturedStories: React.FC = () => {
  return (
    <section
      id="stories"
      className="w-full py-24 px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-700 dark:text-neutral-100 mb-4">
            Featured Stories
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A curated selection of my most impactful reporting, focusing on
            human-interest, campus life, culture, and social issues.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-all bg-[#F9F5EF] dark:bg-gray-900"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-[#9A3F3F] dark:group-hover:text-[#F5A9A9] transition">
                  {story.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {story.description}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <span
                    className={`text-sm font-semibold ${platformColor(
                      story.platform
                    )}`}
                  >
                    {story.platform}
                  </span>

                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#9A3F3F] dark:text-[#F5A9A9] hover:underline"
                  >
                    Watch →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
