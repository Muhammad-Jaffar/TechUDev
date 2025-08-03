/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // Let Vercel optimize images
    domains: ['vercel.com'],
  },
  // Remove output: 'export' as Vercel handles this automatically
  // Remove assetPrefix as it's not needed for Vercel
  // Enable React 18 features
  experimental: {
    // Add any experimental features you need
  },
  // Enable static HTML export for better compatibility
  trailingSlash: true,
};

module.exports = nextConfig;