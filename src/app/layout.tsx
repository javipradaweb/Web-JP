// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://javierprada.online"),

  title: {
    default: "Web JP | Diseño Web y Desarrollo Web en La Paz, Bolivia",
    template: "%s | Web JP",
  },

  description:
    "Web JP (Javier Prada) ofrece diseño web profesional, diseño UX/UI y desarrollo web a medida (Next.js/React) o WordPress/Elementor. En La Paz, Bolivia y trabajos remotos para LATAM, USA y Europa.",

  applicationName: "Web JP",
  authors: [{ name: "Javier Prada", url: "https://javierprada.online" }],
  creator: "Javier Prada",

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
  },

  openGraph: {
    type: "website",
    url: "https://javierprada.online",
    siteName: "Web JP",
    title: "Web JP | Diseño Web y Desarrollo Web en La Paz, Bolivia",
    description:
      "Diseño web profesional, UX/UI y desarrollo web a medida (Next.js/React) o WordPress/Elementor. Sitios rápidos, modernos y listos para convertir. La Paz, Bolivia + remoto (LATAM/USA/Europa).",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web JP - Diseño y Desarrollo Web",
      },
    ],
    locale: "es_ES",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web JP | Diseño Web y Desarrollo Web en La Paz, Bolivia",
    description:
      "Diseño UX/UI, diseño web profesional y desarrollo web (Next.js/React o WordPress/Elementor). La Paz, Bolivia + remoto (LATAM/USA/Europa).",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://javierprada.online/#website",
        url: "https://javierprada.online/",
        name: "Web JP",
        inLanguage: "es",
        publisher: { "@id": "https://javierprada.online/#business" },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://javierprada.online/#business",
        name: "Web JP",
        url: "https://javierprada.online/",
        description:
          "Diseño web profesional, diseño UX/UI y desarrollo web a medida (Next.js/React) o WordPress/Elementor. En La Paz, Bolivia y trabajos remotos para LATAM, USA y Europa.",
        areaServed: ["Bolivia", "Latin America", "United States", "Europe"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "La Paz",
          addressCountry: "BO",
        },
        telephone: "+59168164840",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: "+59168164840",
            availableLanguage: ["es", "en"],
          },
        ],
        founder: { "@id": "https://javierprada.online/#person" },
        sameAs: [
          "https://www.instagram.com/javipradaweb/",
          "https://www.linkedin.com/in/javipradaweb/",
          "https://www.youtube.com/@javipradaweb",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://javierprada.online/#person",
        name: "Javier Prada",
        url: "https://javierprada.online/",
        jobTitle: "Diseño UX/UI + Desarrollo Web",
        worksFor: { "@id": "https://javierprada.online/#business" },
        sameAs: [
          "https://www.instagram.com/javipradaweb/",
          "https://www.linkedin.com/in/javipradaweb/",
          "https://www.youtube.com/@javipradaweb",
        ],
      },
    ],
  };

  return (
    <html lang="es">
      <body
        className={`${poppins.className} antialiased bg-[#020617] text-white overflow-x-hidden`}
      >
        {/* SEO: JSON-LD global (no cambia el diseño) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
