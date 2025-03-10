import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    domains: ['image.tmdb.org'], // Allow images from tmdb.org
  },
};

export default nextConfig;
