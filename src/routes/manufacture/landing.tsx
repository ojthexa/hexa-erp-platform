import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/manufacture/landing")({
  head: () => ({
    meta: [
      { title: "ERP Manufaktur — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur ERP Manufaktur: produksi, mesin, quality control, maintenance dan logistik pabrik — plus persyaratannya.",
      },
      { property: "og:title", content: "ERP Manufaktur — HEXA" },
      { property: "og:description", content: "Kelola titik produksi, mesin, kualitas, dan bahan baku dalam satu sistem." },
    ],
  }),
  component: ManufactureLandingPage,
});

function ManufactureLandingPage() {
  return <IndustryLanding industry={getIndustry("manufacture")} />;
}
