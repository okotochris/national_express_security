"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "../component/header";
import Footer from "../component/footer";
import Image from "next/image";

type NewsItem = {
  title: string;
  image: string;
  content: string;
  date: string;
  url: string;
};

type Translations = {
  [key: string]: {
    heroTitle: string;
    heroDesc: string;
    heroText: string;
    news: NewsItem[];
    viewAll: string;
    latestUpdates: string;
    exploreText: string;
    readMore: string;
  };
};

// Original translations
const translations: Translations = {
  en: {
    heroTitle: "News & Insights",
    heroDesc:
      "Stay updated with the latest developments in logistics, digital transformation, and global events from NES.",
    heroText: "View All News",
    news: [
      {
        title: "Digital Solutions",
        image: "/presenting.jpg",
        content:
          "Tracking Your Shipment: Sign Up for Automatic Email Updates on nationalexpresssecurity.com",
        date: "08/04/2025",
        url: "/news/digital",
      },
      {
        title: "United States",
        image: "/image6.jpg",
        content:
          "NES's Andre Simha to Discuss Collaboration and Digital Transformation at MANIFEST24 in Las Vegas",
        date: "01/19/2024",
        url: "/news/united",
      },
      {
        title: "United Arab Emirates",
        image: "/image1.jpg",
        content:
          "NES’s CDIO André Simha to Speak at Future-Proof Technologies, Dubai",
        date: "11/29/2023",
        url: "/news/arab",
      },
    ],
    viewAll: "View All News",
    latestUpdates: "Latest Updates",
    exploreText: "Explore our recent announcements, events, and industry insights.",
    readMore: "Read More →",
  },
  fr: {
    heroTitle: "Actualités et Insights",
    heroDesc:
      "Restez informé des derniers développements en logistique, transformation numérique et événements mondiaux de NES.",
    heroText: "Voir Toutes les Actualités",
    news: [
      {
        title: "Solutions Numériques",
        image: "/presenting.jpg",
        content:
          "Suivi de votre expédition : Inscrivez-vous pour recevoir des mises à jour par email sur nationalexpresssecurity.com",
        date: "08/04/2025",
        url: "/news/digital",
      },
      {
        title: "États-Unis",
        image: "/image6.jpg",
        content:
          "Andre Simha de NES discutera de la collaboration et de la transformation numérique au MANIFEST24 à Las Vegas",
        date: "01/19/2024",
        url: "/news/united",
      },
      {
        title: "Émirats Arabes Unis",
        image: "/image1.jpg",
        content:
          "Le CDIO de NES, André Simha, prendra la parole au Future-Proof Technologies, Dubaï",
        date: "11/29/2023",
        url: "/news/arab",
      },
    ],
    viewAll: "Voir Toutes les Actualités",
    latestUpdates: "Dernières Actualités",
    exploreText: "Découvrez nos annonces récentes, événements et insights du secteur.",
    readMore: "Lire la suite →",
  },
  // Add more languages if needed
};

export default function NewsPage() {
  const params = useParams();
  const locale = (params.locale as string) || "en"; // get locale from URL
  const t = translations[locale] || translations.en;

  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">{t.heroTitle}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t.heroDesc}</p>
          <a
            href={`/${locale}/news`}
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {t.heroText}
          </a>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">{t.latestUpdates}</h2>
          <p className="text-slate-600 mt-4">{t.exploreText}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.news.map((item, index) => (
            <div
              key={item.title}
              className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                selectedNews === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setSelectedNews(index)}
              onMouseLeave={() => setSelectedNews(null)}
            >
              {/* Image */}
              <div className="relative h-48 w-full bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <p
                  className={`text-gray-700 mb-4 transition-all duration-300 ${
                    selectedNews === index ? "line-clamp-none" : "line-clamp-2"
                  }`}
                >
                  {item.content}
                </p>
                <a
                  href={`/${locale}${item.url}`}
                  className="text-blue-600 font-semibold hover:underline inline-block"
                >
                  {t.readMore}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
