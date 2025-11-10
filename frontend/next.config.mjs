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
  }
});
