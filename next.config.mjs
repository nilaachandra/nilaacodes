/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', 'raw.githubusercontent.com', 'logomoji.vercel.app', 'uploads-ssl.webflow.com'],
        remotePatterns: [
         {
             hostname: 'avatars.githubusercontent.com',
             protocol: "https",
         }
        ]
     }
};

export default nextConfig;
