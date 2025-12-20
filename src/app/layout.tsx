// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Web JP",
  description: "Sitio web personal de Web JP",
  icons: {
    icon: [
      { url: "/faviconbl.ico" },
      { url: "/faviconbl.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-[#020617] text-white overflow-x-hidden`}
      >
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
