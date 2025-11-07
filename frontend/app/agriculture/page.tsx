"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function AgriculturePage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/agriculture.jpg"
          alt="Agricultural logistics"
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
            Agricultural Logistics
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            Supporting the movement of grains, fertilizers, and farm equipment
            through efficient and sustainable supply chains.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/agric.jpg"
              alt="agric"
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
              Efficient Farm-to-Market Movement
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We understand the importance of time-sensitive agricultural logistics.
              Our tailored solutions ensure farmers, producers, and distributors can
              move their goods quickly, safely, and cost-effectively from farms to
              processing centers and markets across the country.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Whether it’s grains, fertilizers, pesticides, or heavy-duty farm
              machinery, our logistics experts handle each shipment with precision
              — providing temperature-controlled options and GPS tracking for
              real-time monitoring.
            </p>
            <p className="text-slate-700 leading-relaxed">
              From rural farmlands to export terminals, we streamline the agricultural
              supply chain to reduce delays, minimize waste, and ensure sustainability
              at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Capabilities in Agricultural Logistics
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We combine innovation, reliability, and speed to offer end-to-end logistics
            for the agricultural sector — empowering farmers, agribusinesses, and exporters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Temperature-Controlled Transport",
              desc: "We ensure perishable goods remain fresh with our cold-chain logistics systems.",
            },
            {
              title: "Bulk Cargo Management",
              desc: "Safe and efficient handling of grains, fertilizers, and other bulk goods.",
            },
            {
              title: "Machinery & Equipment Delivery",
              desc: "Specialized transport for tractors, harvesters, and other large machinery.",
            },
            {
              title: "Warehouse & Storage Solutions",
              desc: "Secure, climate-controlled warehouses for short and long-term storage.",
            },
            {
              title: "Cross-Border Transport",
              desc: "Streamlined customs clearance for regional and international exports.",
            },
            {
              title: "Real-Time Tracking",
              desc: "Advanced monitoring systems for visibility across the entire supply chain.",
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

      {/* CTA */}
      <section className="bg-emerald-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Partner with Us Today</h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          Let’s simplify your agricultural logistics — from farm to factory to global markets.
          Contact us today to discuss your logistics needs.
        </p>
        <a
          href="/contact"
          className="bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
        >
          Get in Touch
        </a>
      </section>

      <Footer />
    </>
  );
}
