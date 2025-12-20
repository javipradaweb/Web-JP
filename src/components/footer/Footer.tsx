"use client";

import { motion } from "framer-motion";

const INTERNAL = [
  { name: "Servicios", url: "#servicios" },
  { name: "Precios", url: "#precios" },
  { name: "FAQ", url: "#faq" },
  { name: "Contacto", url: "#contacto" },
];

const LEGAL = [
  { name: "Política de Privacidad", url: "#privacy" },
  { name: "Términos de Servicio", url: "#terms" },
];

const SOCIAL = [
  { name: "Instagram", url: "#" },
  { name: "YouTube", url: "#" },
  { name: "LinkedIn", url: "#" },
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
          {/* ✅ Desktop: 2 columnas (40% / 60%) */}
          <div className="py-12 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-y-10 lg:gap-x-20">
            {/* Col 1 (Brand) */}
            <div>
              <img src="/logo2.png" alt="Web JP" className="h-8 w-auto" />
              <p className="mt-6 text-sm leading-relaxed text-white/65 max-w-[420px]">
                Diseño UX/UI y desarrollo web para marcas que quieren verse premium y convertir.
                Experiencias claras, rápidas y orientadas a resultados.
              </p>
            </div>

            {/* Col 2 (Links): grid de 3 columnas iguales, OCUPA TODO el ancho */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-x-20">
                {/* 2) Enlaces Rápidos */}
                <div>
                  <h3 className="text-white font-semibold mb-5">Enlaces Rápidos</h3>
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

                {/* 3) Legal */}
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

                {/* 4) RRSS (queda en el borde derecho del contenedor, sin text-right) */}
                <div>
                  <h3 className="text-white font-semibold mb-5">RRSS</h3>
                  <ul className="space-y-3 text-sm">
                    {SOCIAL.map((l) => (
                      <li key={l.name}>
                        <a
                          href={l.url}
                          className="hover:text-white transition"
                          target={l.url.startsWith("http") ? "_blank" : undefined}
                          rel={l.url.startsWith("http") ? "noreferrer" : undefined}
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

          {/* Divider */}
          <div className="h-px w-full bg-white/10" />

          {/* Bottom */}
          <div className="py-6 text-center text-sm text-white/50">
            © 2025 Web JP. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
