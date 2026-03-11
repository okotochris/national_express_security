import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  turbopack: {},  // Unlocks plugin aliases for Turbopack (resolves 'next-intl/link' imports)
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');  // Ensure this path points to your actual file

export default withNextIntl(nextConfig);