/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
         {
             hostname: 'avatars.githubusercontent.com',
             protocol: "https",
         }
        ]
     }
};

export default nextConfig;
