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
    heroTitle: "Retail Logistics",
    heroDesc: "Agile and reliable logistics for fast-moving retail operations — from warehousing to global last-mile delivery.",
    aboutTitle: "Streamlined Logistics for Retail Success",
    aboutText1:
      "Our retail logistics services are designed to support the speed and flexibility required in modern retail supply chains. From inventory management to omnichannel distribution, we ensure your products move efficiently and arrive on time.",
    aboutText2:
      "Whether you operate brick-and-mortar stores, e-commerce platforms, or hybrid retail networks, our end-to-end logistics infrastructure supports seamless restocking, fulfillment, and last-mile delivery.",
    aboutText3:
      "With our global network, technology integration, and customer-centric approach, we help retailers optimize performance, reduce costs, and deliver exceptional shopping experiences worldwide.",
    expertiseTitle: "Our Retail Logistics Expertise",
    expertiseDesc:
      "We provide flexible and data-driven logistics solutions that keep retail operations fast, accurate, and cost-efficient.",
    expertise: [
      { title: "Omnichannel Distribution", desc: "Unified fulfillment for online, in-store, and wholesale retail operations." },
      { title: "Warehousing Solutions", desc: "Smart warehousing systems for efficient storage, sorting, and restocking." },
      { title: "Last-Mile Delivery", desc: "Fast, reliable delivery networks to meet customer expectations globally." },
      { title: "Inventory Management", desc: "Real-time stock visibility and automation to prevent shortages or overstocking." },
      { title: "Reverse Logistics", desc: "Simplified product returns and exchange handling for customer satisfaction." },
      { title: "Technology Integration", desc: "Seamless connection with retail management and e-commerce platforms." },
    ],
    ctaTitle: "Accelerate Your Retail Growth with Reliable Logistics",
    ctaDesc:
      "Partner with us for innovative retail logistics that power global trade, customer satisfaction, and brand success.",
    ctaBtn: "Contact Us",
  },
  fr: {
    heroTitle: "Logistique de Détail",
    heroDesc: "Logistique agile et fiable pour les opérations de détail à rotation rapide — de l'entreposage à la livraison mondiale du dernier kilomètre.",
    aboutTitle: "Logistique Rationalisée pour le Succès du Commerce de Détail",
    aboutText1:
      "Nos services logistiques pour le commerce de détail sont conçus pour soutenir la rapidité et la flexibilité nécessaires dans les chaînes d'approvisionnement modernes. De la gestion des stocks à la distribution omnicanal, nous assurons un mouvement efficace de vos produits et leur arrivée à temps.",
    aboutText2:
      "Que vous exploitiez des magasins physiques, des plateformes de commerce électronique ou des réseaux hybrides, notre infrastructure logistique de bout en bout prend en charge le réapprovisionnement, l'exécution et la livraison du dernier kilomètre sans faille.",
    aboutText3:
      "Avec notre réseau mondial, l'intégration technologique et notre approche centrée sur le client, nous aidons les détaillants à optimiser les performances, réduire les coûts et offrir des expériences d'achat exceptionnelles dans le monde entier.",
    expertiseTitle: "Notre Expertise en Logistique de Détail",
    expertiseDesc:
      "Nous fournissons des solutions logistiques flexibles et basées sur les données qui maintiennent les opérations de détail rapides, précises et rentables.",
    expertise: [
      { title: "Distribution Omnicanal", desc: "Exécution unifiée pour les opérations en ligne, en magasin et en gros." },
      { title: "Solutions d'Entrepôt", desc: "Systèmes d'entreposage intelligents pour un stockage, un tri et un réapprovisionnement efficaces." },
      { title: "Livraison du Dernier Kilomètre", desc: "Réseaux de livraison rapides et fiables pour répondre aux attentes des clients à l'échelle mondiale." },
      { title: "Gestion des Stocks", desc: "Visibilité en temps réel des stocks et automatisation pour éviter les pénuries ou les surstocks." },
      { title: "Logistique Inverse", desc: "Gestion simplifiée des retours et échanges de produits pour la satisfaction client." },
      { title: "Intégration Technologique", desc: "Connexion transparente avec les systèmes de gestion de détail et de commerce électronique." },
    ],
    ctaTitle: "Accélérez la Croissance de Votre Commerce de Détail avec une Logistique Fiable",
    ctaDesc:
      "Collaborez avec nous pour des solutions logistiques innovantes qui stimulent le commerce mondial, la satisfaction client et le succès de la marque.",
    ctaBtn: "Contactez-nous",
  },
  // Add more languages here
};

export default function RetailPage() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "en";
  const t = translations[locale] || translations.en;

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/retail.jpg"
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
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/fruit1.jpg"
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
              className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition"
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
