import { Module } from 'module';
import { config } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },

};


module.export = nextConfig
