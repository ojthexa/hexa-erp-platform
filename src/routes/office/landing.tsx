import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/office/landing")({
  head: () => ({
    meta: [
      { title: "ERP Kantor — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur ERP Kantor: HR, payroll, absensi, inventaris dan administrasi — serta apa yang Anda butuhkan untuk memulai.",
      },
      { property: "og:title", content: "ERP Kantor — HEXA" },
      { property: "og:description", content: "Satu ruang kerja yang rapi untuk HR, penggajian, dan operasional." },
    ],
  }),
  component: OfficeLandingPage,
});

function OfficeLandingPage() {
  return <IndustryLanding industry={getIndustry("office")} />;
}
