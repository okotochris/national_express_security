"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function MiningPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/mining.jpg"
          alt="Mining and Minerals Logistics"
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
            Mining & Minerals Logistics
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            Heavy-duty logistics built for the toughest terrains — delivering mining equipment, raw minerals, and resources safely and efficiently.
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
              src="/mining-equipment.jpg"
              alt="Mining Equipment Transport"
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
              Reliable Logistics for the Mining Industry
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We provide comprehensive logistics services for the mining and minerals sector, managing the movement of heavy machinery, raw materials, and refined products from extraction sites to global markets.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our specialized fleet and expertise in remote area transportation ensure your cargo reaches its destination — no matter how rugged the terrain or how complex the route.
            </p>
            <p className="text-slate-700 leading-relaxed">
              From port-to-pit operations to international freight forwarding, we guarantee efficiency, safety, and reliability across every step of your supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Mining Logistics Capabilities
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We support mining operations with customized transportation, storage, and export solutions built for heavy loads and long distances.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Heavy Equipment Transport",
              desc: "Hauling of bulldozers, excavators, and other mining machinery safely to remote locations.",
            },
            {
              title: "Bulk Mineral Shipping",
              desc: "Efficient transport of coal, iron ore, bauxite, and other minerals by sea, rail, or road.",
            },
            {
              title: "Project Cargo Management",
              desc: "Planning and execution of oversized or high-value cargo moves for mining projects.",
            },
            {
              title: "Customs & Port Operations",
              desc: "Handling export/import documentation, port clearances, and inspection coordination.",
            },
            {
              title: "Remote Area Logistics",
              desc: "Reliable transportation and supply solutions for off-grid and rural mining sites.",
            },
            {
              title: "Environmental Safety",
              desc: "Sustainable logistics practices minimizing impact on natural ecosystems.",
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
          Move Resources With Power and Precision
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          Partner with us for reliable logistics solutions that power your mining operations and deliver results across continents.
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
