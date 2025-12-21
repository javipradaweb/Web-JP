import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Términos de Servicio | Web JP",
  description: "Términos de Servicio de Web JP.",
};

export default function TerminosPage() {
  return (
    <main className="relative bg-[#020617] text-white">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <header className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 sm:p-9">
            <p className="text-sm tracking-[0.22em] text-white/70 font-semibold uppercase">
              Legal
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">
              Términos de Servicio
            </h1>
            <p className="mt-3 text-white/70 leading-relaxed">
              Condiciones generales de uso del sitio y, si aplica, contratación
              de servicios.
            </p>
            <p className="mt-4 text-xs text-white/50">
              Última actualización:{" "}
              <span className="text-white/70">[coloca la fecha]</span>
            </p>
          </header>

          <div className="mt-8 space-y-6">
            <ArticleCard title="1. Uso del sitio">
              <p className="text-white/75 leading-relaxed">
                Al navegar en este sitio aceptas estos términos. Si no estás de
                acuerdo, por favor no lo uses.
              </p>
            </ArticleCard>

            <ArticleCard title="2. Servicios">
              <p className="text-white/75 leading-relaxed">
                Web JP ofrece servicios de diseño UX/UI y desarrollo web. El
                alcance, plazos, entregables y pagos se acordarán por escrito en
                cada propuesta.
              </p>
            </ArticleCard>

            <ArticleCard title="3. Propiedad intelectual">
              <p className="text-white/75 leading-relaxed">
                Salvo pacto distinto, el contenido del sitio y recursos propios
                de Web JP están protegidos. La propiedad/cesión de entregables se
                define en el acuerdo del proyecto.
              </p>
            </ArticleCard>

            <ArticleCard title="4. Responsabilidad">
              <p className="text-white/75 leading-relaxed">
                Este sitio se ofrece “tal cual”. Web JP no garantiza
                disponibilidad ininterrumpida ni se hace responsable por daños
                indirectos derivados del uso del sitio.
              </p>
            </ArticleCard>

            <ArticleCard title="5. Enlaces a terceros">
              <p className="text-white/75 leading-relaxed">
                Podemos incluir enlaces a terceros (redes sociales,
                herramientas). No controlamos su contenido ni sus políticas.
              </p>
            </ArticleCard>

            <ArticleCard title="6. Cambios">
              <p className="text-white/75 leading-relaxed">
                Podremos actualizar estos términos. La versión vigente estará
                disponible en esta página.
              </p>
            </ArticleCard>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-white/70">
              Para consultas:{" "}
              <a
                className="text-white hover:underline"
                href="mailto:contacto@webjp.com"
              >
                contacto@webjp.com
              </a>
              .
            </div>
          </div>
        </div>
      </section>

      <Footer />
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
