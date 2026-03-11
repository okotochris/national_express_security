import Link from 'next/link';
import countries from './country'
import { useState } from 'react';

export default function Footer() {
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  const [states, setStates] = useState(countries[0].states)

  return (
    <footer className="w-full bg-slate-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Office Selector Section - Mobile: Stacked, Desktop: Inline */}
        <div className="py-8 border-b border-slate-800">
          <div className="text-center">
            <h4 className="font-semibold text-lg text-slate-300 mb-6">
              Country / Location / Local Office
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
              Global container shipping and logistics solutions tailored to your business needs. 
              Delivering excellence across air, land, and sea.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors p-3 rounded-full bg-slate-800 hover:bg-slate-700">
                <span className="sr-only">Facebook</span> {/* Replace with actual icon, e.g., <Facebook className="w-5 h-5" /> */}
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors p-3 rounded-full bg-slate-800 hover:bg-slate-700">
                <span className="sr-only">LinkedIn</span> {/* Replace with actual icon */}
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors p-3 rounded-full bg-slate-800 hover:bg-slate-700">
                <span className="sr-only">Twitter</span> {/* Replace with actual icon */}
              </Link>
            </div>
          </div>

          {/* Doing Business Column */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold text-lg mb-6">Doing Business Together</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/solution" className="text-slate-400 hover:text-white transition-colors block py-1">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/nesgroup" className="text-slate-400 hover:text-white transition-colors block py-1">
                  Local Information
                </Link>
              </li>
              <li>
                <Link href="/ebusiness" className="text-slate-400 hover:text-white transition-colors block py-1">
                  E-Business
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors block py-1">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/nesgroup" className="text-slate-400 hover:text-white transition-colors block py-1">
                  myNES
                </Link>
              </li>
            </ul>
          </div>

          {/* Get to Know Us Column */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold text-lg mb-6">Get to Know Us</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/nesgroup" className="text-slate-400 hover:text-white transition-colors block py-1">
                  NES Group
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-400 hover:text-white transition-colors block py-1">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-slate-400 hover:text-white transition-colors block py-1">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors block py-1">
                  Contact Us
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
            <span>&copy; {new Date().getFullYear()} NES Logistics. All rights reserved.</span>
            {/* <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}