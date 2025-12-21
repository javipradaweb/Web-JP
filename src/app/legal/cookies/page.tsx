import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Web JP",
  description: "Política de Cookies de Web JP.",
};

export default function CookiesPage() {
  return (
    <main className="relative bg-[#020617] text-white">
      <section className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <header className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 sm:p-9">
            <p className="text-sm tracking-[0.22em] text-white/70 font-semibold uppercase">
              Legal
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">
              Política de Cookies
            </h1>
            <p className="mt-3 text-white/70 leading-relaxed">
              Explica qué son las cookies, cuáles usamos y cómo puedes gestionarlas.
            </p>
            <p className="mt-4 text-xs text-white/50">
              Última actualización:{" "}
              <span className="text-white/70">[coloca la fecha]</span>
            </p>
          </header>

          <div className="mt-8 space-y-6">
            <ArticleCard title="1. ¿Qué son las cookies?">
              <p className="text-white/75 leading-relaxed">
                Son pequeños archivos que se guardan en tu navegador para recordar
                información sobre tu visita.
              </p>
            </ArticleCard>

            <ArticleCard title="2. Cookies que podríamos usar">
              <ul className="list-disc pl-5 space-y-2 text-white/75">
                <li>
                  <span className="text-white/80">Esenciales:</span> necesarias para funcionamiento básico.
                </li>
                <li>
                  <span className="text-white/80">Preferencias:</span> guardan ajustes (si existieran).
                </li>
                <li>
                  <span className="text-white/80">Analítica:</span> para entender visitas y mejorar (si se habilita).
                </li>
              </ul>
            </ArticleCard>

            <ArticleCard title="3. Cómo gestionar cookies">
              <p className="text-white/75 leading-relaxed">
                Puedes bloquear o eliminar cookies desde la configuración de tu navegador.
                Ten en cuenta que algunas funciones podrían verse afectadas.
              </p>
            </ArticleCard>

            <ArticleCard title="4. Herramientas de terceros">
              <p className="text-white/75 leading-relaxed">
                Si activamos analítica (por ejemplo GA4), podría establecer cookies
                o identificadores similares para medir uso del sitio.
              </p>
            </ArticleCard>

            <ArticleCard title="5. Cambios a esta política">
              <p className="text-white/75 leading-relaxed">
                Podemos actualizar esta política. Publicaremos la versión vigente aquí.
              </p>
            </ArticleCard>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-white/70">
              Para consultas, escríbenos a{" "}
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
