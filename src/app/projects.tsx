"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "Website Development",
    desc: "Website designed to help users discover and explore local restaurants and cuisines and many more.",
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: `${getImagePrefix()}image/digital-marketing.png`,
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic to your business.",
  },
  {
    img: `${getImagePrefix()}image/SEO.png`,
    title: "SEO Services",
    desc: "Search Engine Optimization services to improve your website's visibility and ranking on search engines.",
  },
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "WordPress Development",
    desc: "Custom WordPress websites and themes tailored to your specific business needs and brand identity.",
  },
  {
    img: `${getImagePrefix()}image/pexels-googledeepmind-18069696.jpg`,
    title: "AI Automation",
    desc: "Implementing AI-powered automation solutions to streamline your business processes and increase efficiency.",
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Our Work, Loud and Clear
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Every project we deliver is a testament to elegant code and captivating design. We don&apos;t just develop software — we create digital journeys that delight users, grow businesses, and leave developers in awe
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
