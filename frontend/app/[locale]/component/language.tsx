"use client";

import { useState } from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const languages = ["English", "French", "Spanish", "German", "Chinese"];

  function handleSelect(lang: string) {
    setLanguage(lang);
    setOpen(false);
    // 📝 Here you can trigger your translation logic (e.g. call i18n.changeLanguage(lang))
  }

  return (
    <div className="relative">
      {/* Globe Icon */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 p-2 rounded-md hover:bg-slate-100"
      >
        <Globe className="w-5 h-5 text-slate-600" />
        <span className="text-sm">{language}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border z-50">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-100"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
