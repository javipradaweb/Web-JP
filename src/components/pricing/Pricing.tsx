"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Billing = "monthly" | "yearly";

const PLANS = [
  {
    name: "Starter",
    monthly: "$199",
    yearly: "$179",
    desc: "Para una landing moderna y rápida, enfocada en conversión.",
    features: ["Landing 1 página", "UX/UI aplicado", "Responsive", "SEO básico", "Entrega rápida"],
    featured: false,
    cta: "Elegir plan",
  },
  {
    name: "Pro",
    monthly: "$499",
    yearly: "$449",
    badge: "Más popular",
    desc: "El más elegido: web profesional lista para escalar y vender.",
    features: [
      "Sitio 4–6 secciones",
      "UX/UI premium",
      "Animaciones sutiles",
      "Performance optimizada",
      "SEO + estructura",
      "Soporte post-entrega",
    ],
    featured: true,
    cta: "Elegir Pro",
  },
  {
    name: "Custom",
    monthly: "A medida",
    yearly: "A medida",
    desc: "Para sistemas, plataformas o apps con requerimientos específicos.",
    features: ["Arquitectura + plan", "Desarrollo a medida", "Integraciones", "Escalable", "Soporte continuo"],
    featured: false,
    cta: "Cotizar",
  },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#00e1f6]">
      <path
        d="M20 7L10 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="precios" className="relative bg-transparent text-white py-20">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.22em] text-white/80 font-semibold">PRICING</p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Planes claros, sin letra chica
          </h2>

          <p className="mt-4 text-white/85 leading-relaxed">
            Elige un plan o armamos uno a medida. Priorizo claridad, performance y resultados.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={[
                "px-4 py-2 text-sm rounded-full transition",
                billing === "monthly" ? "bg-white/10 text-white" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              Mensual
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={[
                "px-4 py-2 text-sm rounded-full transition",
                billing === "yearly" ? "bg-white/10 text-white" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              Anual <span className="ml-1 text-xs text-[#00e1f6]">-10%</span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {PLANS.map((p, idx) => {
            const price = billing === "monthly" ? p.monthly : p.yearly;

            return (
              <motion.article
                key={p.name}
                className={[
                  // base
                  "group relative rounded-2xl border backdrop-blur-md p-7 overflow-hidden flex flex-col webjp-pricing-card",
                  // featured vs normal
                  p.featured
                    ? "featured border-white/25 bg-white/10 lg:-mt-4 lg:mb-4"
                    : "border-white/10 bg-white/5",
                ].join(" ")}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
              >
                {/* Glow especial en el plan destacado */}
                {p.featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(900px 260px at 50% 0%, rgba(0,225,246,0.16), transparent 55%), radial-gradient(900px 260px at 20% 20%, rgba(161,41,149,0.18), transparent 60%)",
                    }}
                  />
                )}

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{p.name}</h3>

                    {"badge" in p && (p as any).badge ? (
                      <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/85">
                        {(p as any).badge}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 text-sm text-white/85">{p.desc}</p>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">{price}</span>
                    {price !== "A medida" && (
                      <span className="text-sm text-white/60 mb-1">
                        / {billing === "monthly" ? "mes" : "año"}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                        <span className="mt-0.5">
                          <CheckIcon />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 relative">
                  {p.featured ? (
                    <a
                      href="#contacto"
                      className="webjp-shine-border rounded-full p-0.5 inline-flex w-full justify-center hover:scale-[1.02] transition active:scale-100"
                    >
                      <span className="px-6 py-3 text-sm text-white rounded-full font-medium bg-gray-800 w-full text-center">
                        {p.cta}
                      </span>
                    </a>
                  ) : (
                    <a
                      href="#contacto"
                      className="rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition inline-flex w-full justify-center"
                    >
                      <span className="px-6 py-3 text-sm text-white font-medium w-full text-center">{p.cta}</span>
                    </a>
                  )}

                  <p className="mt-3 text-xs text-white/60 text-center">
                    {p.featured ? "Recomendado para la mayoría de negocios." : "Personalizable según tu caso."}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
