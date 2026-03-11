"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function PharmaceuticalPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/pharma.jpg"
          alt="Pharmaceutical logistics"
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
            Pharmaceutical Logistics
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            Secure, compliant, and temperature-controlled logistics for medical and pharmaceutical products.
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
              src="/pharmacy.jpg"
              alt="Pharmaceutical transport"
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
              Precision and Safety in Every Shipment
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We specialize in the safe, compliant, and efficient transportation of pharmaceutical and healthcare
              products. From vaccines to medical devices, our systems ensure each item is handled with precision
              and stored under optimal conditions.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our cold-chain solutions maintain critical temperature ranges and humidity levels throughout transit.
              Each step of the journey is tracked and verified to meet international healthcare logistics standards.
            </p>
            <p className="text-slate-700 leading-relaxed">
              With our secure vehicles, GPS monitoring, and trained personnel, your pharmaceutical goods arrive safely,
              on time, and in full regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Pharmaceutical Logistics Expertise
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We combine safety, speed, and compliance to ensure the integrity of pharmaceutical and healthcare shipments across borders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Cold Chain Management",
              desc: "Temperature-controlled transport for vaccines, biologics, and other sensitive items.",
            },
            {
              title: "Regulatory Compliance",
              desc: "Fully compliant with WHO, GDP, and local pharmaceutical handling standards.",
            },
            {
              title: "Secure Handling",
              desc: "Specialized packaging, trained handlers, and vehicle security systems.",
            },
            {
              title: "Real-Time Tracking",
              desc: "Monitor every shipment’s temperature, route, and delivery status instantly.",
            },
            {
              title: "Custom Logistics Solutions",
              desc: "Tailored logistics for pharmaceutical manufacturers, hospitals, and distributors.",
            },
            {
              title: "Rapid Response",
              desc: "24/7 availability for emergency medical deliveries and critical supply chain needs.",
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
          Protecting Health Through Reliable Logistics
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          Partner with us for pharmaceutical transportation solutions that meet global safety and compliance standards.
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
