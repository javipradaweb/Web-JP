"use client";

import { motion } from "framer-motion";

const INTERNAL = [
  { name: "Servicios", url: "/#servicios" },
  { name: "Sobre mí", url: "/sobre-mi" },
  { name: "Precios", url: "/#precios" },
  { name: "FAQ", url: "/#faq" },
  { name: "Contacto", url: "/#contacto" },
];

const LEGAL = [
  { name: "Política de Privacidad", url: "/legal/privacidad" },
  { name: "Política de Cookies", url: "/legal/cookies" },
  { name: "Términos de Servicio", url: "/legal/terminos" },
];

const SOCIAL = [
  { name: "Instagram", url: "https://www.instagram.com/javipradaweb/" },
  { name: "YouTube", url: "https://www.youtube.com/@javipradaweb" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/javipradaweb/" },
];

export default function Footer() {
  return (
    <motion.footer
      className="relative overflow-hidden text-white/70"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Fondo tipo demo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 360px at 20% 10%, rgba(161,41,149,0.24), transparent 60%), radial-gradient(1100px 360px at 85% 25%, rgba(0,225,246,0.14), transparent 60%), linear-gradient(to bottom, rgba(2,6,23,0.35), rgba(2,6,23,0.55))",
        }}
      />

      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="py-12 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-y-10 lg:gap-x-20">
            {/* Brand */}
            <div className="text-center lg:text-left">
              <img
                src="/logo2.png"
                alt="Web JP"
                className="h-8 w-auto mx-auto lg:mx-0"
              />
              <p className="mt-6 text-sm leading-relaxed text-white/65 max-w-[420px] mx-auto lg:mx-0">
                Diseño UX/UI y desarrollo web para marcas que quieren verse
                premium y convertir. Experiencias claras, rápidas y orientadas a
                resultados.
              </p>
            </div>

            {/* Links */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-x-20 text-center lg:text-left">
                {/* Enlaces Rápidos */}
                <div>
                  <h3 className="text-white font-semibold mb-5">
                    Enlaces Rápidos
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {INTERNAL.map((l) => (
                      <li key={l.name}>
                        <a href={l.url} className="hover:text-white transition">
                          {l.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="text-white font-semibold mb-5">Legal</h3>
                  <ul className="space-y-3 text-sm">
                    {LEGAL.map((l) => (
                      <li key={l.name}>
                        <a href={l.url} className="hover:text-white transition">
                          {l.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RRSS */}
                <div>
                  <h3 className="text-white font-semibold mb-5">RRSS</h3>
                  <ul className="space-y-3 text-sm">
                    {SOCIAL.map((l) => (
                      <li key={l.name}>
                        <a
                          href={l.url}
                          className="hover:text-white transition"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="py-6 text-center text-sm text-white/50">
            © 2025 Web JP. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
