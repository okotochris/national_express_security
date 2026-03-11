'use client';

import { useRouter, usePathname } from 'next/navigation';

interface LanguageSwitcherProps {
  locale: string;
  onChange: (locale: string) => void;
}

export default function LanguageSwitcher({ locale, onChange }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <select
      value={locale}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-2 py-1"
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
      <option value="zh">中文</option>
    </select>
  );
}
