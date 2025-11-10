"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { useParams } from "next/navigation";

// Static English content for translation
const staticContent = {
  hero: {
    title: "Supply Chain",
    description:
      "Efficient warehousing and distribution services designed to optimize your global supply chain. From secure storage to on-time deliveries, we ensure your products move seamlessly from production to your customers — safely, quickly, and cost-effectively.",
    cta: "Learn More",
  },
  about: {
    title: "Integrated Warehousing & Distribution Solutions",
    description:
      "We provide flexible, scalable, and technology-driven warehousing and distribution solutions that help businesses meet global demand efficiently. Our supply chain management ensures every product is stored, tracked, and delivered with precision.",
  },
  services: [
    {
      img: "/supply1.jpg",
      title: "Warehousing Excellence",
      desc: "Modern, climate-controlled warehouses with advanced inventory systems for optimal space and product care.",
    },
    {
      img: "/supply2.jpg",
      title: "Global Distribution Network",
      desc: "Seamless distribution through our network of carriers and logistics hubs for faster delivery worldwide.",
    },
    {
      img: "/section.jpg",
      title: "Inventory Management",
      desc: "Real-time tracking, smart analytics, and digital reporting to maintain visibility and control at all times.",
    },
  ],
  network: {
    title: "Connecting Every Link in Your Supply Chain",
    description:
      "Our warehousing and distribution network helps you reduce transit time, improve order fulfillment, and lower overall logistics costs. With strategically placed facilities and efficient routing systems, we make your global operations more agile and dependable.",
    cta: "Request a Quote",
  },
  ctaSection: {
    title: "Smarter Storage. Faster Delivery.",
    description:
      "From local warehousing to international distribution, we combine technology and experience to give your supply chain a competitive edge.",
    cta: "Get Started",
  },
};

export default function SupplyChainPage() {
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "en";

  const [translatedContent, setTranslatedContent] = useState(staticContent);

  useEffect(() => {
    async function translateContent() {
      if (locale === "en") return;

      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: staticContent, targetLocale: locale }),
        });

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();
        setTranslatedContent(data.translated || staticContent);
      } catch (err) {
        console.error("Translation fetch error:", err);
        setTranslatedContent(staticContent);
      }
    }

    translateContent();
  }, [locale]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-800 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">{translatedContent.hero.title}</h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-6">{translatedContent.hero.description}</p>
            <a href="/contact" className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
              {translatedContent.hero.cta}
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative w-full h-[300px] md:h-[400px]">
            <Image src="/section.jpg" alt="Supply Chain Warehousing and Distribution" fill className="object-cover rounded-2xl shadow-lg" priority />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {translatedContent.about.title}
          </motion.h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{translatedContent.about.description}</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {translatedContent.services.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-blue-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-56 w-full">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-50 to-blue-50 text-center">
        <div className="absolute inset-0 opacity-10">
          <Image src="/logistics-network-map.png" alt="Supply Chain Network" fill className="object-cover" />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">{translatedContent.network.title}</h2>
          <p className="text-slate-600 mb-8">{translatedContent.network.description}</p>
          <a href="/contact" className="bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition">
            {translatedContent.network.cta}
          </a>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 py-16 text-center text-white">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-4">
          {translatedContent.ctaSection.title}
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-blue-100">{translatedContent.ctaSection.description}</p>
        <a href="/contact" className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
          {translatedContent.ctaSection.cta}
        </a>
      </section>

      <Footer />
    </>
  );
}
