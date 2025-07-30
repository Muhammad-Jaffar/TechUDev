import { Typography } from "@material-tailwind/react";

export default function LandingPageDevelopment() {
  return (
    <section className="container mx-auto py-16 px-4">
      <Typography variant="h2" className="mb-4">Landing Page Development</Typography>
      <Typography className="mb-6">
        We specialize in creating high-converting landing pages tailored to your business goals. Our team focuses on compelling design, clear messaging, and effective call-to-actions to maximize conversions. Whether for campaigns, product launches, or lead generation, we deliver landing pages that perform.
      </Typography>
      <ul className="list-disc pl-6 mb-4">
        <li>Responsive and modern designs</li>
        <li>Custom forms and integrations</li>
        <li>SEO-optimized structure</li>
        <li>Fast loading and mobile-friendly</li>
      </ul>
      <Typography>
        Let us help you turn visitors into customers with a professionally crafted landing page.
      </Typography>
    </section>
  );
}
