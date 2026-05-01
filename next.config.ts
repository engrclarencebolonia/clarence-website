import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // basePath for GitHub Pages: /clarence-website
  // Comment out basePath if deploying to a custom domain or Vercel
  basePath: process.env.GITHUB_PAGES ? "/clarence-website" : "",
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
