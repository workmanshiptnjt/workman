/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // ============================================
  // Environment Variables
  // ============================================
  env: {
    APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Workmanship',
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  },

  // ============================================
  // Security Headers for Custom Domain
  // ============================================
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Don't cache HTML pages
      {
        source: '/:path((?!.*\\..).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },

  // ============================================
  // Redirects & Rewrites
  // ============================================
  async redirects() {
    return [
      // Redirect old paths if needed
      {
        source: '/app',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // ============================================
  // Image Optimization
  // ============================================
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // ============================================
  // Optimizations
  // ============================================
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  // ============================================
  // Internationalization (i18n) - Optional
  // ============================================
  // i18n: {
  //   locales: ['en', 'es', 'fr'],
  //   defaultLocale: 'en',
  // },

  // ============================================
  // Build Configuration
  // ============================================
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;