import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/umroh/landing")({
  head: () => ({
    meta: [
      { title: "ERP Umroh & Haji — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur ERP Umroh & Haji: jamaah, booking, visa, penerbangan, hotel, agen dan komisi — plus apa yang Anda butuhkan.",
      },
      { property: "og:title", content: "ERP Umroh & Haji — HEXA" },
      { property: "og:description", content: "Kelola paket umroh dari pendaftaran hingga keberangkatan." },
    ],
  }),
  component: UmrohLandingPage,
});

function UmrohLandingPage() {
  return <IndustryLanding industry={getIndustry("umroh")} />;
}
