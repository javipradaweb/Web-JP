"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type Service = {
  id: string;
  title: string;
  desc: string;
  icon: ReactNode;
  details: {
    intro: string;
    incluye: string[];
    entregables: string[];
    idealPara: string[];
    tiempo: string;
  };
};

const SERVICES: Service[] = [
  {
    id: "uxui",
    title: "Diseño UX/UI",
    desc: "Diseño de experiencias claras y atractivas, aplicable a sitios web, apps y sistemas. Enfocado en usabilidad, conversión y confianza.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white"
      >
        <path
          d="M4 7.5C4 6.12 5.12 5 6.5 5h11C18.88 5 20 6.12 20 7.5v9c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 19 4 17.88 4 16.5v-9Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 9h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 12h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14.6 14.2l1.2 3.3 1.1-.5 1.1 1.9 1.4-.8-1.1-1.9 1-.6-3.6-1.4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    details: {
      intro:
        "Diseño UX/UI para que tu web/app se entienda rápido, se vea premium y convierta. Definimos estructura, jerarquía y componentes listos para implementar.",
      incluye: [
        "Arquitectura de información y user flow",
        "Wireframes + UI final (Figma)",
        "Sistema de componentes (UI kit ligero)",
        "Handoff ordenado para desarrollo",
      ],
      entregables: [
        "Archivo Figma editable",
        "UI kit / componentes base",
        "Guía breve de estilos",
        "Notas y criterios de implementación",
      ],
      idealPara: [
        "Landing que necesita mejorar conversión",
        "Rediseño visual sin perder claridad",
        "Producto digital en crecimiento",
      ],
      tiempo: "7–14 días (según alcance)",
    },
  },
  {
    id: "web",
    title: "Diseño Web",
    desc: "Landing pages, sitios web corporativos, e-commerces y plataformas. Diseño visual premium con estructura clara y orientada a resultados.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white"
      >
        <path
          d="M4 6.5C4 5.12 5.12 4 6.5 4h11C18.88 4 20 5.12 20 6.5v11C20 18.88 18.88 20 17.5 20h-11C5.12 20 4 18.88 4 17.5v-11Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4 8h16" stroke="currentColor" strokeWidth="2" />
        <path
          d="M7 6h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M10 6h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M13 6h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M7 12h5v5H7v-5ZM14 12h3v5h-3v-5Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    details: {
      intro:
        "Diseño web con enfoque en claridad, confianza y CTA. Estructura estratégica + estética premium para que tu página venda sin fricción.",
      incluye: [
        "Estructura de secciones y jerarquía",
        "Diseño visual premium (dark/glass)",
        "Optimización responsive (móvil primero)",
        "Guía de copy/CTA (si aplica)",
      ],
      entregables: [
        "Diseño final (Figma o directo en código)",
        "Secciones clave (hero, beneficios, prueba social, CTA)",
        "Versión responsive completa",
        "Ajustes finales de pulido",
      ],
      idealPara: [
        "Marca personal / servicio profesional",
        "Sitio corporativo moderno",
        "Actualizar un sitio antiguo",
      ],
      tiempo: "7–21 días (según páginas)",
    },
  },
  {
    id: "custom",
    title: "Desarrollo a medida",
    desc: "Código puro y soluciones exactas a lo que necesitas. Desarrollo a medida para sistemas, sitios web, plataformas y apps.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white"
      >
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
        <path
          d="M13 5 11 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    details: {
      intro:
        "Implementación en Next.js + Tailwind con una base limpia y escalable. Componentes reutilizables, performance y animaciones suaves sin sobrecargar.",
      incluye: [
        "Next.js (App Router) + TypeScript",
        "Tailwind + componentes consistentes",
        "Animaciones (Framer Motion) bien medidas",
        "SEO + performance (best practices)",
      ],
      entregables: [
        "Repositorio GitHub listo",
        "Deploy en Vercel + dominio",
        "Componentes reutilizables",
        "Checklist final + recomendaciones",
      ],
      idealPara: [
        "Web premium que debe cargar rápido",
        "Base sólida para crecer",
        "Proyectos con componentes y secciones dinámicas",
      ],
      tiempo: "10–30 días (según complejidad)",
    },
  },
];

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section id="servicios" className="relative bg-transparent text-white py-20">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.22em] text-white/80 font-semibold">
            SERVICES
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Todo lo que tu marca necesita para crecer
          </h2>

          <p className="mt-4 text-white/85 leading-relaxed">
            Desde estrategia hasta ejecución: diseño y desarrollo de experiencias
            digitales con enfoque en claridad, performance y resultados.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {SERVICES.map((s, idx) => (
            <motion.article
              key={s.id}
              layoutId={`service-card-${s.id}`}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 overflow-hidden webjp-service-card cursor-pointer"
              style={{ animationDelay: `${idx * 0.35}s` }}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: idx * 0.12 }}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setActive(s)}
            >
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

                <motion.h3
                  layoutId={`service-title-${s.id}`}
                  className="text-xl font-semibold text-white"
                >
                  {s.title}
                </motion.h3>

                <motion.p
                  layoutId={`service-desc-${s.id}`}
                  className="mt-3 text-sm text-white/85 leading-relaxed"
                >
                  {s.desc}
                </motion.p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(s);
                  }}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-white/85 group-hover:text-white transition"
                >
                  <span className="font-medium">Ver detalles</span>
                  <span className="translate-x-0 group-hover:translate-x-1 transition">
                    →
                  </span>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <AnimatePresence>
          {active && (
            <>
              <motion.div
                className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(null)}
              />

              {/* ✅ CLAVE: overlay con scroll, y el modal ya no se corta */}
              <motion.div
                className="fixed inset-0 z-[70] overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="min-h-full w-full flex items-start justify-center px-4 py-10">
                  <motion.div
                    layoutId={`service-card-${active.id}`}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0b1224]/85 backdrop-blur-xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* ✅ CLAVE: contenedor interno con max-height + scroll */}
                    <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
                      <div className="p-6 sm:p-8 border-b border-white/10">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                              {active.icon}
                            </div>

                            <div>
                              <motion.p
                                layoutId={`service-title-${active.id}`}
                                className="text-xl sm:text-2xl font-semibold text-white"
                              >
                                {active.title}
                              </motion.p>
                              <p className="mt-1 text-sm text-white/70">
                                {active.details.tiempo}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => setActive(null)}
                            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition active:scale-95"
                            aria-label="Cerrar"
                          >
                            <XIcon />
                          </button>
                        </div>

                        <motion.p
                          layoutId={`service-desc-${active.id}`}
                          className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed"
                        >
                          {active.details.intro}
                        </motion.p>
                      </div>

                      <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InfoBlock title="Qué incluye">
                          <ul className="space-y-2 text-sm text-white/75">
                            {active.details.incluye.map((b) => (
                              <li key={b} className="flex items-start gap-2">
                                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#00e1f6] shadow-[0_0_16px_rgba(0,225,246,0.55)]" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </InfoBlock>

                        <InfoBlock title="Entregables">
                          <ul className="space-y-2 text-sm text-white/75">
                            {active.details.entregables.map((d) => (
                              <li key={d} className="flex items-start gap-2">
                                <span className="mt-1.5 h-2 w-2 rounded-full bg-white/40" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </InfoBlock>

                        <InfoBlock title="Ideal para">
                          <ul className="space-y-2 text-sm text-white/75">
                            {active.details.idealPara.map((i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-2 w-2 rounded-full bg-white/40" />
                                <span>{i}</span>
                              </li>
                            ))}
                          </ul>
                        </InfoBlock>

                        <InfoBlock title="Siguiente paso">
                          <p className="text-sm text-white/75 leading-relaxed">
                            Si quieres cotizar este servicio, hablemos y armamos
                            el alcance ideal para tu proyecto.
                          </p>

                          <div className="mt-4 flex flex-wrap gap-3">
                            <a
                              href="/#contacto"
                              className="webjp-shine-border rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100 inline-flex"
                            >
                              <span className="px-6 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800">
                                Cotizar ahora
                              </span>
                            </a>

                            <button
                              type="button"
                              onClick={() => setActive(null)}
                              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 hover:bg-white/10 transition active:scale-95"
                            >
                              Cerrar
                            </button>
                          </div>
                        </InfoBlock>
                      </div>

                      <div className="px-6 sm:px-8 pb-6 text-xs text-white/45">
                        Tip: también puedes cerrar con{" "}
                        <span className="text-white/65">ESC</span>.
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm tracking-[0.22em] text-white/70 font-semibold uppercase">
        {title}
      </p>
      <div className="mt-4">{children}</div>
    </div>
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
