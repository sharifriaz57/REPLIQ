/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rukminim2.flixcart.com',
          },
          {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
          },
        ],
    },
};

export default nextConfig;
