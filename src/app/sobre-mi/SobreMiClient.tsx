"use client";

import dynamic from "next/dynamic";

const SobreMiPage = dynamic(
  () => import("@/components/sobre-mi/SobreMiPage"),
  { ssr: false, loading: () => null }
);

export default function SobreMiClient() {
  return <SobreMiPage />;
}
