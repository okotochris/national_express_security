import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware({
  ...routing,
  localeDetection: true  // Auto-sets 'NEXT_LOCALE' cookie from headers
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};