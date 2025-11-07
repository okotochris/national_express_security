"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function PlasticPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/plastic.jpg"
          alt="Plastic and Rubber Product Logistics"
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
            Plastic & Rubber Product Logistics
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            Comprehensive logistics solutions for plastic and rubber industries, supporting international trade with flexible, cost-effective transport.
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
              src="/plastic-factory.jpg"
              alt="Plastic and Rubber Factory"
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
              Reliable Transport for Plastic and Rubber Industries
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We specialize in the safe and efficient movement of plastic and rubber products, including raw materials, finished goods, and industrial components across regional and international markets.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              From flexible scheduling to specialized packaging and warehousing, our logistics solutions are built to ensure materials remain undamaged and production lines stay on schedule.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Whether by land, sea, or air, we connect your supply chain to global opportunities — providing reliable, cost-effective, and sustainable logistics support for manufacturers and distributors alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Plastic & Rubber Logistics Capabilities
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Supporting manufacturers and exporters with efficient logistics services that keep production and trade moving smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Raw Material Transport",
              desc: "Safe and efficient delivery of plastic resins, rubber compounds, and other raw materials.",
            },
            {
              title: "Finished Goods Distribution",
              desc: "Reliable shipping of molded products, packaging materials, and tires to wholesalers and retailers.",
            },
            {
              title: "Warehousing & Inventory Management",
              desc: "Secure storage and inventory tracking for raw materials and finished goods.",
            },
            {
              title: "Flexible Freight Options",
              desc: "Sea, air, and road transport solutions tailored to your production and delivery timelines.",
            },
            {
              title: "Custom Packaging Solutions",
              desc: "Specialized packing that prevents deformation and contamination during transit.",
            },
            {
              title: "Global Supply Chain Integration",
              desc: "End-to-end visibility and tracking across multiple international destinations.",
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
          Let’s Streamline Your Plastic & Rubber Supply Chain
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          Partner with us for reliable, flexible, and cost-efficient logistics that keeps your manufacturing and trade operations running smoothly.
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
