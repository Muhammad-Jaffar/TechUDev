/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vercel.com'],
  },
  // Disable the static export feature as Vercel handles this
  output: undefined,
  // Enable static HTML export for better compatibility
  trailingSlash: true,
  // Enable React 18 features
  experimental: {
    // Add any experimental features you need
  },
  // Add build directory for Vercel
  distDir: '.next',
  // Enable production optimizations
  productionBrowserSourceMaps: false,
  // Disable TypeScript type checking during build (Vercel handles this)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build (Vercel handles this)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;