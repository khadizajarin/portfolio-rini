'use client';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 bg-[#F9F5EF] dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-700 dark:text-neutral-100 mb-6">
          Get in Touch
        </h2>

        {/* Subtext */}
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
          For story collaborations, media inquiries, research discussions,
          or professional opportunities, feel free to reach out.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          {/* Email */}
          <a
            href="mailto:meherinrini137@gmail.com"
            className="px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700
                       text-neutral-700 dark:text-neutral-200 font-semibold
                       hover:bg-[#9A3F3F] hover:text-white
                       dark:hover:bg-[#F5A9A9] dark:hover:text-gray-900
                       transition-colors"
          >
            Email Me
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nigar-meherin-rini-7826ab244"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700
                       text-neutral-700 dark:text-neutral-200 font-semibold
                       hover:bg-[#0A66C2] hover:text-white
                       transition-colors"
          >
            LinkedIn
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/17dAC7zN5M/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700
                       text-neutral-700 dark:text-neutral-200 font-semibold
                       hover:bg-[#1877F2] hover:text-white
                       transition-colors"
          >
            Facebook
          </a>
        </div>

        {/* CTA */}
        <a
          href="mailto:meherinrini137@gmail.com"
          className="inline-block px-10 py-4 rounded-2xl bg-[#9A3F3F]
                     text-white font-bold text-lg
                     hover:bg-[#7a2f2f]
                     dark:bg-[#F5A9A9] dark:text-gray-900
                     dark:hover:bg-[#d9a2a2]
                     transition-colors shadow-md"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
};

export default Contact;
