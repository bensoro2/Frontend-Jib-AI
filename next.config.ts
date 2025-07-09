import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dlcdnwebimgs.asus.com',
      },
    ],
  },
};

export default nextConfig;
