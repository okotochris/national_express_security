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

export default function ChemicalPage() {
  const params = useParams();
  const rawLocale = params?.locale;
  const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale || "en";

  // Static English content
  const staticContent: StaticContent = {
    hero: {
      title: "Chemical & Petrochemical Logistics",
      description: "Specialized handling and secure transport of hazardous and non-hazardous chemicals with safety as our top priority.",
    },
    about: {
      title: "Safe & Efficient Chemical Transport Solutions",
      para1: "We provide trusted logistics solutions for the chemical and petrochemical sectors — handling raw materials, intermediates, and finished products with utmost care and regulatory compliance.",
      para2: "Our expertise covers both hazardous and non-hazardous chemicals, using certified equipment, trained personnel, and advanced safety monitoring to ensure every shipment meets global standards.",
      para3: "With optimized routing, temperature control, and real-time tracking, we guarantee safe, reliable, and cost-efficient movement of chemical goods across global supply chains.",
    },
    capabilities: {
      title: "Our Chemical Logistics Capabilities",
      subtitle: "Comprehensive and compliant logistics solutions for the safe transport, storage, and management of chemical products.",
    },
    cta: {
      title: "Partner with Us for Safe Chemical Logistics",
      description: "Your safety is our mission. Trust us to handle every chemical shipment with precision, compliance, and care.",
      button: "Contact Us",
    },
  };

  const capabilities: Omit<Capability, "icon">[] = [
    { title: "Hazardous Materials Transport", desc: "Certified handling and transport of flammable, corrosive, and reactive chemicals under strict safety guidelines." },
    { title: "Temperature-Controlled Shipping", desc: "Maintain optimal temperature for sensitive chemicals and petrochemical products during transit." },
    { title: "Bulk Liquid Transport", desc: "Safe movement of bulk chemicals using ISO tanks, flexi-tanks, and chemical-grade containers." },
    { title: "Regulatory Compliance", desc: "Full adherence to international chemical transport standards, including ADR, IMDG, and IATA regulations." },
    { title: "Warehousing & Segregation", desc: "Specialized storage facilities designed for safe segregation of chemical types and hazard classes." },
    { title: "Safety & Environmental Protection", desc: "Robust emergency response protocols and sustainability-focused logistics operations." },
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
        console.log("Sending chemical payload:", fullPayload);

        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: fullPayload, targetLocale: locale.toUpperCase() }),
        });

        if (!res.ok) {
          console.error("Chemical translation failed:", res.statusText);
          setTranslatedStatic(staticContent);
          setTranslatedCapabilities(capabilities);
          return;
        }

        const data = await res.json();
        console.log("Chemical translated:", data);

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
        console.error("Chemical translation error:", err);
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
          src="/chemical.jpg"
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
              src="/chemical1.jpg"
              alt="Chemical Plant Logistics"
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