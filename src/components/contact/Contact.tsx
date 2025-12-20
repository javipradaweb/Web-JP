"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-transparent text-white py-20">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(1000px 320px at 20% 0%, rgba(161,41,149,0.22), transparent 60%), radial-gradient(900px 300px at 90% 30%, rgba(0,225,246,0.14), transparent 60%)",
            }}
          />

          <div className="relative p-8 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.22em] text-white/80 font-semibold">CONTACT</p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                ¿Listo para convertir tu web en tu mejor vendedor?
              </h2>

              <p className="mt-4 text-white/85 leading-relaxed max-w-xl">
                Cuéntame tu idea y te propongo una solución clara: estructura, UX/UI y desarrollo para que tu web se vea
                premium y funcione como herramienta comercial.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#contacto"
                  className="webjp-shine-border rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100 inline-flex"
                >
                  <span className="px-7 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800">
                    WhatsApp
                  </span>
                </a>

                <a
                  href="#precios"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 hover:border-white/30 transition"
                >
                  Telegram
                </a>
              </div>

              <p className="mt-5 text-xs text-white/60">
                Respondo rápido. Si ya tienes referencias o un brief, mejor todavía.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="grid grid-cols-1 gap-3">
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Tu nombre"
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Tu email"
                />
                <textarea
                  className="min-h-[110px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Cuéntame qué necesitas…"
                />
                <button
                  type="button"
                  className="mt-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/15 transition"
                >
                  Enviar mensaje
                </button>

                <p className="text-[11px] text-white/50">
                  * Este formulario es visual (luego lo conectamos).
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
