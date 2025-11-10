"use client";

import { useEffect } from "react";
const apiKey = process.env.NEXT_PUBLIC_TWAK_API_KEY
// Define a type for Tawk_API
interface TawkAPI {
  [key: string]: any;
}

// Make it available globally
declare global {
  var Tawk_API: TawkAPI;
}

export default function ChatWidget() {
  useEffect(() => {
    // Ensure Tawk_API exists
    window.Tawk_API = window.Tawk_API || {};
    const Tawk_LoadStart = new Date();

    (function () {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = `https://embed.tawk.to/${apiKey}`;
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, []);

  return null;
}
