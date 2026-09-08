import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/yayasan/landing")({
  head: () => ({
    meta: [
      { title: "ERP Yayasan — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur ERP Yayasan: donasi, program sosial, relawan, unit usaha dan pelaporan — plus apa yang Anda butuhkan.",
      },
      { property: "og:title", content: "ERP Yayasan — HEXA" },
      { property: "og:description", content: "Kelola yayasan dengan transparan, terpercaya, dan berdampak." },
    ],
  }),
  component: YayasanLandingPage,
});

function YayasanLandingPage() {
  return <IndustryLanding industry={getIndustry("yayasan")} />;
}
