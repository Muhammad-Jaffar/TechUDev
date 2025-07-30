import { Typography } from "@material-tailwind/react";

export default function WordpressDevelopment() {
  return (
    <section className="container mx-auto py-16 px-4">
      <Typography variant="h2" className="mb-4">WordPress Development</Typography>
      <Typography className="mb-6">
        We build custom WordPress websites and themes tailored to your business needs. Our WordPress solutions are secure, scalable, and easy to manage, ensuring your website stands out and delivers results.
      </Typography>
      <ul className="list-disc pl-6 mb-4">
        <li>Custom theme and plugin development</li>
        <li>Responsive and mobile-friendly design</li>
        <li>SEO-optimized structure</li>
        <li>Ongoing support and maintenance</li>
      </ul>
      <Typography>
        Get a WordPress website that grows with your business.
      </Typography>
    </section>
  );
}
