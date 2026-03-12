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
  image: string;
  status?: number | string;   // accept both number and string
};

export default function TrackingLocation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<Data | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("data");
    if (!stored) {
      router.push("/tracking");
      return;
    }

    try {
      const item: Data = JSON.parse(stored);
      setData(item);

      // Determine current step from status (more robust)
      let step = 1;

      if (typeof item.status === "number") {
        step = Math.max(1, Math.min(4, Math.round(item.status)));
      } else if (typeof item.status === "string") {
        const s = item.status.toLowerCase().trim();
        if (s.includes("order") || s.includes("placed") || s === "1") step = 1;
        else if (s.includes("transit") || s.includes("shipped") || s === "2") step = 2;
        else if (s.includes("port") || s.includes("custom") || s.includes("arrival") || s === "3") step = 3;
        else if (s.includes("deliv") || s.includes("complete") || s.includes("received") || s === "4") step = 4;
      }

      setCurrentStep(step);
    } catch (err) {
      console.error("Invalid data in localStorage", err);
      localStorage.removeItem("data"); // clean broken data
      router.push("/tracking");
    }
  }, [router]);

  const steps: TrackingStep[] = [
    { label: "Ordered", icon: <MapPin className="w-5 h-5" /> },
    { label: "In Transit", icon: <Truck className="w-5 h-5" /> },
    { label: "At Port", icon: <Anchor className="w-5 h-5" /> },
    { label: "Delivered", icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  const display = {
    trackingCode: data?.trackingnumber ?? "—",
    currentLocation: data?.location ?? "Location not available",
    estimatedArrival: data?.arrivetime ?? "—",
    status:
      currentStep >= 1 && currentStep <= steps.length
        ? steps[currentStep - 1].label
        : "Unknown",
  };

  return (
    <>
      <Header />

      <section className="relative w-full h-[580px] sm:h-[650px] md:h-[680px] overflow-hidden bg-slate-50">
        {/* Background map */}
        <Image
          src="/map.jpg"
          alt="World map background"
          fill
          className="object-cover opacity-85"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

        {/* Main card */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-[94%] max-w-[620px] bg-white/98 rounded-2xl shadow-xl backdrop-blur-sm border border-slate-100/50 p-5 sm:p-7">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
            Shipment Location
          </h2>
          <p className="text-sm text-slate-600 mb-5 leading-relaxed">
            Track your package in real time — current position and status.
          </p>

          {/* Image section */}
          <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
            <div className="relative w-full h-56 sm:h-64 md:h-72">
              {data?.image ? (
                <Image
                  src={data.image}
                  alt="Shipment package or cargo"
                  fill
                  className="object-contain p-4 sm:p-6"
                  sizes="(max-width: 640px) 94vw, 580px"
                  quality={82}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-2">
                  <svg
                    className="w-14 h-14 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">No image available</span>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3.5 text-sm sm:text-base mb-7">
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-700 min-w-[140px]">Tracking Number</span>
              <span className="text-slate-600 font-mono">{display.trackingCode}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-700 min-w-[140px]">Sender</span>
              <span className="text-slate-600">{data?.sendername ?? "—"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-700 min-w-[140px]">Receiver</span>
              <span className="text-slate-600">{data?.receivername ?? "—"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-700 min-w-[140px]">Current Location</span>
              <span className="text-slate-600 font-medium text-right">{display.currentLocation}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-700 min-w-[140px]">Est. Arrival</span>
              <span className="text-slate-600">{display.estimatedArrival}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-700 min-w-[140px]">Status</span>
              <span className="text-emerald-600 font-semibold">{display.status}</span>
            </div>
          </div>

          {/* Progress steps */}
          <div className="relative pt-4">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 rounded-full z-0" />
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-emerald-500 -translate-y-1/2 rounded-full z-10 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: (currentStep - 1) / (steps.length - 1) }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />

            <div className="relative z-20 flex justify-between px-1">
              {steps.map((step, i) => (
                <div
                  key={step.label}
                  className={`flex flex-col items-center flex-1 ${
                    i + 1 <= currentStep ? "text-emerald-600" : "text-slate-400"
                  }`}
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                      i + 1 <= currentStep
                        ? "bg-emerald-50 border-emerald-500 shadow-sm"
                        : "bg-white border-slate-300"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-xs sm:text-sm mt-2 font-medium text-center">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Optional: temporary debug controls – remove later */}
          {/* <div className="mt-6 flex justify-center gap-4 text-sm">
            <button
              onClick={() => setCurrentStep(p => Math.max(1, p - 1))}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              ← Prev
            </button>
            <button
              onClick={() => setCurrentStep(p => Math.min(4, p + 1))}
              className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              Next →
            </button>
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
}