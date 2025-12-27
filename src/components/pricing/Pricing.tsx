"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Tier = "essential" | "full";

type PlanTier = {
  price: string;
  desc: string;
  features: string[];
  cta: string;
  note?: string;
};

type Plan = {
  name: string;
  badge?: string; // ej: "Recomendado"
  featured?: boolean; // para destacar visualmente
  essential: PlanTier;
  full: PlanTier;
};

const PLANS: Plan[] = [
  {
    name: "Diseño UXUI",
    featured: false,

    essential: {
      price: "Desde $us 320",
      desc: "UX/UI para ordenar tu producto y mejorar claridad + conversión, con lo necesario para avanzar rápido.",
      features: [
        "Hasta 10 pantallas (móvil + desktop)",
        "Estructura y flujo de navegación",
        "Wireframes (boceto) para validar antes del diseño",
        "Diseño UI final en Figma",
        "Responsive (móvil y escritorio)",
        "UI kit básico (colores, tipografías, botones)",
        "2 rondas de ajustes",
        "Entrega lista para el desarrollo",
      ],
      cta: "Contratar UX/UI Esencial",
      note: "NOTA: NO incluye desarrollo.",
    },

    full: {
      price: "Desde $us 500",
      desc: "UX/UI completo y más robusto, listo para escalar y desarrollar.",
      features: [
        "Hasta 20 pantallas (móvil + desktop)",
        "Arquitectura más profunda (secciones + prioridades)",
        "Wireframes + validación del flujo",
        "Diseño UI final premium en Figma",
        "Prototipo clickeable (para testear experiencia)",
        "UI kit completo (componentes clave reutilizables)",
        "Estados importantes (hover, error, loading)",
        "Hasta 4 rondas de ajustes",
        "Entrega detallada para el desarrollo (notas y criterios)",
      ],
      cta: "Contratar UX/UI Full",
      note: "Recomendado para productos con varias pantallas o flujos.",
    },
  },

  {
    name: "Diseño Web Pro",
    badge: "Más vendido",
    featured: true,

    essential: {
      price: "Desde $us 250",
      desc: "Landing Page, Sitio Web Corporativo, e-Commerce o Plataforma Web; con características básicas.",
      features: [
        "Hasta 4 páginas.",
        "Diseño web responsive.",
        "Diseño de interfaz intuitiva",
        "CTAs claros y efectivos.",
        "Botones directo a Whatsapp.",
        "Gatillos mentales según necesidad.",
        "Optimización básica SEO.",
        "2 rondas de ajustes.",
      ],
      cta: "Contratar Diseño Web Esencial",
      note: "Nota: NO incluye Hosting ni Dominio.",
    },

    full: {
      price: "Desde $us 450",
      desc: "Sitio o plataforma web completa para posicionar tu marca, generar confianza y vender con estructura sólida.",
      features: [
        "Mismos que en pack Esencial",
        "Hasta 10 páginas.",
        "Diseño premium + estructura estratégica",
        "Secciones de confianza (testimonios, portafolio, FAQs, etc.).",
        "SEO mejorado.",
        "Performance optimizada (optimización de imágenes y carga).",
        "3 rondas de ajustes.",
        "Mini capacitación / guía para autogestión.",
        "Plugins en versión PRO (según necesidad).",
      ],
      cta: "Contratar Diseño Web Full",
      note: "Nota: NO incluye Hosting ni Dominio. Recomendado para e-Commerces o plataformas web complejas.",
    },
  },

  {
    name: "Desarrollo Web a Medida",
    featured: false,

    essential: {
      price: "Desde $us 950",
      desc: "Pensado para lanzar rápido y bien un producto/sistema con lo necesario para operar.",
      features: [
        "Relevamiento de información y objetivos.",
        "Arquitectura base + stack flexible.",
        "UI premium escritorio + responsive",
        "1–2 módulos principales.",
        "Base de datos + modelo de datos.",
        "API / lógica de negocio (endpoints y reglas del sistema).",
        "Autenticación básica (registro, login, roles).",
        "Panel admin básico.",
        "Hasta 1 integración externa.",
        "Entrega con mini documentación.",
        "Hasta 2 rondas de ajustes.",
      ],
      cta: "Cotizar Plan Esencial",
      note: "Resultado: un MVP usable, con base limpia para crecer.",
    },

    full: {
      price: "Desde $us 1.500",
      desc: "Para proyectos donde importa seguridad, robustez, crecimiento y mantenimiento.",
      features: [
        "Incluye todo lo Esencial más:",
        "Arquitectura escalable.",
        "Roles y permisos (RBAC) + Flujos protegidos.",
        "Seguridad reforzada.",
        "Performance & UX de alto nivel.",
        "Testing básico automatizado.",
        "Integraciones múltiples (pagos, email transaccional, CRM, analytics, webhooks, etc.).",
        "Ambientes Preview/Staging.",
        "Documentación técnica completa.",
        "Soporte post-lanzamiento.",
      ],
      cta: "Cotizar Desarrollo a Medida Full",
      note: "Resultado: un producto más “empresa”: estable, seguro, medible y listo para crecer sin volverse un caos.",
    },
  },
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-[#00e1f6]"
      aria-hidden
    >
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

/** "Desde" pequeño + monto grande */
function PriceDisplay({ price }: { price: string }) {
  const trimmed = price.trim();
  const lower = trimmed.toLowerCase();

  if (lower.startsWith("desde ")) {
    const amount = trimmed.slice(6).trim(); // quita "Desde "
    return (
      <div className="flex items-end gap-2">
        <span className="text-xs sm:text-sm text-white/60 mb-1">Desde</span>
        <span className="text-4xl font-bold text-white leading-none">
          {amount}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2">
      <span className="text-4xl font-bold text-white leading-none">
        {trimmed}
      </span>
    </div>
  );
}

export default function Pricing() {
  const [tier, setTier] = useState<Tier>("essential");

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
          <p className="text-xs tracking-[0.22em] text-white/80 font-semibold">
            PRECIOS
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Precios Diseño Web, UXUI y Desarrollo a Medida.
          </h2>

          <p className="mt-4 text-white/85 leading-relaxed">
            Elige Esencial o Full según tu objetivo. Trabajo con{" "}
            <span className="text-white font-medium">
              diseño UXUI, diseño web profesional y desarrollo web a medida
            </span>{" "}
            para sitios y plataformas. Si tu proyecto requiere algo más complejo,
            lo armamos a medida.
          </p>

          {/* Toggle: Esencial / Full */}
          <div className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md p-1">
            <button
              type="button"
              onClick={() => setTier("essential")}
              className={[
                "px-4 py-2 text-sm rounded-full transition",
                tier === "essential"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              Esencial
            </button>

            <button
              type="button"
              onClick={() => setTier("full")}
              className={[
                "px-4 py-2 text-sm rounded-full transition",
                tier === "full"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              Full{" "}
              <span className="ml-1 text-xs text-[#00e1f6]">Recomendado</span>
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
            const data = p[tier];
            const showBadge = Boolean(p.badge);

            return (
              <motion.article
                key={p.name}
                className={[
                  "group relative rounded-2xl border backdrop-blur-md p-7 overflow-hidden flex flex-col webjp-pricing-card",
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

                    {showBadge ? (
                      <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/85">
                        {p.badge}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 text-sm text-white/85">{data.desc}</p>

                  {/* Precio */}
                  <div className="mt-6">
                    <PriceDisplay price={data.price} />
                  </div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                  <ul className="mt-6 space-y-3">
                    {data.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-white/90"
                      >
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
                        {data.cta}
                      </span>
                    </a>
                  ) : (
                    <a
                      href="#contacto"
                      className="rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition inline-flex w-full justify-center"
                    >
                      <span className="px-6 py-3 text-sm text-white font-medium w-full text-center">
                        {data.cta}
                      </span>
                    </a>
                  )}

                  <p className="mt-3 text-xs text-white/60 text-center">
                    {data.note ??
                      (tier === "full"
                        ? "Incluye más alcance y más detalle."
                        : "Ideal para empezar fuerte.")}
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
