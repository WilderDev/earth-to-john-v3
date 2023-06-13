/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['pub-9e4409f70b3140dfbca6e8bec228db09.r2.dev'],
  },
};

module.exports = nextConfig;
