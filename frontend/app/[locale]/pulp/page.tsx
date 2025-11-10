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
    expertiseTitle: string;
    expertiseDesc: string;
    expertise: { title: string; desc: string }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
};

const translations: Translations = {
  en: {
    heroTitle: "Pulp, Paper & Forestry Logistics",
    heroDesc: "Sustainable, efficient, and secure transport of forestry and paper products worldwide.",
    aboutTitle: "Connecting Forests to Global Markets",
    aboutText1:
      "Our logistics solutions cover the full supply chain of forestry and paper-based products — from raw timber and pulp to finished paper rolls. We provide dependable, efficient, and environmentally conscious logistics support for industries across the globe.",
    aboutText2:
      "With our expertise, we optimize transportation routes to minimize carbon impact, ensuring sustainability in every shipment. Whether your cargo is heavy-duty logs or delicate packaging paper, we ensure its safe delivery with precision tracking.",
    aboutText3:
      "Our partnerships with global carriers and warehouses enable flexible and cost-effective transport for forestry businesses, paper mills, and international distributors.",
    expertiseTitle: "Our Pulp & Forestry Logistics Expertise",
    expertiseDesc:
      "We handle the logistics of forestry and paper industries with precision, safety, and sustainability at the core of every process.",
    expertise: [
      { title: "Bulk Timber Transport", desc: "Reliable heavy-duty logistics for logs, wood chips, and raw forest products." },
      { title: "Paper & Pulp Shipping", desc: "Efficient transport for pulp, paper rolls, and finished paper goods." },
      { title: "Sustainable Logistics", desc: "Eco-friendly practices to reduce emissions and protect the environment." },
      { title: "Global Supply Chain", desc: "Strong partnerships to ensure timely delivery across continents." },
      { title: "Secure Warehousing", desc: "Safe, weather-protected storage for forestry and paper materials." },
      { title: "Real-Time Monitoring", desc: "Track your shipments and logistics data with advanced digital systems." },
    ],
    ctaTitle: "Building a Sustainable Future for Forestry Logistics",
    ctaDesc:
      "Partner with us for reliable, sustainable, and efficient pulp, paper, and forestry product transportation solutions.",
    ctaBtn: "Contact Us",
  },
  fr: {
    heroTitle: "Logistique du Pâte, Papier & Forêt",
    heroDesc: "Transport durable, efficace et sécurisé des produits forestiers et du papier dans le monde entier.",
    aboutTitle: "Connecter les Forêts aux Marchés Mondiaux",
    aboutText1:
      "Nos solutions logistiques couvrent toute la chaîne d'approvisionnement des produits forestiers et du papier — du bois brut et de la pâte aux rouleaux de papier finis. Nous fournissons un support logistique fiable, efficace et respectueux de l'environnement pour les industries du monde entier.",
    aboutText2:
      "Grâce à notre expertise, nous optimisons les itinéraires de transport pour réduire l'impact carbone, garantissant la durabilité de chaque expédition. Que votre cargaison soit des grumes lourdes ou du papier d'emballage délicat, nous assurons sa livraison sécurisée avec un suivi précis.",
    aboutText3:
      "Nos partenariats avec des transporteurs et entrepôts mondiaux permettent un transport flexible et rentable pour les entreprises forestières, les papeteries et les distributeurs internationaux.",
    expertiseTitle: "Notre Expertise Logistique Pâte & Forêt",
    expertiseDesc:
      "Nous gérons la logistique des industries forestières et papetières avec précision, sécurité et durabilité au cœur de chaque processus.",
    expertise: [
      { title: "Transport de Bois en Vrac", desc: "Logistique fiable pour les grumes, copeaux de bois et produits forestiers bruts." },
      { title: "Expédition de Papier & Pâte", desc: "Transport efficace pour la pâte, les rouleaux de papier et les produits finis." },
      { title: "Logistique Durable", desc: "Pratiques écologiques pour réduire les émissions et protéger l'environnement." },
      { title: "Chaîne d'Approvisionnement Globale", desc: "Partenariats solides pour garantir des livraisons ponctuelles sur tous les continents." },
      { title: "Entreposage Sécurisé", desc: "Stockage sûr et protégé des intempéries pour les matériaux forestiers et papiers." },
      { title: "Suivi en Temps Réel", desc: "Suivez vos expéditions et vos données logistiques avec des systèmes numériques avancés." },
    ],
    ctaTitle: "Construire un Avenir Durable pour la Logistique Forestière",
    ctaDesc:
      "Collaborez avec nous pour des solutions de transport de pâte, papier et produits forestiers fiables, durables et efficaces.",
    ctaBtn: "Contactez-nous",
  },
  // Add more languages here
};

export default function PulpPaperForestryPage() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "en";
  const t = translations[locale] || translations.en;

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/pulp.jpg"
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
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/pulp1.jpg"
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

      {/* Expertise Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t.expertiseTitle}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{t.expertiseDesc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-emerald-50 rounded-2xl shadow-md hover:shadow-xl transition"
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
