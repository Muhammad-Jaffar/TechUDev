const isProd = process.env.NODE_ENV === "production";
 
const nextConfig = {
  basePath: isProd ? "/Next.js-Tailwind-CSS-Portfolio-Template" : "",
  assetPrefix: isProd ? "/Next.js-Tailwind-CSS-Portfolio-Template/" : "",
  // Removed output: "export" to allow dynamic API routes
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig;