'use client';

import React, { useState } from 'react';

type MediaItem = {
  title: string;
  description: string;
  platform: string;
  role: string;
  link: string;
};

const videoReports: MediaItem[] = [
  {
    title: 'Multimedia Report – Protidiner Bangladesh',
    description:
      'A visual report produced as part of academic and field-based reporting.',
    platform: 'Protidiner Bangladesh',
    role: 'Reporter',
    link: 'https://fb.watch/k_LLPwFcRn/?mibextid=Nif5oz',
  },
  {
    title: 'Multimedia Report – Samakal',
    description:
      'A field-based multimedia story focusing on social relevance.',
    platform: 'Samakal',
    role: 'Reporter',
    link: 'https://fb.watch/k_LUXZQwEP/?mibextid=Nif5oz',
  },
];

const anchoringWorks: MediaItem[] = [
  {
    title: 'Talk Show Presentation',
    description:
      'Anchored a studio-based talk show as part of academic broadcasting activities.',
    platform: 'University of Chittagong',
    role: 'Anchor',
    link: 'https://m.facebook.com/story.php?story_fbid=pfbid02E6pJudD3veAHbku2zncSdrYtMTWdwZx19gLVfFKNvddBQ1bVZcDuyRoZTxMs1CQwl&id=1000118836218',
  },
  {
    title: 'News Bulletin Presentation',
    description:
      'Presented a news bulletin following broadcast newsroom standards.',
    platform: 'University of Chittagong',
    role: 'News Presenter',
    link: 'https://m.facebook.com/story.php?story_fbid=pfbid0vvguis1ScJ8k1mR9G5Wb8gGzfXdStn1pVDh4HnyXx7L3s3saNBt8mCNGci6hSnvSl&id=100011883621895',
  },
];

const multimediaReports: MediaItem[] = [
  {
    title: 'One Minute Junior Short Film Festival',
    description:
      'A short visual storytelling project submitted to a UNICEF-arranged film festival.',
    platform: 'UNICEF',
    role: 'Story Contributor',
    link: 'https://youtu.be/RXdp7qLh76k',
  },
];

const tabs = [
  { id: 'video', label: '🎥 Video Reports' },
  { id: 'anchor', label: '🎙️ Anchoring / Presenting' },
  { id: 'multimedia', label: '📸 Multimedia Reports' },
];

const MultimediaPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('video');

  const getActiveData = () => {
    if (activeTab === 'anchor') return anchoringWorks;
    if (activeTab === 'multimedia') return multimediaReports;
    return videoReports;
  };

  return (
    <section
      id="multimedia"
      className="w-full py-24 px-6 bg-[#F9F5EF] dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-700 dark:text-neutral-100 mb-4">
            Multimedia Portfolio
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Selected works across video reporting, anchoring, and multimedia
            storytelling.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition
                ${
                  activeTab === tab.id
                    ? 'bg-[#9A3F3F] text-white dark:bg-[#F5A9A9] dark:text-gray-900'
                    : 'bg-white dark:bg-gray-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-gray-700'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getActiveData().map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-gray-950 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-semibold">Platform:</span>{' '}
                  {item.platform}
                </p>
                <p>
                  <span className="font-semibold">Role:</span> {item.role}
                </p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 font-semibold text-[#9A3F3F] dark:text-[#F5A9A9] hover:underline"
              >
                View Work →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultimediaPortfolio;
