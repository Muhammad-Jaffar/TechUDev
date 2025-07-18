"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <header className="relative bg-gray-900 p-8 overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/Blue Modern Technology YouTube Intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="relative container mx-auto z-20 py-20 max-w-3xl px-4">
        <div className="text-center">
          <Typography
            variant="h1"
            className="mb-6 text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Welcome to TechUDev!
          </Typography>
          <Typography
            variant="lead"
            className="mb-8 text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            Your partner in digital innovation. We specialize in web development and tailored tech solutions to help businesses thrive online with modern, efficient, and scalable technology.
          </Typography>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
            <Typography variant="small" className="mt-4 text-gray-300">
              By subscribing, you agree to our{" "}
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Terms and Conditions
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
