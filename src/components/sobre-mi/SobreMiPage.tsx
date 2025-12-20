"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

/* =======================
   TYPES
======================= */
type Social = { label: string; href: string; icon: ReactNode };

/* =======================
   DATA
======================= */
const SOCIALS: Social[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/javipradaweb/",
    icon: <InstagramIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/javipradaweb/",
    icon: <LinkedInIcon />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@javipradaweb",
    icon: <YouTubeIcon />,
  },
];

const PROJECTS = [
  {
    title: "Landing de Conversión",
    subtitle: "UX/UI · Copy · Performance",
    desc: "Landing enfocada en conversión con estructura clara, jerarquía visual y CTA definidos para generar leads.",
    tags: ["UX/UI", "Landing", "Conversión"],
    href: "/portafolio",
  },
  {
    title: "Corporativo Premium",
    subtitle: "Brand · Web · Confianza",
    desc: "Sitio corporativo para elevar percepción de marca, ordenar oferta y comunicar valor con claridad.",
    tags: ["Web", "Brand", "Estrategia"],
    href: "/portafolio",
  },
  {
    title: "Ecommerce Moderno",
    subtitle: "UI · Catálogo · Checkout",
    desc: "Ecommerce con foco en experiencia, catálogo y checkout fluido para aumentar ventas.",
    tags: ["Ecommerce", "UI", "Checkout"],
    href: "/portafolio",
  },
];

const EXPERIENCE = [
  {
    role: "Diseño UX/UI + Desarrollo Web",
    company: "Web JP",
    time: "2023 - Presente",
    bullets: [
      "Diseño y desarrollo de experiencias digitales con enfoque en claridad y conversión.",
      "Implementación en Next.js + Tailwind, optimización de performance y SEO.",
      "Sistemas y sitios a medida según objetivos del negocio.",
    ],
  },
  {
    role: "Proyectos freelance",
    company: "Clientes (LatAm)",
    time: "2021 - 2023",
    bullets: [
      "Landings, sitios corporativos y mejoras de UX para productos existentes.",
      "Estructura de contenido, UI kit, handoff y desarrollo.",
    ],
  },
];

const EDUCATION = [
  {
    title: "Ingeniería de Software",
    place: "Universidad (en curso / editable)",
    time: "—",
    desc: "Formación orientada a desarrollo, arquitectura, productos y buenas prácticas.",
  },
];

const SKILLS = [
  "UX/UI",
  "Design Systems",
  "Figma",
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "SEO",
  "Performance",
];

/* =======================
   MOTION
======================= */
const staggerWrap: Variants = {
  hidden: { opacity: 1 },
  show: { transition: { staggerChildren: 0.09 } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* =======================
   PAGE
======================= */
export default function SobreMiPage() {
  return (
    <section className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* BLOQUE SUPERIOR */}
        <div className="relative">
          <RightGridBackground />

          <div className="relative z-10">
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-8 items-center">
                {/* LEFT */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                  {/* FOTO */}
                  <div className="mb-5">
                    <div className="relative h-28 w-28 rounded-full p-[1px] webjp-shine-border">
                      <div className="relative h-full w-full rounded-full overflow-hidden border border-white/10 bg-white/5">
                        <Image
                          src="/javier.png"
                          alt="Javier Prada"
                          fill
                          sizes="112px"
                          priority
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-2xl font-semibold leading-tight">
                    Javier Prada
                  </p>
                  <p className="mt-1 text-white/70">
                    Diseño UX/UI + Desarrollo Web
                  </p>

                  {/* RRSS */}
                  <div className="mt-4 flex items-center gap-3 justify-center lg:justify-start">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        title={s.label}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative inline-flex items-center justify-center p-2 rounded-full transition active:scale-95"
                      >
                        <span className="text-[#00e1f6] group-hover:text-white transition">
                          {s.icon}
                        </span>

                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                          style={{
                            boxShadow: "0 0 18px rgba(0,225,246,0.55)",
                            borderRadius: "999px",
                          }}
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-center lg:text-left">
                  <p className="text-white/75 leading-relaxed">
                    Diseño experiencias digitales claras y premium, y las
                    convierto en sitios rápidos, escalables y orientados a
                    resultados. Mi enfoque: estrategia + UX/UI + desarrollo para
                    que tu web trabaje como tu mejor vendedor.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="webjp-shine-border rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100 inline-flex"
                    >
                      <span className="px-7 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800">
                        Descargar CV
                      </span>
                    </a>

                    <a
                      href="/#contacto"
                      className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 hover:border-white/30 transition"
                    >
                      Hablemos
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* MINI NAV */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                ["Sobre mí", "#sobre-mi"],
                ["Proyectos", "#proyectos"],
                ["Experiencia", "#experiencia"],
                ["Educación", "#educacion"],
                ["Skills", "#skills"],
                ["Contacto", "#contacto"],
              ].map(([t, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-8">
          {/* LEFT */}
          <motion.div
            className="space-y-6"
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={cardIn}>
              <Card title="Skills" id="skills">
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardIn}>
              <Card title="Contacto" id="contacto">
                <div className="space-y-2 text-sm text-white/75">
                  <p>
                    Email:{" "}
                    <a
                      className="text-white hover:underline"
                      href="mailto:contacto@webjp.com"
                    >
                      contacto@webjp.com
                    </a>
                  </p>
                  <p>WhatsApp: +— (editable)</p>
                  <p className="text-white/55 text-xs">
                    *Placeholder: cámbialo por tus datos reales.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="space-y-6"
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={cardIn}>
              <Card title="Sobre mí" id="sobre-mi">
                <p className="text-white/75 leading-relaxed">
                  Acá va tu historia: cómo llegaste a UX/UI + dev, tu enfoque,
                  valores y qué resultados buscas para tus clientes.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={cardIn}>
              <Card title="Proyectos destacados" id="proyectos">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROJECTS.map((p) => (
                    <a
                      key={p.title}
                      href={p.href}
                      className="group relative cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition rounded-2xl"
                        style={{ boxShadow: "0 0 26px rgba(0,225,246,0.18)" }}
                      />
                      <p className="relative text-sm text-white/70">
                        {p.subtitle}
                      </p>
                      <p className="relative mt-1 text-lg font-semibold">
                        {p.title}
                      </p>
                      <p className="relative mt-2 text-sm text-white/70 leading-relaxed">
                        {p.desc}
                      </p>
                      <div className="relative mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardIn}>
              <Card title="Experiencia" id="experiencia">
                <div className="space-y-6">
                  {EXPERIENCE.map((e) => (
                    <div
                      key={e.role}
                      className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-white/20"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-base font-semibold">{e.role}</p>
                        <p className="text-xs text-white/60">{e.time}</p>
                      </div>
                      <p className="text-sm text-white/70 mt-1">{e.company}</p>
                      <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc pl-5">
                        {e.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardIn}>
              <Card title="Educación" id="educacion">
                <div className="space-y-4">
                  {EDUCATION.map((ed) => (
                    <div
                      key={ed.title}
                      className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-white/20"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-base font-semibold">{ed.title}</p>
                        <p className="text-xs text-white/60">{ed.time}</p>
                      </div>
                      <p className="text-sm text-white/70 mt-1">{ed.place}</p>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">
                        {ed.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =======================
   BACKGROUND
======================= */
function RightGridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-y-12 left-1/2 w-screen -translate-x-1/2 z-0 overflow-hidden"
    >
      <div
        className="absolute -top-28 right-[-120px] h-[620px] w-[720px] rounded-full blur-[140px]"
        style={{ background: "rgba(0,225,246,0.14)" }}
      />

      <div
        className="absolute top-28 right-[10%] h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{ background: "rgba(0,225,246,0.10)" }}
      />

      <motion.div
        className="absolute inset-y-0 right-0 w-[78%]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,225,246,0.30) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,225,246,0.30) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          opacity: 0.45,
          filter: "blur(0.35px)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 86%, rgba(0,0,0,0) 100%), radial-gradient(ellipse at 72% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 76%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 86%, rgba(0,0,0,0) 100%), radial-gradient(ellipse at 72% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 76%)",
          willChange: "transform",
        }}
        animate={{ x: [0, 56], y: [0, 56] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      />

      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020617] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
    </div>
  );
}

/* =======================
   UI
======================= */
function Card({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
    >
      <p className="text-sm tracking-[0.22em] text-white/70 font-semibold uppercase">
        {title}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/* =======================
   ICONS
======================= */
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17.5 6.5h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="5.2" cy="5.2" r="2.1" />
      <rect x="3.5" y="9" width="3.4" height="12" rx="1.2" />
      <path d="M10 9h3.2v1.6h.05c.45-.85 1.55-1.85 3.25-1.85 3.45 0 4.08 2.2 4.08 5.05V21h-3.4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H10V9z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 7.5a3 3 0 0 0-2.1-2.1C17 5 12 5 12 5s-5 0-6.9.4A3 3 0 0 0 3 7.5 31 31 0 0 0 3 12s0 2.9.4 4.5A3 3 0 0 0 5.1 18.6C7 19 12 19 12 19s5 0 6.9-.4A3 3 0 0 0 21 16.5 31 31 0 0 0 21 12s0-2.9-.4-4.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M10 15V9l5 3-5 3Z" fill="currentColor" />
    </svg>
  );
}
