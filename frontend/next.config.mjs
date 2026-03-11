import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl({
  // Optional config
  defaultLocale: 'en',
  locales: ['en', 'de', 'fr', 'es', 'it']
});

export default withNextIntl({
  reactStrictMode: true,
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',  // Matches any path on Cloudinary (e.g., /quizup/image/upload/**)
      },
    ],
  },
});