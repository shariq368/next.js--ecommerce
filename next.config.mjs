import { config } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  webpack:true,
  webpack:(config)=> {
    config.resolve.fallback={fs:false}
    return config
  },
    images: {
        domains: ["cdn.sanity.io"],
      },
      
    };


export default nextConfig;
