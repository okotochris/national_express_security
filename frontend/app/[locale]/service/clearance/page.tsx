"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../component/header";
import Footer from "../../component/footer";

export default function CustomsClearancePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-emerald-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Customs Clearance
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-6">
              Smooth and compliant customs processes for import and export operations — minimizing delays, reducing costs, and ensuring your cargo moves across borders seamlessly.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[300px] md:h-[400px]"
          >
            <Image
              src="/customs-clearance.jpg"
              alt="Customs clearance process"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Simplifying Global Trade Documentation
          </motion.h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Our customs clearance services ensure every shipment meets international and local trade requirements.
            From paperwork and tariff classifications to duty payments, we manage each step so your cargo can move
            swiftly through customs without costly interruptions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              img: "/customs-clearance.jpg",
              title: "Import & Export Documentation",
              desc: "Complete management of bills of lading, invoices, packing lists, and certificates of origin.",
            },
            {
              img: "/supply1.jpg",
              title: "Customs Brokerage",
              desc: "Experienced agents ensuring accurate classification, valuation, and duty calculation.",
            },
            {
              img: "/supply2.jpg",
              title: "Trade Compliance Support",
              desc: "We stay up to date with regulations to help your business comply with customs laws globally.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-emerald-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-50 to-emerald-50 text-center">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/trade-map.png"
            alt="Customs Network Map"
            fill
            className="object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Your Trusted Customs Partner
          </h2>
          <p className="text-slate-600 mb-8">
            From import licensing to bonded warehouse coordination, we provide full visibility and compliance at
            every checkpoint. Our goal is to help you reduce clearance time, avoid penalties, and maintain a smooth
            international logistics flow.
          </p>
          <a
            href="/contact"
            className="bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition"
          >
            Request a Quote
          </a>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 py-16 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Clear Borders. Move Forward.
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-emerald-100">
          Let us handle the complexities of customs so you can focus on growth. With our expert team and digital
          solutions, border clearance becomes effortless and efficient.
        </p>
        <a
          href="/contact"
          className="bg-white text-emerald-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition"
        >
          Get Started
        </a>
      </section>

      <Footer />
    </>
  );
}
