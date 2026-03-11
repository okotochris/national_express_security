import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';  // Use cookies for safe, non-recursive locale
import 'server-only';

export default getRequestConfig(async () => {
  const store = await cookies();
  let locale = store.get('NEXT_LOCALE')?.value || 'en';  // Default 'en'; middleware sets 'NEXT_LOCALE'

  // Fallback to param if cookie missing (rare)
  if (!locale) {
    // Note: Avoid getLocale() here to prevent potential loops; use params in layout instead
    locale = 'en';  // Hardcode for safety in dev
  }

  return {
    locale,
    messages: (await import(`../app/locales/${locale}.json`)).default
  };
});