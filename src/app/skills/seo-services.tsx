import { Typography } from "@material-tailwind/react";

export default function SeoServices() {
  return (
    <section className="container mx-auto py-16 px-4">
      <Typography variant="h2" className="mb-4">SEO Services</Typography>
      <Typography className="mb-6">
        Improve your website's visibility and ranking on search engines with our expert SEO services. We offer comprehensive solutions including keyword research, on-page optimization, link building, and technical SEO audits.
      </Typography>
      <ul className="list-disc pl-6 mb-4">
        <li>Comprehensive keyword research</li>
        <li>On-page and off-page SEO</li>
        <li>Technical SEO audits</li>
        <li>Monthly performance reports</li>
      </ul>
      <Typography>
        Let us help you attract more organic traffic and grow your business online.
      </Typography>
    </section>
  );
}
