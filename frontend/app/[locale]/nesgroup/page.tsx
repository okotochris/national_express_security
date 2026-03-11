"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Globe, Award, Building } from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function NESGroupPage() {
  const params = useParams();
  const [loading, setLoading] = useState(true);

  // Multilingual content
  const content = {
    en: {
      heroTitle: "Welcome to NES Group",
      heroDesc: "Pioneering Global Logistics Excellence Since 1998",
      heroText:
        "NES Group is the umbrella organization powering innovative shipping, logistics, and supply chain solutions worldwide. From our roots in secure freight transport to leading sustainable practices, we connect businesses to opportunities across continents.",
      stats: [
        { label: "Years in Business", value: "25+" },
        { label: "Global Ports", value: "500+" },
        { label: "Satisfied Clients", value: "10,000+" },
        { label: "Containers Shipped", value: "1M+" }
      ],
      milestones: [
        { year: "1998", event: "Founded as a local shipping provider in London." },
        { year: "2005", event: "Expanded to international sea freight operations." },
        { year: "2015", event: "Launched air and land logistics divisions." },
        { year: "2020", event: "Achieved carbon-neutral shipping milestone." },
        { year: "2025", event: "Integrated AI-driven supply chain optimization." }
      ],
      coreValues: [
        { title: "Global Reach", desc: "Connecting every corner of the world with seamless logistics." },
        { title: "Security First", desc: "Uncompromising protection for your valuable cargo." },
        { title: "Reliability", desc: "On-time delivery, every time, without exceptions." },
        { title: "Customer-Centric", desc: "Tailored solutions that put your needs at the forefront." }
      ],
      ctaTitle: "Ready to Partner with NES Group?",
      ctaDesc:
        "Join thousands of businesses trusting us for their logistics journey. Let's discuss how we can elevate your operations.",
      ctaButtons: ["Get a Quote", "Contact Us"]
    },
    fr: {
      heroTitle: "Bienvenue chez NES Group",
      heroDesc: "Pionnier de l'excellence logistique mondiale depuis 1998",
      heroText:
        "NES Group est l'organisation qui alimente des solutions innovantes en matière d'expédition, de logistique et de chaîne d'approvisionnement dans le monde entier. De nos racines dans le transport sécurisé à nos pratiques durables, nous connectons les entreprises aux opportunités à travers les continents.",
      stats: [
        { label: "Années d'activité", value: "25+" },
        { label: "Ports mondiaux", value: "500+" },
        { label: "Clients satisfaits", value: "10 000+" },
        { label: "Conteneurs expédiés", value: "1M+" }
      ],
      milestones: [
        { year: "1998", event: "Fondé comme fournisseur local de transport à Londres." },
        { year: "2005", event: "Expansion aux opérations de fret maritime international." },
        { year: "2015", event: "Lancement des divisions logistiques aériennes et terrestres." },
        { year: "2020", event: "Atteinte de la neutralité carbone pour l'expédition." },
        { year: "2025", event: "Intégration de l'optimisation de la chaîne d'approvisionnement par IA." }
      ],
      coreValues: [
        { title: "Portée mondiale", desc: "Connecter chaque coin du monde avec une logistique transparente." },
        { title: "Sécurité avant tout", desc: "Protection intransigeante de vos cargaisons précieuses." },
        { title: "Fiabilité", desc: "Livraison à temps, à chaque fois, sans exception." },
        { title: "Orientation client", desc: "Des solutions personnalisées qui placent vos besoins au premier plan." }
      ],
      ctaTitle: "Prêt à collaborer avec NES Group ?",
      ctaDesc:
        "Rejoignez des milliers d'entreprises qui nous font confiance pour leur parcours logistique. Discutons de la manière dont nous pouvons améliorer vos opérations.",
      ctaButtons: ["Obtenir un devis", "Contactez-nous"]
    },
    // Add more languages here (es, de, etc.)
  };

  // TypeScript: derive locale type dynamically
  type Locale = keyof typeof content;
  const localeParam = params?.locale as string;
  const locale: Locale = localeParam && localeParam in content ? (localeParam as Locale) : "en";

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading NES Group...</p>
        </div>
      </div>
    );
  }

  const c = content[locale]; // ✅ Safe access

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative mx-auto px-6 py-24 md:py-32 bg-[url('/group-hero.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              {c.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              {c.heroDesc}
            </p>
            <p className="text-lg text-slate-300 max-w-2xl">{c.heroText}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {c.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">{c.heroTitle}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{c.heroText}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Building className="w-8 h-8 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold text-slate-800">{c.milestones[0].event}</h4>
                    <p className="text-sm text-slate-600">Strategic hub for European operations.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Award className="w-8 h-8 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold text-slate-800">{c.milestones[1].event}</h4>
                    <p className="text-sm text-slate-600">Recognized for innovation and reliability globally.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-96 bg-gray-300 rounded-2xl overflow-hidden">
                <Image
                  src="/group-timeline.jpg"
                  alt="NES Group Timeline"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {c.coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6"
              >
                {index === 0 && <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" />}
                {index === 1 && <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />}
                {index === 2 && <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />}
                {index === 3 && <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.ctaTitle}</h2>
          <p className="text-xl mb-8 leading-relaxed">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {c.ctaButtons.map((btn, index) => (
              <button
                key={index}
                className={`px-8 py-4 font-semibold rounded-lg ${
                  index === 0
                    ? "bg-white text-emerald-600 hover:bg-gray-100 transition"
                    : "border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
