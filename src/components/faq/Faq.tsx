"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const FAQS = [
  {
    q: "¿Qué necesito para empezar?",
    a: "Con 2 cosas basta: tu objetivo (vender, captar leads, posicionar, etc.) y ejemplos de referencias que te gusten. Yo me encargo de aterrizarlo a una estructura clara y a un diseño que convierta.",
  },
  {
    q: "¿Diseñas solo webs o también apps/sistemas?",
    a: "Ambos. En UX/UI puedo diseñar webs, apps y sistemas (dashboards, paneles internos, flujos complejos). Y si lo necesitas, también lo desarrollo a medida.",
  },
  {
    q: "¿Cuánto tarda una web típica?",
    a: "Depende del alcance. Una landing puede estar lista en pocos días; un sitio corporativo suele tomar 1–2 semanas; y proyectos a medida (plataformas/sistemas) se definen por etapas.",
  },
  {
    q: "¿Qué incluye el desarrollo web?",
    a: "Incluye una evaluación previa para entender tu marca, objetivos, público y qué acción quieres que el visitante haga (contactar, comprar, agendar, etc.), y con eso defino la estructura ideal del sitio (secciones, jerarquía y llamados a la acción) para que todo sea claro y convierta. Luego desarrollo el sitio completo con un enfoque moderno y flexible, usando el stack y las herramientas necesarias según tu proyecto, cuidando que se vea premium, funcione perfecto en móvil, cargue rápido, esté preparado para posicionamiento básico, y quede listo para publicarse con sus ajustes finales y una entrega ordenada.",
  },
  {
    q: "¿Como se hacen los pagos?",
    a: "Generalmente se trabajo con el 50% a momento de la firma de contrato y 50% a la entrega del trabajo, sin embargo, esto podría variar dependiendo del proyecto.",
  },
  {
    q: "¿Puedo pedir cambios después de la entrega?",
    a: "Claro. Siempre dejo un margen de ajustes post-entrega y, si quieres, podemos pasar a mantenimiento/mejoras continuas.",
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

    // Si se abrió este, cerramos los otros (accordion limpio como demo)
    if (current.open) {
      refs.current.forEach((el, idx) => {
        if (idx !== i && el?.open) el.open = false;
      });
    }
  };

  return (
    <section id="faq" className="relative bg-transparent text-white py-20">
      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header (mismo lenguaje visual que Services/Pricing) */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.22em] text-white/80 font-semibold">FAQ</p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
            Preguntas frecuentes
          </h2>

          <p className="mt-4 text-white/85 leading-relaxed">
            Respuestas rápidas sobre cómo trabajamos. Si te queda alguna duda, vamos a <a href="#contacto" className="underline underline-offset-4 text-white">hablar</a>.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => (
            <motion.details
              key={item.q}
              ref={(el) => {
                refs.current[i] = el;
              }}
              onToggle={() => handleToggle(i)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 260, damping: 26, delay: 0.06 + i * 0.08 }}
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
      {/* Banner con halo animado alrededor de toda la caja */}
<>
  <style>{`
    @keyframes webjpRotate {
      100% { transform: rotate(1turn); }
    }

    /* Contenedor con halo */
    .webjp-rainbow-box {
      position: relative;
      z-index: 0;
      overflow: hidden;
    }

    /* Halo animado alrededor (detrás del contenido) */
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

    /* Capa para “recortar” el halo y dejarlo solo en el borde */
    .webjp-rainbow-box::after {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 2px;               /* grosor del borde/halo */
      border-radius: 18px;      /* match con rounded-2xl aprox */
      background: rgba(2,6,23,0.75);
    }
  `}</style>

  <div className="mt-20">
    <div className="max-w-6xl mx-auto px-6">
      <div className="webjp-rainbow-box rounded-2xl">
        {/* Fondo con tu color magenta 20% + borde suave */}
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

              {/* Botón estilo WebJP sin halo */}
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
