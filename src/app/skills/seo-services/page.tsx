"use client";

import { Typography } from "@material-tailwind/react";

export default function SEOServices() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-10">
        <Typography variant="h2" color="blue-gray" className="mb-6 text-center">
          SEO Services
        </Typography>
        <Typography variant="lead" className="mb-4 text-gray-700">
          Improve your website’s visibility and ranking with our comprehensive SEO services. We use proven strategies to drive organic traffic and increase conversions.
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>On-page and off-page SEO</li>
          <li>Technical SEO audits</li>
          <li>Keyword research and optimization</li>
          <li>Link building</li>
          <li>Local SEO</li>
        </ul>
        <Typography variant="paragraph" className="mb-2">
          Let us help you climb the search engine rankings and grow your business.
        </Typography>
        <Typography variant="paragraph" className="text-blue-600">
          Start optimizing: <a href="/contact" className="underline hover:text-blue-800">Contact us</a>
        </Typography>
      </div>
    </section>
  );
}
