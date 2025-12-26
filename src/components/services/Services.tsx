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
    details: {
      intro:
        "Diseño UX/UI es planear y diseñar cómo funciona y cómo se ve tu web o app para que la gente entienda todo rápido, navegue sin esfuerzo y haga la acción que quieres.",
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
        "Sistemas internos y plataformas eficientes.",
      ],
      tiempo: "7–15 días",
    },
  },
  {
    id: "web",
    title: "Diseño Web",
    desc: "Landing pages, sitios web corporativos, e-commerces y plataformas. Diseño visual premium con estructura clara y orientada a resultados.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6.5C4 5.12 5.12 4 6.5 4h11C18.88 4 20 5.12 20 6.5v11C20 18.88 18.88 20 17.5 20h-11C5.12 20 4 18.88 4 17.5v-11Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4 8h16" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    details: {
      intro:
        "Diseño completo en WordPress de tu sitio web con estructura clara y diseño moderno, pensado para generar confianza, posicionar tu marca y convertir.",
      incluye: [
        "Estructura completa del sitio.",
        "Diseño visual premium.",
        "Responsive completo.",
        "SEO básico y CTA claros.",
        "Botón directo a WhatsApp.",
      ],
      entregables: [
        "Sitio web operativo.",
        "Credenciales de acceso.",
        "Capacitación básica.",
        "Soporte post-entrega.",
      ],
      idealPara: [
        "Marcas personales.",
        "Empresas.",
        "Landing pages.",
        "e-Commerce.",
      ],
      tiempo: "7–15 días",
    },
  },
  {
    id: "custom",
    title: "Desarrollo a Medida",
    desc: "Desarrollo web y de aplicaciones a medida con código, para proyectos que requieren lógica, integraciones y funcionalidades específicas.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 18 3.5 12 9 6" stroke="currentColor" strokeWidth="2" />
        <path d="M15 6l5.5 6L15 18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    details: {
      intro:
        "Desarrollo de sistemas, plataformas y aplicaciones web a medida cuando WordPress ya no es suficiente.",
      incluye: [
        "Arquitectura personalizada.",
        "Frontend y backend.",
        "APIs e integraciones.",
        "Deploy y testing.",
      ],
      entregables: [
        "Proyecto funcional.",
        "Código fuente.",
        "Documentación básica.",
      ],
      idealPara: [
        "Apps web.",
        "Sistemas internos.",
        "Automatizaciones.",
      ],
      tiempo: "25+ días",
    },
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-transparent text-white py-20">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.22em] text-white/80 font-semibold">
            SERVICIOS
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Eleva tu marca. Acelera tu crecimiento.
          </h2>

          <p className="mt-4 text-white/85 leading-relaxed">
            Diseño y desarrollo de experiencias digitales con foco en claridad,
            rendimiento y resultados.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-white/85">{s.desc}</p>
            </article>
          ))}
        </div>

        {/* SEO TEXT BLOCK */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Servicios de Diseño Web, UX/UI y Desarrollo
          </h2>

          <p className="mt-4 text-white/80 leading-relaxed">
            Ofrezco diseño web profesional, diseño UX/UI y desarrollo web con
            WordPress o desarrollo a medida, según las necesidades de cada
            proyecto. Cada sitio y aplicación se construye con foco en
            usabilidad, velocidad, SEO y conversión para negocios, marcas
            personales y emprendimientos.
          </p>
        </div>
      </div>
    </section>
  );
}
