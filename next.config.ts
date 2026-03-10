import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/regen-university", destination: "/real-university", permanent: true },
      { source: "/regen-fresh", destination: "/real-fresh", permanent: true },
      { source: "/regen-mart", destination: "/real-mart", permanent: true },
      { source: "/regen-mart/checkout", destination: "/real-mart/checkout", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "**.supabase.in",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
