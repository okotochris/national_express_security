'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLocale: string;
  onChange: (newLocale: string) => void; // Reverted: Single arg only
}

const languages: { code: string; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code: string) => {
    onChange(code);
    setIsOpen(false);
  };

  const currentLabel = languages.find((lang) => lang.code === currentLocale)?.label || 'Language';

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium px-3 py-1 border rounded hover:bg-slate-100 transition"
      >
        {currentLabel} <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 bg-white border shadow-lg rounded-md overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 transition ${
                lang.code === currentLocale ? 'font-semibold bg-slate-100' : ''
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;