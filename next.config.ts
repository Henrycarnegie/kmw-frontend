import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   allowedDevOrigins: ["172.20.10.2"],
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            port: "",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "images.unsplash.com",
            port: "",
            pathname: "/**",
         },
      ],
   },
};

export default nextConfig;
