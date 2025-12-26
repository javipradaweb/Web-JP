"use client";

import { useMemo, useRef } from "react";
import { motion } from "framer-motion";

const FAQS = [
  {
    q: "¿Qué necesito para empezar?",
    a: "Con 2 cosas basta: tu objetivo (vender, captar leads, posicionar, etc.) y ejemplos de referencias que te gusten. Yo me encargo de aterrizarlo a una estructura clara y a un diseño que convierta.",
  },
  {
    q: "¿Ofreces diseño web, UX/UI y desarrollo web?",
    a: "Sí. Puedo ayudarte con diseño web profesional, diseño UX/UI (interfaces y flujos) y desarrollo web. La solución se define según tu objetivo: presencia, conversión, posicionamiento o una plataforma con funciones específicas.",
  },
  {
    q: "¿Trabajas con WordPress y Elementor?",
    a: "Sí. Desarrollo sitios con WordPress (incluyendo Elementor) cuando conviene por costo/tiempo y autogestión. También puedo combinarlo con buenas prácticas de UX/UI y performance para que no solo se vea bien, sino que funcione y convierta.",
  },
  {
    q: "¿Cuándo recomiendas WordPress y cuándo desarrollo a medida?",
    a: "WordPress es ideal para webs, landings, corporativas y e-commerce estándar donde quieres autogestionar contenido. Desarrollo a medida lo recomiendo cuando necesitas lógica específica, integraciones complejas, roles/usuarios, paneles internos, automatizaciones o una app/plataforma personalizada.",
  },
  {
    q: "¿Diseñas solo webs o también apps/sistemas?",
    a: "Ambos. En UX/UI puedo diseñar webs, apps y sistemas (dashboards, paneles internos, flujos complejos). Y si lo necesitas, también lo desarrollo a medida.",
  },
  {
    q: "¿Qué incluye el desarrollo web?",
    a: "Incluye una evaluación previa para entender tu marca, objetivos, público y qué acción quieres que el visitante haga (contactar, comprar, agendar, etc.). Con eso defino la estructura ideal (secciones, jerarquía, llamadas a la acción). Luego desarrollo el sitio con enfoque premium, responsive, optimizado para velocidad y con SEO básico, listo para publicarse con sus ajustes finales y una entrega ordenada.",
  },
  {
    q: "¿Incluyes SEO?",
    a: "Incluyo SEO técnico y SEO básico on-page: estructura, títulos, meta tags, sitemap, robots, optimización de contenido y recomendaciones. Para posicionar en primeros lugares por keywords muy competidas se necesita una estrategia continua (contenido + autoridad + tiempo).",
  },
  {
    q: "¿Cuánto tarda una web típica?",
    a: "Depende del alcance. Una landing puede estar lista en pocos días; un sitio corporativo suele tomar 1–2 semanas; y proyectos a medida (plataformas/sistemas) se definen por etapas.",
  },
  {
    q: "¿Cómo se gestionan los costos de los servicios?",
    a: "Generalmente se trabaja con 50% al momento de la firma de contrato y 50% a la entrega del trabajo. Esto puede variar dependiendo del proyecto y el alcance.",
  },
  {
    q: "¿Puedo pedir cambios después de la entrega?",
    a: "Claro. Siempre dejo un margen de ajustes post-entrega y, si quieres, podemos pasar a mantenimiento/mejoras continuas.",
  },
  {
    q: "¿Ofreces mantenimiento web?",
    a: "Sí. Puedo ayudarte con mantenimiento y mejoras: cambios de contenido, optimización de velocidad, ajustes de diseño, seguridad/actualizaciones en WordPress, y mejoras SEO continuas según objetivos.",
  },
  {
    q: "¿Puedes ayudarme con dominio y hosting?",
    a: "Sí. Te asesoro para elegir dominio y hosting según tu proyecto. Si ya tienes hosting, también puedo trabajar sobre tu infraestructura actual o migrar si conviene.",
  },
];

function ChevronDown() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-white/70 group-open:rotate-180 transition-transform duration-300"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Faq() {
  const refs = useRef<(HTMLDetailsElement | null)[]>([]);

  const handleToggle = (i: number) => {
    const current = refs.current[i];
    if (!current) return;

    // Si se abrió este, cerramos los otros (accordion limpio)
    if (current.open) {
      refs.current.forEach((el, idx) => {
        if (idx !== i && el?.open) el.open = false;
      });
    }
  };

  // ✅ FAQ Schema (JSON-LD) para SEO
  const faqSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    };
  }, []);

  return (
    <section id="faq" className="relative bg-transparent text-white py-20">
      {/* ✅ JSON-LD para que Google entienda el FAQ */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.22em] text-white/80 font-semibold">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
            Preguntas frecuentes sobre diseño web, UX/UI y desarrollo
          </h2>

          {/* ✅ Párrafo SEO-friendly (natural, sin spam) */}
          <p className="mt-4 text-white/85 leading-relaxed">
            Aquí respondo dudas comunes sobre{" "}
            <span className="text-white font-medium">
              diseño web, diseño UX/UI, desarrollo web con WordPress/Elementor y
              desarrollo a medida
            </span>
            . Si te queda alguna pregunta, podemos{" "}
            <a
              href="#contacto"
              className="underline underline-offset-4 text-white"
            >
              hablar
            </a>{" "}
            y aterrizar tu caso.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => (
            <motion.details
              key={`${item.q}-${i}`}
              ref={(el) => {
                refs.current[i] = el;
              }}
              onToggle={() => handleToggle(i)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
                delay: 0.06 + i * 0.08,
              }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none select-none">
                <h4 className="font-medium text-white">{item.q}</h4>
                <ChevronDown />
              </summary>

              <div className="px-4 pb-4">
                <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                <p className="pt-4 text-sm text-white/80 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>

      {/* Banner con halo animado alrededor */}
      <>
        <style>{`
          @keyframes webjpRotate {
            100% { transform: rotate(1turn); }
          }

          .webjp-rainbow-box {
            position: relative;
            z-index: 0;
            overflow: hidden;
          }

          .webjp-rainbow-box::before {
            content: '';
            position: absolute;
            z-index: -2;
            left: -50%;
            top: -50%;
            width: 200%;
            height: 200%;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: 60% 60%;
            filter: blur(10px);
            opacity: 0.9;
            background-image: linear-gradient(#00e1f6, #a12995);
            animation: webjpRotate 5s linear infinite;
          }

          .webjp-rainbow-box::after {
            content: '';
            position: absolute;
            z-index: -1;
            inset: 2px;
            border-radius: 18px;
            background: rgba(2,6,23,0.75);
          }
        `}</style>

        <div className="mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="webjp-rainbow-box rounded-2xl">
              <div
                className="rounded-2xl border border-white/10"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(2,6,23,0.40) 0%, rgba(161,41,149,0.20) 25%, rgba(161,41,149,0.20) 75%, rgba(2,6,23,0.40) 100%)",
                }}
              >
                <div className="max-w-4xl mx-auto px-6 py-3">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 lg:gap-40">
                    <p className="text-white font-medium text-sm sm:text-base tracking-wide text-center">
                      ¿Quién está detrás de Web JP?
                    </p>

                    <a
                      href="/sobre-mi"
                      className="rounded-full border border-white/25 bg-white/10 px-7 py-2.5 text-sm text-white font-medium hover:bg-white/15 hover:border-white/35 transition active:scale-95"
                    >
                      Conóceme
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
