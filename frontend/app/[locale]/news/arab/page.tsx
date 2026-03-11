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
    heroBtn: string;
    mainTitle: string;
    mainContent: string[];
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
    quote: string;
    quoteAuthor: string;
    eventDetails: { title: string; desc: string }[];
  };
};

const translations: Translations = {
  en: {
    heroTitle: "United Arab Emirates",
    heroDesc: "NES’s CDIO André Simha to Speak at Future-Proof Technologies, Dubai",
    heroBtn: "Read Full Story →",
    mainTitle: "NES’s Leadership at the Forefront of Global Innovation",
    mainContent: [
      "NES’s Chief Digital and Information Officer, André Simha, will represent the company at the prestigious Future-Proof Technologies Conference in Dubai — a global event bringing together visionaries from logistics, maritime, and digital industries.",
      "The conference will focus on how next-generation technologies such as AI, automation, and blockchain are transforming supply chain resilience, transparency, and sustainability. André will highlight NES’s role in driving digital transformation across international trade routes.",
      "The event will feature experts from logistics giants, shipping lines, and tech innovators — discussing strategies to future-proof operations and deliver smarter, greener solutions for a connected global economy.",
    ],
    ctaTitle: "NES Driving Innovation Across Global Trade",
    ctaDesc: "From Europe to the Middle East, NES continues to pioneer smarter, connected, and sustainable logistics solutions.",
    ctaButton: "Contact Us →",
    quote: "Digital innovation is not about the technology itself — it’s about how it empowers people, connects industries, and enables smarter trade for the future.",
    quoteAuthor: "— André Simha, CDIO, NES",
    eventDetails: [
      { title: "📅 Event Date", desc: "November 29, 2023" },
      { title: "📍 Location", desc: "Dubai World Trade Centre, UAE" },
      { title: "🎙️ Topic", desc: "Future-Proof Technologies in Global Logistics" },
    ],
  },
  fr: {
    heroTitle: "Émirats Arabes Unis",
    heroDesc: "Le CDIO de NES, André Simha, prendra la parole au Future-Proof Technologies, Dubaï",
    heroBtn: "Lire l'article complet →",
    mainTitle: "Leadership de NES à la pointe de l'innovation mondiale",
    mainContent: [
      "Le Chief Digital and Information Officer de NES, André Simha, représentera l'entreprise lors du prestigieux Future-Proof Technologies Conference à Dubaï — un événement mondial réunissant des visionnaires de la logistique, du maritime et des industries numériques.",
      "La conférence portera sur la manière dont les technologies de nouvelle génération telles que l'IA, l'automatisation et la blockchain transforment la résilience, la transparence et la durabilité de la chaîne d'approvisionnement. André mettra en avant le rôle de NES dans la transformation numérique des routes commerciales internationales.",
      "L'événement réunira des experts de géants de la logistique, de compagnies maritimes et d'innovateurs technologiques — discutant des stratégies pour sécuriser l'avenir des opérations et offrir des solutions plus intelligentes et plus écologiques pour une économie mondiale connectée.",
    ],
    ctaTitle: "NES, moteur d'innovation dans le commerce mondial",
    ctaDesc: "De l'Europe au Moyen-Orient, NES continue de proposer des solutions logistiques plus intelligentes, connectées et durables.",
    ctaButton: "Contactez-nous →",
    quote: "L'innovation numérique ne concerne pas la technologie elle-même — il s'agit de la façon dont elle autonomise les personnes, connecte les industries et permet un commerce plus intelligent pour l'avenir.",
    quoteAuthor: "— André Simha, CDIO, NES",
    eventDetails: [
      { title: "📅 Date de l'événement", desc: "29 novembre 2023" },
      { title: "📍 Lieu", desc: "Dubai World Trade Centre, ÉAU" },
      { title: "🎙️ Sujet", desc: "Future-Proof Technologies dans la logistique mondiale" },
    ],
  },
  // Add more languages here
};

export default function UnitedArabEmiratesPage() {
 const params = useParams();
const localeParam = Array.isArray(params.locale) ? params.locale[0] : params.locale;
const locale = localeParam || "en";
const t = translations[locale] || translations.en;
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/image1.jpg"
            alt={t.heroTitle}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto"
          >
            {t.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t.mainTitle}
            </h2>
            {t.mainContent.map((paragraph, i) => (
              <p key={i} className="text-slate-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <a
              href={`/${locale}/news`}
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              {t.heroBtn}
            </a>

            <p className="mt-6 text-slate-500 text-sm">
              Published on <strong>11/29/2023</strong>
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] md:h-[450px]"
          >
            <Image
              src="/image1.jpg"
              alt={t.heroTitle}
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-light italic leading-relaxed"
          >
            {t.quote}
          </motion.p>
          <p className="mt-6 text-blue-200 font-semibold">{t.quoteAuthor}</p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {t.eventDetails.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-16 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          {t.ctaTitle}
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-emerald-100">{t.ctaDesc}</p>
        <a
          href={`/${locale}/contact`}
          className="bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
        >
          {t.ctaButton}
        </a>
      </section>

      <Footer />
    </>
  );
}
