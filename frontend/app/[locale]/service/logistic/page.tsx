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
    title: "Inland Logistics",
    description:
      "Seamless trucking and rail logistics that connect ports, warehouses, and customers across the nation — ensuring your cargo moves efficiently from coast to city and beyond.",
    cta: "Learn More",
  },
  about: {
    title: "Driving Efficiency Across Every Mile",
    description:
      "Our inland logistics services seamlessly integrate state-of-the-art trucking fleets with extensive rail networks, ensuring the safe, swift, and cost-effective delivery of goods across diverse terrains and distances. By leveraging advanced GPS tracking and real-time monitoring systems, we minimize delays and optimize routes for maximum efficiency. Whether bridging bustling ports to high-volume factories, linking remote warehouses to urban distribution centers, or facilitating just-in-time deliveries to retail outlets, our tailored solutions adapt to your unique operational needs. We prioritize sustainability by incorporating eco-friendly vehicles and low-emission rail options, reducing your carbon footprint without compromising speed. With a team of certified professionals and robust contingency planning, we guarantee your supply chain remains reliable, resilient, and fully responsive at every critical stage, empowering your business to thrive in a dynamic global market.",
  },
  services: [
    {
      img: "/plastic1.jpg",
      title: "Nationwide Trucking",
      desc: "Reliable long-haul and short-haul trucking that ensures on-time delivery and real-time tracking.",
    },
    {
      img: "/image3.jpg",
      title: "Integrated Rail Solutions",
      desc: "Cost-efficient and eco-friendly rail transport for bulk goods and intermodal containers.",
    },
    {
      img: "/pulp2.jpg",
      title: "Interconnected Network",
      desc: "A seamless connection between ports, rail terminals, and road transport for smooth transitions.",
    },
  ],
  network: {
    title: "A Smarter Way to Move Goods Inland",
    description:
      "By combining advanced route optimization, digital tracking, and an experienced operations team, we deliver goods with precision — minimizing delays and maximizing efficiency. Our inland logistics network bridges the gap between global ports and local destinations.",
    cta: "Request a Quote",
  },
  ctaSection: {
    title: "Powering Commerce with Reliable Land Transport",
    description:
      "From trucks to trains, our inland logistics solutions ensure the steady flow of goods, connecting your business to key destinations across the region.",
    cta: "Get Started",
  },
};

export default function InlandLogisticsPage() {
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
      <section className="w-full bg-gradient-to-r from-emerald-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">{translatedContent.hero.title}</h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-6">{translatedContent.hero.description}</p>
            <a href="/contact" className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
              {translatedContent.hero.cta}
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative w-full h-[300px] md:h-[400px]">
            <Image src="/plastic.jpg" alt="Inland Logistics - Truck and Rail" fill className="object-cover rounded-2xl shadow-lg" priority />
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
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-emerald-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-56 w-full">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-50 to-emerald-50 text-center">
        <div className="absolute inset-0 opacity-10">
          <Image src="/map-route.png" alt="Logistics Network Map" fill className="object-cover" />
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
      <section className="bg-emerald-700 py-16 text-center text-white">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-4">
          {translatedContent.ctaSection.title}
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-emerald-100">{translatedContent.ctaSection.description}</p>
        <a href="/contact" className="bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
          {translatedContent.ctaSection.cta}
        </a>
      </section>

      <Footer />
    </>
  );
}
