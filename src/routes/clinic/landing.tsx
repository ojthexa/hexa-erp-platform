import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/clinic/landing")({
  head: () => ({
    meta: [
      { title: "ERP Klinik — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur ERP Klinik: pasien, janji temu, apotek, laboratorium dan penagihan — plus apa yang Anda butuhkan.",
      },
      { property: "og:title", content: "ERP Klinik — HEXA" },
      { property: "og:description", content: "Operasional layanan kesehatan jadi sederhana." },
    ],
  }),
  component: ClinicLandingPage,
});

function ClinicLandingPage() {
  return <IndustryLanding industry={getIndustry("clinic")} />;
}
