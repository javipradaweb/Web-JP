"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-5 left-0 right-0 z-50 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-6 py-3.5">
          {/* Logo (siempre al Home) */}
          <a href="/" className="flex items-center gap-3">
            <img src="/logo2.png" alt="Web JP" className="h-8 w-auto" />
          </a>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="/#servicios" className="nav-link">
              Servicios
            </a>

            <a href="/portafolio" className="nav-link">
              Portafolio
            </a>

            <a href="/#precios" className="nav-link">
              Precios
            </a>

            <a href="/#contacto" className="nav-link">
              Contacto
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="/#contacto"
              className="rounded-full bg-gradient-to-r from-[#a12995] to-[#00e1f6] px-5 py-2 text-sm font-semibold text-white"
            >
              Empezar
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
