import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Required for GitHub Pages static export
  output: 'export',
  trailingSlash: true,
  basePath: '/dxiong.github.io', // your repo name

  // Keep existing config
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
