"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function CarPartsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/carparts.jpg"
          alt="Car parts logistics"
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
            Car Parts Logistics
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            Precision-driven logistics for the automotive industry — from engines to the smallest components.
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
              src="/auto-logistics.jpg"
              alt="Automotive logistics"
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
              Powering the Automotive Supply Chain
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We manage the fast-paced demands of the automotive sector — delivering engines, components,
              and parts efficiently from global suppliers to assembly plants and distributors.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our logistics solutions ensure just-in-time (JIT) delivery to reduce downtime, increase
              manufacturing efficiency, and optimize cost. Every shipment is tracked and handled with precision.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Whether it’s inbound supply for manufacturers or outbound delivery to retailers, we keep your
              automotive supply chain moving — safely and reliably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Automotive Logistics Expertise
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We connect manufacturers, suppliers, and distributors through a smart, efficient logistics network built for speed and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Just-in-Time Delivery",
              desc: "Streamlined delivery processes to ensure parts arrive exactly when needed for production.",
            },
            {
              title: "Warehousing & Distribution",
              desc: "Dedicated storage and fulfillment centers for automotive components of all sizes.",
            },
            {
              title: "International Freight",
              desc: "Sea, air, and land freight options for global automotive supply chains.",
            },
            {
              title: "Customs & Compliance",
              desc: "Expert handling of customs documentation and import/export regulations.",
            },
            {
              title: "Real-Time Tracking",
              desc: "Track every shipment and delivery milestone with digital transparency.",
            },
            {
              title: "Reverse Logistics",
              desc: "Efficient management of returns, recalls, and component recycling.",
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
          Driving Efficiency in Every Shipment
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          Partner with us for automotive logistics that keep production lines running and distribution on schedule.
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
