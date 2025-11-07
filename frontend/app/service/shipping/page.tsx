"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../component/header";
import Footer from "../../component/footer";
import {Map} from 'lucide-react'

export default function ContainerShippingPage() {
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
              Container Shipping
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-6">
              Global scheduled sailings and dependable sea freight solutions that keep your business moving.
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
              src="/container-ship.jpg"
              alt="Container Ship"
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
            Connecting the World Through Reliable Shipping
          </motion.h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Our container shipping solutions provide efficient, secure, and sustainable movement of goods 
            across continents, bridging suppliers and markets with unparalleled precision. Whether it’s 
            full-container loads (FCL) for streamlined bulk transport, less-than-container loads (LCL) 
            for cost-optimized smaller consignments, or specialized reefer and hazardous cargo handling, 
            we deliver unmatched flexibility, speed, and reliability with every shipment. Backed by cutting-edge 
            technology like AI-driven route optimization and blockchain-secured tracking, we ensure your cargo 
            arrives on time, intact, and with minimal carbon footprint—empowering your business to thrive 
            in a global economy.


          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              img: "/ship1.jpg",
              title: "Global Network",
              desc: "Scheduled sailings connecting major international ports for consistent delivery times.",
            },
            {
              img: "/ship2.jpg",
              title: "End-to-End Logistics",
              desc: "From port-to-port or door-to-door, we handle every step of your shipment with precision.",
            },
            {
              img: "/ship3.jpg",
              title: "Real-Time Visibility",
              desc: "Track every container with advanced monitoring for full transparency and control.",
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

      {/* Global Network Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-50 to-emerald-50 text-center">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/world-map.png"
            alt="Global shipping map"
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
            A Trusted Network Across Continents
          </h2>
          <p className="text-slate-600 mb-8">
            We collaborate with top global carriers and port operators to ensure your goods move efficiently and
            safely — no matter where in the world they need to go.
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
          Move Your Business Forward with Confidence
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-emerald-100">
          Choose us for dependable, cost-efficient, and globally connected container shipping solutions.
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
