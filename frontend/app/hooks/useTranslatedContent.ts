"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Types
export type StaticContent = Record<string, Record<string, string>>;

export interface TranslatableArrayItem {
  title: string;
  content: string;
}

interface TranslateHookProps {
  staticContent: StaticContent;
  arrayContent?: TranslatableArrayItem[];
  defaultLocale?: string;
}

interface UseTranslationReturn {
  locale: string;
  translatedStatic: StaticContent;
  translatedArray?: TranslatableArrayItem[];
  loading: boolean;
}

export function useTranslation({ staticContent, arrayContent = [], defaultLocale = "en" }: TranslateHookProps): UseTranslationReturn {
  const params = useParams();
  const rawLocale = params?.locale;
  const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale || defaultLocale;

  const [translatedStatic, setTranslatedStatic] = useState<StaticContent>(staticContent);
  const [translatedArray, setTranslatedArray] = useState<TranslatableArrayItem[]>(arrayContent);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function translateAll() {
      if (locale === defaultLocale) {
        setTranslatedStatic(staticContent);
        setTranslatedArray(arrayContent);
        return;
      }

      try {
        setLoading(true);

        // Flatten static content
        const staticPayload = Object.entries(staticContent).flatMap(([sectionKey, sectionValue]) =>
          Object.entries(sectionValue).map(([key, text]) => ({ key: `${sectionKey}.${key}`, text }))
        );

        // Prepare array payload
        const arrayPayload = arrayContent.map(item => ({ title: item.title, content: item.content }));

        const fullPayload = { static: staticPayload, array: arrayPayload };

        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: fullPayload, targetLocale: locale.toUpperCase() }),
        });

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();

        // Merge static content
        const mergedStatic: StaticContent = {};
        Object.keys(staticContent).forEach(section => {
          mergedStatic[section] = { ...staticContent[section] };
        });

        (data.static || staticPayload).forEach((item: any) => {
          const [sectionKey, subKey] = item.key.split(".");
          if (mergedStatic[sectionKey]) mergedStatic[sectionKey][subKey] = item.text;
        });
        setTranslatedStatic(mergedStatic);

        // Merge array content
        const mergedArray = (data.array || arrayPayload).map((item: any, i: number) => ({
          ...arrayContent[i],
          title: item.title,
          content: item.content,
        }));
        setTranslatedArray(mergedArray);

        setLoading(false);
      } catch (err) {
        console.error("Translation error:", err);
        setTranslatedStatic(staticContent);
        setTranslatedArray(arrayContent);
        setLoading(false);
      }
    }

    translateAll();
  }, [locale]);

  return { locale, translatedStatic, translatedArray, loading };
}
