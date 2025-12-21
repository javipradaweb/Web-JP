"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const LINKS = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Precios", href: "/#precios" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // En /portafolio y /sobre-mi, los anchors deben volver al Home con /#...
  const linkHref = useMemo(() => {
    const isHome = pathname === "/";
    return (href: string) => {
      if (href.startsWith("/#")) return isHome ? href : href; // siempre /#... (tu estándar)
      return href; // /portafolio, etc.
    };
  }, [pathname]);

  useEffect(() => {
    // si cambia ruta, cerramos menú
    setOpen(false);
  }, [pathname]);

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

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {LINKS.map((l) => (
              <a key={l.label} href={linkHref(l.href)} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={linkHref("/#contacto")}
              className="rounded-full bg-gradient-to-r from-[#a12995] to-[#00e1f6] px-5 py-2 text-sm font-semibold text-white"
            >
              Empezar
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur hover:bg-white/10 transition active:scale-95"
          >
            {open ? <XIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* Mobile panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="md:hidden mt-3"
            >
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-2">
                <div className="flex flex-col">
                  {LINKS.map((l) => (
                    <a
                      key={l.label}
                      href={linkHref(l.href)}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
                    >
                      {l.label}
                    </a>
                  ))}

                  <div className="mt-2 pt-2 border-t border-white/10">
                    <a
                      href={linkHref("/#contacto")}
                      onClick={() => setOpen(false)}
                      className="block rounded-full bg-gradient-to-r from-[#a12995] to-[#00e1f6] px-5 py-3 text-center text-sm font-semibold text-white"
                    >
                      Empezar
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

/* Icons (celeste WebJP) */
function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="#00e1f6"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="#00e1f6"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
