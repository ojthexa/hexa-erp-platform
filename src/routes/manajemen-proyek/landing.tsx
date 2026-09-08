import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/manajemen-proyek/landing")({
  head: () => ({
    meta: [
      { title: "ERP Manajemen Proyek — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur ERP Manajemen Proyek: Kanban, milestone, tugas, Gantt dan time tracking — plus apa yang Anda butuhkan.",
      },
      { property: "og:title", content: "ERP Manajemen Proyek — HEXA" },
      { property: "og:description", content: "Kelola proyek, tim, timeline, dan anggaran dengan lebih terstruktur." },
    ],
  }),
  component: ManajemenProyekLandingPage,
});

function ManajemenProyekLandingPage() {
  return <IndustryLanding industry={getIndustry("project")} />;
}
