"use client";

import { useState, useEffect } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Truck,
  ShieldCheck,
  Users,
  PhoneCall,
} from "lucide-react";
import Header from "../component/header";
import { motion } from "framer-motion";
import { useHandleEmail } from "../component/handleContact";
import Loader from "../component/loading";
import Footer from "../component/footer";
import Image from "next/image";
import { useTranslation, StaticContent, TranslatableArrayItem } from "../../hooks/useTranslatedContent"

export default function ContactSection() {
  // Load chat widget
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/YOUR_TAWKTO_PROPERTY_ID/DEFAULT";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    message: "",
  });

  const { handleEmail, isLoading } = useHandleEmail();


  // Static content for translation
  const staticContent: StaticContent = {
    hero: {
      title: "Get in Touch With National Express Security",
      description:
        "We’re here to assist you with all your logistics and shipping needs. Whether it’s inquiries, support, or partnership opportunities — our team is ready to help 24/7.",
    },
    about: {
      title: "About Us",
      description:
        "We are a trusted logistics and shipping company offering reliable, affordable, and transparent solutions for all your freight and cargo needs. Whether by air, sea, or land — our mission is to ensure your goods arrive on time, in perfect condition, and with real-time visibility every step of the way.",
    },
    features: {
      globalShippingTitle: "Global Shipping",
      globalShippingDesc: "Door-to-door service for international and local deliveries.",
      secureHandlingTitle: "Secure Handling",
      secureHandlingDesc: "We prioritize the safety of your goods throughout the journey.",
      onTimeDeliveryTitle: "On-Time Delivery",
      onTimeDeliveryDesc: "Our tracking system ensures timely updates and reliable ETAs.",
      supportTitle: "24/7 Support",
      supportDesc: "Our customer care team is available round the clock.",
    },
    contactLabels: {
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Message",
      sendButton: "Send Message",
      messagePlaceholder: "Tell us how we can help you...",
      namePlaceholder: "John Doe",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "+234 800 000 0000",
    },
    team: {
      sectionTitle: "Our Team & Management",
      sectionDesc:
        "Meet the dedicated leaders driving NES forward with expertise and passion for logistics excellence.",
    },
  };

  const teamMembers: TranslatableArrayItem[] = [
    {
      title: "John Doe",
      content:
        "With over 20 years in logistics, John leads NES with a vision for innovative, sustainable shipping solutions.",
    },
    {
      title: "Jane Smith",
      content:
        "Jane oversees global operations, ensuring seamless coordination across air, sea, and land transport networks.",
    },
    {
      title: "Mike Johnson",
      content:
        "Mike is dedicated to client relationships, providing personalized support and optimizing logistics strategies.",
    },
  ];

  const { translatedStatic, translatedArray, loading } = useTranslation({
    staticContent,
    arrayContent: teamMembers,
  });

  if (loading) return <Loader />;

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative mx-auto px-6 py-24 md:py-32 bg-[url('/image6.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start">
          <div className="absolute inset-0 bg-black/50" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white max-w-3xl">
              {translatedStatic.hero.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
              {translatedStatic.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-emerald-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                {translatedStatic.about.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                {translatedStatic.about.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {translatedStatic.features.globalShippingTitle}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {translatedStatic.features.globalShippingDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {translatedStatic.features.secureHandlingTitle}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {translatedStatic.features.secureHandlingDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {translatedStatic.features.onTimeDeliveryTitle}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {translatedStatic.features.onTimeDeliveryDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {translatedStatic.features.supportTitle}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {translatedStatic.features.supportDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <span>+44-745-939-3722</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-emerald-600" />
                  <span>+44-744-015-7999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span>admin@nationalexpresssecurity.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span>Head office: 15B QB, Street, Off Avenue Edet, London</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-emerald-600" />
                  <span>www.nationalexpresssecurity.com</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-semibold mb-6 text-slate-800">
                {translatedStatic.contactLabels.sendButton}
              </h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    {translatedStatic.contactLabels.fullName}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder={translatedStatic.contactLabels.namePlaceholder}
                    required
                    value={formData.fullname}
                    onChange={(e) =>
                      setFormData({ ...formData, fullname: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    {translatedStatic.contactLabels.email}
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder={translatedStatic.contactLabels.emailPlaceholder}
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    {translatedStatic.contactLabels.phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder={translatedStatic.contactLabels.phonePlaceholder}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    {translatedStatic.contactLabels.message}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder={translatedStatic.contactLabels.messagePlaceholder}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="relative w-full bg-emerald-600 text-white rounded-lg py-3 font-medium hover:bg-emerald-700 transition"
                  onClick={(e) => handleEmail(e, formData)}
                  disabled={isLoading}
                >
                  {translatedStatic.contactLabels.sendButton} {isLoading && <Loader />}
                </button>
              </form>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 text-center">
              {translatedStatic.team.sectionTitle}
            </h2>
            <p className="text-center text-slate-600 mb-12 text-lg max-w-3xl mx-auto">
              {translatedStatic.team.sectionDesc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translatedArray?.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 bg-gray-300">
                    <div className="relative h-64 bg-gray-300">
                <Image
                  src={`/team-member-${index + 1}.jpg`}
                  alt={`${member.title}`}
                  fill
                  className="object-cover"
                />
              </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{member.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{member.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Chat Button */}
      
      </section>

      <Footer />
    </>
  );
}
