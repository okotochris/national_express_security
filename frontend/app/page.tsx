"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SolutionsSection from "./soution";
import ServicesSection from "./component/design";
import Header from "./component/header";
import IndustryCarousel from "./component/strategy";
import Footer from "./component/footer";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [trackId, setTrackId] = useState("");
  const router = useRouter()

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    // if (!trackId) return alert("Enter a tracking or booking reference (demo)");
    router.push('/dashboard')
  }

  const news = [
    {
      title: "Digital Solutions",
      image: "presenting.jpg",
      content: "Tracking Your Shipment: Sign Up for Automatic Email Updates on nationalexpresssecurity.com",
      date: "08/04/2025",
      url:"/news/digital"
    },
    {
      title: "United States",
      image: "image6.jpg",
      content: "NES's Andre Simha to Discuss Collaboration and Digital Transformation at MANIFEST24 in Las Vegas",
      date: "01/19/2024",
      url:"/news/united"
    },
    {
      title: "United Arab Emirates",
      image: "image1.jpg",
      content: "NES’s CDIO André Simha to Speak at Future-Proof Technologies, Dubai",
      date: "11/29/2023",
      url:"/news/arab"
    },
  ];

  // const catgories = [
  //   {
  //     title: "A UNIQUE AND HOLISTIC EAST / WEST NETWORK",
  //     content: `Benefit from NES’s unmatched connectivity and direct corridors. Expertise and industry 
  //               knowledge play a pivotal role in the shipping sector, and at NES, our experts can 
  //               advise you on the best option for your cargo, depending on the type and volume of goods 
  //               you are shipping.`,
  //     image: "/image1",
  //   },
  // ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Header */}
      <Header />

      {/* Hero */}
      <main className="flex-1">
<section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/image3.jpg')] bg-cover bg-center"></div>

  {/* Overlay to make text pop */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 mx-auto px-6 text-center text-white max-w-4xl">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
    >
      National Express Security <br /> 
      <span className="text-emerald-400">Fast, Reliable & Trackable</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto"
    >
      Manage your bookings, track shipments, and access logistics tools in one place.
    </motion.p>

    {/* Tracking box */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      id="track"
      className="mt-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-3xl mx-auto flex flex-col items-center justify-center md:flex-row gap-4"
    >
      <form onSubmit={handleTrack} className="flex gap-1.5 items-center justify-center flex-wrap">
        <div>
          <label className="text-xs text-slate-500">Booking / Container / B/L</label>
          <input
            value={trackId}
            onChange={(e) => setTrackId(e.target.value)}
            className="mt-1 w-full rounded-lg border px-4 py-3 outline-none bg-white text-black"
            placeholder="Enter tracking number e.g. NESU1234567"
          />
          <p className="mt-2 text-sm text-slate-500">
            Try: <span className="font-medium">NESU1234567</span> (demo)
          </p>
        </div>
        <div className="flex items-end">
        <button type="submit" className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 transition text-white rounded-lg px-6 py-3 font-semibold shadow-md">
          Track
        </button>
      </div>
      </form>

      
    </motion.div>
  </div>
</section>

        <section id="services" className="w-full max-w-full mx-auto px-6 py-16">
          <div className="my-11">
            <h2 className="text-4xl font-semibold text-center">Our Solution</h2>
            <p className="text-slate-600 mt-2">
              End-to-end logistics services for importers and exporters.
              As well as being a global leader in container shipping, our worldwide teams of industry
              specific experts mean we can offer our customers round-the-clock personalised service.
              This ensures we deliver fast and reliable transit times, and that we provide the best
              solutions for your needs.
            </p>
          </div>
          <SolutionsSection />
        </section>
        <ServicesSection />

        {/* Services / Quick Links */}
        <section className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 py-16">
          <h2 className="text-4xl font-semibold text-center">Our services</h2>
          <p className="text-slate-600 mt-2 text-center">End-to-end logistics services for importers and exporters.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Container Shipping", desc: "Global scheduled sailings.", url:"/service/shipping" },
              { title: "Inland Logistics", desc: "Trucking & rail solutions.", url:"/service/logistic"},
              { title: "Customs Clearance", desc: "Import/export documentation.", url:"/service/clearance" },
              { title: "Supply Chain", desc: "Warehousing & distribution.", url:"/service/supply" },
            ].map((s) => (
              <article key={s.title} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="h-12 w-12 rounded-md bg-slate-100 flex items-center justify-center font-bold">S</div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <Link href={s.url}><span className="mt-4 inline-block text-emerald-600 text-sm">Learn more →</span></Link>
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
              <h3 className="text-xl font-semibold">Global network</h3>
              <p className="mt-2 text-slate-600">Ports, offices and gateways across six continents.</p>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-700">
                <li><strong>600+</strong> Ports</li>
                <li><strong>150+</strong> Countries</li>
                <li><strong>5000+</strong> Weekly sailings</li>
                <li><strong>24/7</strong> Customer care</li>
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
            <h2 className="text-2xl font-semibold text-center">Latest updates</h2>
            <Link href="#"><span className="text-sm text-emerald-600">View all</span></Link>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((i, index) => (
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
                    <Link href={i.url}><span className="text-emerald-600">Read →</span></Link>
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