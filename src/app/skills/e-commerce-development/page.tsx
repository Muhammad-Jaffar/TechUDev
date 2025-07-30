"use client";

import { Typography } from "@material-tailwind/react";

export default function ECommerceDevelopment() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-10">
        <Typography variant="h2" color="blue-gray" className="mb-6 text-center">
          E-commerce Development
        </Typography>
        <Typography variant="lead" className="mb-4 text-gray-700">
          We build robust and scalable e-commerce solutions that help you sell online with ease. Our services cover everything from storefront design to payment integration.
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Custom e-commerce website development</li>
          <li>Shopping cart and checkout solutions</li>
          <li>Payment gateway integration</li>
          <li>Product catalog and inventory management</li>
          <li>Security and PCI compliance</li>
        </ul>
        <Typography variant="paragraph" className="mb-2">
          Launch your online store and grow your business with our expert team.
        </Typography>
        <Typography variant="paragraph" className="text-blue-600">
          Ready to sell online? <a href="/contact" className="underline hover:text-blue-800">Contact us</a>
        </Typography>
      </div>
    </section>
  );
}
