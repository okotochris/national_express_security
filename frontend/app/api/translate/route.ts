// app/api/translate/route.ts
import { NextRequest, NextResponse } from "next/server";
import * as deepl from "deepl-node";

const translator = new deepl.DeepLClient(process.env.DEEPL_API_KEY || "");

type NestedContent = any; // can be object, array, string

/**
 * Recursively traverse an object/array and collect all strings.
 */
function extractStrings(obj: NestedContent, path: string[] = []): { path: string[]; text: string }[] {
  let results: { path: string[]; text: string }[] = [];

  if (typeof obj === "string") {
    results.push({ path, text: obj });
  } else if (Array.isArray(obj)) {
    obj.forEach((item, idx) => {
      results = results.concat(extractStrings(item, [...path, idx.toString()]));
    });
  } else if (typeof obj === "object" && obj !== null) {
    Object.keys(obj).forEach((key) => {
      results = results.concat(extractStrings(obj[key], [...path, key]));
    });
  }

  return results;
}

/**
 * Reconstruct the original object with translated strings
 */
function rebuildObject(obj: NestedContent, translations: string[], indexRef: { idx: number }): NestedContent {
  if (typeof obj === "string") {
    const text = translations[indexRef.idx] || obj;
    indexRef.idx++;
    return text;
  } else if (Array.isArray(obj)) {
    return obj.map((item) => rebuildObject(item, translations, indexRef));
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: Record<string, any> = {};
    Object.keys(obj).forEach((key) => {
      newObj[key] = rebuildObject(obj[key], translations, indexRef);
    });
    return newObj;
  }
  return obj;
}

export async function POST(req: NextRequest) {
  try {
    const { content, targetLocale } = await req.json();

    if (!content || !targetLocale) {
      return NextResponse.json({ error: "Missing content or targetLocale" }, { status: 400 });
    }

    // 1️⃣ Extract all strings
    const stringsToTranslate = extractStrings(content);
    const texts = stringsToTranslate.map((s) => s.text);

    // 2️⃣ Translate all strings at once
    const translatedResults = await translator.translateText(texts, null, targetLocale);

    const translatedTexts = translatedResults.map((r) => r.text);

    // 3️⃣ Rebuild the object structure
    const translatedContent = rebuildObject(content, translatedTexts, { idx: 0 });

    return NextResponse.json(translatedContent);
  } catch (error) {
    console.error("DeepL translation error:", error);
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }
}
