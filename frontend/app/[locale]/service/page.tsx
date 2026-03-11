"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Ship, Warehouse, Truck, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../component/footer';
import Header from '../component/header';

export default function ServicePage() {
  const t = useTranslations('Services'); // Namespace in your JSON file

  const categories = [
    {
      title: t('ocean.title'),
      content: t('ocean.content'),
      image: '/ship.jpg',
      icon: <Ship className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: t('warehousing.title'),
      content: t('warehousing.content'),
      image: '/warehouse.jpg',
      icon: <Warehouse className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: t('inland.title'),
      content: t('inland.content'),
      image: '/truck.jpg',
      icon: <Truck className="w-8 h-8 text-emerald-600" />,
    },
    {
      title: t('air.title'),
      content: t('air.content'),
      image: '/plane.jpg',
      icon: <Plane className="w-8 h-8 text-emerald-600" />,
    },
  ];

  return (
    <>
      <Header />
      <section className="relative w-full overflow-hidden">
        <div className="relative mx-auto px-6 py-24 md:py-32 bg-[url('/image1.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start">
          <div className="absolute inset-0 bg-black/50" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white max-w-3xl">
              {t('heading')}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
              {t('subheading')}
            </p>
          </motion.div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('title')}
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          {t('description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
            >
              <div className="md:w-1/2 p-8 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.content}</p>
              </div>
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
