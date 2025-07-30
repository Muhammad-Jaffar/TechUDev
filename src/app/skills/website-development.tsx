"use client";

import { Typography } from "@material-tailwind/react";

export default function WebsiteDevelopment() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-10">
        <Typography variant="h2" color="blue-gray" className="mb-6 text-center">
          Website Development
        </Typography>
        <Typography variant="lead" className="mb-4 text-gray-700">
          Our Website Development services combine modern design, robust engineering, and seamless user experience. We specialize in building responsive, fast, and secure websites tailored to your business goals.
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Custom website design and development</li>
          <li>Responsive and mobile-friendly layouts</li>
          <li>SEO optimization and performance tuning</li>
          <li>Integration with APIs and third-party services</li>
          <li>Content Management System (CMS) solutions</li>
          <li>Ongoing support and maintenance</li>
        </ul>
        <Typography variant="paragraph" className="mb-2">
          Whether you need a simple landing page or a complex web application, our team delivers solutions that are visually stunning and functionally powerful.
        </Typography>
        <Typography variant="paragraph" className="text-blue-600">
          Ready to start your next project? <a href="/contact" className="underline hover:text-blue-800">Contact us</a> today!
        </Typography>
      </div>
    </section>
  );
}
