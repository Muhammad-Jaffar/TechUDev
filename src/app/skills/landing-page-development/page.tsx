"use client";

import { Typography } from "@material-tailwind/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function LandingPageDevelopment() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 relative overflow-x-hidden">
      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-gradient-to-tr from-blue-400 via-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-40 z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-gradient-to-br from-pink-400 via-pink-300 to-purple-200 rounded-full filter blur-3xl opacity-40 z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      {/* Navbar */}
      <div className="z-10 relative">
        <Navbar />
      </div>
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center z-10 relative">
        <motion.section
          className="w-full max-w-3xl bg-white/90 rounded-3xl shadow-2xl p-10 backdrop-blur-md border border-blue-100"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography variant="h2" color="blue-gray" className="mb-6 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-gradient-x">
            Landing Page Development
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Typography variant="lead" className="mb-4 text-gray-700 text-center text-lg">
              We create <span className="font-semibold text-blue-500">high-converting landing pages</span> tailored to your marketing campaigns. Our landing pages are optimized for speed, responsiveness, and engagement.
            </Typography>
            <ul className="list-disc pl-8 text-gray-600 mb-6 space-y-2">
              <motion.li initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>Custom design for your brand and campaign</motion.li>
              <motion.li initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>Mobile-first and responsive layouts</motion.li>
              <motion.li initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>Integration with forms and analytics</motion.li>
              <motion.li initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>SEO and performance optimization</motion.li>
              <motion.li initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}>A/B testing and conversion tracking</motion.li>
            </ul>
            <Typography variant="paragraph" className="mb-2 text-center text-purple-700 font-medium">
              Let us help you maximize your campaign ROI with a <span className="font-semibold">professional landing page</span>.
            </Typography>
            <div className="flex justify-center mt-6">
              <motion.a
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-purple-500 hover:to-blue-400 transition-transform duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started Now
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
      </main>
      {/* Footer */}
      <div className="z-10 relative mt-10">
        <Footer />
      </div>
      {/* Animate background gradient movement (optional) */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
