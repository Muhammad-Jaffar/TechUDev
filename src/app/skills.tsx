"use client";

import { Typography } from "@material-tailwind/react";
import { ProjectCard } from "@/components";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Website Development",
    desc: "Website designed to help users discover and explore local restaurants and cuisines and many more.",
  },
  {
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
  },
  {
    img: "/image/digital-marketing.png",
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic to your business.",
  },
  {
    img: "/image/SEO.png",
    title: "SEO Services",
    desc: "Search Engine Optimization services to improve your website's visibility and ranking on search engines.",
  },
  {
    img: "/image/Wordpress.jpg",
    title: "WordPress Development",
    desc: "Custom WordPress websites and themes tailored to your specific business needs and brand identity.",
  },
  {
    img: "/image/pexels-googledeepmind-18069696.jpg",
    title: "AI Automation",
    desc: "Implementing AI-powered automation solutions to streamline your business processes and increase efficiency.",
  },
  {
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce development",
    desc: "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
  },
];

export function Skills() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden group">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMTVjLTguMjkgMC0xNSA2LjcxLTE1IDE1aDMwYzAtOC4yOS02LjcxLTE1LTE1LTE1eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"></div>
      
      {/* Thick navy blue border with hover animation */}
      <div className="absolute inset-0 border-8 border-transparent transition-all duration-500 ease-out pointer-events-none
        group-hover:m-2 group-hover:border-blue-700/90 m-0 border-blue-800">
      </div>
      
      <div className="relative z-10 container mx-auto mb-20 text-center px-4 sm:px-6 transition-all duration-500 ease-out">
        <div className="inline-block overflow-hidden group">
          <Typography 
            variant="h1" 
            className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 
                      transform transition-all duration-300 ease-in-out
                      group-hover:translate-x-2"
          >
            WE CREATE
            <div className="h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full mt-1"></div>
          </Typography>
        </div>
        <Typography variant="lead" className="!text-gray-600">
          Our work is a testament to our expertise and dedication.
        </Typography>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3 px-4 sm:px-6">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
