import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // <=== enables static exports
  // basePath: "/tharikida-ui",
  assetPrefix: '/tharikida-ui',
  reactStrictMode: true,
};

export default nextConfig;
