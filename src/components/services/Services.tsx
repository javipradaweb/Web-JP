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
    desc: "Diseño de interfaces y experiencias de usuario claras y atractivas, aplicable a sitios web, apps y sistemas. Enfocado en usabilidad intuitiva y conversión.",
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
        "Diseño UX/UI es planear y diseñar cómo funciona y cómo se ve tu web o app para que la gente entienda todo rápido, navegue sin esfuerzo y haga la acción que quieres (contactarte, comprar, registrarse). UX = experiencia/flujo. UI = diseño visual.",
      incluye: [
        "Arquitectura de información.",
        "Wireframes + Diseño final en Figma.",
        "Sistema de componentes (UI kit ligero).",
        "Entrega lista para el desarrollo.",
      ],
      entregables: [
        "Archivo Figma editable",
        "UI kit / componentes base",
        "Guía breve de estilos",
        "Notas y criterios de implementación",
      ],
      idealPara: [
        "Landing que necesita mejorar conversión.",
        "Rediseño visual sin perder objetivos.",
        "Apps web y móviles con experiencia TOP",
        "Sistemas internos y plataformas eficientes e intuitivas.",
      ],
      tiempo: "7–15 días",
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
        "Diseño completo en WordPress de tu sitio web con estructura clara y diseño moderno, secciones pensadas para que el usuario entienda, confíe y actúe. El objetivo es que tu web no solo se vea bien sino que genere ventas y/o mejore tu posicionamiento y presencia digital.",
      incluye: [
        "Estructura completa del sitio.",
        "Diseño visual premium y moderno.",
        "Hero + Propuesta de valor potente.",
        "Secciones y páginas internas según proyecto.",
        "Prueba social.",
        "Gatillos mentales (escasez, urgencia, autoridad, etc).",
        "Llamados a la acción claros y efectivos.",
        "Versión responsive completa.",
        "Botón directo a WhatsApp.",
        "Ajustes extra según tu negocio."
      ],
      entregables: [
        "Documento final con credenciales de acceso.",
        "Capacitación para autogestión.",
        "Producto final al 100%",
        "Soporte FREE por 15 días post-entrega.",
        "Recomendaciones para próximos pasos.",
        "Checklist de SEO básico.",
      ],
      idealPara: [
        "Marca personal / servicio profesional.",
        "Landing Pages con objetivo específico.",
        "Sitio web corporativo moderno.",
        "Actualizar un sitio antiguo.",
        "e-Commerce efectivo.",
        "Plataformas web (educativas, membresías, etc.).",
      ],
      tiempo: "7–15 días (según requerimiento)",
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
        "Tu web, app o sistema desde cero con código, por que lo que necesitas ya no se resuelve bien con un CMS (como WordPress) ni con plantillas. Se usa para proyectos más complejos donde quieres funciones específicas, integraciones, lógica personalizada, paneles internos, flujos de usuarios, automatizaciones, etc. Una solución hecha 100% a tu medida",
      incluye: [
        "Análisis de requerimientos.",
        "Arquitectura del proyecto.",
        "Stack flexible según necesidad.",
        "Sitio 100% responsive.",
        "Funcionalidades a medida.",
        "Integraciones con terceros (APIs).",
        "Bases de datos y backends (si aplica).",
        "Autenticación y permisos (logins, roles, etc).",
        "Testing básico y deployment."
      ],
      entregables: [
        
        "App, website, sistema o plataforma activa.",
        "Código fuente.",
        "Documento de entrega con accesos y credenciales.",
        "Documentación de uso básica.",
        "Documentación ténica básica.",
        "Soporte FREE por 15 días post-entrega.",
        "Capacitación breve.",
        "Recomendaciones para próximos pasos.",
      ],
      idealPara: [
        "Sistemas internos y plataformas web.",
        "Apps web a medida.",
        "Proyectos con integraciones.",
        "Webs con lógica avanzada.",
        "e-Commerce con necesidades avanzadas.",
        "Automatizaciones personalizadas.",
      ],
      tiempo: "25+ días (según complejidad)",
    },
  },
];

const WHATSAPP_LINKS: Record<string, string> = {
  uxui: "https://api.whatsapp.com/send?phone=59168164840&text=Hola,%20deseo%20cotizar%20el%20servicio%20de%20Dise%C3%B1o%20UX/UI,%20mi%20nombre%20es:",
  web: "https://api.whatsapp.com/send?phone=59168164840&text=Hola,%20deseo%20cotizar%20el%20servicio%20de%20Dise%C3%B1o%20Web,%20mi%20nombre%20es:",
  custom:
    "https://api.whatsapp.com/send?phone=59168164840&text=Hola,%20deseo%20cotizar%20el%20servicio%20de%20Desarrollo%20a%20Medida,%20mi%20nombre%20es:",
};

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

  const waHref = active ? WHATSAPP_LINKS[active.id] : "/#contacto";

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
            SERVICIOS
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Eleva tu marca.
            <br />
            Acelera tu crecimiento.
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
                              href={waHref}
                              target="_blank"
                              rel="noreferrer"
                              className="webjp-shine-border rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100 inline-flex"
                            >
                              <span className="px-6 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800">
                                Cotizar
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
