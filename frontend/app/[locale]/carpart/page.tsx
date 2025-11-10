"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../component/header";
import Footer from "../component/footer";

interface Capability {
  title: string;
  desc: string;
}

interface StaticContent {
  hero: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    para1: string;
    para2: string;
    para3: string;
  };
  capabilities: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

export default function CarPartsPage() {
  const params = useParams();
  const rawLocale = params?.locale;
  const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale || "en";

  // Static English content
  const staticContent: StaticContent = {
    hero: {
      title: "Car Parts Logistics",
      description: "Precision-driven logistics for the automotive industry — from engines to the smallest components.",
    },
    about: {
      title: "Powering the Automotive Supply Chain",
      para1: "We manage the fast-paced demands of the automotive sector — delivering engines, components, and parts efficiently from global suppliers to assembly plants and distributors.",
      para2: "Our logistics solutions ensure just-in-time (JIT) delivery to reduce downtime, increase manufacturing efficiency, and optimize cost. Every shipment is tracked and handled with precision.",
      para3: "Whether it’s inbound supply for manufacturers or outbound delivery to retailers, we keep your automotive supply chain moving — safely and reliably.",
    },
    capabilities: {
      title: "Automotive Logistics Expertise",
      subtitle: "We connect manufacturers, suppliers, and distributors through a smart, efficient logistics network built for speed and precision.",
    },
    cta: {
      title: "Driving Efficiency in Every Shipment",
      description: "Partner with us for automotive logistics that keep production lines running and distribution on schedule.",
      button: "Contact Us",
    },
  };

  const capabilities: Omit<Capability, "icon">[] = [
    { title: "Just-in-Time Delivery", desc: "Streamlined delivery processes to ensure parts arrive exactly when needed for production." },
    { title: "Warehousing & Distribution", desc: "Dedicated storage and fulfillment centers for automotive components of all sizes." },
    { title: "International Freight", desc: "Sea, air, and land freight options for global automotive supply chains." },
    { title: "Customs & Compliance", desc: "Expert handling of customs documentation and import/export regulations." },
    { title: "Real-Time Tracking", desc: "Track every shipment and delivery milestone with digital transparency." },
    { title: "Reverse Logistics", desc: "Efficient management of returns, recalls, and component recycling." },
  ];

  const [translatedStatic, setTranslatedStatic] = useState<StaticContent>(staticContent);
  const [translatedCapabilities, setTranslatedCapabilities] = useState<Capability[]>(capabilities);

  useEffect(() => {
    async function translateAll() {
      if (locale === "en") {
        setTranslatedStatic(staticContent);
        setTranslatedCapabilities(capabilities);
        return;
      }

      try {
        // Prepare payload for static content
        const staticPayload = Object.entries(staticContent).flatMap(([sectionKey, sectionValue]) =>
          Object.entries(sectionValue).map(([key, text]) => ({
            key: `${sectionKey}.${key}`,
            text,
          }))
        );

        // Capabilities as array {title, content: desc}
        const capabilitiesPayload = capabilities.map((c) => ({ title: c.title, content: c.desc }));

        const fullPayload = { static: staticPayload, capabilities: capabilitiesPayload };
        console.log("Sending car parts payload:", fullPayload);

        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: fullPayload, targetLocale: locale.toUpperCase() }),
        });

        if (!res.ok) {
          console.error("Car parts translation failed:", res.statusText);
          setTranslatedStatic(staticContent);
          setTranslatedCapabilities(capabilities);
          return;
        }

        const data = await res.json();
        console.log("Car parts translated:", data);

        // Merge static
        const mergedStatic: Partial<StaticContent> = {
          hero: { title: "", description: "" },
          about: { title: "", para1: "", para2: "", para3: "" },
          capabilities: { title: "", subtitle: "" },
          cta: { title: "", description: "", button: "" },
        };
        (data.static || staticPayload).forEach((item: any) => {
          const [sectionKey, subKey] = item.key.split(".");
          const section = sectionKey as keyof StaticContent;
          if (mergedStatic[section]) {
            (mergedStatic[section] as any)[subKey] = item.text;
          }
        });
        setTranslatedStatic(mergedStatic as StaticContent);

        // Merge capabilities
        const mergedCapabilities = (data.capabilities || capabilitiesPayload).map((item: any, i: number) => ({
          ...capabilities[i],
          title: item.title,
          desc: item.content,
        }));
        setTranslatedCapabilities(mergedCapabilities);

      } catch (err) {
        console.error("Car parts translation error:", err);
        setTranslatedStatic(staticContent);
        setTranslatedCapabilities(capabilities);
      }
    }

    translateAll();
  }, [locale]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/carparts.jpg"
          alt={translatedStatic.hero.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            {translatedStatic.hero.title}
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            {translatedStatic.hero.description}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/carpart.jpg"
              alt="Automotive logistics"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              {translatedStatic.about.title}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              {translatedStatic.about.para1}
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              {translatedStatic.about.para2}
            </p>
            <p className="text-slate-700 leading-relaxed">
              {translatedStatic.about.para3}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {translatedStatic.capabilities.title}
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            {translatedStatic.capabilities.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translatedCapabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold text-emerald-700 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">{translatedStatic.cta.title}</h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          {translatedStatic.cta.description}
        </p>
        <Link href="/contact">
          <button className="bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
            {translatedStatic.cta.button}
          </button>
        </Link>
      </section>

      <Footer />
    </>
  );
}