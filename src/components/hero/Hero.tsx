"use client";

import { motion } from "framer-motion";

const BRANDS = ["Sajama", "Savia Skincare", "Grupo Jorge Belmonte", "RTP Bolivia", "Wolverine Contractors", "Grupo Minero Sinchi Wayra", "Osfim"];

function MarqueeRow() {
  return (
    <div className="w-full overflow-hidden">
      <div className="webjp-marquee">
        <div className="webjp-marquee-track">
          {BRANDS.map((t) => (
            <span key={`a-${t}`} className="webjp-marquee-item">
              {t}
            </span>
          ))}

          {BRANDS.map((t) => (
            <span key={`b-${t}`} className="webjp-marquee-item" aria-hidden="true">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-transparent text-white flex items-center pt-32 lg:pt-36 pb-12">
      {/* Background glow */}
     

      <div className="relative z-10 w-full">
        {/* Top row */}
        <motion.div
          className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Left */}
          <div>
            <span className="inline-block mb-6 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm backdrop-blur-md">
            Diseño UX/UI + Desarrollo Web
            </span>

            <h1 className="text-4xl lg:text-4x1 font-bold leading-tight mb-6">
              Convierte tu web en tu mejor vendedor.
              <br />
              Diseño UX/UI + Desarrollo Web que vende.
            </h1>

            <p className="text-gray-300 max-w-xl mb-10">
              Diseño UX/UI y desarrollo sitios que se sienten de alto nivel y funcionan como herramienta comercial.
              Te entrego una web lista para crecer: rápida, escalable y orientada a resultados.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="webjp-shine-border rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100 inline-flex"
              >
                <span className="px-8 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800">
                  Hablemos
                </span>
              </a>

              <a
                href="#precios"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 hover:border-white/30 transition"
              >
                Ver Precios
              </a>
            </div>
          </div>

          {/* Right */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1600&auto=format&fit=crop"
                alt="Proyecto Web JP"
                className="h-full w-full object-cover"
              />

              {/* Badge */}
              <span className="absolute top-4 left-4 rounded-full bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md border border-white/10">
                UX/UI • Web • Conversión
              </span>

              {/* Mini CTA */}
              <a
                href="/portafolio"
                className="absolute bottom-4 right-4 rounded-full bg-white/15 px-4 py-2 text-xs text-white backdrop-blur-md border border-white/10 hover:bg-white/20 transition"
              >
                Ver Portafolio →
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Second row */}
        <motion.div
          className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          {/* Left: 1 caja con 2 columnas */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#00e1f6]">
                      <path
                        d="M13 2L3 14h7l-1 8 12-14h-8l0-6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-white">Ejecución con estrategia</p>
                    <p className="mt-1 text-xs text-gray-300 leading-relaxed">
                      Diseño orientado a objetivos: claridad y conversión.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 border-t border-white/10 sm:border-t-0 sm:border-l sm:border-white/10">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#00e1f6]">
                      <path
                        d="M20 7L10 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-white">Entrega full-service</p>
                    <p className="mt-1 text-xs text-gray-300 leading-relaxed">
                      UX/UI + desarrollo web. De 0 a PRO, listo para escalar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: pill alineado a la derecha */}
          {/* Right: pill (mobile centrado, desktop a la derecha) */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full webjp-dot-glow" />
              <p className="text-sm text-white">
              <span className="font-semibold">20+</span> proyectos completados
              </p>
            </div>
          </div>
        </motion.div>

        {/* Third block: strip full-width */}
        <div className="mt-10 webjp-trusted-strip">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <MarqueeRow />
          </div>
        </div>
      </div>
    </section>
  );
}
