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
      {
        protocol: "https",
        hostname: "pbs.twimg.com"
      }
    ],
  },
  async headers() {
    return [
      {
        // Target specific routes with custom cache control
        source: '/writings', // Adjust to match your specific page or route
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store', // Disables caching
          },
        ],
      },
      // You can add more custom headers for other routes if needed
    ];
  },
};

export default nextConfig;
