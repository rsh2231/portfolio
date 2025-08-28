import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/shryu.github.io',
  assetPrefix: '/shryu.github.io/',
};

export default nextConfig;
