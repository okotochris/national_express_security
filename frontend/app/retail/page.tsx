"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function RetailPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/retail.jpg"
          alt="Retail logistics"
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
            Retail Logistics
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            Agile and reliable logistics for fast-moving retail operations — from warehousing to global last-mile delivery.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/retail-warehouse.jpg"
              alt="Retail warehouse logistics"
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
              Streamlined Logistics for Retail Success
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our retail logistics services are designed to support the speed and flexibility required in modern retail supply chains.
              From inventory management to omnichannel distribution, we ensure your products move efficiently and arrive on time.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Whether you operate brick-and-mortar stores, e-commerce platforms, or hybrid retail networks, our end-to-end logistics
              infrastructure supports seamless restocking, fulfillment, and last-mile delivery.
            </p>
            <p className="text-slate-700 leading-relaxed">
              With our global network, technology integration, and customer-centric approach, we help retailers optimize performance,
              reduce costs, and deliver exceptional shopping experiences worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Retail Logistics Expertise
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We provide flexible and data-driven logistics solutions that keep retail operations fast, accurate, and cost-efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Omnichannel Distribution",
              desc: "Unified fulfillment for online, in-store, and wholesale retail operations.",
            },
            {
              title: "Warehousing Solutions",
              desc: "Smart warehousing systems for efficient storage, sorting, and restocking.",
            },
            {
              title: "Last-Mile Delivery",
              desc: "Fast, reliable delivery networks to meet customer expectations globally.",
            },
            {
              title: "Inventory Management",
              desc: "Real-time stock visibility and automation to prevent shortages or overstocking.",
            },
            {
              title: "Reverse Logistics",
              desc: "Simplified product returns and exchange handling for customer satisfaction.",
            },
            {
              title: "Technology Integration",
              desc: "Seamless connection with retail management and e-commerce platforms.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition"
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
          Accelerate Your Retail Growth with Reliable Logistics
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          Partner with us for innovative retail logistics that power global trade, customer satisfaction, and brand success.
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
