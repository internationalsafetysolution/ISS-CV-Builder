/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      'stories',
      'src/__test__',
      'src/common',
      'src/helpers',
      'src/modules',
      'src/pages',
      'src/styles',
      'src/templates',
    ],
  },
  images: {
    // Remote patterns are not needed for local static assets
    // You can add remote patterns for any external image domains if needed
    domains: ['cv.internationalsafetysolution.com'],  // Optional, for any remote images
  },
  async redirects() {
    return [
      {
        source: '/editor',
        destination: '/builder',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
