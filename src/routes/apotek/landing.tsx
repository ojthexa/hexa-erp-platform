import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/apotek/landing")({
  head: () => ({
    meta: [
      { title: "ERP Apotek — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur ERP Apotek: POS kasir, stok obat, kadaluarsa, resep, supplier dan laporan penjualan — plus apa yang Anda butuhkan.",
      },
      { property: "og:title", content: "ERP Apotek — HEXA" },
      { property: "og:description", content: "POS apotek, stok obat, dan laporan dalam satu sistem." },
    ],
  }),
  component: ApotekLandingPage,
});

function ApotekLandingPage() {
  return <IndustryLanding industry={getIndustry("apotek")} />;
}
