const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // For Vercel deployment
    domains: ['vercel.com'],
  },
  // Remove output: 'export' for Vercel deployment
  // Vercel will handle the build output automatically
  // Remove trailingSlash as it's not needed for Vercel
  // Enable React 18 concurrent features
  experimental: {
    reactRoot: true,
    concurrentFeatures: true,
  },
};

module.exports = nextConfig;