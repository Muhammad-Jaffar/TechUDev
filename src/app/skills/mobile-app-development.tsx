import { Typography } from "@material-tailwind/react";

export default function MobileAppDevelopment() {
  return (
    <section className="container mx-auto py-16 px-4">
      <Typography variant="h2" className="mb-4">Mobile App Development</Typography>
      <Typography className="mb-6">
        We design and develop mobile apps that engage users and drive business results. From concept to launch, our team delivers high-quality, user-friendly apps for both iOS and Android platforms.
      </Typography>
      <ul className="list-disc pl-6 mb-4">
        <li>iOS and Android development</li>
        <li>User-centric UI/UX design</li>
        <li>App store deployment</li>
        <li>Maintenance and updates</li>
      </ul>
      <Typography>
        Bring your app idea to life with our expert team.
      </Typography>
    </section>
  );
}
