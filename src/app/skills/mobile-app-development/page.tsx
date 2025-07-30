"use client";

import { Typography } from "@material-tailwind/react";

export default function MobileAppDevelopment() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-10">
        <Typography variant="h2" color="blue-gray" className="mb-6 text-center">
          Mobile App Development
        </Typography>
        <Typography variant="lead" className="mb-4 text-gray-700">
          We design and develop mobile applications for iOS and Android that are intuitive, scalable, and engaging.
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Native and cross-platform development</li>
          <li>User-centric UI/UX design</li>
          <li>App store deployment and support</li>
          <li>Integration with APIs and backend systems</li>
          <li>Maintenance and updates</li>
        </ul>
        <Typography variant="paragraph" className="mb-2">
          Take your business mobile with our expert app development team.
        </Typography>
        <Typography variant="paragraph" className="text-blue-600">
          Let’s build your app: <a href="/contact" className="underline hover:text-blue-800">Contact us</a>
        </Typography>
      </div>
    </section>
  );
}
