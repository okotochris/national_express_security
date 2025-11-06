'use client'
import React, { useState } from 'react'
import LanguageSwitcher from './language'
import Link from "next/link";



function Header() {
     const [search, setSearch] = useState("");

  return (
     <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-r from-emerald-600 to-sky-500 flex items-center justify-center text-white font-bold">NES</div>
                <span className="font-semibold text-lg">Logistics</span>
              </div>
            </Link>
            <nav className="hidden md:flex gap-4 text-sm items-center justify-center text-slate-600">
              <Link href="/service"><span className="hover:text-slate-900">Services</span></Link>
              <Link href="/tracking"><span className="hover:text-slate-900">Tracking</span></Link>
              <LanguageSwitcher />
            </nav>
          </div>

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
              <span className="hidden md:inline-block bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium">Contact Sales</span>
            </Link>

            <button className="md:hidden p-2 rounded-md border">Menu</button>
          </div>
        </div>
      </header>

  )
}

export default Header
