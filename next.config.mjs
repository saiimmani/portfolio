/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages project site at https://saiimmani.github.io/portfolio
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true
  },
  reactStrictMode: true
};

export default nextConfig;
