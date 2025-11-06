"use client";

import { useEffect, useState } from "react";
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
} from "lucide-react";
import Header from "../component/header";
import { motion } from "framer-motion"; // ✅ Correct import (not motion/react)
import { useHandleEmail } from "../component/handleContact";
import Loader from "../component/loading";

export default function ContactSection() {
  // ✅ Load chat widget once
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

  const { handleEmail, isLoading } = useHandleEmail(); // ✅ Removed unused message
const openTawk = () => {
  // @ts-expect-error Tawk_API may not exist on window yet
  if (window.Tawk_API) {
    // @ts-expect-error Calling Tawk_API method safely
    window.Tawk_API.maximize();
  }
};


  return (
    <>
      <Header />
      <section className="relative w-full overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="relative mx-auto px-6 py-24 md:py-32 bg-[url('/image6.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start">
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white max-w-3xl">
              Get in Touch With{" "}
              <span className="text-emerald-400">National Express Security</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
              We&apos;re here to assist you with all your logistics and shipping needs.
              Whether it&apos;s inquiries, support, or partnership opportunities — our
              team is ready to help 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-sky-50 to-emerald-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: About Us */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Us
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              We are a trusted logistics and shipping company offering reliable,
              affordable, and transparent solutions for all your freight and
              cargo needs. Whether by air, sea, or land — our mission is to ensure
              your goods arrive on time, in perfect condition, and with real-time
              visibility every step of the way.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Global Shipping</h4>
                  <p className="text-sm text-slate-600">
                    Door-to-door service for international and local deliveries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Secure Handling</h4>
                  <p className="text-sm text-slate-600">
                    We prioritize the safety of your goods throughout the journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">On-Time Delivery</h4>
                  <p className="text-sm text-slate-600">
                    Our tracking system ensures timely updates and reliable ETAs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">24/7 Support</h4>
                  <p className="text-sm text-slate-600">
                    Our customer care team is available round the clock.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-slate-700">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>+234 800 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-600" />
                <span>support@yourcompany.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>25 Marina Road, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-600" />
                <span>www.nationalexpresssecurity.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-semibold mb-6 text-slate-800">
              Send us a message
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="John Doe"
                  required
                  value={formData.fullname}
                  onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+234 800 000 0000"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tell us how we can help you..."
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
                Send Message {isLoading && <Loader />}
              </button>
            </form>
          </div>
        </div>

        {/* Floating Live Chat Button */}
        <button
          onClick={openTawk}
          className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition"
          aria-label="Live Chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </section>
    </>
  );
}
