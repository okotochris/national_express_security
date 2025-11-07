"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

export default function FruitPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/fruit.jpg"
          alt="Fruit logistics"
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
            Fruit Logistics
          </motion.h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
            Keeping fruits fresh and nutritious from farm to international markets through precise cold-chain logistics.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-emerald-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/fruit1.jpg"
              alt="Cold chain fruit transport"
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
              Keeping Fruits Fresh Every Step of the Way
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our cold-chain logistics ensure your fruits arrive in perfect condition — whether they're destined for
              supermarkets, wholesalers, or international markets. Using temperature-controlled vehicles and
              humidity-managed storage, we preserve freshness, flavor, and nutritional quality.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              From harvest to delivery, every step of our process is carefully monitored to prevent spoilage, reduce
              waste, and guarantee quality. We combine modern technology with efficient route planning to minimize
              transit times.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Whether you’re transporting apples, citrus fruits, pineapples, or berries — we’ve got the expertise and
              infrastructure to move your produce safely and efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Expertise in Fruit Logistics
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We use advanced cold-chain technology and smart logistics solutions to deliver fruits fresh, on time,
            and safely across domestic and international markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Temperature-Controlled Vehicles",
              desc: "Maintain ideal temperatures from loading to delivery for all fruit varieties.",
            },
            {
              title: "Real-Time Monitoring",
              desc: "Track temperature, humidity, and location in real-time for full transparency.",
            },
            {
              title: "Rapid Transit Routes",
              desc: "Optimized logistics routes to ensure shortest travel times and reduce spoilage.",
            },
            {
              title: "Export Compliance",
              desc: "We handle all export and health certifications for international deliveries.",
            },
            {
              title: "Custom Packaging",
              desc: "Specialized fruit crates and cushioning materials to prevent bruising or damage.",
            },
            {
              title: "24/7 Customer Support",
              desc: "Our logistics experts are available around the clock to support your shipments.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-orange-50 rounded-2xl shadow-md hover:shadow-xl transition"
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
        <h2 className="text-3xl font-bold mb-4">Let’s Move Freshness Forward</h2>
        <p className="max-w-2xl mx-auto mb-6 text-slate-100">
          Partner with us for reliable cold-chain logistics that keep your fruits as fresh as the moment they’re picked.
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
