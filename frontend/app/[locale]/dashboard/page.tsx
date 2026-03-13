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
  status?: number | string;
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
      localStorage.removeItem("data");
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

      <section className="relative w-full min-h-[650px] bg-slate-50 flex items-end justify-center py-12">
        
        {/* Background map */}
        <Image
          src="/map.jpg"
          alt="World map background"
          fill
          className="object-cover opacity-85"
          priority
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

        {/* Main card */}
        <div className="relative w-[94%] max-w-[620px] bg-white/95 rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-7">

          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
            Shipment Location
          </h2>

          <p className="text-sm text-slate-600 mb-6">
            Track your package in real time — current position and status.
          </p>

          {/* Image */}
          <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
            <div className="relative w-full h-56 sm:h-64 md:h-72">
              {data?.image ? (
                <Image
                  src={data.image}
                  alt="Shipment package"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width:640px) 94vw, 580px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">
                  No image available
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          {data?.description && (
            <div className="mb-6 text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Shipment Description
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {data.description}
              </p>
            </div>
          )}

          {/* Details */}
          <div className="space-y-3.5 text-sm sm:text-base mb-7">

            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Tracking Number</span>
              <span className="font-mono text-slate-600">
                {display.trackingCode}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Sender</span>
              <span className="text-slate-600">
                {data?.sendername ?? "—"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Receiver</span>
              <span className="text-slate-600">
                {data?.receivername ?? "—"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-slate-700">
                Current Location
              </span>
              <span className="text-slate-600 text-right">
                {display.currentLocation}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Est. Arrival</span>
              <span className="text-slate-600">
                {display.estimatedArrival}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Status</span>
              <span className="text-emerald-600 font-semibold">
                {display.status}
              </span>
            </div>

          </div>

          {/* Progress tracker */}
          <div className="relative pt-4">

            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 rounded-full" />

            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-emerald-500 -translate-y-1/2 rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: (currentStep - 1) / (steps.length - 1) }}
              transition={{ duration: 0.9 }}
            />

            <div className="relative flex justify-between">

              {steps.map((step, i) => (
                <div
                  key={step.label}
                  className={`flex flex-col items-center flex-1 ${
                    i + 1 <= currentStep
                      ? "text-emerald-600"
                      : "text-slate-400"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center border-2 ${
                      i + 1 <= currentStep
                        ? "bg-emerald-50 border-emerald-500"
                        : "bg-white border-slate-300"
                    }`}
                  >
                    {step.icon}
                  </div>

                  <span className="text-xs sm:text-sm mt-2 text-center">
                    {step.label}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}