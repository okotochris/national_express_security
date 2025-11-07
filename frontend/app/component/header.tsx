'use client'
import React, { useState } from 'react'
import LanguageSwitcher from './language'
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ animation

function Header() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-r from-emerald-600 to-sky-500 flex items-center justify-center text-white font-bold">NES</div>
              <span className="font-semibold text-lg">Logistics</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4 text-sm items-center justify-center text-slate-600">
            <Link href="/service" className="hover:text-slate-900 transition">Services</Link>
            <Link href="/tracking" className="hover:text-slate-900 transition">Tracking</Link>
            <LanguageSwitcher />
          </nav>
        </div>

        {/* Search + Contact + Mobile Icon */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center rounded-full border px-3 py-1 gap-2 text-sm">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-40 bg-transparent"
              placeholder="Search shipments, docs..."
            />
            <button className="text-sm font-medium">Search</button>
          </div>

          <Link href="/contact">
            <span className="hidden md:inline-block bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition">
              Contact Sales
            </span>
          </Link>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md border text-slate-600 hover:bg-slate-100 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t shadow-lg mx-4 mt-2 rounded-xl py-4 px-6 flex flex-col gap-3 text-slate-700"
          >
            <Link
              href="/service"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100 transition"
            >
              Services
            </Link>
            <Link
              href="/tracking"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100 transition"
            >
              Tracking
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100 transition"
            >
              Contact Sales
            </Link>
            <div className="pt-2 border-t">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
