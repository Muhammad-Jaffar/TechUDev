"use client";

import { Typography } from "@material-tailwind/react";

export default function WordPressDevelopment() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-10">
        <Typography variant="h2" color="blue-gray" className="mb-6 text-center">
          WordPress Development
        </Typography>
        <Typography variant="lead" className="mb-4 text-gray-700">
          We specialize in custom WordPress development, from themes and plugins to full-scale websites tailored to your business needs.
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Custom WordPress themes</li>
          <li>Plugin development and customization</li>
          <li>WooCommerce integration</li>
          <li>Performance and security optimization</li>
          <li>Migration and maintenance</li>
        </ul>
        <Typography variant="paragraph" className="mb-2">
          Get a robust and flexible WordPress site that grows with your business.
        </Typography>
        <Typography variant="paragraph" className="text-blue-600">
          Let’s build your site: <a href="/contact" className="underline hover:text-blue-800">Contact us</a>
        </Typography>
      </div>
    </section>
  );
}
