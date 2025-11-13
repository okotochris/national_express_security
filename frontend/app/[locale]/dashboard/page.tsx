"use client";

import { useState, useEffect, JSX } from "react";
import { MapPin, Truck, Anchor, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";
import { useRouter } from "next/navigation";

interface TrackingStep {
  label: string;
  icon: JSX.Element;
}

type Data = {
  sendername: string;
  receivername: string;
  trackingnumber: string;
  description: string;
  weight: string;
  destination: string;
  location: string;
  arrivetime: string;
  status: number;
  image: string;
};

export default function TrackingLocation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<Data | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("data");
    if (stored) {
      const item: Data = JSON.parse(stored);
      setData(item);
      setCurrentStep(item.status);
    } else {
      router.push("/tracking");
    }
  }, [router]);

  const steps: TrackingStep[] = [
    { label: "Ordered", icon: <MapPin className="w-5 h-5" /> },
    { label: "In Transit", icon: <Truck className="w-5 h-5" /> },
    { label: "At Port", icon: <Anchor className="w-5 h-5" /> },
    { label: "Delivered", icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  const shipmentDetails = {
    status: steps[currentStep - 1]?.label || "",
  };

  return (
    <>
      <Header />

      <section className="relative w-full min-h-screen bg-slate-100 flex flex-col items-center justify-start pt-32 overflow-hidden">
        {/* Background map */}
        <Image
          src="/map.jpg"
          alt="Map"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-blue-900/20 to-transparent" />

        {/* Centered Image */}
        <motion.div
          className="relative w-[90%] md:w-[600px] h-72 md:h-96 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {data?.image ? (
            <Image
              src={data.image}
              alt="Shipment Preview"
              fill
              className="object-contain"
              priority
            />
          ) : (
            <span className="text-gray-400 text-lg font-medium">No image available</span>
          )}
        </motion.div>

        {/* Info Card */}
        <motion.div
          className="relative w-[90%] md:w-[700px] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 mt-8 z-20 border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Truck className="w-7 h-7 text-blue-600" />
            Shipment Location
          </h2>

          <p className="text-sm text-slate-600 mb-4">
            Track your goods in real time and see their current location and status.
          </p>
          <p className="text-sm text-slate-600 mb-6 italic bg-blue-50 p-3 rounded-lg">
            {data?.description}
          </p>

          {/* Shipment Info */}
          <div className="space-y-3 mb-6">
            {[
              ["Tracking Code", data?.trackingnumber],
              ["Sender Name", data?.sendername],
              ["Receiver Name", data?.receivername],
              ["Current Location", data?.location],
              ["Estimated Arrival", data?.arrivetime],
              ["Status", shipmentDetails.status],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between text-sm py-2 border-b border-slate-100 last:border-b-0"
              >
                <span className="font-medium text-slate-700">{label}:</span>
                <span className={`text-slate-600 ${label === "Status" ? "text-emerald-600 font-medium" : ""}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Step Tracker */}
          <div className="flex justify-between items-center relative pt-4">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 -translate-y-1/2 z-10 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8 }}
            />
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                className={`relative z-20 flex flex-col items-center ${i + 1 <= currentStep ? "text-emerald-600" : "text-slate-400"}`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-md ${
                    i + 1 <= currentStep
                      ? "bg-emerald-100 border-emerald-500 shadow-emerald-200"
                      : "bg-white border-slate-300 hover:shadow-slate-100"
                  }`}
                >
                  {step.icon}
                </div>
                <span className="text-xs mt-2 text-center font-medium">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
