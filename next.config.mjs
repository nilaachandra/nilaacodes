/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "github.com",
        },
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
        },
        {
          protocol: "https",
          hostname: "logomoji.vercel.app",
        },
        {
          protocol: "https",
          hostname: "uploads-ssl.webflow.com",
        },
        {
          protocol: "https",
          hostname: "avatars.githubusercontent.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  