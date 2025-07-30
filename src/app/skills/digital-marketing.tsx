import { Typography } from "@material-tailwind/react";

export default function DigitalMarketing() {
  return (
    <section className="container mx-auto py-16 px-4">
      <Typography variant="h2" className="mb-4">Digital Marketing</Typography>
      <Typography className="mb-6">
        Our digital marketing services help you reach your target audience and grow your business online. We use proven strategies in social media, content marketing, PPC, and more to boost your brand visibility and drive results.
      </Typography>
      <ul className="list-disc pl-6 mb-4">
        <li>Social media management</li>
        <li>Content creation and strategy</li>
        <li>Pay-per-click advertising</li>
        <li>Email marketing campaigns</li>
      </ul>
      <Typography>
        Partner with us to create a digital marketing plan that delivers measurable growth.
      </Typography>
    </section>
  );
}
