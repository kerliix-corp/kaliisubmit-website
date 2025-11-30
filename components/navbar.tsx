"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fff7ef]/70 backdrop-blur-md border-b border-orange-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Kaliisubmit
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-800">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* CTA */}
        <a
          href="https://console.kaliisubmit.kerliix.com"
          className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow hover:opacity-90"
        >
          Dashboard
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#fff7ef] border-t border-orange-200 p-4 space-y-4">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/contact">Contact</Link>

          <a
            href="https://console.kaliisubmit.kerliix.com"
            className="block px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white text-center shadow"
          >
            Dashboard
          </a>
        </div>
      )}
    </nav>
  );
}
