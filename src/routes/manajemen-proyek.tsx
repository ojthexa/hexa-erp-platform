import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { ProjectDashboard } from "@/components/erp/dashboards/Project";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/manajemen-proyek")({
  head: () => ({
    meta: [
      { title: "Manajemen Proyek ERP — HEXA" },
      { name: "description", content: "Kelola proyek, tim, timeline, tugas dan anggaran dalam satu ruang kerja HEXA." },
      { property: "og:title", content: "Manajemen Proyek ERP — HEXA" },
      { property: "og:description", content: "Papan Kanban, milestone, time tracking dan anggaran proyek." },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const industry = getIndustry("project");
  return (
    <ErpLayout industry={industry} title="Manajemen Proyek" subtitle="Kanban, milestone, time tracking dan anggaran">
      <ProjectDashboard />
    </ErpLayout>
  );
}