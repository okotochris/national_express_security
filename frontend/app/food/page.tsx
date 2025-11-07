"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function FoodAndBeveragePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/food.jpg"
          alt="Food and Beverage Logistics"
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
            Food & Beverage Logistics
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            Reliable logistics for perishable and non-perishable food items,
            ensuring freshness, safety, and timely delivery across continents.
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
              src="/food1.jpg"
              alt="Food Logistics Operation"
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
              Keeping Food Fresh from Source to Shelf
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our food and beverage logistics solutions are designed to maintain
              product integrity at every stage. From farm produce to processed
              goods, we ensure freshness, quality, and timely delivery through
              optimized supply chains.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              With modern cold-chain infrastructure, real-time tracking, and
              globally compliant food handling standards, we help brands deliver
              safely to local and international markets.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Whether it's temperature-controlled storage, express air freight,
              or sustainable packaging solutions — we handle every detail with
              precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Food & Beverage Logistics Capabilities
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions for temperature-sensitive,
            perishable, and packaged food items — built on safety and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Cold-Chain Transport",
              desc: "Maintain ideal temperatures during storage and transit for perishable items such as dairy, meat, and fruits.",
            },
            {
              title: "Food-Grade Warehousing",
              desc: "Hygienic and certified facilities that ensure food safety, shelf-life maintenance, and quality control.",
            },
            {
              title: "Global Distribution",
              desc: "Efficient international freight forwarding to ensure on-time delivery of food and beverage products.",
            },
            {
              title: "Custom Packaging Solutions",
              desc: "Eco-friendly and moisture-resistant packaging to maintain freshness and reduce spoilage.",
            },
            {
              title: "Real-Time Tracking",
              desc: "Monitor every shipment in real time for temperature, humidity, and delivery status.",
            },
            {
              title: "Regulatory Compliance",
              desc: "Strict adherence to international food safety standards such as HACCP, ISO 22000, and FDA guidelines.",
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
          Deliver Freshness Across the Globe
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          From farm to fork, we ensure your food and beverages arrive safe,
          fresh, and ready for your customers — anywhere in the world.
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
