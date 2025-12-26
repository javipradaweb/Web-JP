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
    default: "Web JP | Diseño y Desarrollo Web Profesional",
    template: "%s | Web JP",
  },

  description:
    "Web JP ofrece diseño y desarrollo web profesional, UX/UI moderno y sitios rápidos optimizados para convertir. Next.js, React y experiencia premium.",

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
    title: "Web JP | Diseño y Desarrollo Web Profesional",
    description:
      "Diseño web moderno, UX/UI y desarrollo a medida con tecnologías actuales. Sitios rápidos, elegantes y listos para convertir.",
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
    title: "Web JP | Diseño y Desarrollo Web Profesional",
    description:
      "Diseño y desarrollo web profesional con foco en UX/UI, performance y conversión.",
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
  return (
    <html lang="es">
      <body
        className={`${poppins.className} antialiased bg-[#020617] text-white overflow-x-hidden`}
      >
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
