"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function PulpPaperForestryPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/pulp.jpg"
          alt="Pulp, Paper, and Forestry Logistics"
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
            Pulp, Paper & Forestry Logistics
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            Sustainable, efficient, and secure transport of forestry and paper products worldwide.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/forestry-logistics.jpg"
              alt="Forestry logistics transport"
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Connecting Forests to Global Markets
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our logistics solutions cover the full supply chain of forestry and paper-based products — 
              from raw timber and pulp to finished paper rolls. We provide dependable, efficient, and 
              environmentally conscious logistics support for industries across the globe.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              With our expertise, we optimize transportation routes to minimize carbon impact, ensuring 
              sustainability in every shipment. Whether your cargo is heavy-duty logs or delicate packaging 
              paper, we ensure its safe delivery with precision tracking.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our partnerships with global carriers and warehouses enable flexible and cost-effective 
              transport for forestry businesses, paper mills, and international distributors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Pulp & Forestry Logistics Expertise
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We handle the logistics of forestry and paper industries with precision, 
            safety, and sustainability at the core of every process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Bulk Timber Transport",
              desc: "Reliable heavy-duty logistics for logs, wood chips, and raw forest products.",
            },
            {
              title: "Paper & Pulp Shipping",
              desc: "Efficient transport for pulp, paper rolls, and finished paper goods.",
            },
            {
              title: "Sustainable Logistics",
              desc: "Eco-friendly practices to reduce emissions and protect the environment.",
            },
            {
              title: "Global Supply Chain",
              desc: "Strong partnerships to ensure timely delivery across continents.",
            },
            {
              title: "Secure Warehousing",
              desc: "Safe, weather-protected storage for forestry and paper materials.",
            },
            {
              title: "Real-Time Monitoring",
              desc: "Track your shipments and logistics data with advanced digital systems.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-emerald-50 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold text-emerald-700 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Building a Sustainable Future for Forestry Logistics
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          Partner with us for reliable, sustainable, and efficient pulp, paper, 
          and forestry product transportation solutions.
        </p>
        <a
          href="/contact"
          className="bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}
