"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../component/header";
import Footer from "../../component/footer";

type Translations = {
  [key: string]: {
    heroTitle: string;
    heroDesc: string;
    mainTitle: string;
    mainDesc: string;
    signupBtn: string;
    publishDate: string;
    featureTitle: string;
    featureDesc: string;
    features: {
      icon: string;
      title: string;
      desc: string;
    }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
};

const translations: Translations = {
  en: {
    heroTitle: "Digital Solutions",
    heroDesc:
      "Empowering logistics with real-time data, automation, and seamless tracking — stay connected to every shipment at every step.",
    mainTitle: "Tracking Your Shipment",
    mainDesc:
      "At NES, we believe logistics should be transparent, intelligent, and effortless. Our digital tracking platform allows clients to monitor cargo in real time, receive instant updates, and manage documentation securely online. By signing up for automatic email updates on NES.com, you gain 24/7 access to shipment milestones, estimated delivery times, and custom notifications — keeping you informed from dispatch to delivery. Whether you’re managing one container or hundreds, our digital tools simplify every process with precision, visibility, and control.",
    signupBtn: "Sign Up for Updates →",
    publishDate: "Published on 08/04/2025",
    featureTitle: "What Our Digital Platform Offers",
    featureDesc:
      "From automated alerts to smart data dashboards, NES’s digital logistics tools deliver efficiency and confidence.",
    features: [
      {
        icon: "📦",
        title: "Real-Time Tracking",
        desc: "View live shipment status and movement across global supply chains.",
      },
      {
        icon: "📧",
        title: "Automatic Email Updates",
        desc: "Stay informed with instant notifications for departures, arrivals, and delays.",
      },
      {
        icon: "📊",
        title: "Data-Driven Insights",
        desc: "Gain logistics intelligence through advanced analytics and reporting tools.",
      },
      {
        icon: "🔒",
        title: "Secure Cloud Access",
        desc: "Manage all shipment information and documents securely in one dashboard.",
      },
      {
        icon: "🌐",
        title: "24/7 Global Connectivity",
        desc: "Access your shipment data anywhere, anytime, from any device.",
      },
      {
        icon: "⚙️",
        title: "Smart Automation",
        desc: "Reduce manual errors and streamline operations with digital workflow tools.",
      },
    ],
    ctaTitle: "Smarter Shipping Starts with NES Digital Solutions",
    ctaDesc:
      "Simplify your logistics, improve visibility, and stay informed automatically — every shipment, every time.",
    ctaBtn: "Get in Touch →",
  },
  fr: {
    heroTitle: "Solutions Numériques",
    heroDesc:
      "Renforcer la logistique avec des données en temps réel, l'automatisation et un suivi transparent — restez connecté à chaque expédition à chaque étape.",
    mainTitle: "Suivi de votre expédition",
    mainDesc:
      "Chez NES, nous pensons que la logistique doit être transparente, intelligente et simple. Notre plateforme de suivi numérique permet aux clients de surveiller les cargaisons en temps réel, de recevoir des mises à jour instantanées et de gérer la documentation en ligne de manière sécurisée. En vous inscrivant aux mises à jour automatiques par e-mail sur NES.com, vous bénéficiez d'un accès 24h/24 et 7j/7 aux étapes de livraison, aux délais estimés et aux notifications personnalisées — vous tenant informé de l'expédition à la livraison. Que vous gériez un conteneur ou des centaines, nos outils numériques simplifient chaque processus avec précision, visibilité et contrôle.",
    signupBtn: "Inscrivez-vous pour les mises à jour →",
    publishDate: "Publié le 08/04/2025",
    featureTitle: "Ce que notre plateforme numérique offre",
    featureDesc:
      "Des alertes automatisées aux tableaux de bord intelligents, les outils logistiques numériques de NES offrent efficacité et confiance.",
    features: [
      {
        icon: "📦",
        title: "Suivi en temps réel",
        desc: "Visualisez le statut et le déplacement en direct des expéditions à travers les chaînes d'approvisionnement mondiales.",
      },
      {
        icon: "📧",
        title: "Mises à jour automatiques par e-mail",
        desc: "Restez informé grâce à des notifications instantanées pour les départs, les arrivées et les retards.",
      },
      {
        icon: "📊",
        title: "Insights basés sur les données",
        desc: "Obtenez des informations logistiques grâce à des analyses avancées et des outils de reporting.",
      },
      {
        icon: "🔒",
        title: "Accès sécurisé au cloud",
        desc: "Gérez toutes les informations et documents relatifs aux expéditions de manière sécurisée sur un seul tableau de bord.",
      },
      {
        icon: "🌐",
        title: "Connectivité mondiale 24/7",
        desc: "Accédez à vos données d'expédition partout, à tout moment, depuis n'importe quel appareil.",
      },
      {
        icon: "⚙️",
        title: "Automatisation intelligente",
        desc: "Réduisez les erreurs manuelles et rationalisez les opérations grâce aux outils de workflow numérique.",
      },
    ],
    ctaTitle: "La logistique intelligente commence avec NES Digital Solutions",
    ctaDesc:
      "Simplifiez votre logistique, améliorez la visibilité et restez informé automatiquement — chaque expédition, à chaque fois.",
    ctaBtn: "Contactez-nous →",
  },
};

export default function DigitalSolutionsPage() {
  const params = useParams();
  const localeParam = Array.isArray(params.locale) ? params.locale[0] : params.locale;
  const locale = localeParam || "en";

  const t = translations[locale] || translations.en;

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/image6.jpg" alt="Digital network background" fill className="object-cover" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold mb-4">
            {t.heroTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto">
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t.mainTitle}</h2>
            <p className="text-slate-700 leading-relaxed mb-4">{t.mainDesc}</p>
            <a href="/signup" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition">
              {t.signupBtn}
            </a>
            <p className="mt-6 text-slate-500 text-sm">{t.publishDate}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative w-full h-[350px] md:h-[450px]">
            <Image src="/image1.jpg" alt="Digital shipment tracking dashboard" fill className="object-cover rounded-2xl shadow-2xl" priority />
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-4">
            {t.featureTitle}
          </motion.h2>
          <p className="text-slate-300 max-w-3xl mx-auto">{t.featureDesc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {t.features.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-emerald-400 mb-2">{item.title}</h4>
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-center text-white">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-4">
          {t.ctaTitle}
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-emerald-100">{t.ctaDesc}</p>
        <a href="/contact" className="bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
          {t.ctaBtn}
        </a>
      </section>

      <Footer />
    </>
  );
}
