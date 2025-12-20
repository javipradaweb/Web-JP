"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Diseño UX/UI",
    desc: "Diseño de experiencias claras y atractivas, aplicable a sitios web, apps y sistemas. Enfocado en usabilidad, conversión y confianza.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
        <path
          d="M4 7.5C4 6.12 5.12 5 6.5 5h11C18.88 5 20 6.12 20 7.5v9c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 19 4 17.88 4 16.5v-9Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M8 9h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 12h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M14.6 14.2l1.2 3.3 1.1-.5 1.1 1.9 1.4-.8-1.1-1.9 1-.6-3.6-1.4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Diseño Web",
    desc: "Landing pages, sitios web corporativos, e-commerces y plataformas. Diseño visual premium con estructura clara y orientada a resultados.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
        <path
          d="M4 6.5C4 5.12 5.12 4 6.5 4h11C18.88 4 20 5.12 20 6.5v11C20 18.88 18.88 20 17.5 20h-11C5.12 20 4 18.88 4 17.5v-11Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4 8h16" stroke="currentColor" strokeWidth="2" />
        <path d="M7 6h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 6h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M13 6h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M7 12h5v5H7v-5ZM14 12h3v5h-3v-5Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Desarrollo a medida",
    desc: "Código puro y soluciones exactas a lo que necesitas. Desarrollo a medida para sistemas, sitios web, plataformas y apps.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
        <path
          d="M9 18 3.5 12 9 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 6l5.5 6L15 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13 5 11 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-transparent text-white py-20">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header centrado (entrada) */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.22em] text-white/80 font-semibold">SERVICES</p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Todo lo que tu marca necesita para crecer
          </h2>

          <p className="mt-4 text-white/85 leading-relaxed">
            Desde estrategia hasta ejecución: diseño y desarrollo de experiencias digitales con enfoque en claridad,
            performance y resultados.
          </p>
        </motion.div>

        {/* Grid (entrada + stagger) */}
        <motion.div
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {SERVICES.map((s, idx) => (
            <motion.article
              key={s.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 overflow-hidden webjp-service-card"
              // animación extra (float) desincronizada sin CSS vars raras:
              style={{ animationDelay: `${idx * 0.35}s` }}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: idx * 0.12 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* glow hover suave */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background:
                    "radial-gradient(700px 220px at 20% 10%, rgba(161,41,149,0.22), transparent 55%), radial-gradient(650px 200px at 85% 30%, rgba(0,225,246,0.14), transparent 60%)",
                }}
              />

              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                  {s.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">{s.title}</h3>

                <p className="mt-3 text-sm text-white/85 leading-relaxed">{s.desc}</p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/85 group-hover:text-white transition">
                  <span className="font-medium">Ver detalles</span>
                  <span className="translate-x-0 group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
