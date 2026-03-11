"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";

export default function ServicesSlider() {
  const params = useParams();
  const localeParam = params?.locale;
  const locale = Array.isArray(localeParam) ? localeParam[0] : localeParam || "en";

  // Static English categories
  const categories = [
    {
      title: "Ocean Freight",
      content:
        "Reliable and cost-effective shipping solutions for your global trade needs.",
      image: "/ship.jpg",
    },
    {
      title: "Warehousing",
      content:
        "Modern storage facilities with real-time inventory management and security.",
      image: "/warehouse.jpg",
    },
    {
      title: "Inland Transport",
      content: "Efficient trucking and rail logistics to move your goods seamlessly.",
      image: "/truck.jpg",
    },
    {
      title: "Air Cargo",
      content: "Fast and secure air freight for time-sensitive shipments worldwide.",
      image: "/image2.jpg",
    },
  ];

  const staticContent = {
    learnMore: "Learn More →",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translatedCategories, setTranslatedCategories] = useState(categories);
  const [translatedLearnMore, setTranslatedLearnMore] = useState(staticContent.learnMore);

  useEffect(() => {
    async function translateSlider() {
      if (locale === "en") {
        setTranslatedCategories(categories);
        setTranslatedLearnMore(staticContent.learnMore);
        return;
      }

      try {
        const body = {
          content: {
            categories: categories.map((c) => ({
              title: c.title,
              content: c.content,
            })),
            learnMore: staticContent.learnMore,
          },
          targetLocale: locale,
        };

        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (!res.ok) {
          console.error("Translate API error:", res.statusText);
          setTranslatedCategories(categories);
          setTranslatedLearnMore(staticContent.learnMore);
          return;
        }

        const data = await res.json();

        const mergedCategories = categories.map((orig, i) => ({
          ...orig,
          title: data.categories?.[i]?.title || orig.title,
          content: data.categories?.[i]?.content || orig.content,
        }));

        setTranslatedCategories(mergedCategories);
        setTranslatedLearnMore(data.learnMore || staticContent.learnMore);
      } catch (error) {
        console.error("Slider translation fetch error:", error);
        setTranslatedCategories(categories);
        setTranslatedLearnMore(staticContent.learnMore);
      }
    }

    translateSlider();
  }, [locale]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % translatedCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [translatedCategories]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % translatedCategories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? translatedCategories.length - 1 : prev - 1
    );
  };

  const currentItem = translatedCategories[currentIndex];

  return (
    <section
      className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 
      text-white shadow-xl py-12 sm:py-16 px-4 sm:px-6 md:px-8 overflow-hidden mx-5"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
          bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition z-10"
        >
          <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-slate-800" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
          bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition z-10"
        >
          <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-slate-800" />
        </button>

        {/* Slider Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full">
          {/* Text Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex + "-text"}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center min-h-[300px] sm:min-h-[400px] 
              md:min-h-[450px] rounded-2xl p-8 sm:p-10 bg-gradient-to-r 
              from-blue-700 via-blue-600 to-sky-400 text-white shadow-xl"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {currentItem.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                {currentItem.content}
              </p>
              <button className="mt-6 text-white font-semibold hover:underline text-sm sm:text-base">
                {translatedLearnMore}
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Image Section */}
          <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {translatedCategories.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
