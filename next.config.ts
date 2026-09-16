import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, no-cache",
          },
        ],
      },
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, no-cache",
          },
        ],
      },
    ];
  },
};

export default nextConfig;