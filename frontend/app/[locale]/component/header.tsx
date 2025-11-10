'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { useParams, useRouter, usePathname } from 'next/navigation';

interface TranslatedStatic {
  logo: string;
  nav: { services: string; tracking: string };
  search: { placeholder: string; button: string };
  contact: string;
}

const defaultContent: TranslatedStatic = {
  logo: 'Logistics',
  nav: { services: 'Services', tracking: 'Tracking' },
  search: { placeholder: 'Search shipments, docs...', button: 'Search' },
  contact: 'Contact Sales',
};

function Header() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const localeParam = params?.locale;
  const locale = Array.isArray(localeParam) ? localeParam[0] : localeParam || 'en';

  const [translatedStatic, setTranslatedStatic] = useState<TranslatedStatic>(defaultContent);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Load translations dynamically for current locale only (with deep merge for safety)
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const content = await import(`../../../locales/${locale}.json`).then((m) => m.default || {});
        console.log(`Loaded content for ${locale}:`, content); // Debug: Inspect loaded JSON

        // Deep merge with default to ensure all keys exist
        const safeContent: TranslatedStatic = {
          ...defaultContent,
          logo: content.logo || defaultContent.logo,
          nav: {
            ...defaultContent.nav,
            ...(content.nav || {}),
          },
          search: {
            ...defaultContent.search,
            ...(content.search || {}),
          },
          contact: content.contact || defaultContent.contact,
        };

        console.log(`Final translatedStatic for ${locale}:`, safeContent); // Debug: Verify merge
        setTranslatedStatic(safeContent);
      } catch (err) {
        console.error(`Header translation error for ${locale}:`, err);
        setTranslatedStatic(defaultContent);
      }
    };

    loadTranslations();
  }, [locale]);

  // Handle locale change from LanguageSwitcher (preserves path)
  const handleLocaleChange = (newLocale: string, closeMobile?: () => void) => {
    const newPath = pathname.replace(/^\/[^\/]+/, `/${newLocale}`);
    router.push(newPath);
    if (closeMobile) closeMobile();
  };

  const localeLink = (path: string) => `/${locale}${path}`;

  const closeMobile = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-6">
          <Link href={localeLink('/')}>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-16 h-16 rounded-md bg-[url('/logo.png')] bg-cover bg-center" />
              <span className="font-semibold text-lg">{translatedStatic.logo}</span>
            </div>
          </Link>

          <nav className="hidden md:flex gap-4 text-sm items-center justify-center text-slate-600">
            <Link href={localeLink('/service')} className="hover:text-slate-900 transition">
              {translatedStatic.nav?.services || 'Services'} {/* Safe fallback */}
            </Link>
            <Link href={localeLink('/tracking')} className="hover:text-slate-900 transition">
              {translatedStatic.nav?.tracking || 'Tracking'} {/* Safe fallback */}
            </Link>
            <LanguageSwitcher currentLocale={locale} onChange={(newLocale) => handleLocaleChange(newLocale)} />
          </nav>
        </div>

        {/* Search + Contact + Mobile Icon */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center rounded-full border px-3 py-1 gap-2 text-sm">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-40 bg-transparent"
              placeholder={translatedStatic.search?.placeholder || defaultContent.search.placeholder}
            />
            <button type="button" className="text-sm font-medium">
              {translatedStatic.search?.button || defaultContent.search.button}
            </button>
          </div>

          <Link href={localeLink('/contact')}>
            <span className="hidden md:inline-block bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition">
              {translatedStatic.contact}
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md border text-slate-600 hover:bg-slate-100 transition"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t shadow-lg mx-4 mt-2 rounded-xl py-4 px-6 flex flex-col gap-3 text-slate-700"
          >
            <Link
              href={localeLink('/service')}
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100 transition"
            >
              {translatedStatic.nav?.services || 'Services'} {/* Safe fallback */}
            </Link>
            <Link
              href={localeLink('/tracking')}
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100 transition"
            >
              {translatedStatic.nav?.tracking || 'Tracking'} {/* Safe fallback */}
            </Link>
            <Link
              href={localeLink('/contact')}
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100 transition"
            >
              {translatedStatic.contact}
            </Link>
            <div className="pt-2 border-t">
              <LanguageSwitcher 
                currentLocale={locale} 
                onChange={(newLocale) => handleLocaleChange(newLocale, closeMobile)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;