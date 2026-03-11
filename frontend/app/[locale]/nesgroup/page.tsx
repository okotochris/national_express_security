"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import {ShieldCheck, Clock, Users, Globe, Award, Building } from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer"; 
import Image from "next/image";

export default function NESGroupPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for hero animation or data fetch
=======
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
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

<<<<<<< HEAD
  const stats = [
    { label: "Years in Business", value: "25+" },
    { label: "Global Ports", value: "500+" },
    { label: "Satisfied Clients", value: "10,000+" },
    { label: "Containers Shipped", value: "1M+" }
  ];

  const milestones = [
    { year: "1998", event: "Founded as a local shipping provider in London." },
    { year: "2005", event: "Expanded to international sea freight operations." },
    { year: "2015", event: "Launched air and land logistics divisions." },
    { year: "2020", event: "Achieved carbon-neutral shipping milestone." },
    { year: "2025", event: "Integrated AI-driven supply chain optimization." }
  ];

=======
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
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

<<<<<<< HEAD
=======
  const c = content[locale]; // ✅ Safe access

>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
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
<<<<<<< HEAD
              Welcome to <span className="text-emerald-400">NES Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              Pioneering Global Logistics Excellence Since 1998
            </p>
            <p className="text-lg text-slate-300 max-w-2xl">
              NES Group is the umbrella organization powering innovative shipping, logistics, and supply chain solutions worldwide. 
              From our roots in secure freight transport to leading sustainable practices, we connect businesses to opportunities across continents.
            </p>
=======
              {c.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              {c.heroDesc}
            </p>
            <p className="text-lg text-slate-300 max-w-2xl">{c.heroText}</p>
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<<<<<<< HEAD
            {stats.map((stat, index) => (
=======
            {c.stats.map((stat, index) => (
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
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
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded in 1998 as National Express Security, NES Group has evolved from a specialized security logistics firm 
                into a global powerhouse in multimodal transportation. Today, we serve diverse industries with cutting-edge 
                technology, unwavering commitment to sustainability, and a team of experts dedicated to your success.
              </p>
=======
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">{c.heroTitle}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{c.heroText}</p>
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Building className="w-8 h-8 text-emerald-600" />
                  <div>
<<<<<<< HEAD
                    <h4 className="font-semibold text-slate-800">Headquartered in London</h4>
=======
                    <h4 className="font-semibold text-slate-800">{c.milestones[0].event}</h4>
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
                    <p className="text-sm text-slate-600">Strategic hub for European operations.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Award className="w-8 h-8 text-emerald-600" />
                  <div>
<<<<<<< HEAD
                    <h4 className="font-semibold text-slate-800">Award-Winning Service</h4>
=======
                    <h4 className="font-semibold text-slate-800">{c.milestones[1].event}</h4>
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
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
<<<<<<< HEAD
                  src="/group-timeline.jpg" // Placeholder for timeline graphic
                  alt="NES Group Timeline"
=======
                  src="/group-timeline.jpg"
                  alt="NES Group Timeline"
                  width={600}
                  height={400}
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
<<<<<<< HEAD

          {/* Milestones Timeline */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Key Milestones</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-emerald-300"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center justify-center relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                  >
                    <div className="w-1/2 p-4">
                      <div className="bg-white rounded-lg shadow-md p-6">
                        <h4 className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</h4>
                        <p className="text-slate-600">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm absolute left-1/2 transform -translate-x-1/2 -translate-y-8 z-10">
                      {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
=======
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6"
            >
              <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Global Reach</h3>
              <p className="text-slate-600">Connecting every corner of the world with seamless logistics.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6"
            >
              <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Security First</h3>
              <p className="text-slate-600">Uncompromising protection for your valuable cargo.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6"
            >
              <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Reliability</h3>
              <p className="text-slate-600">On-time delivery, every time, without exceptions.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6"
            >
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Customer-Centric</h3>
              <p className="text-slate-600">Tailored solutions that put your needs at the forefront.</p>
            </motion.div>
=======
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
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Partner with NES Group?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join thousands of businesses trusting us for their logistics journey. Lets discuss how we can elevate your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Get a Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition">
              Contact Us
            </button>
=======
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
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
