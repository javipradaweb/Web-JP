"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Category = "Todos" | "Landing" | "Corporativo" | "Ecommerce" | "Sistema";

type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "Todos">;
  tag: string;
  desc: string;
  cover: string; // imagen card
  hero?: string; // imagen dentro del popup (opcional)
  url?: string; // url del proyecto (opcional)
  highlights?: string[]; // bullets (opcional)
};

const CATEGORIES: Category[] = [
  "Todos",
  "Landing",
  "Corporativo",
  "Ecommerce",
  "Sistema",
];

const PROJECTS: Project[] = [
  {
    id: "p1",
    // ✅ 2 líneas
    title: "Landing\nde Conversión",
    category: "Landing",
    tag: "UX/UI · Copy · Performance",
    desc: "Estructura clara, jerarquía visual y CTA definidos para convertir visitas en leads.",
    cover: "/portafolio/landing1.jpg",
    hero: "/portafolio/landing1.jpg",
    url: "https://grupojorgebelmonte.com/proyectos/asuncion-irpavi/",
    highlights: [
      "Arquitectura de contenido",
      "CTA + prueba social",
      "Optimización de performance",
    ],
  },
  {
    id: "p2",
    title: "Sitio Corporativo Premium",
    category: "Corporativo",
    tag: "Brand · Web · Confianza",
    desc: "Un sitio sólido para comunicar valor, ordenar la oferta y elevar la percepción de marca.",
    cover: "/portafolio/corporativo3.jpg",
    hero: "/portafolio/corporativo3.jpg",
    url: "https://wolverine-fl.com/",
    highlights: [
      "Diseño editorial premium",
      "Estructura clara",
      "Secciones orientadas a confianza",
    ],
  },
  {
    id: "p3",
    title: "Ecommerce Moderno",
    category: "Ecommerce",
    tag: "UI · Catálogo · Checkout",
    desc: "Componentes pensados para comprar fácil: catálogo, producto, carrito y checkout.",
    cover: "/portafolio/ecommerce1.jpg",
    hero: "/portafolio/ecommerce1.jpg",
    url: "https://sajamastore.com/",
    highlights: ["Componentes de producto", "Flujo de compra", "Optimización UI"],
  },
  {
    id: "p4",
    // ✅ 2 líneas
    title: "Desarrollo\na Medida",
    category: "Sistema",
    tag: "Código · Escalable · Exacto",
    desc: "Soluciones a medida para sistemas, plataformas y flujos específicos del negocio.",
    cover: "/portafolio/amedida1.jpg",
    hero: "/portafolio/amedida1.jpg",
    url: "https://rtpbolivia.com.bo/",
    highlights: ["Desarrollo exacto al flujo", "Escalable", "Integraciones"],
  },
  {
    id: "p5",
    title: "Landing / Corporativo",
    category: "Corporativo",
    tag: "UI · Estructura · Claridad",
    desc: "Bloques de valor, beneficios y CTA con diseño premium y navegación limpia.",
    cover: "/portafolio/corporativo1.jpg",
    hero: "/portafolio/corporativo1.jpg",
    url: "https://grupojorgebelmonte.com/",
    highlights: ["Jerarquía visual", "Componentes reutilizables", "UI consistente"],
  },
  {
    id: "p6",
    // ✅ 2 líneas
    title: "Corporativo\nMinimal",
    category: "Corporativo",
    tag: "Tipografía · Layout · Orden",
    desc: "Diseño editorial: lectura limpia, ritmo visual y estructura premium.",
    cover: "/portafolio/corporativo2.jpg",
    hero: "/portafolio/corporativo2.jpg",
    url: "https://osfimbo.com/",
    highlights: ["Tipografía y ritmo", "Secciones limpias", "Navegación directa"],
  },
  {
    id: "p7",
    title: "Ecommerce (Caso 02)",
    category: "Ecommerce",
    tag: "UI · Producto · Conversión",
    desc: "Caso adicional para reservar la tercera fila. Se completará con detalles más adelante.",
    cover: "/portafolio/ecommerce2.jpg",
    hero: "/portafolio/ecommerce2.jpg",
    url: "https://turismoelalto.com/",
    highlights: ["Catálogo optimizado", "UI premium", "Estructura para escalar"],
  },
];

const FALLBACK_COVER = "/portafolio/ecommerce1.jpg";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-white/80"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-white"
    >
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function renderTwoLineTitle(title: string) {
  const parts = title.split("\n");
  if (parts.length === 1) return title;
  return (
    <>
      {parts[0]}
      <br />
      {parts.slice(1).join(" ")}
    </>
  );
}

export default function PortafolioPage() {
  const [active, setActive] = useState<Category>("Todos");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === "Todos") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  // ✅ SEO: JSON-LD (CollectionPage + ItemList)
  const jsonLd = useMemo(() => {
    const baseUrl = "https://javierprada.online";
    const pageUrl = `${baseUrl}/portafolio`;

    const itemList = PROJECTS.map((p, idx) => {
      const title = p.title.replace("\n", " ");
      return {
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "CreativeWork",
          name: title,
          description: p.desc,
          url: pageUrl,
          // imagenes públicas del proyecto
          image: `${baseUrl}${p.cover}`,
          // categoría como “genre” para dar contexto
          genre: p.category,
        },
      };
    });

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": pageUrl,
          url: pageUrl,
          name: "Portafolio | Web JP",
          description:
            "Portafolio de diseño UX/UI, diseño web y desarrollo web a medida: landings, sitios corporativos, ecommerce y sistemas.",
          inLanguage: "es",
          isPartOf: {
            "@type": "WebSite",
            "@id": `${baseUrl}/`,
            url: `${baseUrl}/`,
            name: "Web JP",
          },
        },
        {
          "@type": "ItemList",
          name: "Proyectos seleccionados",
          itemListElement: itemList,
        },
      ],
    };
  }, []);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative bg-[#020617] text-white">
      {/* ✅ SEO: H1 + texto (ocultos) */}
      <h1 className="sr-only">
        Portafolio Web JP — Diseño UXUI, Diseño Web y Desarrollo Web a Medida
      </h1>
      <p className="sr-only">
        Proyectos de diseño UX/UI, diseño web profesional y desarrollo web a
        medida: landings de conversión, sitios corporativos, ecommerce y sistemas
        web. Filtra por categoría y abre cada proyecto para ver detalles.
      </p>

      {/* ✅ SEO: JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 320px at 15% 10%, rgba(161,41,149,0.16), transparent 60%), radial-gradient(900px 320px at 85% 20%, rgba(0,225,246,0.10), transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-28 lg:pt-32 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs tracking-[0.22em] text-white/80 font-semibold">
              PORTAFOLIO
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Proyectos seleccionados
            </h1>

            <p className="mt-4 text-white/80 leading-relaxed">
              Haz click en un proyecto para ver más detalles (popup).
            </p>

            <div className="mt-7">
              <a
                href="/#contacto"
                className="webjp-shine-border rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100 inline-flex"
              >
                <span className="px-7 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800">
                  Hablemos
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-px w-full bg-white/10" />

      {/* FILTROS + GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h2 className="text-xl font-semibold text-white">Explorar</h2>
            <p className="mt-1 text-sm text-white/70">
              Filtra por tipo de proyecto.
            </p>
          </div>

          <div
            className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-2"
            role="group"
            aria-label="Filtrar portafolio por categoría"
          >
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={[
                    "rounded-full px-4 py-2 text-sm transition",
                    isActive
                      ? "bg-white/10 text-white border border-white/15"
                      : "text-white/70 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
                delay: i * 0.06,
              }}
              className="cursor-pointer text-left group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              aria-label={`Abrir ${p.title.replace("\n", " ")}`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background:
                    "radial-gradient(700px 220px at 20% 10%, rgba(161,41,149,0.18), transparent 55%), radial-gradient(650px 200px at 85% 30%, rgba(0,225,246,0.12), transparent 60%)",
                }}
              />

              {/* layoutId para expand */}
              <motion.div layoutId={`card-${p.id}`} className="relative">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title.replace("\n", " ")}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (img.dataset.fallback === "1") return;
                      img.dataset.fallback = "1";
                      img.src = FALLBACK_COVER;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 rounded-full bg-black/45 px-4 py-2 text-xs text-white backdrop-blur-md border border-white/10">
                    {p.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {renderTwoLineTitle(p.title)}
                    </h3>
                    <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/80">
                      {p.category}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-white/75 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            </motion.button>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-14 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white">
              ¿Quieres algo así para tu marca?
            </h3>
            <p className="mt-2 text-sm text-white/75 max-w-xl">
              Cuéntame tu objetivo y armamos una solución clara: UX/UI +
              desarrollo con performance y foco en resultados.
            </p>
          </div>

          <a
            href="/#contacto"
            className="webjp-shine-border rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100 inline-flex"
          >
            <span className="px-7 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800">
              Hablemos
            </span>
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Detalle del proyecto"
          >
            <motion.button
              aria-label="Cerrar"
              type="button"
              className="absolute inset-0 bg-black/70 cursor-pointer"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              layoutId={`card-${selected.id}`}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b1224] backdrop-blur-xl"
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 rounded-full border border-white/10 bg-black/40 p-2 hover:bg-black/55 transition cursor-pointer"
                aria-label="Cerrar modal"
              >
                <CloseIcon />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full min-h-[260px] overflow-hidden">
                  <img
                    src={selected.hero || selected.cover}
                    alt={selected.title.replace("\n", " ")}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (img.dataset.fallback === "1") return;
                      img.dataset.fallback = "1";
                      img.src = FALLBACK_COVER;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-75" />
                  <span className="absolute top-4 left-4 rounded-full bg-black/45 px-4 py-2 text-xs text-white backdrop-blur-md border border-white/10">
                    {selected.tag}
                  </span>
                </div>

                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white leading-tight">
                      {renderTwoLineTitle(selected.title)}
                    </h3>
                    <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/80">
                      {selected.category}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-white/75 leading-relaxed">
                    {selected.desc}
                  </p>

                  {selected.highlights?.length ? (
                    <ul className="mt-5 space-y-2 text-sm text-white/75">
                      {selected.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 rounded-full webjp-dot-glow" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {selected.url ? (
                    <div className="mt-6">
                      <a
                        href={selected.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition cursor-pointer"
                      >
                        Ver URL <ArrowIcon />
                      </a>
                    </div>
                  ) : null}

                  <div className="mt-7 h-px w-full bg-white/10" />

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/#contacto"
                      className="webjp-shine-border rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100 inline-flex"
                    >
                      <span className="px-6 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800">
                        Quiero algo así
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 hover:border-white/30 transition cursor-pointer"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
