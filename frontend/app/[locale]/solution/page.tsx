"use client";

import { useState, useEffect } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { useParams } from "next/navigation";

// Static English content
const staticContent = {
  heroDescription:
    "End-to-end logistics services for importers and exporters. As a global leader in container shipping, our worldwide teams of industry experts provide round-the-clock personalised service, ensuring fast, reliable transit times and optimal solutions for your needs.",
  solutions: [
    {
      title: "Shipping Solution",
      content:
        "We offer reliable international shipping services, ensuring smooth transit of goods across global trade routes.",
      bg: "/image1.jpg",
    },
    {
      title: "Inland Logistic & Transportation Solution",
      content:
        "Our inland network connects ports to cities efficiently through road and rail services.",
      bg: "/image2.jpg",
    },
    {
      title: "Air Cargo Solution",
      content:
        "Fast and secure air cargo services for time-sensitive shipments around the world.",
      bg: "/image3.jpg",
    },
    {
      title: "Digital Business Solution",
      content:
        "Leverage technology for smarter logistics with our suite of digital tools and APIs.",
      bg: "/image6.jpg",
    },
    {
      title: "Cargo Cover Solution",
      content:
        "Comprehensive cargo insurance coverage to safeguard your shipments throughout their journey.",
      bg: "/image4.jpg",
    },
  ],
};

export default function ServicesPage() {
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "en";

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [translatedContent, setTranslatedContent] = useState(staticContent);

  useEffect(() => {
    async function translateContent() {
      if (locale === "en") {
        setTranslatedContent(staticContent);
        return;
      }

      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: staticContent, targetLocale: locale }),
        });

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();
        setTranslatedContent(data || staticContent);
      } catch (err) {
        console.error("Translation fetch error:", err);
        setTranslatedContent(staticContent);
      }
    }

    translateContent();
  }, [locale]);

  const backgroundImage =
    activeIndex !== null
      ? translatedContent.solutions[activeIndex].bg
      : "/hero.jpg";

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Main Services Section */}
        <section id="services" className="w-full max-w-full mx-auto px-6 py-16">
          <div className="my-11 text-center">
            <h2 className="text-4xl font-semibold">
              {locale === "en" ? "Our Solution" : "Our Solution"}
            </h2>
            <p className="text-slate-600 mt-2 max-w-3xl mx-auto">
              {translatedContent.heroDescription}
            </p>
          </div>

          {/* Solutions Interactive Section */}
          <section
            className="relative min-h-[600px] text-white bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-6">
              {translatedContent.solutions.map((solution, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={solution.title}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`flex-1 cursor-pointer rounded-lg text-center backdrop-blur-sm transition-all duration-500 ease-out overflow-hidden ${
                      isActive
                        ? "bg-white/20 scale-105 p-8"
                        : "bg-white/10 hover:bg-white/15 p-6"
                    }`}
                  >
                    <h3
                      className={`font-bold transition-all duration-300 ${
                        isActive ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {solution.title}
                    </h3>
                    <div
                      className={`transition-[max-height,opacity,transform] duration-500 ease-in-out ${
                        isActive
                          ? "max-h-40 opacity-100 mt-4 scale-100"
                          : "max-h-0 opacity-0 scale-95"
                      }`}
                    >
                      <p className="text-base leading-relaxed">
                        {solution.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </section>

        <Footer />
      </div>
    </>
  );
}
