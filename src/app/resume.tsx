"use client";

import { Typography, Button } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export function Resume() {
  return (
    <section className="relative overflow-hidden px-8 py-24 bg-gray-800">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/vimeo/902822369/technology-186217.mp5?width=1280&hash=8f0d3b7e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/70 to-gray-800/80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block overflow-hidden group cursor-pointer">
            <Typography 
              variant="h2" 
              className="mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 
                        inline-block transition-transform duration-300 group-hover:translate-x-2"
            >
              Our Work, Loud and Clear
              <div className="h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full mt-1"></div>
            </Typography>
          </div>
          <Typography className="mb-8 text-lg font-normal text-gray-300">
            Every project we deliver is a testament to elegant code and captivating design. We don&apos;t just develop software — we create digital journeys that delight users, grow businesses, and leave developers in awe
          </Typography>
          <motion.div 
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="gradient"
              color="blue"
              className="flex items-center gap-2 group"
              size="lg"
            >
              View Our Work
              <ArrowRightIcon
                strokeWidth={3}
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
