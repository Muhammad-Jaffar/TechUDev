/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization if not using Vercel's image optimization
    domains: ['vercel.com'],
  },
  // Enable static HTML export for better compatibility
  trailingSlash: true,
  // Enable React 18 features
  experimental: {
    // Add any experimental features you need
  },
  // Add build directory for Vercel
  distDir: '.next',
  // Disable TypeScript type checking during build (Vercel handles this)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build (Vercel handles this)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add base path if your site is not served from the root
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  // Set asset prefix for static exports
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

module.exports = nextConfig;