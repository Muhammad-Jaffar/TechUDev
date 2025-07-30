"use client";

import { Typography } from "@material-tailwind/react";

export default function AIAutomation() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-10">
        <Typography variant="h2" color="blue-gray" className="mb-6 text-center">
          AI Automation
        </Typography>
        <Typography variant="lead" className="mb-4 text-gray-700">
          Harness the power of AI to automate your business processes. Our AI automation solutions increase efficiency and reduce manual effort.
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Custom AI workflow automation</li>
          <li>Integration with existing systems</li>
          <li>Data analysis and reporting</li>
          <li>Chatbots and virtual assistants</li>
          <li>Predictive analytics</li>
        </ul>
        <Typography variant="paragraph" className="mb-2">
          Transform your business with intelligent automation tailored to your needs.
        </Typography>
        <Typography variant="paragraph" className="text-blue-600">
          Discover AI for your business: <a href="/contact" className="underline hover:text-blue-800">Contact us</a>
        </Typography>
      </div>
    </section>
  );
}
