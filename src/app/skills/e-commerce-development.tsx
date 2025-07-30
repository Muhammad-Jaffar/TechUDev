import { Typography } from "@material-tailwind/react";

export default function ECommerceDevelopment() {
  return (
    <section className="container mx-auto py-16 px-4">
      <Typography variant="h2" className="mb-4">E-commerce Development</Typography>
      <Typography className="mb-6">
        We create robust and scalable e-commerce solutions that help you sell online with ease. Our services cover everything from storefront design to payment integration and ongoing support.
      </Typography>
      <ul className="list-disc pl-6 mb-4">
        <li>Custom e-commerce websites</li>
        <li>Payment gateway integration</li>
        <li>Product management systems</li>
        <li>SEO and analytics setup</li>
      </ul>
      <Typography>
        Launch your online store with confidence and grow your business.
      </Typography>
    </section>
  );
}
