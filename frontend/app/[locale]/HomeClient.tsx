"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import SolutionsSection from "./soution";
import ServicesSection from "./component/design";
import Header from "./component/header";
import IndustryCarousel from "./component/strategy";
import Footer from "./component/footer";

const server = process.env.NEXT_PUBLIC_API_URL;

// Static English content for all translatable strings (nested for API)
const staticContent = {
  hero: {
    title: "National Express Security",
    subtitle: "Fast, Reliable & Trackable",
    description: "Manage your bookings, track shipments, and access logistics tools in one place.",
    trackingLabel: "Booking / Container / B/L",
    trackingPlaceholder: "Enter tracking number e.g. NESU1234567",
    demoText: "Try:",
    demoValue: "NESU1234567 (demo)",
    trackButton: "Track",
    loadingButton: "Loading",
    notFound: "Tracking number not found", // For alerts
    serverError: "Server error. Please try again.",
    networkError: "Network error. Please try again.",
  },
  solutionsIntro: {
    title: "Our Solution",
    description: "End-to-end logistics services for importers and exporters. As well as being a global leader in container shipping, our worldwide teams of industry specific experts mean we can offer our customers round-the-clock personalised service. This ensures we deliver fast and reliable transit times, and that we provide the best solutions for your needs.",
  },
  services: {
    title: "Our services",
    description: "End-to-end logistics services for importers and exporters.",
    learnMore: "Learn more →",
    servicesList: [
      { title: "Container Shipping", desc: "Global scheduled sailings.", url: "/service/shipping" },
      { title: "Inland Logistics", desc: "Trucking & rail solutions.", url: "/service/logistic" },
      { title: "Customs Clearance", desc: "Import/export documentation.", url: "/service/clearance" },
      { title: "Supply Chain", desc: "Warehousing & distribution.", url: "/service/supply" },
    ],
  },
  network: {
    title: "Global network",
    description: "Ports, offices and gateways across six continents.",
    stats: [
      { label: "Ports", value: "600+" },
      { label: "Countries", value: "150+" },
      { label: "Weekly sailings", value: "5000+" },
      { label: "Customer care", value: "24/7" },
    ],
  },
  news: {
    sectionTitle: "Latest updates",
    viewAll: "View all",
    readMore: "Read →",
    items: [
      {
        title: "Digital Solutions",
        image: "presenting.jpg",
        content: "Tracking Your Shipment: Sign Up for Automatic Email Updates on nationalexpresssecurity.com",
        date: "08/04/2025",
        url: "/news/digital",
      },
      {
        title: "United States",
        image: "image6.jpg",
        content: "NES's Andre Simha to Discuss Collaboration and Digital Transformation at MANIFEST24 in Las Vegas",
        date: "01/19/2024",
        url: "/news/united",
      },
      {
        title: "United Arab Emirates",
        image: "image1.jpg",
        content: "NES’s CDIO André Simha to Speak at Future-Proof Technologies, Dubai",
        date: "11/29/2023",
        url: "/news/arab",
      },
    ],
  },
};

export default function HomePage() {
  const params = useParams();
  const router = useRouter();
  const locale = params?.locale || "en";

  const [trackId, setTrackId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [translatedStatic, setTranslatedStatic] = useState<any>(staticContent); // Now after declaration

  useEffect(() => {
    async function translateHomePage() {
      if (locale === "en") {
        setTranslatedStatic(staticContent);
        return;
      }

      setIsLoading(true);
      try {
        console.log("Sending home page content to translate API:", staticContent);

        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: staticContent, targetLocale: locale }),
        });

        console.log(`API Response Status: ${res.status} ${res.statusText}`);

        if (!res.ok) {
          console.error("Translate API error:", res.statusText);
          setTranslatedStatic(staticContent);
          return;
        }

        const data = await res.json();
        console.log("Translated home page data:", data);

        // Merge with fallback for any missing keys
        const safeData = { ...staticContent, ...data };
        setTranslatedStatic(safeData);
      } catch (err) {
        console.error("Home page translation fetch error:", err);
        setTranslatedStatic(staticContent);
      } finally {
        setIsLoading(false);
      }
    }

    translateHomePage();
  }, [locale]);

  async function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(`${server}/api/tracking_no/${trackId}`);

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('data', JSON.stringify(data));
        router.push('/en/dashboard');
      } else if (res.status === 404) {
        alert(translatedStatic?.hero?.notFound || "Tracking number not found");
      } else {
        alert(translatedStatic?.hero?.serverError || "Server error. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert(translatedStatic?.hero?.networkError || "Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Header */}
      <Header />

      {/* Hero */}
      <main className="flex-1">
        {/* Hero Section */}
<section className="relative w-full h-[90vh] flex items-center justify-center ">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/image3.jpg"
      alt="Hero background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 z-0 bg-black/50"></div>

  {/* Hero content */}
  <div className="relative z-10 mx-auto  text-center max-w-4xl flex flex-col items-center gap-6">
    {/* Animated title */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg"
    >
      {translatedStatic.hero.title} <br />
      <span className="text-emerald-400">{translatedStatic.hero.subtitle}</span>
    </motion.h1>

    {/* Animated description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg md:text-xl text-slate-200 max-w-2xl"
    >
      {translatedStatic.hero.description}
    </motion.p>

    {/* Tracking card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full max-w-3xl flex flex-col md:flex-row gap-4 items-center"
    >
      <form onSubmit={handleTrack} className="flex flex-1 flex-wrap gap-4 items-center justify-center">
        <div className="flex-1 min-w-[220px]">
          <label className="text-xs text-slate-500">{translatedStatic.hero.trackingLabel}</label>
          <input
            value={trackId}
            onChange={(e) => setTrackId(e.target.value)}
            placeholder={translatedStatic.hero.trackingPlaceholder}
            className="mt-1 w-full rounded-lg border px-4 py-3 outline-none bg-white text-black"
          />
          <p className="mt-2 text-sm text-slate-500">
            {translatedStatic.hero.demoText} <span className="font-medium">{translatedStatic.hero.demoValue}</span>
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition w-full md:w-auto"
        >
          {isLoading ? translatedStatic.hero.loadingButton : translatedStatic.hero.trackButton}
        </button>
      </form>
    </motion.div>
  </div>
</section>



        <section id="services" className="w-full max-w-full mx-auto px-6 py-16">
          <div className="my-11">
            <h2 className="text-4xl font-semibold text-center">{translatedStatic.solutionsIntro.title}</h2>
            <p className="text-slate-600 mt-2">{translatedStatic.solutionsIntro.description}</p>
          </div>
          <SolutionsSection />
        </section>
        <ServicesSection />

        {/* Services / Quick Links */}
        <section className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 py-16">
          <h2 className="text-4xl font-semibold text-center">{translatedStatic.services.title}</h2>
          <p className="text-slate-600 mt-2 text-center">{translatedStatic.services.description}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {translatedStatic.services.servicesList?.map((s: any, index: number) => (
              <article key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="h-12 w-12 rounded-md bg-slate-100 flex items-center justify-center font-bold">S</div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <Link href={s.url}>
                  <span className="mt-4 inline-block text-emerald-600 text-sm">{translatedStatic.services.learnMore}</span>
                </Link>
              </article>
            )) || staticContent.services.servicesList.map((s: any, index: number) => (
              // Fallback to English if translation fails for array
              <article key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="h-12 w-12 rounded-md bg-slate-100 flex items-center justify-center font-bold">S</div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <Link href={s.url}>
                  <span className="mt-4 inline-block text-emerald-600 text-sm">{translatedStatic.services.learnMore || "Learn more →"}</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <div
          className="w-full max-w-7xl mx-auto px-7 h-[500px] bg-[url('/section.jpg')] bg-cover bg-center bg-no-repeat"
        ></div>

        <IndustryCarousel />

        {/* Network map / stats */}
        <section id="network" className="w-full bg-white py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold">{translatedStatic.network.title}</h3>
              <p className="mt-2 text-slate-600">{translatedStatic.network.description}</p>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-700">
                {translatedStatic.network.stats?.map((stat: any, index: number) => (
                  <li key={index}><strong>{stat.value}</strong> {stat.label}</li>
                )) || staticContent.network.stats.map((stat: any, index: number) => (
                  <li key={index}><strong>{stat.value}</strong> {stat.label}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <div className="h-56 bg-slate-100 rounded-lg bg-[url('/map.jpg')] bg-cover bg-center bg-no-repeat"></div>
            </div>
          </div>
        </section>

        {/* News / Updates */}
        <section id="news" className="w-full max-w-full mx-auto px-6 py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-center">{translatedStatic.news.sectionTitle}</h2>
            <Link href="#"><span className="text-sm text-emerald-600">{translatedStatic.news.viewAll}</span></Link>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {translatedStatic.news.items?.map((i: any, index: number) => (
              <article key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div
                  className="h-36 w-full bg-slate-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${i.image})` }}
                ></div>
                <div className="p-4">
                  <h3 className="font-semibold">{i.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{i.content}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-slate-500">{i.date}</span>
                    <Link href={i.url}><span className="text-emerald-600">{translatedStatic.news.readMore}</span></Link>
                  </div>
                </div>
              </article>
            )) || staticContent.news.items.map((i: any, index: number) => (
              // Fallback
              <article key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div
                  className="h-36 w-full bg-slate-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${i.image})` }}
                ></div>
                <div className="p-4">
                  <h3 className="font-semibold">{i.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{i.content}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-slate-500">{i.date}</span>
                    <Link href={i.url}><span className="text-emerald-600">{translatedStatic.news.readMore || "Read →"}</span></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}