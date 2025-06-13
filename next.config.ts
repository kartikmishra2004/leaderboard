import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/raingg',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
