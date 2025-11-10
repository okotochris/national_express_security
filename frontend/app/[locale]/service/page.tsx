"use client";

import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { Ship, Warehouse, Truck, Plane } from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

interface Service {
  title: string;
  content: string;
  image: string;
  icon: JSX.Element;
}

// Default English content
const staticContent = {
  hero: {
    title: 'Our <span className="text-emerald-400">Services</span>',
    description:
      "We provide comprehensive, end-to-end logistics solutions to keep your business moving. From ocean freight to air cargo, warehousing, inland transport, and digital tracking — we handle every step with precision and care.",
  },
  services: {
    title: "Our Services",
    subtitle: "End-to-end logistics solutions tailored to your business.",
  },
};

const services: Omit<Service, "icon">[] = [
  { title: "Ocean Freight", content: "Reliable and cost-effective shipping solutions for your global trade needs.", image: "/ship.jpg" },
  { title: "Warehousing", content: "Modern storage facilities with real-time inventory management and security.", image: "/warehouse.jpg" },
  { title: "Inland Transport", content: "Efficient trucking and rail logistics to move your goods seamlessly.", image: "/truck.jpg" },
  { title: "Air Cargo", content: "Fast and secure air freight for time-sensitive shipments worldwide.", image: "/plane.jpg" },
];

const icons: JSX.Element[] = [
  <Ship className="w-8 h-8 text-emerald-600" />,
  <Warehouse className="w-8 h-8 text-emerald-600" />,
  <Truck className="w-8 h-8 text-emerald-600" />,
  <Plane className="w-8 h-8 text-emerald-600" />,
];

interface TranslatedStatic {
  hero: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
}

export default function ServicesSection() {
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "en";
  const [translatedServices, setTranslatedServices] = useState<Service[]>([]);
  const [translatedStatic, setTranslatedStatic] = useState<TranslatedStatic>(staticContent);

  useEffect(() => {
    async function translateAll() {
      if (locale === "en") {
        setTranslatedServices(services.map((s, i) => ({ ...s, icon: icons[i] })));
        setTranslatedStatic(staticContent);
        return;
      }

      try {
        // Prepare payload for translation API
        const staticPayload = Object.entries(staticContent).flatMap(([sectionKey, sectionValue]) =>
          Object.entries(sectionValue).map(([key, text]) => ({ key: `${sectionKey}.${key}`, text }))
        );
        const servicesPayload = services.map((s) => ({ title: s.title, content: s.content }));
        const payload = { static: staticPayload, services: servicesPayload };

        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: payload, targetLocale: locale }),
        });

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();

        // Merge translated services with icons/images
        const mergedServices = (data.services || servicesPayload).map((item: any, i: number) => ({
          ...item,
          image: services[i].image,
          icon: icons[i],
        }));
        setTranslatedServices(mergedServices);

        // Merge translated static content
        const mergedStatic: Partial<TranslatedStatic> = { hero: { title: "", description: "" }, services: { title: "", subtitle: "" } };
        (data.static || staticPayload).forEach((item: any) => {
          const [sectionKey, key] = item.key.split(".");
          const section = sectionKey as keyof TranslatedStatic;
          const subKey = key as keyof (TranslatedStatic[keyof TranslatedStatic]);
          if (mergedStatic[section]) (mergedStatic[section] as any)[subKey] = item.text;
        });
        setTranslatedStatic(mergedStatic as TranslatedStatic);
      } catch (err) {
        console.error("Translation fetch error:", err);
        setTranslatedServices(services.map((s, i) => ({ ...s, icon: icons[i] })));
        setTranslatedStatic(staticContent);
      }
    }

    translateAll();
  }, [locale]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative mx-auto px-6 py-24 md:py-32 bg-[url('/image1.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start">
          <div className="absolute inset-0 bg-black/50" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
            <h1
              className="text-3xl md:text-5xl font-extrabold leading-tight text-white max-w-3xl"
              dangerouslySetInnerHTML={{ __html: translatedStatic.hero.title }}
            />
            <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">{translatedStatic.hero.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{translatedStatic.services.title}</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">{translatedStatic.services.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {translatedServices.map((item, index) => (
            <div key={index} className="group flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl">
              <div className="md:w-1/2 p-8 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.content}</p>
              </div>
              <div className="md:w-1/2 relative h-48 md:h-auto">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
