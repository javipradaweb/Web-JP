"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // ✅ LOG al cargar el componente
  useEffect(() => {
    console.log("CONTACT COMPONENT LOADED ✅");
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // ✅ evita que se vaya a ?nombre=...

    console.log("SUBMIT INTERCEPTED ✅");
    setStatus("sending");
    setErrorMsg("");

    try {
      console.log("POST -> /api/contact ...");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          website: "", // honeypot opcional
        }),
      });

      const data = await res.json().catch(() => null);

      console.log("RESPONSE STATUS:", res.status, "DATA:", data);

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "No se pudo enviar. Revisa configuración.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error("FETCH ERROR:", err);
      setStatus("error");
      setErrorMsg("Error de red. Intenta de nuevo.");
    }
  }

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

              <p className="mt-5 text-xs text-white/60">
                Respondo rápido. Si ya tienes referencias o un brief, mejor todavía.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Tu nombre"
                  name="name"
                />

                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Tu email"
                  name="email"
                />

                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Celular"
                  name="phone"
                />

                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[110px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                  placeholder="Cuéntame qué necesitas…"
                  name="message"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/15 transition disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>

                {status === "success" && (
                  <p className="text-[12px] text-[#00e1f6]">✅ Enviado. Te respondo pronto.</p>
                )}

                {status === "error" && (
                  <p className="text-[12px] text-red-300">❌ {errorMsg}</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
