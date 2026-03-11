'use client';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'lucide-react'; // Add if using lucide-react; otherwise, use images/SVGs
import countries from './country';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function Footer() {
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  const [states, setStates] = useState(countries[0].states);
  const [isLoading, setIsLoading] = useState(false); // Simple loading state

  // Get current locale from URL params
  const params = useParams(); 
  const locale = params?.locale || "en"; // fallback to 'en'

  // Helper for locale-aware links (like Header)
  const localeLink = (path: string) => `/${locale}${path}`;

  // Static English content for all translatable strings
  const staticContent = {
    office: "Country / Location / Local Office",
    company: {
      description: "Global container shipping and logistics solutions tailored to your business needs. Delivering excellence across air, land, and sea.",
    },
    doingBusiness: "Doing Business Together",
    doingLinks: {
      solutions: "Solutions",
      localInfo: "Local Information",
      eBusiness: "E-Business",
      sustainability: "Sustainability",
      myNES: "myNES", // Don't translate proper names
    },
    getToKnow: "Get to Know Us",
    getLinks: {
      nesGroup: "NES Group", // Don't translate proper names
      newsroom: "Newsroom",
      service: "Service",
      contactUs: "Contact Us",
    },
    copyright: "All rights reserved.",
    tagline: "Global container shipping and logistics solutions tailored to your business needs. Delivering excellence across air, land, and sea.", // Added for copyright <p>
    // Optional: Social sr-only if you want to translate (e.g., for accessibility in other langs)
    social: {
      facebook: "Facebook",
      linkedin: "LinkedIn",
      twitter: "Twitter",
    },
  };

  // Type for translated static content
  interface TranslatedStatic {
    office: string;
    company: {
      description: string;
    };
    doingBusiness: string;
    doingLinks: {
      solutions: string;
      localInfo: string;
      eBusiness: string;
      sustainability: string;
      myNES: string;
    };
    getToKnow: string;
    getLinks: {
      nesGroup: string;
      newsroom: string;
      service: string;
      contactUs: string;
    };
    copyright: string;
    tagline: string;
    social: {
      facebook: string;
      linkedin: string;
      twitter: string;
    };
  }

  const [translatedStatic, setTranslatedStatic] = useState<TranslatedStatic>(staticContent);

  useEffect(() => {
    async function translateFooter() {
      if (locale === "en") {
        setTranslatedStatic(staticContent);
        return;
      }

      setIsLoading(true);
      try {
        console.log("Sending footer content to translate API:", staticContent); // Log nested content

        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: staticContent, targetLocale: locale }), // Send nested content directly
        });

        console.log(`API Response Status: ${res.status} ${res.statusText}`);

        if (!res.ok) {
          console.error("Translate API error:", res.statusText);
          setTranslatedStatic(staticContent);
          return;
        }

        const data = await res.json();
        console.log("Translated footer data:", data); // Should now log the full nested translated object

        // Since API rebuilds the exact structure, set directly (with fallback merge if needed)
        const safeData = { ...staticContent, ...data } as TranslatedStatic; // Merge for any missing keys
        setTranslatedStatic(safeData);
      } catch (err) {
        console.error("Footer translation fetch error:", err);
        setTranslatedStatic(staticContent);
      } finally {
        setIsLoading(false);
      }
    }

    translateFooter();
  }, [locale]);

  // Fallback during loading
  if (isLoading) {
    return (
      <footer className="w-full bg-slate-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-slate-400">Loading...</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-slate-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Office Selector Section - Mobile: Stacked, Desktop: Inline */}
        <div className="py-8 border-b border-slate-800">
          <div className="text-center">
            <h4 className="font-semibold text-lg text-slate-300 mb-6">
              {translatedStatic.office}
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              {/* Country Select */}
              <select
                className="px-4 py-3 bg-slate-800 text-white border border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 flex-1 min-w-[150px] text-sm sm:text-base"
                value={selectedCountry}
                onChange={(e) => {
                  const country = e.target.value;
                  setSelectedCountry(country);
                  const found = countries.find((c) => c.country === country);
                  setStates(found ? found.states : []);
                }}
              >
                {countries.map((item, i) => (
                  <option key={i} value={item.country}>
                    {item.country}
                  </option>
                ))}
              </select>

              {/* State Select */}
              <select className="px-4 py-3 bg-slate-800 text-white border border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 flex-1 min-w-[150px] text-sm sm:text-base">
                {states.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Footer Grid - Mobile: Stacked columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Company Info Column */}
          <div className="col-span-1 text-center md:text-left">
            <h5 className="font-semibold text-xl mb-4 text-white">NES Logistics</h5>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              {translatedStatic.company.description}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors p-3 rounded-full bg-slate-800 hover:bg-slate-700">
                <Facebook className="w-5 h-5" aria-label={translatedStatic.social.facebook} /> {/* Actual icon */}
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors p-3 rounded-full bg-slate-800 hover:bg-slate-700">
                <Linkedin className="w-5 h-5" aria-label={translatedStatic.social.linkedin} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors p-3 rounded-full bg-slate-800 hover:bg-slate-700">
                <Twitter className="w-5 h-5" aria-label={translatedStatic.social.twitter} />
              </Link>
            </div>
          </div>

          {/* Doing Business Column */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold text-lg mb-6">{translatedStatic.doingBusiness}</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={localeLink("/solution")} className="text-slate-400 hover:text-white transition-colors block py-1">
                  {translatedStatic.doingLinks.solutions}
                </Link>
              </li>
              <li>
                <Link href={localeLink("/nesgroup")} className="text-slate-400 hover:text-white transition-colors block py-1">
                  {translatedStatic.doingLinks.localInfo}
                </Link>
              </li>
              <li>
                <Link href={localeLink("/ebusiness")} className="text-slate-400 hover:text-white transition-colors block py-1">
                  {translatedStatic.doingLinks.eBusiness}
                </Link>
              </li>
              <li>
                <Link href={localeLink("/sustainability")} className="text-slate-400 hover:text-white transition-colors block py-1"> {/* Assumed path */}
                  {translatedStatic.doingLinks.sustainability}
                </Link>
              </li>
              <li>
                <Link href={localeLink("/nesgroup")} className="text-slate-400 hover:text-white transition-colors block py-1">
                  {translatedStatic.doingLinks.myNES}
                </Link>
              </li>
            </ul>
          </div>

          {/* Get to Know Us Column */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold text-lg mb-6">{translatedStatic.getToKnow}</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={localeLink("/nesgroup")} className="text-slate-400 hover:text-white transition-colors block py-1">
                  {translatedStatic.getLinks.nesGroup}
                </Link>
              </li>
              <li>
                <Link href={localeLink("/news")} className="text-slate-400 hover:text-white transition-colors block py-1">
                  {translatedStatic.getLinks.newsroom}
                </Link>
              </li>
              <li>
                <Link href={localeLink("/service")} className="text-slate-400 hover:text-white transition-colors block py-1">
                  {translatedStatic.getLinks.service}
                </Link>
              </li>
              <li>
                <Link href={localeLink("/contact")} className="text-slate-400 hover:text-white transition-colors block py-1">
                  {translatedStatic.getLinks.contactUs}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section - Mobile: Stacked, Desktop: Inline */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} NES Logistics. {translatedStatic.copyright}</span>
            <p>{translatedStatic.tagline}</p> {/* Now translated */}
            {/* Uncomment for policy links */}
            {/* <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Link href={localeLink("/privacy")} className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href={localeLink("/terms")} className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href={localeLink("/cookies")} className="hover:text-white transition-colors">Cookie Policy</Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}