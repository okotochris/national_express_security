"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";
import { useParams } from "next/navigation";

interface Feature {
  title: string;
  desc: string;
}

export default function FoodAndBeveragePage() {
  const params = useParams();
  const rawLocale = params?.locale || "en";
  const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale;

  const staticContent = {
    heroTitle: "Food & Beverage Logistics",
    heroDesc:
      "Reliable logistics for perishable and non-perishable food items, ensuring freshness, safety, and timely delivery across continents.",
    aboutTitle: "Keeping Food Fresh from Source to Shelf",
    aboutDesc1:
      "Our food and beverage logistics solutions are designed to maintain product integrity at every stage. From farm produce to processed goods, we ensure freshness, quality, and timely delivery through optimized supply chains.",
    aboutDesc2:
      "With modern cold-chain infrastructure, real-time tracking, and globally compliant food handling standards, we help brands deliver safely to local and international markets.",
    aboutDesc3:
      "Whether it is temperature-controlled storage, express air freight, or sustainable packaging solutions — we handle every detail with precision and care.",
    capabilitiesTitle: "Our Food & Beverage Logistics Capabilities",
    capabilitiesDesc:
      "Comprehensive logistics solutions for temperature-sensitive, perishable, and packaged food items — built on safety and efficiency.",
    ctaTitle: "Deliver Freshness Across the Globe",
    ctaDesc:
      "From farm to fork, we ensure your food and beverages arrive safe, fresh, and ready for your customers to anywhere in the world.",
  };

  const eBusinessFeatures: Feature[] = [
    {
      title: "Cold-Chain Transport",
      desc: "Maintain ideal temperatures during storage and transit for perishable items such as dairy, meat, and fruits.",
    },
    {
      title: "Food-Grade Warehousing",
      desc: "Hygienic and certified facilities that ensure food safety, shelf-life maintenance, and quality control.",
    },
    {
      title: "Global Distribution",
      desc: "Efficient international freight forwarding to ensure on-time delivery of food and beverage products.",
    },
    {
      title: "Custom Packaging Solutions",
      desc: "Eco-friendly and moisture-resistant packaging to maintain freshness and reduce spoilage.",
    },
    {
      title: "Real-Time Tracking",
      desc: "Monitor every shipment in real time for temperature, humidity, and delivery status.",
    },
    {
      title: "Regulatory Compliance",
      desc: "Strict adherence to international food safety standards such as HACCP, ISO 22000, and FDA guidelines.",
    },
  ];

  const [translatedStatic, setTranslatedStatic] = useState<typeof staticContent>(staticContent);
  const [translatedFeatures, setTranslatedFeatures] = useState<Feature[]>(eBusinessFeatures);

  useEffect(() => {
    async function translateContent() {
      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: { static: Object.entries(staticContent).map(([key, text]) => ({ key, text })), services: eBusinessFeatures },
            targetLocale: locale.toUpperCase(),
          }),
        });

        if (!res.ok) {
          console.error("Translation failed:", res.statusText);
          setTranslatedStatic(staticContent);
          setTranslatedFeatures(eBusinessFeatures);
          return;
        }

        const data = await res.json();

        // Map translated static content back to object
        const staticObj: any = {};
        data.static.forEach((item: { key: string; text: string }) => {
          staticObj[item.key] = item.text;
        });
        setTranslatedStatic(staticObj);
        setTranslatedFeatures(data.services || eBusinessFeatures);
      } catch (error) {
        console.error("Translation error:", error);
        setTranslatedStatic(staticContent);
        setTranslatedFeatures(eBusinessFeatures);
      }
    }

    translateContent();
  }, [locale]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image src="/food.jpg" alt={translatedStatic.heroTitle} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            {translatedStatic.heroTitle}
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">{translatedStatic.heroDesc}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Image src="/food1.jpg" alt={translatedStatic.aboutTitle} width={600} height={400} className="rounded-2xl shadow-lg object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">{translatedStatic.aboutTitle}</h2>
            <p className="text-slate-700 leading-relaxed mb-4">{translatedStatic.aboutDesc1}</p>
            <p className="text-slate-700 leading-relaxed mb-4">{translatedStatic.aboutDesc2}</p>
            <p className="text-slate-700 leading-relaxed">{translatedStatic.aboutDesc3}</p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{translatedStatic.capabilitiesTitle}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{translatedStatic.capabilitiesDesc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translatedFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold text-emerald-700 mb-2">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">{translatedStatic.ctaTitle}</h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">{translatedStatic.ctaDesc}</p>
        <a href="/contact" className="bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}
