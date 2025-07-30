"use client";

import { Typography } from "@material-tailwind/react";

export default function DigitalMarketing() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-10">
        <Typography variant="h2" color="blue-gray" className="mb-6 text-center">
          Digital Marketing
        </Typography>
        <Typography variant="lead" className="mb-4 text-gray-700">
          Our Digital Marketing services help you reach your target audience and achieve your business goals through data-driven strategies.
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Social media marketing</li>
          <li>Pay-per-click (PPC) advertising</li>
          <li>Email marketing campaigns</li>
          <li>Content creation and strategy</li>
          <li>Analytics and reporting</li>
        </ul>
        <Typography variant="paragraph" className="mb-2">
          Boost your brand’s online presence and drive measurable results with our expert team.
        </Typography>
        <Typography variant="paragraph" className="text-blue-600">
          Ready to grow? <a href="/contact" className="underline hover:text-blue-800">Contact us</a>
        </Typography>
      </div>
    </section>
  );
}
