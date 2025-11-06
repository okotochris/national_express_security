"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package } from "lucide-react";
import Header from "../component/header";
import Footer from "../component/footer";

export default function TrackingForm() {
  const [mode, setMode] = useState<"tracking" | "container">("tracking");
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) {
      alert("Please enter a valid code or number");
      return;
    }
    if (mode === "tracking") {
      alert(`Searching by Tracking Code: ${value} (demo)`);
    } else {
      alert(`Searching by Container/Bill of Lading Number: ${value} (demo)`);
    }
  };

  return (
    <>
    <Header />
    <section className="w-full bg-gradient-to-r from-emerald-600 to-blue-500 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800">
          Track Your Shipment
        </h2>
        <p className="text-center text-slate-500 mt-2 mb-6">
          Enter your tracking code or Container/Bill of Lading number below.
        </p>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-6 gap-3">
          <button
            onClick={() => setMode("tracking")}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition ${
              mode === "tracking"
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Package size={16} />
            Tracking Code
          </button>

          <button
            onClick={() => setMode("container")}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition ${
              mode === "container"
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Search size={16} />
            Container / B/L Number
          </button>
        </div>

        {/* Input Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row gap-3"
        >
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={
              mode === "tracking"
                ? "e.g. TRK123456789"
                : "e.g. MSCU1234567 or BOL987654"
            }
            className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg px-6 py-3 transition"
          >
            Track
          </button>
        </motion.form>
      </div>
    </section>
    <Footer/>
    </>
  );
}
