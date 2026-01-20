/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Only use basePath in production for GitHub Pages
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    unoptimized: true
  },
  reactStrictMode: true
};

export default nextConfig;
