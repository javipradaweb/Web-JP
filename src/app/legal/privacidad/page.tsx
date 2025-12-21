import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Web JP",
  description: "Política de Privacidad de Web JP.",
};

export default function PrivacidadPage() {
  return (
    <main className="relative bg-[#020617] text-white">
      <section className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <header className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 sm:p-9">
            <p className="text-sm tracking-[0.22em] text-white/70 font-semibold uppercase">
              Legal
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">
              Política de Privacidad
            </h1>
            <p className="mt-3 text-white/70 leading-relaxed">
              Esta política describe cómo Web JP recopila, utiliza y protege tus
              datos personales cuando visitas este sitio o te pones en contacto.
            </p>
            <p className="mt-4 text-xs text-white/50">
              Última actualización:{" "}
              <span className="text-white/70">[coloca la fecha]</span>
            </p>
          </header>

          <div className="mt-8 space-y-6">
            <ArticleCard title="1. Responsable del tratamiento">
              <p>
                Responsable: <span className="text-white/80">Javier Prada (Web JP)</span>
                <br />
                Email de contacto:{" "}
                <a className="text-white hover:underline" href="mailto:contacto@webjp.com">
                  contacto@webjp.com
                </a>
              </p>
            </ArticleCard>

            <ArticleCard title="2. Datos que recopilamos">
              <ul className="list-disc pl-5 space-y-2 text-white/75">
                <li>
                  Datos de contacto (nombre, email, mensaje) si completas el formulario o nos escribes.
                </li>
                <li>
                  Datos técnicos básicos (por ejemplo: tipo de dispositivo, navegador, páginas visitadas) a través de cookies/analítica si está habilitada.
                </li>
              </ul>
            </ArticleCard>

            <ArticleCard title="3. Finalidad del uso">
              <ul className="list-disc pl-5 space-y-2 text-white/75">
                <li>Responder consultas y solicitudes.</li>
                <li>Mejorar el sitio, experiencia y rendimiento.</li>
                <li>Seguridad y prevención de fraude/abuso.</li>
              </ul>
            </ArticleCard>

            <ArticleCard title="4. Base legal">
              <p className="text-white/75 leading-relaxed">
                Tratamos tus datos por consentimiento (cuando nos contactas), por
                interés legítimo (mejoras y seguridad) y/o para ejecutar
                comunicaciones precontractuales si solicitas un servicio.
              </p>
            </ArticleCard>

            <ArticleCard title="5. Conservación">
              <p className="text-white/75 leading-relaxed">
                Conservamos tus datos el tiempo necesario para responder y dar seguimiento,
                o el requerido por obligaciones legales. Luego se eliminan o anonimiza.
              </p>
            </ArticleCard>

            <ArticleCard title="6. Terceros y herramientas">
              <p className="text-white/75 leading-relaxed">
                Este sitio puede estar alojado en proveedores como Vercel y usar
                herramientas de analítica (si se habilitan). Estos proveedores pueden
                procesar datos técnicos necesarios para operar el servicio.
              </p>
            </ArticleCard>

            <ArticleCard title="7. Tus derechos">
              <p className="text-white/75 leading-relaxed">
                Puedes solicitar acceso, rectificación o eliminación de tus datos,
                y retirar tu consentimiento. Escríbenos a{" "}
                <a className="text-white hover:underline" href="mailto:contacto@webjp.com">
                  contacto@webjp.com
                </a>.
              </p>
            </ArticleCard>

            <ArticleCard title="8. Seguridad">
              <p className="text-white/75 leading-relaxed">
                Aplicamos medidas razonables para proteger la información. Aun así,
                ningún sistema es 100% infalible.
              </p>
            </ArticleCard>

            <ArticleCard title="9. Cambios a esta política">
              <p className="text-white/75 leading-relaxed">
                Podemos actualizar esta política. Publicaremos la versión vigente en esta página.
              </p>
            </ArticleCard>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-white/70">
              Si tienes dudas, escríbenos a{" "}
              <a className="text-white hover:underline" href="mailto:contacto@webjp.com">
                contacto@webjp.com
              </a>.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArticleCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
      <h2 className="text-base font-semibold text-white">{title}</h2>
      <div className="mt-3 text-sm">{children}</div>
    </section>
  );
}
