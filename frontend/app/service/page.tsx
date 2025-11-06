"use client";

import Image from "next/image";
import { Ship, Warehouse, Truck, Plane } from "lucide-react"; // You can pick any icons you like
import Header from "../component/header";
import Footer from "../component/footer";
import { motion } from "motion/react";

export default function ServicesSection() {
  const categories = [
    {
      title: "Ocean Freight",
      content:
        "Reliable and cost-effective shipping solutions for your global trade needs.",
      image: "/ship.jpg",
      icon: <Ship className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: "Warehousing",
      content:
        "Modern storage facilities with real-time inventory management and security.",
      image: "/warehouse.jpg",
      icon: <Warehouse className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: "Inland Transport",
      content:
        "Efficient trucking and rail logistics to move your goods seamlessly.",
      image: "/truck.jpg",
      icon: <Truck className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: "Air Cargo",
      content:
        "Fast and secure air freight for time-sensitive shipments worldwide.",
      image: "/plane.jpg",
      icon: <Plane className="w-8 h-8 text-emerald-600" />,
    },
  ];

  return (
    <>
    <Header />
   <section className="relative w-full overflow-hidden">
  {/* Background image with dark overlay */}
  <div className="relative mx-auto px-6 py-24 md:py-32 bg-[url('/image3.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start">
    <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
    >
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white max-w-3xl">
        Our <span className="text-emerald-400">Services</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
        We provide comprehensive, end-to-end logistics solutions to keep your business moving. 
        From ocean freight to air cargo, warehousing, inland transport, and digital tracking — 
        we handle every step with precision and care.
      </p>
    </motion.div>
  </div>
</section>

    <section id="services" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our Services
      </h2>
      <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
        End-to-end logistics solutions tailored to your business — from ocean freight to digital tracking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
          >
            {/* Left Section */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.content}
              </p>
            </div>

            {/* Right Section (Image) */}
            <div className="md:w-1/2 relative h-48 md:h-auto">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
}
