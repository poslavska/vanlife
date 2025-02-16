/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.scrimba.com',
        pathname: '/advanced-react/react-router/**',
      },
      {
        protocol: "https",
        hostname: "*.ufs.sh",
      },
    ],
  }
};

export default nextConfig;
