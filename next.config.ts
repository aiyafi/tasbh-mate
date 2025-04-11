// next.config.ts

import type { NextConfig } from 'next'; // Import the type for type safety
import withPWAInit from "@ducanh2912/next-pwa"; // Use ES Module import

// Initialize the PWA plugin with your desired options
const withPWA = withPWAInit({
  dest: "public", // Service worker destination
  disable: process.env.NODE_ENV === "development", // Disable in dev mode
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
  },
  // Add any other PWA options you need
});

// Define your Next.js configuration object
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

// Export the final config, wrapped by the PWA plugin
export default withPWA(nextConfig);