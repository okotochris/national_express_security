"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function ChemicalPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/chemical.jpg"
          alt="Chemical and Petrochemical Logistics"
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
            Chemical & Petrochemical Logistics
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            Specialized handling and secure transport of hazardous and non-hazardous chemicals with safety as our top priority.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/chemical-plant.jpg"
              alt="Chemical Plant Logistics"
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
              Safe & Efficient Chemical Transport Solutions
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We provide trusted logistics solutions for the chemical and petrochemical sectors — handling raw materials, intermediates, and finished products with utmost care and regulatory compliance.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our expertise covers both hazardous and non-hazardous chemicals, using certified equipment, trained personnel, and advanced safety monitoring to ensure every shipment meets global standards.
            </p>
            <p className="text-slate-700 leading-relaxed">
              With optimized routing, temperature control, and real-time tracking, we guarantee safe, reliable, and cost-efficient movement of chemical goods across global supply chains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Chemical Logistics Capabilities
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Comprehensive and compliant logistics solutions for the safe transport, storage, and management of chemical products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Hazardous Materials Transport",
              desc: "Certified handling and transport of flammable, corrosive, and reactive chemicals under strict safety guidelines.",
            },
            {
              title: "Temperature-Controlled Shipping",
              desc: "Maintain optimal temperature for sensitive chemicals and petrochemical products during transit.",
            },
            {
              title: "Bulk Liquid Transport",
              desc: "Safe movement of bulk chemicals using ISO tanks, flexi-tanks, and chemical-grade containers.",
            },
            {
              title: "Regulatory Compliance",
              desc: "Full adherence to international chemical transport standards, including ADR, IMDG, and IATA regulations.",
            },
            {
              title: "Warehousing & Segregation",
              desc: "Specialized storage facilities designed for safe segregation of chemical types and hazard classes.",
            },
            {
              title: "Safety & Environmental Protection",
              desc: "Robust emergency response protocols and sustainability-focused logistics operations.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition"
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
          Partner with Us for Safe Chemical Logistics
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          Your safety is our mission. Trust us to handle every chemical shipment with precision, compliance, and care.
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
