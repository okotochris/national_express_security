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
  sendername:string
  receivername :string
  trackingnumber: string
  description:string
  weight:string
  destination:string
  location:string
}
export default function TrackingLocation() {
  const [currentStep, setCurrentStep] = useState(1);
    const [data, setData] = useState<Data>( );
    const router = useRouter()

  // You can fetch real shipment data here
  useEffect(() => {
    const stored = localStorage.getItem("data")
    if(stored){
      const item = JSON.parse(stored)
      setData(item)
      setCurrentStep(item.status)
    }else{
     return router.push('/tracking')
    }
     
  }, [router]);

  const steps: TrackingStep[] = [
    { label: "Ordered", icon: <MapPin className="w-5 h-5" /> },
    { label: "In Transit", icon: <Truck className="w-5 h-5" /> },
    { label: "At Port", icon: <Anchor className="w-5 h-5" /> },
    { label: "Delivered", icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  const shipmentDetails = {
    trackingCode: "MSCU1234567",
    currentLocation: "Port of Rotterdam, Netherlands",
    estimatedArrival: "Oct 18, 2025",
    status: steps[currentStep - 1].label,
  };

  return (
    <>
    <Header/>
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-100">
      {/* Background map image */}
      <Image
        src="/map.jpg" // 👈 Place a map image inside /public
        alt="Map"
        fill
        className="object-cover opacity-90"
        priority
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Info Card */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Shipment Location</h2>
        <p className="text-sm text-slate-600 mb-4">
          Track your goods in real time and see their current location and status.
        </p>

        {/* Shipment Info */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-slate-700">Tracking Code:</span>
            <span className="text-slate-600">{data?.trackingnumber}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-slate-700">Sender Name:</span>
            <span className="text-slate-600">{data?.sendername}</span>
          </div>
           <div className="flex justify-between text-sm">
            <span className="font-medium text-slate-700">Receiver Name:</span>
            <span className="text-slate-600">{data?.receivername}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-slate-700">Current Location:</span>
            <span className="text-slate-600">{data?.location}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-slate-700">Estimated Arrival:</span>
            <span className="text-slate-600">{shipmentDetails.estimatedArrival}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-slate-700">Status:</span>
            <span className="text-emerald-600 font-medium">{shipmentDetails.status}</span>
          </div>
        </div>

        {/* Step Tracker */}
        <div className="flex justify-between items-center relative">
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
          {/* Progress */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-emerald-500 -translate-y-1/2 z-10"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep - 1) * 33.3}%` }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          {/* Steps */}
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`relative z-20 flex flex-col items-center ${
                i + 1 <= currentStep ? "text-emerald-600" : "text-slate-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition ${
                  i + 1 <= currentStep
                    ? "bg-emerald-100 border-emerald-500"
                    : "bg-white border-slate-300"
                }`}
              >
                {step.icon}
              </div>
              <span className="text-xs mt-2 text-center">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
