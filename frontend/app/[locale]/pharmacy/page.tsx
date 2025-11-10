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
    heroTitle: "Pharmaceutical Logistics",
    heroDesc: "Secure, compliant, and temperature-controlled logistics for medical and pharmaceutical products.",
    aboutTitle: "Precision and Safety in Every Shipment",
    aboutText1:
      "We specialize in the safe, compliant, and efficient transportation of pharmaceutical and healthcare products. From vaccines to medical devices, our systems ensure each item is handled with precision and stored under optimal conditions.",
    aboutText2:
      "Our cold-chain solutions maintain critical temperature ranges and humidity levels throughout transit. Each step of the journey is tracked and verified to meet international healthcare logistics standards.",
    aboutText3:
      "With our secure vehicles, GPS monitoring, and trained personnel, your pharmaceutical goods arrive safely, on time, and in full regulatory compliance.",
    capabilitiesTitle: "Our Pharmaceutical Logistics Expertise",
    capabilitiesDesc:
      "We combine safety, speed, and compliance to ensure the integrity of pharmaceutical and healthcare shipments across borders.",
    capabilities: [
      { title: "Cold Chain Management", desc: "Temperature-controlled transport for vaccines, biologics, and other sensitive items." },
      { title: "Regulatory Compliance", desc: "Fully compliant with WHO, GDP, and local pharmaceutical handling standards." },
      { title: "Secure Handling", desc: "Specialized packaging, trained handlers, and vehicle security systems." },
      { title: "Real-Time Tracking", desc: "Monitor every shipment’s temperature, route, and delivery status instantly." },
      { title: "Custom Logistics Solutions", desc: "Tailored logistics for pharmaceutical manufacturers, hospitals, and distributors." },
      { title: "Rapid Response", desc: "24/7 availability for emergency medical deliveries and critical supply chain needs." },
    ],
    ctaTitle: "Protecting Health Through Reliable Logistics",
    ctaDesc: "Partner with us for pharmaceutical transportation solutions that meet global safety and compliance standards.",
    ctaBtn: "Contact Us",
  },
  fr: {
    heroTitle: "Logistique Pharmaceutique",
    heroDesc: "Logistique sécurisée, conforme et contrôlée en température pour les produits médicaux et pharmaceutiques.",
    aboutTitle: "Précision et sécurité dans chaque envoi",
    aboutText1:
      "Nous sommes spécialisés dans le transport sûr, conforme et efficace des produits pharmaceutiques et de santé. Des vaccins aux dispositifs médicaux, nos systèmes garantissent que chaque article est manipulé avec précision et stocké dans des conditions optimales.",
    aboutText2:
      "Nos solutions de chaîne du froid maintiennent des plages de température et des niveaux d'humidité critiques tout au long du transport. Chaque étape du parcours est suivie et vérifiée pour répondre aux normes internationales de logistique des soins de santé.",
    aboutText3:
      "Avec nos véhicules sécurisés, la surveillance GPS et le personnel formé, vos produits pharmaceutiques arrivent en toute sécurité, à l'heure et en conformité réglementaire complète.",
    capabilitiesTitle: "Notre expertise en logistique pharmaceutique",
    capabilitiesDesc:
      "Nous combinons sécurité, rapidité et conformité pour assurer l'intégrité des envois pharmaceutiques et de santé à travers les frontières.",
    capabilities: [
      { title: "Gestion de la chaîne du froid", desc: "Transport contrôlé en température pour vaccins, produits biologiques et autres articles sensibles." },
      { title: "Conformité réglementaire", desc: "Entièrement conforme aux normes OMS, BPD et locales de manipulation pharmaceutique." },
      { title: "Manipulation sécurisée", desc: "Emballages spécialisés, personnel formé et systèmes de sécurité des véhicules." },
      { title: "Suivi en temps réel", desc: "Surveillez instantanément la température, l’itinéraire et le statut de livraison de chaque envoi." },
      { title: "Solutions logistiques sur mesure", desc: "Logistique adaptée pour les fabricants pharmaceutiques, hôpitaux et distributeurs." },
      { title: "Réponse rapide", desc: "Disponibilité 24h/24 et 7j/7 pour les livraisons médicales d'urgence et les besoins critiques de la chaîne d'approvisionnement." },
    ],
    ctaTitle: "Protéger la santé grâce à une logistique fiable",
    ctaDesc: "Collaborez avec nous pour des solutions de transport pharmaceutique répondant aux normes mondiales de sécurité et de conformité.",
    ctaBtn: "Contactez-nous",
  },
  // Add more languages here
};

export default function PharmaceuticalPage() {
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "en";
  const t = translations[locale] || translations.en;

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/pharma.jpg"
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
              src="/pharmacy.jpg"
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
