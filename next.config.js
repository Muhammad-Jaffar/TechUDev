const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['vercel.com'],
  },
  // Remove experimental features that might cause issues
  // These features are now stable in newer Next.js versions
  compiler: {
    // Enable styled-components support if needed
    // styledComponents: true,
  },
  // Enable static exports for Netlify
  output: 'export',
  // Add basePath if your site is not served from the root
  // basePath: isProd ? '/your-repo-name' : '',
  // Add assetPrefix for static exports
  assetPrefix: isProd ? '' : '',
  // Disable React 18 concurrent features as they're now stable
  // and don't need explicit configuration
};

module.exports = nextConfig;