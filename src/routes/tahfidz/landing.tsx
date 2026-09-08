import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/tahfidz/landing")({
  head: () => ({
    meta: [
      { title: "Manajemen Tahfidz — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur Manajemen Tahfidz: santri, halaqoh, murojaah, tilawah dan ustadz — plus apa yang Anda butuhkan untuk memulai.",
      },
      { property: "og:title", content: "Manajemen Tahfidz — HEXA" },
      { property: "og:description", content: "Kelola tahfidz dengan tertib, transparan, dan terukur." },
    ],
  }),
  component: TahfidzLandingPage,
});

function TahfidzLandingPage() {
  return <IndustryLanding industry={getIndustry("tahfidz")} />;
}
