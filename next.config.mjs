import { config } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ["cdn.sanity.io"],
  }
  
};



export default nextConfig;
