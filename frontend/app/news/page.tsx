"use client";

import { useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";

const news = [
  {
    title: "Digital Solutions",
    image: "presenting.jpg",
    content: "Tracking Your Shipment: Sign Up for Automatic Email Updates on nationalexpresssecurity.com",
    date: "08/04/2025",
    url: "/news/digital"
  },
  {
    title: "United States",
    image: "image6.jpg",
    content: "NES's Andre Simha to Discuss Collaboration and Digital Transformation at MANIFEST24 in Las Vegas",
    date: "01/19/2024",
    url: "/news/united"
  },
  {
    title: "United Arab Emirates",
    image: "image1.jpg",
    content: "NES’s CDIO André Simha to Speak at Future-Proof Technologies, Dubai",
    date: "11/29/2023",
    url: "/news/arab"
  },
];

export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">News & Insights</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay updated with the latest developments in logistics, digital transformation, and global events from NES.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            View All News
          </button>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">Latest Updates</h2>
          <p className="text-slate-600 mt-4">
            Explore our recent announcements, events, and industry insights.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={item.title}
              className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                selectedNews === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setSelectedNews(index)}
              onMouseLeave={() => setSelectedNews(null)}
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <p className={`text-gray-700 mb-4 transition-all duration-300 ${
                  selectedNews === index ? "line-clamp-none" : "line-clamp-2"
                }`}>
                  {item.content}
                </p>
                <a
                  href={item.url}
                  className="text-blue-600 font-semibold hover:underline inline-block"
                >
                  Read More →
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