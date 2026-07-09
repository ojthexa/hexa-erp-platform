import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { SchoolAcademicDashboard } from "@/components/erp/dashboards/SchoolAcademic";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/school-academic")({
  head: () => ({
    meta: [
      { title: "School Academic Information — HEXA" },
      { name: "description", content: "Sistem akademik sekolah — siswa, kelas, jadwal, ujian dan rapor." },
      { property: "og:title", content: "School Academic Information — HEXA" },
      { property: "og:description", content: "Operasi akademik untuk sekolah modern." },
    ],
  }),
  component: SchoolAcademicPage,
});

function SchoolAcademicPage() {
  const industry = getIndustry("school-academic");
  return (
    <ErpLayout industry={industry} title="Academic Information" subtitle="Siswa, kelas, jadwal dan penilaian">
      <SchoolAcademicDashboard />
    </ErpLayout>
  );
}
