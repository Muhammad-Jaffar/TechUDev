"use client";

import { useState } from 'react';
import Image from "next/image";
import { Input, Button, Typography, Spinner } from "@material-tailwind/react";

function Hero() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' });
      return;
    }

    setIsLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setMessage({ 
        text: 'Thank you! Check your email for confirmation.', 
        type: 'success' 
      });
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setMessage({ 
        text: error instanceof Error ? error.message : 'Failed to send email', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header id="home" className="relative bg-gray-900 p-8 overflow-hidden min-h-screen flex items-center">
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
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                disabled={isLoading}
                required
              />
              <button 
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center min-w-[120px] ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <Spinner className="h-5 w-5 mr-2" />
                    Sending...
                  </>
                ) : (
                  'Get Started'
                )}
              </button>
            </div>
            {message.text && (
              <div className={`mt-4 p-3 rounded-lg ${
                message.type === 'error' 
                  ? 'bg-red-900/50 text-red-200 border border-red-800' 
                  : 'bg-green-900/50 text-green-200 border border-green-800'
              }`}>
                {message.text}
              </div>
            )}
            <Typography variant="small" className="mt-4 text-gray-300">
              By subscribing, you agree to our{" "}
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              .
            </Typography>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Hero;
