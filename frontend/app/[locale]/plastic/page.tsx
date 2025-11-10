"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

type Translations = {
  [key: string]: {
    heroTitle: string;
    heroDesc: string;
    aboutTitle: string;
    aboutText1: string;
    aboutText2: string;
    aboutText3: string;
    capabilitiesTitle: string;
    capabilitiesDesc: string;
    capabilities: { title: string; desc: string }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
};

const translations: Translations = {
  en: {
    heroTitle: "Plastic & Rubber Product Logistics",
    heroDesc: "Comprehensive logistics solutions for plastic and rubber industries, supporting international trade with flexible, cost-effective transport.",
    aboutTitle: "Reliable Transport for Plastic and Rubber Industries",
    aboutText1:
      "We specialize in the safe and efficient movement of plastic and rubber products, including raw materials, finished goods, and industrial components across regional and international markets.",
    aboutText2:
      "From flexible scheduling to specialized packaging and warehousing, our logistics solutions are built to ensure materials remain undamaged and production lines stay on schedule.",
    aboutText3:
      "Whether by land, sea, or air, we connect your supply chain to global opportunities — providing reliable, cost-effective, and sustainable logistics support for manufacturers and distributors alike.",
    capabilitiesTitle: "Our Plastic & Rubber Logistics Capabilities",
    capabilitiesDesc:
      "Supporting manufacturers and exporters with efficient logistics services that keep production and trade moving smoothly.",
    capabilities: [
      { title: "Raw Material Transport", desc: "Safe and efficient delivery of plastic resins, rubber compounds, and other raw materials." },
      { title: "Finished Goods Distribution", desc: "Reliable shipping of molded products, packaging materials, and tires to wholesalers and retailers." },
      { title: "Warehousing & Inventory Management", desc: "Secure storage and inventory tracking for raw materials and finished goods." },
      { title: "Flexible Freight Options", desc: "Sea, air, and road transport solutions tailored to your production and delivery timelines." },
      { title: "Custom Packaging Solutions", desc: "Specialized packing that prevents deformation and contamination during transit." },
      { title: "Global Supply Chain Integration", desc: "End-to-end visibility and tracking across multiple international destinations." },
    ],
    ctaTitle: "Let’s Streamline Your Plastic & Rubber Supply Chain",
    ctaDesc: "Partner with us for reliable, flexible, and cost-efficient logistics that keeps your manufacturing and trade operations running smoothly.",
    ctaBtn: "Contact Us",
  },
  fr: {
    heroTitle: "Logistique des Produits Plastiques et Caoutchouc",
    heroDesc: "Solutions logistiques complètes pour les industries du plastique et du caoutchouc, soutenant le commerce international avec un transport flexible et rentable.",
    aboutTitle: "Transport fiable pour les industries du plastique et du caoutchouc",
    aboutText1:
      "Nous sommes spécialisés dans le déplacement sûr et efficace des produits plastiques et en caoutchouc, y compris les matières premières, les produits finis et les composants industriels sur les marchés régionaux et internationaux.",
    aboutText2:
      "De la planification flexible à l'emballage spécialisé et à l'entreposage, nos solutions logistiques sont conçues pour garantir que les matériaux restent intacts et que les lignes de production respectent le calendrier.",
    aboutText3:
      "Que ce soit par voie terrestre, maritime ou aérienne, nous connectons votre chaîne d'approvisionnement aux opportunités mondiales — fournissant un support logistique fiable, rentable et durable pour les fabricants et distributeurs.",
    capabilitiesTitle: "Nos Capacités Logistiques pour le Plastique & Caoutchouc",
    capabilitiesDesc:
      "Soutenir les fabricants et les exportateurs avec des services logistiques efficaces qui maintiennent la production et le commerce en mouvement.",
    capabilities: [
      { title: "Transport de Matières Premières", desc: "Livraison sûre et efficace des résines plastiques, composés de caoutchouc et autres matières premières." },
      { title: "Distribution des Produits Finis", desc: "Expédition fiable des produits moulés, matériaux d'emballage et pneus aux grossistes et détaillants." },
      { title: "Entreposage & Gestion des Stocks", desc: "Stockage sécurisé et suivi des inventaires pour les matières premières et produits finis." },
      { title: "Options de Fret Flexibles", desc: "Solutions de transport maritime, aérien et routier adaptées à vos délais de production et de livraison." },
      { title: "Solutions d'Emballage Personnalisées", desc: "Emballage spécialisé pour éviter la déformation et la contamination pendant le transport." },
      { title: "Intégration de la Chaîne d'Approvisionnement Mondiale", desc: "Visibilité et suivi de bout en bout sur plusieurs destinations internationales." },
    ],
    ctaTitle: "Optimisons votre Chaîne d'Approvisionnement Plastique & Caoutchouc",
    ctaDesc: "Collaborez avec nous pour une logistique fiable, flexible et rentable qui maintient vos opérations de fabrication et de commerce en bon fonctionnement.",
    ctaBtn: "Contactez-nous",
  },
  // Add more languages here
};

export default function PlasticPage() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "en";
  const t = translations[locale] || translations.en;

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/plastic.jpg"
          alt={t.heroTitle}
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
            {t.heroTitle}
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">{t.heroDesc}</p>
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
              src="/plastic1.jpg"
              alt={t.aboutTitle}
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">{t.aboutTitle}</h2>
            <p className="text-slate-700 leading-relaxed mb-4">{t.aboutText1}</p>
            <p className="text-slate-700 leading-relaxed mb-4">{t.aboutText2}</p>
            <p className="text-slate-700 leading-relaxed">{t.aboutText3}</p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t.capabilitiesTitle}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{t.capabilitiesDesc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.capabilities.map((item, i) => (
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
        <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">{t.ctaDesc}</p>
        <a
          href="/contact"
          className="bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
        >
          {t.ctaBtn}
        </a>
      </section>

      <Footer />
    </>
  );
}
